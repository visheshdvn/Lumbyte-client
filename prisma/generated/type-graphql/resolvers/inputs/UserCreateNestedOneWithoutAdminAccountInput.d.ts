import { UserCreateOrConnectWithoutAdminAccountInput } from "../inputs/UserCreateOrConnectWithoutAdminAccountInput";
import { UserCreateWithoutAdminAccountInput } from "../inputs/UserCreateWithoutAdminAccountInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";
export declare class UserCreateNestedOneWithoutAdminAccountInput {
    create?: UserCreateWithoutAdminAccountInput | undefined;
    connectOrCreate?: UserCreateOrConnectWithoutAdminAccountInput | undefined;
    connect?: UserWhereUniqueInput | undefined;
}
