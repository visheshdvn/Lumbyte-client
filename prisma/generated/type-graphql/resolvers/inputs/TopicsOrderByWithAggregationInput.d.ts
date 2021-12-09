import { TopicsAvgOrderByAggregateInput } from "../inputs/TopicsAvgOrderByAggregateInput";
import { TopicsCountOrderByAggregateInput } from "../inputs/TopicsCountOrderByAggregateInput";
import { TopicsMaxOrderByAggregateInput } from "../inputs/TopicsMaxOrderByAggregateInput";
import { TopicsMinOrderByAggregateInput } from "../inputs/TopicsMinOrderByAggregateInput";
import { TopicsSumOrderByAggregateInput } from "../inputs/TopicsSumOrderByAggregateInput";
export declare class TopicsOrderByWithAggregationInput {
    id?: "asc" | "desc" | undefined;
    topicname?: "asc" | "desc" | undefined;
    metaDescription?: "asc" | "desc" | undefined;
    ogimg?: "asc" | "desc" | undefined;
    ogalt?: "asc" | "desc" | undefined;
    created_at?: "asc" | "desc" | undefined;
    upadted_at?: "asc" | "desc" | undefined;
    published_at?: "asc" | "desc" | undefined;
    published?: "asc" | "desc" | undefined;
    _count?: TopicsCountOrderByAggregateInput | undefined;
    _avg?: TopicsAvgOrderByAggregateInput | undefined;
    _max?: TopicsMaxOrderByAggregateInput | undefined;
    _min?: TopicsMinOrderByAggregateInput | undefined;
    _sum?: TopicsSumOrderByAggregateInput | undefined;
}
