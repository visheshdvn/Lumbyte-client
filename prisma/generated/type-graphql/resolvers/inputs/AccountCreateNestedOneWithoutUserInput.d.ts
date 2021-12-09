import { AccountCreateOrConnectWithoutUserInput } from "../inputs/AccountCreateOrConnectWithoutUserInput";
import { AccountCreateWithoutUserInput } from "../inputs/AccountCreateWithoutUserInput";
import { AccountWhereUniqueInput } from "../inputs/AccountWhereUniqueInput";
export declare class AccountCreateNestedOneWithoutUserInput {
    create?: AccountCreateWithoutUserInput | undefined;
    connectOrCreate?: AccountCreateOrConnectWithoutUserInput | undefined;
    connect?: AccountWhereUniqueInput | undefined;
}
