import { CommentsOrderByWithAggregationInput } from "../../../inputs/CommentsOrderByWithAggregationInput";
import { CommentsScalarWhereWithAggregatesInput } from "../../../inputs/CommentsScalarWhereWithAggregatesInput";
import { CommentsWhereInput } from "../../../inputs/CommentsWhereInput";
export declare class GroupByCommentsArgs {
    where?: CommentsWhereInput | undefined;
    orderBy?: CommentsOrderByWithAggregationInput[] | undefined;
    by: Array<"id" | "content" | "created_at" | "upadted_at">;
    having?: CommentsScalarWhereWithAggregatesInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
