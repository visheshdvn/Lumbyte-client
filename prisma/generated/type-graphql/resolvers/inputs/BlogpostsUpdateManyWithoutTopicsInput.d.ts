import { BlogpostsCreateManyTopicsInputEnvelope } from "../inputs/BlogpostsCreateManyTopicsInputEnvelope";
import { BlogpostsCreateOrConnectWithoutTopicsInput } from "../inputs/BlogpostsCreateOrConnectWithoutTopicsInput";
import { BlogpostsCreateWithoutTopicsInput } from "../inputs/BlogpostsCreateWithoutTopicsInput";
import { BlogpostsScalarWhereInput } from "../inputs/BlogpostsScalarWhereInput";
import { BlogpostsUpdateManyWithWhereWithoutTopicsInput } from "../inputs/BlogpostsUpdateManyWithWhereWithoutTopicsInput";
import { BlogpostsUpdateWithWhereUniqueWithoutTopicsInput } from "../inputs/BlogpostsUpdateWithWhereUniqueWithoutTopicsInput";
import { BlogpostsUpsertWithWhereUniqueWithoutTopicsInput } from "../inputs/BlogpostsUpsertWithWhereUniqueWithoutTopicsInput";
import { BlogpostsWhereUniqueInput } from "../inputs/BlogpostsWhereUniqueInput";
export declare class BlogpostsUpdateManyWithoutTopicsInput {
    create?: BlogpostsCreateWithoutTopicsInput[] | undefined;
    connectOrCreate?: BlogpostsCreateOrConnectWithoutTopicsInput[] | undefined;
    upsert?: BlogpostsUpsertWithWhereUniqueWithoutTopicsInput[] | undefined;
    createMany?: BlogpostsCreateManyTopicsInputEnvelope | undefined;
    set?: BlogpostsWhereUniqueInput[] | undefined;
    disconnect?: BlogpostsWhereUniqueInput[] | undefined;
    delete?: BlogpostsWhereUniqueInput[] | undefined;
    connect?: BlogpostsWhereUniqueInput[] | undefined;
    update?: BlogpostsUpdateWithWhereUniqueWithoutTopicsInput[] | undefined;
    updateMany?: BlogpostsUpdateManyWithWhereWithoutTopicsInput[] | undefined;
    deleteMany?: BlogpostsScalarWhereInput[] | undefined;
}
