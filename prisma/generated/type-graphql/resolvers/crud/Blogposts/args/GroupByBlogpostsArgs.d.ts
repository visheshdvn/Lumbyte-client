import { BlogpostsOrderByWithAggregationInput } from "../../../inputs/BlogpostsOrderByWithAggregationInput";
import { BlogpostsScalarWhereWithAggregatesInput } from "../../../inputs/BlogpostsScalarWhereWithAggregatesInput";
import { BlogpostsWhereInput } from "../../../inputs/BlogpostsWhereInput";
export declare class GroupByBlogpostsArgs {
    where?: BlogpostsWhereInput | undefined;
    orderBy?: BlogpostsOrderByWithAggregationInput[] | undefined;
    by: Array<"id" | "title" | "slug" | "metaDescription" | "excerpt" | "content" | "banner" | "banneralt" | "minuteRead" | "featured" | "topPick" | "date" | "authorId" | "topicsId" | "created_at" | "upadted_at" | "published_at" | "published" | "blocked">;
    having?: BlogpostsScalarWhereWithAggregatesInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
