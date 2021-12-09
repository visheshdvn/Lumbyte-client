import { UserCreateOrConnectWithoutPublicAccountInput } from "../inputs/UserCreateOrConnectWithoutPublicAccountInput";
import { UserCreateWithoutPublicAccountInput } from "../inputs/UserCreateWithoutPublicAccountInput";
import { UserUpdateWithoutPublicAccountInput } from "../inputs/UserUpdateWithoutPublicAccountInput";
import { UserUpsertWithoutPublicAccountInput } from "../inputs/UserUpsertWithoutPublicAccountInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";
export declare class UserUpdateOneRequiredWithoutPublicAccountInput {
    create?: UserCreateWithoutPublicAccountInput | undefined;
    connectOrCreate?: UserCreateOrConnectWithoutPublicAccountInput | undefined;
    upsert?: UserUpsertWithoutPublicAccountInput | undefined;
    connect?: UserWhereUniqueInput | undefined;
    update?: UserUpdateWithoutPublicAccountInput | undefined;
}
