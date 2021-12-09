import { BlogpostsOrderByRelationAggregateInput } from "../inputs/BlogpostsOrderByRelationAggregateInput";
import { UserOrderByWithRelationInput } from "../inputs/UserOrderByWithRelationInput";
export declare class AccountOrderByWithRelationInput {
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
    user?: UserOrderByWithRelationInput | undefined;
    userId?: "asc" | "desc" | undefined;
    savedPosts?: BlogpostsOrderByRelationAggregateInput | undefined;
    created_at?: "asc" | "desc" | undefined;
    upadted_at?: "asc" | "desc" | undefined;
    disabled?: "asc" | "desc" | undefined;
}
