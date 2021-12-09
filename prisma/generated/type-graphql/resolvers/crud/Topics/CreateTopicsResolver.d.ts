import { GraphQLResolveInfo } from "graphql";
import { CreateTopicsArgs } from "./args/CreateTopicsArgs";
import { Topics } from "../../../models/Topics";
export declare class CreateTopicsResolver {
    createTopics(ctx: any, info: GraphQLResolveInfo, args: CreateTopicsArgs): Promise<Topics>;
}
