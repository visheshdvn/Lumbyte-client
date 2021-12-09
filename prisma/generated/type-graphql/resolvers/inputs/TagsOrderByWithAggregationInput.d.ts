import { TagsAvgOrderByAggregateInput } from "../inputs/TagsAvgOrderByAggregateInput";
import { TagsCountOrderByAggregateInput } from "../inputs/TagsCountOrderByAggregateInput";
import { TagsMaxOrderByAggregateInput } from "../inputs/TagsMaxOrderByAggregateInput";
import { TagsMinOrderByAggregateInput } from "../inputs/TagsMinOrderByAggregateInput";
import { TagsSumOrderByAggregateInput } from "../inputs/TagsSumOrderByAggregateInput";
export declare class TagsOrderByWithAggregationInput {
    id?: "asc" | "desc" | undefined;
    tagname?: "asc" | "desc" | undefined;
    color?: "asc" | "desc" | undefined;
    metaDescription?: "asc" | "desc" | undefined;
    ogimg?: "asc" | "desc" | undefined;
    ogalt?: "asc" | "desc" | undefined;
    created_at?: "asc" | "desc" | undefined;
    upadted_at?: "asc" | "desc" | undefined;
    published_at?: "asc" | "desc" | undefined;
    published?: "asc" | "desc" | undefined;
    _count?: TagsCountOrderByAggregateInput | undefined;
    _avg?: TagsAvgOrderByAggregateInput | undefined;
    _max?: TagsMaxOrderByAggregateInput | undefined;
    _min?: TagsMinOrderByAggregateInput | undefined;
    _sum?: TagsSumOrderByAggregateInput | undefined;
}
