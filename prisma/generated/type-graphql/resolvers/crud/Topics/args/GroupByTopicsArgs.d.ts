import { TopicsOrderByWithAggregationInput } from "../../../inputs/TopicsOrderByWithAggregationInput";
import { TopicsScalarWhereWithAggregatesInput } from "../../../inputs/TopicsScalarWhereWithAggregatesInput";
import { TopicsWhereInput } from "../../../inputs/TopicsWhereInput";
export declare class GroupByTopicsArgs {
    where?: TopicsWhereInput | undefined;
    orderBy?: TopicsOrderByWithAggregationInput[] | undefined;
    by: Array<"id" | "topicname" | "metaDescription" | "ogimg" | "ogalt" | "created_at" | "upadted_at" | "published_at" | "published">;
    having?: TopicsScalarWhereWithAggregatesInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
