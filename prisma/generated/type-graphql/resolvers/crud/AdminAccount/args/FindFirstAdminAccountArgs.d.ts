import { AdminAccountOrderByWithRelationInput } from "../../../inputs/AdminAccountOrderByWithRelationInput";
import { AdminAccountWhereInput } from "../../../inputs/AdminAccountWhereInput";
import { AdminAccountWhereUniqueInput } from "../../../inputs/AdminAccountWhereUniqueInput";
export declare class FindFirstAdminAccountArgs {
    where?: AdminAccountWhereInput | undefined;
    orderBy?: AdminAccountOrderByWithRelationInput[] | undefined;
    cursor?: AdminAccountWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
    distinct?: Array<"id" | "password" | "userId" | "created_at" | "upadted_at" | "restricted"> | undefined;
}
