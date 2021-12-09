import { BlogpostsCreateNestedManyWithoutTagsInput } from "../inputs/BlogpostsCreateNestedManyWithoutTagsInput";
export declare class TagsCreateInput {
    tagname: string;
    color?: string | undefined;
    metaDescription?: string | undefined;
    ogimg?: string | undefined;
    ogalt?: string | undefined;
    created_at?: Date | undefined;
    upadted_at?: Date | undefined;
    published_at?: Date | undefined;
    published?: boolean | undefined;
    blogposts?: BlogpostsCreateNestedManyWithoutTagsInput | undefined;
}
