import { BlogpostsOrderByRelationAggregateInput } from "../inputs/BlogpostsOrderByRelationAggregateInput";
export declare class TopicsOrderByWithRelationInput {
    id?: "asc" | "desc" | undefined;
    topicname?: "asc" | "desc" | undefined;
    metaDescription?: "asc" | "desc" | undefined;
    ogimg?: "asc" | "desc" | undefined;
    ogalt?: "asc" | "desc" | undefined;
    blogposts?: BlogpostsOrderByRelationAggregateInput | undefined;
    created_at?: "asc" | "desc" | undefined;
    upadted_at?: "asc" | "desc" | undefined;
    published_at?: "asc" | "desc" | undefined;
    published?: "asc" | "desc" | undefined;
}
