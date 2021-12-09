import "reflect-metadata";
import { PrismaClient } from "@prisma/client";
import { ApolloServer } from "apollo-server-micro";
import { resolvers } from "../../../prisma/generated/type-graphql";
import * as tq from "type-graphql";

const prisma = new PrismaClient();

const app = async () => {
  const schema = await tq.buildSchema({ resolvers });

  const context = () => {
    return {
      prisma,
    };
  };

  const apolloserver = new ApolloServer({ schema, context });
  return apolloserver.createHandler({ path: "/api/graphql" });
};

export default app();
