import { UserOrderByWithRelationInput } from "../inputs/UserOrderByWithRelationInput";
export declare class AdminAccountOrderByWithRelationInput {
    id?: "asc" | "desc" | undefined;
    password?: "asc" | "desc" | undefined;
    user?: UserOrderByWithRelationInput | undefined;
    userId?: "asc" | "desc" | undefined;
    created_at?: "asc" | "desc" | undefined;
    upadted_at?: "asc" | "desc" | undefined;
    restricted?: "asc" | "desc" | undefined;
}
