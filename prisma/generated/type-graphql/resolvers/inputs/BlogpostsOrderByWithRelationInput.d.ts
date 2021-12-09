import { AccountOrderByRelationAggregateInput } from "../inputs/AccountOrderByRelationAggregateInput";
import { TagsOrderByRelationAggregateInput } from "../inputs/TagsOrderByRelationAggregateInput";
import { TopicsOrderByWithRelationInput } from "../inputs/TopicsOrderByWithRelationInput";
import { UserOrderByWithRelationInput } from "../inputs/UserOrderByWithRelationInput";
export declare class BlogpostsOrderByWithRelationInput {
    id?: "asc" | "desc" | undefined;
    title?: "asc" | "desc" | undefined;
    slug?: "asc" | "desc" | undefined;
    metaDescription?: "asc" | "desc" | undefined;
    excerpt?: "asc" | "desc" | undefined;
    content?: "asc" | "desc" | undefined;
    banner?: "asc" | "desc" | undefined;
    banneralt?: "asc" | "desc" | undefined;
    minuteRead?: "asc" | "desc" | undefined;
    featured?: "asc" | "desc" | undefined;
    topPick?: "asc" | "desc" | undefined;
    date?: "asc" | "desc" | undefined;
    author?: UserOrderByWithRelationInput | undefined;
    authorId?: "asc" | "desc" | undefined;
    topics?: TopicsOrderByWithRelationInput | undefined;
    topicsId?: "asc" | "desc" | undefined;
    tags?: TagsOrderByRelationAggregateInput | undefined;
    savedBy?: AccountOrderByRelationAggregateInput | undefined;
    created_at?: "asc" | "desc" | undefined;
    upadted_at?: "asc" | "desc" | undefined;
    published_at?: "asc" | "desc" | undefined;
    published?: "asc" | "desc" | undefined;
    blocked?: "asc" | "desc" | undefined;
}
