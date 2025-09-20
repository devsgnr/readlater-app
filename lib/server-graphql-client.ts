import { GraphQLClient } from "graphql-request";
import { env } from "./env";

const ServerClient = new GraphQLClient(env.hygraph.baseURL!, {
  headers: { "Cache-Control": "no-store" },
});

export default ServerClient;
