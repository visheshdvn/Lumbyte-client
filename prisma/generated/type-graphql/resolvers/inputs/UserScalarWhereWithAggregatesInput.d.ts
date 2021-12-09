import { BoolWithAggregatesFilter } from "../inputs/BoolWithAggregatesFilter";
import { DateTimeWithAggregatesFilter } from "../inputs/DateTimeWithAggregatesFilter";
import { StringNullableWithAggregatesFilter } from "../inputs/StringNullableWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";
export declare class UserScalarWhereWithAggregatesInput {
    AND?: UserScalarWhereWithAggregatesInput[] | undefined;
    OR?: UserScalarWhereWithAggregatesInput[] | undefined;
    NOT?: UserScalarWhereWithAggregatesInput[] | undefined;
    id?: StringWithAggregatesFilter | undefined;
    firstname?: StringWithAggregatesFilter | undefined;
    lastname?: StringNullableWithAggregatesFilter | undefined;
    username?: StringWithAggregatesFilter | undefined;
    about?: StringNullableWithAggregatesFilter | undefined;
    dp?: StringNullableWithAggregatesFilter | undefined;
    dpalt?: StringNullableWithAggregatesFilter | undefined;
    email?: StringWithAggregatesFilter | undefined;
    phone?: StringNullableWithAggregatesFilter | undefined;
    role?: StringWithAggregatesFilter | undefined;
    created_at?: DateTimeWithAggregatesFilter | undefined;
    upadted_at?: DateTimeWithAggregatesFilter | undefined;
    adminGrant?: BoolWithAggregatesFilter | undefined;
}
