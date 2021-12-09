import { GraphQLResolveInfo } from "graphql";
import { UpdateManyAdminAccountArgs } from "./args/UpdateManyAdminAccountArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class UpdateManyAdminAccountResolver {
    updateManyAdminAccount(ctx: any, info: GraphQLResolveInfo, args: UpdateManyAdminAccountArgs): Promise<AffectedRowsOutput>;
}
