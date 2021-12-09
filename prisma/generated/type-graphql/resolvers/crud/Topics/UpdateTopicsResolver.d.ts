import { GraphQLResolveInfo } from "graphql";
import { UpdateTopicsArgs } from "./args/UpdateTopicsArgs";
import { Topics } from "../../../models/Topics";
export declare class UpdateTopicsResolver {
    updateTopics(ctx: any, info: GraphQLResolveInfo, args: UpdateTopicsArgs): Promise<Topics | null>;
}
