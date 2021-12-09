import { BlogpostsListRelationFilter } from "../inputs/BlogpostsListRelationFilter";
import { BoolFilter } from "../inputs/BoolFilter";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { StringFilter } from "../inputs/StringFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";
import { UserRelationFilter } from "../inputs/UserRelationFilter";
export declare class AccountWhereInput {
    AND?: AccountWhereInput[] | undefined;
    OR?: AccountWhereInput[] | undefined;
    NOT?: AccountWhereInput[] | undefined;
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
    user?: UserRelationFilter | undefined;
    userId?: StringFilter | undefined;
    savedPosts?: BlogpostsListRelationFilter | undefined;
    created_at?: DateTimeFilter | undefined;
    upadted_at?: DateTimeFilter | undefined;
    disabled?: BoolFilter | undefined;
}
