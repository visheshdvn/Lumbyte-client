import { TagsCreateOrConnectWithoutBlogpostsInput } from "../inputs/TagsCreateOrConnectWithoutBlogpostsInput";
import { TagsCreateWithoutBlogpostsInput } from "../inputs/TagsCreateWithoutBlogpostsInput";
import { TagsScalarWhereInput } from "../inputs/TagsScalarWhereInput";
import { TagsUpdateManyWithWhereWithoutBlogpostsInput } from "../inputs/TagsUpdateManyWithWhereWithoutBlogpostsInput";
import { TagsUpdateWithWhereUniqueWithoutBlogpostsInput } from "../inputs/TagsUpdateWithWhereUniqueWithoutBlogpostsInput";
import { TagsUpsertWithWhereUniqueWithoutBlogpostsInput } from "../inputs/TagsUpsertWithWhereUniqueWithoutBlogpostsInput";
import { TagsWhereUniqueInput } from "../inputs/TagsWhereUniqueInput";
export declare class TagsUpdateManyWithoutBlogpostsInput {
    create?: TagsCreateWithoutBlogpostsInput[] | undefined;
    connectOrCreate?: TagsCreateOrConnectWithoutBlogpostsInput[] | undefined;
    upsert?: TagsUpsertWithWhereUniqueWithoutBlogpostsInput[] | undefined;
    set?: TagsWhereUniqueInput[] | undefined;
    disconnect?: TagsWhereUniqueInput[] | undefined;
    delete?: TagsWhereUniqueInput[] | undefined;
    connect?: TagsWhereUniqueInput[] | undefined;
    update?: TagsUpdateWithWhereUniqueWithoutBlogpostsInput[] | undefined;
    updateMany?: TagsUpdateManyWithWhereWithoutBlogpostsInput[] | undefined;
    deleteMany?: TagsScalarWhereInput[] | undefined;
}
