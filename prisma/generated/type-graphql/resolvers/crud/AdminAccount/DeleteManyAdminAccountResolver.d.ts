import { GraphQLResolveInfo } from "graphql";
import { DeleteManyAdminAccountArgs } from "./args/DeleteManyAdminAccountArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class DeleteManyAdminAccountResolver {
    deleteManyAdminAccount(ctx: any, info: GraphQLResolveInfo, args: DeleteManyAdminAccountArgs): Promise<AffectedRowsOutput>;
}
