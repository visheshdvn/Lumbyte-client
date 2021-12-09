import { AccountCreateOrConnectWithoutUserInput } from "../inputs/AccountCreateOrConnectWithoutUserInput";
import { AccountCreateWithoutUserInput } from "../inputs/AccountCreateWithoutUserInput";
import { AccountUpdateWithoutUserInput } from "../inputs/AccountUpdateWithoutUserInput";
import { AccountUpsertWithoutUserInput } from "../inputs/AccountUpsertWithoutUserInput";
import { AccountWhereUniqueInput } from "../inputs/AccountWhereUniqueInput";
export declare class AccountUpdateOneWithoutUserInput {
    create?: AccountCreateWithoutUserInput | undefined;
    connectOrCreate?: AccountCreateOrConnectWithoutUserInput | undefined;
    upsert?: AccountUpsertWithoutUserInput | undefined;
    disconnect?: boolean | undefined;
    delete?: boolean | undefined;
    connect?: AccountWhereUniqueInput | undefined;
    update?: AccountUpdateWithoutUserInput | undefined;
}
