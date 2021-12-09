import { GraphQLResolveInfo } from "graphql";
import { FindFirstAdminAccountArgs } from "./args/FindFirstAdminAccountArgs";
import { AdminAccount } from "../../../models/AdminAccount";
export declare class FindFirstAdminAccountResolver {
    findFirstAdminAccount(ctx: any, info: GraphQLResolveInfo, args: FindFirstAdminAccountArgs): Promise<AdminAccount | null>;
}
