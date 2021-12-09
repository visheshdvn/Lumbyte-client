import { BoolFilter } from "../inputs/BoolFilter";
import { BoolNullableFilter } from "../inputs/BoolNullableFilter";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { DateTimeNullableFilter } from "../inputs/DateTimeNullableFilter";
import { IntFilter } from "../inputs/IntFilter";
import { IntNullableFilter } from "../inputs/IntNullableFilter";
import { StringFilter } from "../inputs/StringFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";
export declare class BlogpostsScalarWhereInput {
    AND?: BlogpostsScalarWhereInput[] | undefined;
    OR?: BlogpostsScalarWhereInput[] | undefined;
    NOT?: BlogpostsScalarWhereInput[] | undefined;
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
    authorId?: StringNullableFilter | undefined;
    topicsId?: IntNullableFilter | undefined;
    created_at?: DateTimeFilter | undefined;
    upadted_at?: DateTimeFilter | undefined;
    published_at?: DateTimeNullableFilter | undefined;
    published?: BoolFilter | undefined;
    blocked?: BoolFilter | undefined;
}
