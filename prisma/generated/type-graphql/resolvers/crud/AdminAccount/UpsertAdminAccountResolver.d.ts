import { GraphQLResolveInfo } from "graphql";
import { UpsertAdminAccountArgs } from "./args/UpsertAdminAccountArgs";
import { AdminAccount } from "../../../models/AdminAccount";
export declare class UpsertAdminAccountResolver {
    upsertAdminAccount(ctx: any, info: GraphQLResolveInfo, args: UpsertAdminAccountArgs): Promise<AdminAccount>;
}
