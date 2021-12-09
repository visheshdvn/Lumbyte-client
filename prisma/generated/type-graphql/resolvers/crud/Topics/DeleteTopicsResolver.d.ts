import { GraphQLResolveInfo } from "graphql";
import { DeleteTopicsArgs } from "./args/DeleteTopicsArgs";
import { Topics } from "../../../models/Topics";
export declare class DeleteTopicsResolver {
    deleteTopics(ctx: any, info: GraphQLResolveInfo, args: DeleteTopicsArgs): Promise<Topics | null>;
}
