import { BlogpostsCreateOrConnectWithoutTagsInput } from "../inputs/BlogpostsCreateOrConnectWithoutTagsInput";
import { BlogpostsCreateWithoutTagsInput } from "../inputs/BlogpostsCreateWithoutTagsInput";
import { BlogpostsWhereUniqueInput } from "../inputs/BlogpostsWhereUniqueInput";
export declare class BlogpostsCreateNestedManyWithoutTagsInput {
    create?: BlogpostsCreateWithoutTagsInput[] | undefined;
    connectOrCreate?: BlogpostsCreateOrConnectWithoutTagsInput[] | undefined;
    connect?: BlogpostsWhereUniqueInput[] | undefined;
}
