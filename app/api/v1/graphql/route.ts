import { startServerAndCreateNextHandler } from "@as-integrations/next";
import { ApolloServer } from "@apollo/server";
import { ApolloServerPluginLandingPageDisabled } from "@apollo/server/plugin/disabled";
import { auth } from "@/lib/auth";
import { NextRequest } from "next/server";
import { GraphQLCTX, Resolvers } from "../resolvers";
import { join } from "path";
import { prisma } from "@/lib/prisma-client";
import { GraphQLError } from "graphql";
import { readFileSync } from "fs";

export const dynamic = "force-dynamic";

const TypeDefs = readFileSync(join(process.cwd(), "app/api/v1/schema/schema.graphql"), "utf-8");

const IsProd = process.env.NODE_ENV === "production";
const DisableUI = ApolloServerPluginLandingPageDisabled;
const HideUI = IsProd ? [DisableUI()] : [];

const server = new ApolloServer<GraphQLCTX>({
  resolvers: Resolvers,
  typeDefs: TypeDefs,
  introspection: !IsProd,
  plugins: HideUI,
});

const handler = startServerAndCreateNextHandler<NextRequest, GraphQLCTX>(server, {
  context: async (request) => {
    const session = await auth.api.getSession(request);

    if (!session) {
      throw new GraphQLError("Unauthorized", {
        extensions: { code: "UNAUTHORIZED" },
      });
    }

    return { session, prisma };
  },
});

export { handler as GET, handler as POST };
