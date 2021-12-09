import { TopicsOrderByWithRelationInput } from "../../../inputs/TopicsOrderByWithRelationInput";
import { TopicsWhereInput } from "../../../inputs/TopicsWhereInput";
import { TopicsWhereUniqueInput } from "../../../inputs/TopicsWhereUniqueInput";
export declare class FindManyTopicsArgs {
    where?: TopicsWhereInput | undefined;
    orderBy?: TopicsOrderByWithRelationInput[] | undefined;
    cursor?: TopicsWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
    distinct?: Array<"id" | "topicname" | "metaDescription" | "ogimg" | "ogalt" | "created_at" | "upadted_at" | "published_at" | "published"> | undefined;
}
