import { BlogpostsCreateOrConnectWithoutTagsInput } from "../inputs/BlogpostsCreateOrConnectWithoutTagsInput";
import { BlogpostsCreateWithoutTagsInput } from "../inputs/BlogpostsCreateWithoutTagsInput";
import { BlogpostsScalarWhereInput } from "../inputs/BlogpostsScalarWhereInput";
import { BlogpostsUpdateManyWithWhereWithoutTagsInput } from "../inputs/BlogpostsUpdateManyWithWhereWithoutTagsInput";
import { BlogpostsUpdateWithWhereUniqueWithoutTagsInput } from "../inputs/BlogpostsUpdateWithWhereUniqueWithoutTagsInput";
import { BlogpostsUpsertWithWhereUniqueWithoutTagsInput } from "../inputs/BlogpostsUpsertWithWhereUniqueWithoutTagsInput";
import { BlogpostsWhereUniqueInput } from "../inputs/BlogpostsWhereUniqueInput";
export declare class BlogpostsUpdateManyWithoutTagsInput {
    create?: BlogpostsCreateWithoutTagsInput[] | undefined;
    connectOrCreate?: BlogpostsCreateOrConnectWithoutTagsInput[] | undefined;
    upsert?: BlogpostsUpsertWithWhereUniqueWithoutTagsInput[] | undefined;
    set?: BlogpostsWhereUniqueInput[] | undefined;
    disconnect?: BlogpostsWhereUniqueInput[] | undefined;
    delete?: BlogpostsWhereUniqueInput[] | undefined;
    connect?: BlogpostsWhereUniqueInput[] | undefined;
    update?: BlogpostsUpdateWithWhereUniqueWithoutTagsInput[] | undefined;
    updateMany?: BlogpostsUpdateManyWithWhereWithoutTagsInput[] | undefined;
    deleteMany?: BlogpostsScalarWhereInput[] | undefined;
}
