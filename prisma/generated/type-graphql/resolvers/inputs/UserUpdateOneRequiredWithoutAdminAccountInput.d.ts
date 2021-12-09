import { UserCreateOrConnectWithoutAdminAccountInput } from "../inputs/UserCreateOrConnectWithoutAdminAccountInput";
import { UserCreateWithoutAdminAccountInput } from "../inputs/UserCreateWithoutAdminAccountInput";
import { UserUpdateWithoutAdminAccountInput } from "../inputs/UserUpdateWithoutAdminAccountInput";
import { UserUpsertWithoutAdminAccountInput } from "../inputs/UserUpsertWithoutAdminAccountInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";
export declare class UserUpdateOneRequiredWithoutAdminAccountInput {
    create?: UserCreateWithoutAdminAccountInput | undefined;
    connectOrCreate?: UserCreateOrConnectWithoutAdminAccountInput | undefined;
    upsert?: UserUpsertWithoutAdminAccountInput | undefined;
    connect?: UserWhereUniqueInput | undefined;
    update?: UserUpdateWithoutAdminAccountInput | undefined;
}
