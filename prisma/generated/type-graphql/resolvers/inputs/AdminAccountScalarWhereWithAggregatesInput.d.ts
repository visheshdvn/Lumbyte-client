import { BoolWithAggregatesFilter } from "../inputs/BoolWithAggregatesFilter";
import { DateTimeWithAggregatesFilter } from "../inputs/DateTimeWithAggregatesFilter";
import { IntWithAggregatesFilter } from "../inputs/IntWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";
export declare class AdminAccountScalarWhereWithAggregatesInput {
    AND?: AdminAccountScalarWhereWithAggregatesInput[] | undefined;
    OR?: AdminAccountScalarWhereWithAggregatesInput[] | undefined;
    NOT?: AdminAccountScalarWhereWithAggregatesInput[] | undefined;
    id?: IntWithAggregatesFilter | undefined;
    password?: StringWithAggregatesFilter | undefined;
    userId?: StringWithAggregatesFilter | undefined;
    created_at?: DateTimeWithAggregatesFilter | undefined;
    upadted_at?: DateTimeWithAggregatesFilter | undefined;
    restricted?: BoolWithAggregatesFilter | undefined;
}
