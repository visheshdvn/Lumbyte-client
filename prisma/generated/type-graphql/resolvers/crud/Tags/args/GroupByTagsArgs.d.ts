import { TagsOrderByWithAggregationInput } from "../../../inputs/TagsOrderByWithAggregationInput";
import { TagsScalarWhereWithAggregatesInput } from "../../../inputs/TagsScalarWhereWithAggregatesInput";
import { TagsWhereInput } from "../../../inputs/TagsWhereInput";
export declare class GroupByTagsArgs {
    where?: TagsWhereInput | undefined;
    orderBy?: TagsOrderByWithAggregationInput[] | undefined;
    by: Array<"id" | "tagname" | "color" | "metaDescription" | "ogimg" | "ogalt" | "created_at" | "upadted_at" | "published_at" | "published">;
    having?: TagsScalarWhereWithAggregatesInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
