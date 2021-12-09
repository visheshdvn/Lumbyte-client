import { GraphQLResolveInfo } from "graphql";
import { GroupByAdminAccountArgs } from "./args/GroupByAdminAccountArgs";
import { AdminAccountGroupBy } from "../../outputs/AdminAccountGroupBy";
export declare class GroupByAdminAccountResolver {
    groupByAdminAccount(ctx: any, info: GraphQLResolveInfo, args: GroupByAdminAccountArgs): Promise<AdminAccountGroupBy[]>;
}
