import { BlogpostsCreateNestedManyWithoutTopicsInput } from "../inputs/BlogpostsCreateNestedManyWithoutTopicsInput";
export declare class TopicsCreateInput {
    topicname?: string | undefined;
    metaDescription?: string | undefined;
    ogimg?: string | undefined;
    ogalt?: string | undefined;
    created_at?: Date | undefined;
    upadted_at?: Date | undefined;
    published_at?: Date | undefined;
    published?: boolean | undefined;
    blogposts?: BlogpostsCreateNestedManyWithoutTopicsInput | undefined;
}
