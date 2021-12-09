import { AdminAccountCreateInput } from "../../../inputs/AdminAccountCreateInput";
import { AdminAccountUpdateInput } from "../../../inputs/AdminAccountUpdateInput";
import { AdminAccountWhereUniqueInput } from "../../../inputs/AdminAccountWhereUniqueInput";
export declare class UpsertAdminAccountArgs {
    where: AdminAccountWhereUniqueInput;
    create: AdminAccountCreateInput;
    update: AdminAccountUpdateInput;
}
