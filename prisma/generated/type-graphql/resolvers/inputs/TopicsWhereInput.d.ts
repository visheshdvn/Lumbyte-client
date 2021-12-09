import { BlogpostsListRelationFilter } from "../inputs/BlogpostsListRelationFilter";
import { BoolFilter } from "../inputs/BoolFilter";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { DateTimeNullableFilter } from "../inputs/DateTimeNullableFilter";
import { IntFilter } from "../inputs/IntFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";
export declare class TopicsWhereInput {
    AND?: TopicsWhereInput[] | undefined;
    OR?: TopicsWhereInput[] | undefined;
    NOT?: TopicsWhereInput[] | undefined;
    id?: IntFilter | undefined;
    topicname?: StringNullableFilter | undefined;
    metaDescription?: StringNullableFilter | undefined;
    ogimg?: StringNullableFilter | undefined;
    ogalt?: StringNullableFilter | undefined;
    blogposts?: BlogpostsListRelationFilter | undefined;
    created_at?: DateTimeFilter | undefined;
    upadted_at?: DateTimeFilter | undefined;
    published_at?: DateTimeNullableFilter | undefined;
    published?: BoolFilter | undefined;
}
