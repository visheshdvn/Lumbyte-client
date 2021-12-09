import { GraphQLResolveInfo } from "graphql";
import { DeleteManyTopicsArgs } from "./args/DeleteManyTopicsArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class DeleteManyTopicsResolver {
    deleteManyTopics(ctx: any, info: GraphQLResolveInfo, args: DeleteManyTopicsArgs): Promise<AffectedRowsOutput>;
}
