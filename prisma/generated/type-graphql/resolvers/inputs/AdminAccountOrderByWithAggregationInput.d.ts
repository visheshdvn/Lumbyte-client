import { AdminAccountAvgOrderByAggregateInput } from "../inputs/AdminAccountAvgOrderByAggregateInput";
import { AdminAccountCountOrderByAggregateInput } from "../inputs/AdminAccountCountOrderByAggregateInput";
import { AdminAccountMaxOrderByAggregateInput } from "../inputs/AdminAccountMaxOrderByAggregateInput";
import { AdminAccountMinOrderByAggregateInput } from "../inputs/AdminAccountMinOrderByAggregateInput";
import { AdminAccountSumOrderByAggregateInput } from "../inputs/AdminAccountSumOrderByAggregateInput";
export declare class AdminAccountOrderByWithAggregationInput {
    id?: "asc" | "desc" | undefined;
    password?: "asc" | "desc" | undefined;
    userId?: "asc" | "desc" | undefined;
    created_at?: "asc" | "desc" | undefined;
    upadted_at?: "asc" | "desc" | undefined;
    restricted?: "asc" | "desc" | undefined;
    _count?: AdminAccountCountOrderByAggregateInput | undefined;
    _avg?: AdminAccountAvgOrderByAggregateInput | undefined;
    _max?: AdminAccountMaxOrderByAggregateInput | undefined;
    _min?: AdminAccountMinOrderByAggregateInput | undefined;
    _sum?: AdminAccountSumOrderByAggregateInput | undefined;
}
