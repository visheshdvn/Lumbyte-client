import { AdminAccountCreateOrConnectWithoutUserInput } from "../inputs/AdminAccountCreateOrConnectWithoutUserInput";
import { AdminAccountCreateWithoutUserInput } from "../inputs/AdminAccountCreateWithoutUserInput";
import { AdminAccountWhereUniqueInput } from "../inputs/AdminAccountWhereUniqueInput";
export declare class AdminAccountCreateNestedOneWithoutUserInput {
    create?: AdminAccountCreateWithoutUserInput | undefined;
    connectOrCreate?: AdminAccountCreateOrConnectWithoutUserInput | undefined;
    connect?: AdminAccountWhereUniqueInput | undefined;
}
