import { UserCreateOrConnectWithoutBlogpostsInput } from "../inputs/UserCreateOrConnectWithoutBlogpostsInput";
import { UserCreateWithoutBlogpostsInput } from "../inputs/UserCreateWithoutBlogpostsInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";
export declare class UserCreateNestedOneWithoutBlogpostsInput {
    create?: UserCreateWithoutBlogpostsInput | undefined;
    connectOrCreate?: UserCreateOrConnectWithoutBlogpostsInput | undefined;
    connect?: UserWhereUniqueInput | undefined;
}
