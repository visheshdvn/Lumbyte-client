import { AdminAccountOrderByWithAggregationInput } from "../../../inputs/AdminAccountOrderByWithAggregationInput";
import { AdminAccountScalarWhereWithAggregatesInput } from "../../../inputs/AdminAccountScalarWhereWithAggregatesInput";
import { AdminAccountWhereInput } from "../../../inputs/AdminAccountWhereInput";
export declare class GroupByAdminAccountArgs {
    where?: AdminAccountWhereInput | undefined;
    orderBy?: AdminAccountOrderByWithAggregationInput[] | undefined;
    by: Array<"id" | "password" | "userId" | "created_at" | "upadted_at" | "restricted">;
    having?: AdminAccountScalarWhereWithAggregatesInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
