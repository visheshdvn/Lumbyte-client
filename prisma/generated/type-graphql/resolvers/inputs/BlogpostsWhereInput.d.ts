import { AccountListRelationFilter } from "../inputs/AccountListRelationFilter";
import { BoolFilter } from "../inputs/BoolFilter";
import { BoolNullableFilter } from "../inputs/BoolNullableFilter";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { DateTimeNullableFilter } from "../inputs/DateTimeNullableFilter";
import { IntFilter } from "../inputs/IntFilter";
import { IntNullableFilter } from "../inputs/IntNullableFilter";
import { StringFilter } from "../inputs/StringFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";
import { TagsListRelationFilter } from "../inputs/TagsListRelationFilter";
import { TopicsRelationFilter } from "../inputs/TopicsRelationFilter";
import { UserRelationFilter } from "../inputs/UserRelationFilter";
export declare class BlogpostsWhereInput {
    AND?: BlogpostsWhereInput[] | undefined;
    OR?: BlogpostsWhereInput[] | undefined;
    NOT?: BlogpostsWhereInput[] | undefined;
    id?: IntFilter | undefined;
    title?: StringFilter | undefined;
    slug?: StringFilter | undefined;
    metaDescription?: StringNullableFilter | undefined;
    excerpt?: StringNullableFilter | undefined;
    content?: StringNullableFilter | undefined;
    banner?: StringNullableFilter | undefined;
    banneralt?: StringNullableFilter | undefined;
    minuteRead?: IntNullableFilter | undefined;
    featured?: BoolNullableFilter | undefined;
    topPick?: BoolNullableFilter | undefined;
    date?: DateTimeNullableFilter | undefined;
    author?: UserRelationFilter | undefined;
    authorId?: StringNullableFilter | undefined;
    topics?: TopicsRelationFilter | undefined;
    topicsId?: IntNullableFilter | undefined;
    tags?: TagsListRelationFilter | undefined;
    savedBy?: AccountListRelationFilter | undefined;
    created_at?: DateTimeFilter | undefined;
    upadted_at?: DateTimeFilter | undefined;
    published_at?: DateTimeNullableFilter | undefined;
    published?: BoolFilter | undefined;
    blocked?: BoolFilter | undefined;
}
