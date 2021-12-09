import { CommentsOrderByWithRelationInput } from "../../../inputs/CommentsOrderByWithRelationInput";
import { CommentsWhereInput } from "../../../inputs/CommentsWhereInput";
import { CommentsWhereUniqueInput } from "../../../inputs/CommentsWhereUniqueInput";
export declare class FindManyCommentsArgs {
    where?: CommentsWhereInput | undefined;
    orderBy?: CommentsOrderByWithRelationInput[] | undefined;
    cursor?: CommentsWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
    distinct?: Array<"id" | "content" | "created_at" | "upadted_at"> | undefined;
}
