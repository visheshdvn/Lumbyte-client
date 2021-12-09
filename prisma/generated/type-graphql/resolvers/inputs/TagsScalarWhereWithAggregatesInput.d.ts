import { BoolWithAggregatesFilter } from "../inputs/BoolWithAggregatesFilter";
import { DateTimeNullableWithAggregatesFilter } from "../inputs/DateTimeNullableWithAggregatesFilter";
import { DateTimeWithAggregatesFilter } from "../inputs/DateTimeWithAggregatesFilter";
import { IntWithAggregatesFilter } from "../inputs/IntWithAggregatesFilter";
import { StringNullableWithAggregatesFilter } from "../inputs/StringNullableWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";
export declare class TagsScalarWhereWithAggregatesInput {
    AND?: TagsScalarWhereWithAggregatesInput[] | undefined;
    OR?: TagsScalarWhereWithAggregatesInput[] | undefined;
    NOT?: TagsScalarWhereWithAggregatesInput[] | undefined;
    id?: IntWithAggregatesFilter | undefined;
    tagname?: StringWithAggregatesFilter | undefined;
    color?: StringNullableWithAggregatesFilter | undefined;
    metaDescription?: StringNullableWithAggregatesFilter | undefined;
    ogimg?: StringNullableWithAggregatesFilter | undefined;
    ogalt?: StringNullableWithAggregatesFilter | undefined;
    created_at?: DateTimeWithAggregatesFilter | undefined;
    upadted_at?: DateTimeWithAggregatesFilter | undefined;
    published_at?: DateTimeNullableWithAggregatesFilter | undefined;
    published?: BoolWithAggregatesFilter | undefined;
}
