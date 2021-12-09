import { GraphQLResolveInfo } from "graphql";
import { FindUniqueAdminAccountArgs } from "./args/FindUniqueAdminAccountArgs";
import { AdminAccount } from "../../../models/AdminAccount";
export declare class FindUniqueAdminAccountResolver {
    adminAccount(ctx: any, info: GraphQLResolveInfo, args: FindUniqueAdminAccountArgs): Promise<AdminAccount | null>;
}
