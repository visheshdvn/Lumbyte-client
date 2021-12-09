import { BlogpostsListRelationFilter } from "../inputs/BlogpostsListRelationFilter";
import { BoolFilter } from "../inputs/BoolFilter";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { DateTimeNullableFilter } from "../inputs/DateTimeNullableFilter";
import { IntFilter } from "../inputs/IntFilter";
import { StringFilter } from "../inputs/StringFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";
export declare class TagsWhereInput {
    AND?: TagsWhereInput[] | undefined;
    OR?: TagsWhereInput[] | undefined;
    NOT?: TagsWhereInput[] | undefined;
    id?: IntFilter | undefined;
    tagname?: StringFilter | undefined;
    color?: StringNullableFilter | undefined;
    metaDescription?: StringNullableFilter | undefined;
    ogimg?: StringNullableFilter | undefined;
    ogalt?: StringNullableFilter | undefined;
    blogposts?: BlogpostsListRelationFilter | undefined;
    created_at?: DateTimeFilter | undefined;
    upadted_at?: DateTimeFilter | undefined;
    published_at?: DateTimeNullableFilter | undefined;
    published?: BoolFilter | undefined;
}
