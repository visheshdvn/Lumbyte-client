import { GraphQLResolveInfo } from "graphql";
import { UpdateAdminAccountArgs } from "./args/UpdateAdminAccountArgs";
import { AdminAccount } from "../../../models/AdminAccount";
export declare class UpdateAdminAccountResolver {
    updateAdminAccount(ctx: any, info: GraphQLResolveInfo, args: UpdateAdminAccountArgs): Promise<AdminAccount | null>;
}
