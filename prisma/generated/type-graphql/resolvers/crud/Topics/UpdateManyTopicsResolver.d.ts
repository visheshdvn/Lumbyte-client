import { GraphQLResolveInfo } from "graphql";
import { UpdateManyTopicsArgs } from "./args/UpdateManyTopicsArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class UpdateManyTopicsResolver {
    updateManyTopics(ctx: any, info: GraphQLResolveInfo, args: UpdateManyTopicsArgs): Promise<AffectedRowsOutput>;
}
