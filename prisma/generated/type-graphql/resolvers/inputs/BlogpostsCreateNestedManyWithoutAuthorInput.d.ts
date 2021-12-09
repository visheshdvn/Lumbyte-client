import { BlogpostsCreateManyAuthorInputEnvelope } from "../inputs/BlogpostsCreateManyAuthorInputEnvelope";
import { BlogpostsCreateOrConnectWithoutAuthorInput } from "../inputs/BlogpostsCreateOrConnectWithoutAuthorInput";
import { BlogpostsCreateWithoutAuthorInput } from "../inputs/BlogpostsCreateWithoutAuthorInput";
import { BlogpostsWhereUniqueInput } from "../inputs/BlogpostsWhereUniqueInput";
export declare class BlogpostsCreateNestedManyWithoutAuthorInput {
    create?: BlogpostsCreateWithoutAuthorInput[] | undefined;
    connectOrCreate?: BlogpostsCreateOrConnectWithoutAuthorInput[] | undefined;
    createMany?: BlogpostsCreateManyAuthorInputEnvelope | undefined;
    connect?: BlogpostsWhereUniqueInput[] | undefined;
}
