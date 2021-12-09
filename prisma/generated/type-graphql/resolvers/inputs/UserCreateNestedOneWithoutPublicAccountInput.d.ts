import { UserCreateOrConnectWithoutPublicAccountInput } from "../inputs/UserCreateOrConnectWithoutPublicAccountInput";
import { UserCreateWithoutPublicAccountInput } from "../inputs/UserCreateWithoutPublicAccountInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";
export declare class UserCreateNestedOneWithoutPublicAccountInput {
    create?: UserCreateWithoutPublicAccountInput | undefined;
    connectOrCreate?: UserCreateOrConnectWithoutPublicAccountInput | undefined;
    connect?: UserWhereUniqueInput | undefined;
}
