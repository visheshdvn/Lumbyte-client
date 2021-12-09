import { TagsCreateOrConnectWithoutBlogpostsInput } from "../inputs/TagsCreateOrConnectWithoutBlogpostsInput";
import { TagsCreateWithoutBlogpostsInput } from "../inputs/TagsCreateWithoutBlogpostsInput";
import { TagsWhereUniqueInput } from "../inputs/TagsWhereUniqueInput";
export declare class TagsCreateNestedManyWithoutBlogpostsInput {
    create?: TagsCreateWithoutBlogpostsInput[] | undefined;
    connectOrCreate?: TagsCreateOrConnectWithoutBlogpostsInput[] | undefined;
    connect?: TagsWhereUniqueInput[] | undefined;
}
