import { BlogpostsCreateOrConnectWithoutSavedByInput } from "../inputs/BlogpostsCreateOrConnectWithoutSavedByInput";
import { BlogpostsCreateWithoutSavedByInput } from "../inputs/BlogpostsCreateWithoutSavedByInput";
import { BlogpostsScalarWhereInput } from "../inputs/BlogpostsScalarWhereInput";
import { BlogpostsUpdateManyWithWhereWithoutSavedByInput } from "../inputs/BlogpostsUpdateManyWithWhereWithoutSavedByInput";
import { BlogpostsUpdateWithWhereUniqueWithoutSavedByInput } from "../inputs/BlogpostsUpdateWithWhereUniqueWithoutSavedByInput";
import { BlogpostsUpsertWithWhereUniqueWithoutSavedByInput } from "../inputs/BlogpostsUpsertWithWhereUniqueWithoutSavedByInput";
import { BlogpostsWhereUniqueInput } from "../inputs/BlogpostsWhereUniqueInput";
export declare class BlogpostsUpdateManyWithoutSavedByInput {
    create?: BlogpostsCreateWithoutSavedByInput[] | undefined;
    connectOrCreate?: BlogpostsCreateOrConnectWithoutSavedByInput[] | undefined;
    upsert?: BlogpostsUpsertWithWhereUniqueWithoutSavedByInput[] | undefined;
    set?: BlogpostsWhereUniqueInput[] | undefined;
    disconnect?: BlogpostsWhereUniqueInput[] | undefined;
    delete?: BlogpostsWhereUniqueInput[] | undefined;
    connect?: BlogpostsWhereUniqueInput[] | undefined;
    update?: BlogpostsUpdateWithWhereUniqueWithoutSavedByInput[] | undefined;
    updateMany?: BlogpostsUpdateManyWithWhereWithoutSavedByInput[] | undefined;
    deleteMany?: BlogpostsScalarWhereInput[] | undefined;
}
