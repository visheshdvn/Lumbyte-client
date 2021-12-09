import { AccountCountOrderByAggregateInput } from "../inputs/AccountCountOrderByAggregateInput";
import { AccountMaxOrderByAggregateInput } from "../inputs/AccountMaxOrderByAggregateInput";
import { AccountMinOrderByAggregateInput } from "../inputs/AccountMinOrderByAggregateInput";
export declare class AccountOrderByWithAggregationInput {
    id?: "asc" | "desc" | undefined;
    password?: "asc" | "desc" | undefined;
    facebook?: "asc" | "desc" | undefined;
    twitter?: "asc" | "desc" | undefined;
    instagram?: "asc" | "desc" | undefined;
    linkedin?: "asc" | "desc" | undefined;
    github?: "asc" | "desc" | undefined;
    behance?: "asc" | "desc" | undefined;
    pintrest?: "asc" | "desc" | undefined;
    eyeem?: "asc" | "desc" | undefined;
    px365?: "asc" | "desc" | undefined;
    userId?: "asc" | "desc" | undefined;
    created_at?: "asc" | "desc" | undefined;
    upadted_at?: "asc" | "desc" | undefined;
    disabled?: "asc" | "desc" | undefined;
    _count?: AccountCountOrderByAggregateInput | undefined;
    _max?: AccountMaxOrderByAggregateInput | undefined;
    _min?: AccountMinOrderByAggregateInput | undefined;
}
