import { BlogpostsOrderByWithRelationInput } from "../../../inputs/BlogpostsOrderByWithRelationInput";
import { BlogpostsWhereInput } from "../../../inputs/BlogpostsWhereInput";
import { BlogpostsWhereUniqueInput } from "../../../inputs/BlogpostsWhereUniqueInput";
export declare class TagsBlogpostsArgs {
    where?: BlogpostsWhereInput | undefined;
    orderBy?: BlogpostsOrderByWithRelationInput[] | undefined;
    cursor?: BlogpostsWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
    distinct?: Array<"id" | "title" | "slug" | "metaDescription" | "excerpt" | "content" | "banner" | "banneralt" | "minuteRead" | "featured" | "topPick" | "date" | "authorId" | "topicsId" | "created_at" | "upadted_at" | "published_at" | "published" | "blocked"> | undefined;
}
