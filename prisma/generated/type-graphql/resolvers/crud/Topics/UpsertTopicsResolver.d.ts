import { GraphQLResolveInfo } from "graphql";
import { UpsertTopicsArgs } from "./args/UpsertTopicsArgs";
import { Topics } from "../../../models/Topics";
export declare class UpsertTopicsResolver {
    upsertTopics(ctx: any, info: GraphQLResolveInfo, args: UpsertTopicsArgs): Promise<Topics>;
}
