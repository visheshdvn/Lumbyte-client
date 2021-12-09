import { BoolFilter } from "../inputs/BoolFilter";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { StringFilter } from "../inputs/StringFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";
export declare class AccountScalarWhereInput {
    AND?: AccountScalarWhereInput[] | undefined;
    OR?: AccountScalarWhereInput[] | undefined;
    NOT?: AccountScalarWhereInput[] | undefined;
    id?: StringFilter | undefined;
    password?: StringFilter | undefined;
    facebook?: StringNullableFilter | undefined;
    twitter?: StringNullableFilter | undefined;
    instagram?: StringNullableFilter | undefined;
    linkedin?: StringNullableFilter | undefined;
    github?: StringNullableFilter | undefined;
    behance?: StringNullableFilter | undefined;
    pintrest?: StringNullableFilter | undefined;
    eyeem?: StringNullableFilter | undefined;
    px365?: StringNullableFilter | undefined;
    userId?: StringFilter | undefined;
    created_at?: DateTimeFilter | undefined;
    upadted_at?: DateTimeFilter | undefined;
    disabled?: BoolFilter | undefined;
}
