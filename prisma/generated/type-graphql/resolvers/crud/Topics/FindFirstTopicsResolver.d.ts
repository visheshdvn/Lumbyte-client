import { GraphQLResolveInfo } from "graphql";
import { FindFirstTopicsArgs } from "./args/FindFirstTopicsArgs";
import { Topics } from "../../../models/Topics";
export declare class FindFirstTopicsResolver {
    findFirstTopics(ctx: any, info: GraphQLResolveInfo, args: FindFirstTopicsArgs): Promise<Topics | null>;
}
