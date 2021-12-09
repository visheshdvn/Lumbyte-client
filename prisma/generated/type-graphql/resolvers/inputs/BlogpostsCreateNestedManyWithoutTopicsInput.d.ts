import { BlogpostsCreateManyTopicsInputEnvelope } from "../inputs/BlogpostsCreateManyTopicsInputEnvelope";
import { BlogpostsCreateOrConnectWithoutTopicsInput } from "../inputs/BlogpostsCreateOrConnectWithoutTopicsInput";
import { BlogpostsCreateWithoutTopicsInput } from "../inputs/BlogpostsCreateWithoutTopicsInput";
import { BlogpostsWhereUniqueInput } from "../inputs/BlogpostsWhereUniqueInput";
export declare class BlogpostsCreateNestedManyWithoutTopicsInput {
    create?: BlogpostsCreateWithoutTopicsInput[] | undefined;
    connectOrCreate?: BlogpostsCreateOrConnectWithoutTopicsInput[] | undefined;
    createMany?: BlogpostsCreateManyTopicsInputEnvelope | undefined;
    connect?: BlogpostsWhereUniqueInput[] | undefined;
}
