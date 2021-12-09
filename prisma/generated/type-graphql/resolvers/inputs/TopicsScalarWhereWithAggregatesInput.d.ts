import { BoolWithAggregatesFilter } from "../inputs/BoolWithAggregatesFilter";
import { DateTimeNullableWithAggregatesFilter } from "../inputs/DateTimeNullableWithAggregatesFilter";
import { DateTimeWithAggregatesFilter } from "../inputs/DateTimeWithAggregatesFilter";
import { IntWithAggregatesFilter } from "../inputs/IntWithAggregatesFilter";
import { StringNullableWithAggregatesFilter } from "../inputs/StringNullableWithAggregatesFilter";
export declare class TopicsScalarWhereWithAggregatesInput {
    AND?: TopicsScalarWhereWithAggregatesInput[] | undefined;
    OR?: TopicsScalarWhereWithAggregatesInput[] | undefined;
    NOT?: TopicsScalarWhereWithAggregatesInput[] | undefined;
    id?: IntWithAggregatesFilter | undefined;
    topicname?: StringNullableWithAggregatesFilter | undefined;
    metaDescription?: StringNullableWithAggregatesFilter | undefined;
    ogimg?: StringNullableWithAggregatesFilter | undefined;
    ogalt?: StringNullableWithAggregatesFilter | undefined;
    created_at?: DateTimeWithAggregatesFilter | undefined;
    upadted_at?: DateTimeWithAggregatesFilter | undefined;
    published_at?: DateTimeNullableWithAggregatesFilter | undefined;
    published?: BoolWithAggregatesFilter | undefined;
}
