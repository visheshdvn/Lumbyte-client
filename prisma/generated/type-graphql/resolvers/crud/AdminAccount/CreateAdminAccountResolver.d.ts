import { GraphQLResolveInfo } from "graphql";
import { CreateAdminAccountArgs } from "./args/CreateAdminAccountArgs";
import { AdminAccount } from "../../../models/AdminAccount";
export declare class CreateAdminAccountResolver {
    createAdminAccount(ctx: any, info: GraphQLResolveInfo, args: CreateAdminAccountArgs): Promise<AdminAccount>;
}
