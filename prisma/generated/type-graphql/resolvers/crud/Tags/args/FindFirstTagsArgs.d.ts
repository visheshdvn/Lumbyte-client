import { TagsOrderByWithRelationInput } from "../../../inputs/TagsOrderByWithRelationInput";
import { TagsWhereInput } from "../../../inputs/TagsWhereInput";
import { TagsWhereUniqueInput } from "../../../inputs/TagsWhereUniqueInput";
export declare class FindFirstTagsArgs {
    where?: TagsWhereInput | undefined;
    orderBy?: TagsOrderByWithRelationInput[] | undefined;
    cursor?: TagsWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
    distinct?: Array<"id" | "tagname" | "color" | "metaDescription" | "ogimg" | "ogalt" | "created_at" | "upadted_at" | "published_at" | "published"> | undefined;
}
