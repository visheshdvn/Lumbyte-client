import { GraphQLResolveInfo } from "graphql";
import { FindUniqueTopicsArgs } from "./args/FindUniqueTopicsArgs";
import { Topics } from "../../../models/Topics";
export declare class FindUniqueTopicsResolver {
    findUniqueTopics(ctx: any, info: GraphQLResolveInfo, args: FindUniqueTopicsArgs): Promise<Topics | null>;
}
