import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { IntFilter } from "../inputs/IntFilter";
import { StringFilter } from "../inputs/StringFilter";
export declare class CommentsWhereInput {
    AND?: CommentsWhereInput[] | undefined;
    OR?: CommentsWhereInput[] | undefined;
    NOT?: CommentsWhereInput[] | undefined;
    id?: IntFilter | undefined;
    content?: StringFilter | undefined;
    created_at?: DateTimeFilter | undefined;
    upadted_at?: DateTimeFilter | undefined;
}
