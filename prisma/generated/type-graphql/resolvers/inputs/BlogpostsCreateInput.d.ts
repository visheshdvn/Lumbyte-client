import { AccountCreateNestedManyWithoutSavedPostsInput } from "../inputs/AccountCreateNestedManyWithoutSavedPostsInput";
import { TagsCreateNestedManyWithoutBlogpostsInput } from "../inputs/TagsCreateNestedManyWithoutBlogpostsInput";
import { TopicsCreateNestedOneWithoutBlogpostsInput } from "../inputs/TopicsCreateNestedOneWithoutBlogpostsInput";
import { UserCreateNestedOneWithoutBlogpostsInput } from "../inputs/UserCreateNestedOneWithoutBlogpostsInput";
export declare class BlogpostsCreateInput {
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
    topics?: TopicsCreateNestedOneWithoutBlogpostsInput | undefined;
    tags?: TagsCreateNestedManyWithoutBlogpostsInput | undefined;
    savedBy?: AccountCreateNestedManyWithoutSavedPostsInput | undefined;
}
