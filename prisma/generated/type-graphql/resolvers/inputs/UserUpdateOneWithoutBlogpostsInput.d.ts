import { UserCreateOrConnectWithoutBlogpostsInput } from "../inputs/UserCreateOrConnectWithoutBlogpostsInput";
import { UserCreateWithoutBlogpostsInput } from "../inputs/UserCreateWithoutBlogpostsInput";
import { UserUpdateWithoutBlogpostsInput } from "../inputs/UserUpdateWithoutBlogpostsInput";
import { UserUpsertWithoutBlogpostsInput } from "../inputs/UserUpsertWithoutBlogpostsInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";
export declare class UserUpdateOneWithoutBlogpostsInput {
    create?: UserCreateWithoutBlogpostsInput | undefined;
    connectOrCreate?: UserCreateOrConnectWithoutBlogpostsInput | undefined;
    upsert?: UserUpsertWithoutBlogpostsInput | undefined;
    disconnect?: boolean | undefined;
    delete?: boolean | undefined;
    connect?: UserWhereUniqueInput | undefined;
    update?: UserUpdateWithoutBlogpostsInput | undefined;
}
