import { AccountRelationFilter } from "../inputs/AccountRelationFilter";
import { AdminAccountRelationFilter } from "../inputs/AdminAccountRelationFilter";
import { BlogpostsListRelationFilter } from "../inputs/BlogpostsListRelationFilter";
import { BoolFilter } from "../inputs/BoolFilter";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { StringFilter } from "../inputs/StringFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";
export declare class UserWhereInput {
    AND?: UserWhereInput[] | undefined;
    OR?: UserWhereInput[] | undefined;
    NOT?: UserWhereInput[] | undefined;
    id?: StringFilter | undefined;
    firstname?: StringFilter | undefined;
    lastname?: StringNullableFilter | undefined;
    username?: StringFilter | undefined;
    about?: StringNullableFilter | undefined;
    dp?: StringNullableFilter | undefined;
    dpalt?: StringNullableFilter | undefined;
    email?: StringFilter | undefined;
    phone?: StringNullableFilter | undefined;
    role?: StringFilter | undefined;
    blogposts?: BlogpostsListRelationFilter | undefined;
    publicAccount?: AccountRelationFilter | undefined;
    adminAccount?: AdminAccountRelationFilter | undefined;
    created_at?: DateTimeFilter | undefined;
    upadted_at?: DateTimeFilter | undefined;
    adminGrant?: BoolFilter | undefined;
}
