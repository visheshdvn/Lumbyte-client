import { GraphQLResolveInfo } from "graphql";
import { FindManyTopicsArgs } from "./args/FindManyTopicsArgs";
import { Topics } from "../../../models/Topics";
export declare class FindManyTopicsResolver {
    findManyTopics(ctx: any, info: GraphQLResolveInfo, args: FindManyTopicsArgs): Promise<Topics[]>;
}
