import { GraphQLResolveInfo } from "graphql";
import { CreateManyAdminAccountArgs } from "./args/CreateManyAdminAccountArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class CreateManyAdminAccountResolver {
    createManyAdminAccount(ctx: any, info: GraphQLResolveInfo, args: CreateManyAdminAccountArgs): Promise<AffectedRowsOutput>;
}
