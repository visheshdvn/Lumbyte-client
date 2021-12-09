import { BoolFilter } from "../inputs/BoolFilter";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { IntFilter } from "../inputs/IntFilter";
import { StringFilter } from "../inputs/StringFilter";
import { UserRelationFilter } from "../inputs/UserRelationFilter";
export declare class AdminAccountWhereInput {
    AND?: AdminAccountWhereInput[] | undefined;
    OR?: AdminAccountWhereInput[] | undefined;
    NOT?: AdminAccountWhereInput[] | undefined;
    id?: IntFilter | undefined;
    password?: StringFilter | undefined;
    user?: UserRelationFilter | undefined;
    userId?: StringFilter | undefined;
    created_at?: DateTimeFilter | undefined;
    upadted_at?: DateTimeFilter | undefined;
    restricted?: BoolFilter | undefined;
}
