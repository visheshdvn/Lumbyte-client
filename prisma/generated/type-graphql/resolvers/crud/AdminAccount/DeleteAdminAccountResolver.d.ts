import { GraphQLResolveInfo } from "graphql";
import { DeleteAdminAccountArgs } from "./args/DeleteAdminAccountArgs";
import { AdminAccount } from "../../../models/AdminAccount";
export declare class DeleteAdminAccountResolver {
    deleteAdminAccount(ctx: any, info: GraphQLResolveInfo, args: DeleteAdminAccountArgs): Promise<AdminAccount | null>;
}
