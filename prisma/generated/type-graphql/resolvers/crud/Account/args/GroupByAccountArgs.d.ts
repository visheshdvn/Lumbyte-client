import { AccountOrderByWithAggregationInput } from "../../../inputs/AccountOrderByWithAggregationInput";
import { AccountScalarWhereWithAggregatesInput } from "../../../inputs/AccountScalarWhereWithAggregatesInput";
import { AccountWhereInput } from "../../../inputs/AccountWhereInput";
export declare class GroupByAccountArgs {
    where?: AccountWhereInput | undefined;
    orderBy?: AccountOrderByWithAggregationInput[] | undefined;
    by: Array<"id" | "password" | "facebook" | "twitter" | "instagram" | "linkedin" | "github" | "behance" | "pintrest" | "eyeem" | "px365" | "userId" | "created_at" | "upadted_at" | "disabled">;
    having?: AccountScalarWhereWithAggregatesInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
