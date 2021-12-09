import { BoolWithAggregatesFilter } from "../inputs/BoolWithAggregatesFilter";
import { DateTimeWithAggregatesFilter } from "../inputs/DateTimeWithAggregatesFilter";
import { StringNullableWithAggregatesFilter } from "../inputs/StringNullableWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";
export declare class AccountScalarWhereWithAggregatesInput {
    AND?: AccountScalarWhereWithAggregatesInput[] | undefined;
    OR?: AccountScalarWhereWithAggregatesInput[] | undefined;
    NOT?: AccountScalarWhereWithAggregatesInput[] | undefined;
    id?: StringWithAggregatesFilter | undefined;
    password?: StringWithAggregatesFilter | undefined;
    facebook?: StringNullableWithAggregatesFilter | undefined;
    twitter?: StringNullableWithAggregatesFilter | undefined;
    instagram?: StringNullableWithAggregatesFilter | undefined;
    linkedin?: StringNullableWithAggregatesFilter | undefined;
    github?: StringNullableWithAggregatesFilter | undefined;
    behance?: StringNullableWithAggregatesFilter | undefined;
    pintrest?: StringNullableWithAggregatesFilter | undefined;
    eyeem?: StringNullableWithAggregatesFilter | undefined;
    px365?: StringNullableWithAggregatesFilter | undefined;
    userId?: StringWithAggregatesFilter | undefined;
    created_at?: DateTimeWithAggregatesFilter | undefined;
    upadted_at?: DateTimeWithAggregatesFilter | undefined;
    disabled?: BoolWithAggregatesFilter | undefined;
}
