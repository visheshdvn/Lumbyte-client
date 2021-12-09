import { BlogpostsCreateManyAuthorInputEnvelope } from "../inputs/BlogpostsCreateManyAuthorInputEnvelope";
import { BlogpostsCreateOrConnectWithoutAuthorInput } from "../inputs/BlogpostsCreateOrConnectWithoutAuthorInput";
import { BlogpostsCreateWithoutAuthorInput } from "../inputs/BlogpostsCreateWithoutAuthorInput";
import { BlogpostsScalarWhereInput } from "../inputs/BlogpostsScalarWhereInput";
import { BlogpostsUpdateManyWithWhereWithoutAuthorInput } from "../inputs/BlogpostsUpdateManyWithWhereWithoutAuthorInput";
import { BlogpostsUpdateWithWhereUniqueWithoutAuthorInput } from "../inputs/BlogpostsUpdateWithWhereUniqueWithoutAuthorInput";
import { BlogpostsUpsertWithWhereUniqueWithoutAuthorInput } from "../inputs/BlogpostsUpsertWithWhereUniqueWithoutAuthorInput";
import { BlogpostsWhereUniqueInput } from "../inputs/BlogpostsWhereUniqueInput";
export declare class BlogpostsUpdateManyWithoutAuthorInput {
    create?: BlogpostsCreateWithoutAuthorInput[] | undefined;
    connectOrCreate?: BlogpostsCreateOrConnectWithoutAuthorInput[] | undefined;
    upsert?: BlogpostsUpsertWithWhereUniqueWithoutAuthorInput[] | undefined;
    createMany?: BlogpostsCreateManyAuthorInputEnvelope | undefined;
    set?: BlogpostsWhereUniqueInput[] | undefined;
    disconnect?: BlogpostsWhereUniqueInput[] | undefined;
    delete?: BlogpostsWhereUniqueInput[] | undefined;
    connect?: BlogpostsWhereUniqueInput[] | undefined;
    update?: BlogpostsUpdateWithWhereUniqueWithoutAuthorInput[] | undefined;
    updateMany?: BlogpostsUpdateManyWithWhereWithoutAuthorInput[] | undefined;
    deleteMany?: BlogpostsScalarWhereInput[] | undefined;
}
