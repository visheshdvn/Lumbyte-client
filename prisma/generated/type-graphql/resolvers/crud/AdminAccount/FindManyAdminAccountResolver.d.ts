import { GraphQLResolveInfo } from "graphql";
import { FindManyAdminAccountArgs } from "./args/FindManyAdminAccountArgs";
import { AdminAccount } from "../../../models/AdminAccount";
export declare class FindManyAdminAccountResolver {
    adminAccounts(ctx: any, info: GraphQLResolveInfo, args: FindManyAdminAccountArgs): Promise<AdminAccount[]>;
}
