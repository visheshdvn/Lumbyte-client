import { BlogpostsCreateOrConnectWithoutSavedByInput } from "../inputs/BlogpostsCreateOrConnectWithoutSavedByInput";
import { BlogpostsCreateWithoutSavedByInput } from "../inputs/BlogpostsCreateWithoutSavedByInput";
import { BlogpostsWhereUniqueInput } from "../inputs/BlogpostsWhereUniqueInput";
export declare class BlogpostsCreateNestedManyWithoutSavedByInput {
    create?: BlogpostsCreateWithoutSavedByInput[] | undefined;
    connectOrCreate?: BlogpostsCreateOrConnectWithoutSavedByInput[] | undefined;
    connect?: BlogpostsWhereUniqueInput[] | undefined;
}
