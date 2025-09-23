import { AuthSessionType } from "@/context/AuthContext";
import { prisma } from "@/lib/prisma-client";
import { GraphQLDateTime } from "graphql-iso-date";

export interface GraphQLCTX {
  session: AuthSessionType;
  prisma: typeof prisma;
}

const Resolvers = {
  DateTime: GraphQLDateTime,
  Query: {
    hello: (_parent: any, _args: any, ctx: GraphQLCTX) => {
      return ctx.session.user.id;
    },
  },
  Mutation: {},
};

export { Resolvers };
