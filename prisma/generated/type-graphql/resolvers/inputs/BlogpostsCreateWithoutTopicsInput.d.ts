import { AccountCreateNestedManyWithoutSavedPostsInput } from "../inputs/AccountCreateNestedManyWithoutSavedPostsInput";
import { TagsCreateNestedManyWithoutBlogpostsInput } from "../inputs/TagsCreateNestedManyWithoutBlogpostsInput";
import { UserCreateNestedOneWithoutBlogpostsInput } from "../inputs/UserCreateNestedOneWithoutBlogpostsInput";
export declare class BlogpostsCreateWithoutTopicsInput {
    title: string;
    slug: string;
    metaDescription?: string | undefined;
    excerpt?: string | undefined;
    content?: string | undefined;
    banner?: string | undefined;
    banneralt?: string | undefined;
    minuteRead?: number | undefined;
    featured?: boolean | undefined;
    topPick?: boolean | undefined;
    date?: Date | undefined;
    created_at?: Date | undefined;
    upadted_at?: Date | undefined;
    published_at?: Date | undefined;
    published?: boolean | undefined;
    blocked?: boolean | undefined;
    author?: UserCreateNestedOneWithoutBlogpostsInput | undefined;
    tags?: TagsCreateNestedManyWithoutBlogpostsInput | undefined;
    savedBy?: AccountCreateNestedManyWithoutSavedPostsInput | undefined;
}
