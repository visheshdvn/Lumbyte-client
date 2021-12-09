import { AccountOrderByWithRelationInput } from "../inputs/AccountOrderByWithRelationInput";
import { AdminAccountOrderByWithRelationInput } from "../inputs/AdminAccountOrderByWithRelationInput";
import { BlogpostsOrderByRelationAggregateInput } from "../inputs/BlogpostsOrderByRelationAggregateInput";
export declare class UserOrderByWithRelationInput {
    id?: "asc" | "desc" | undefined;
    firstname?: "asc" | "desc" | undefined;
    lastname?: "asc" | "desc" | undefined;
    username?: "asc" | "desc" | undefined;
    about?: "asc" | "desc" | undefined;
    dp?: "asc" | "desc" | undefined;
    dpalt?: "asc" | "desc" | undefined;
    email?: "asc" | "desc" | undefined;
    phone?: "asc" | "desc" | undefined;
    role?: "asc" | "desc" | undefined;
    blogposts?: BlogpostsOrderByRelationAggregateInput | undefined;
    publicAccount?: AccountOrderByWithRelationInput | undefined;
    adminAccount?: AdminAccountOrderByWithRelationInput | undefined;
    created_at?: "asc" | "desc" | undefined;
    upadted_at?: "asc" | "desc" | undefined;
    adminGrant?: "asc" | "desc" | undefined;
}
