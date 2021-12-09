import { AdminAccountCreateOrConnectWithoutUserInput } from "../inputs/AdminAccountCreateOrConnectWithoutUserInput";
import { AdminAccountCreateWithoutUserInput } from "../inputs/AdminAccountCreateWithoutUserInput";
import { AdminAccountUpdateWithoutUserInput } from "../inputs/AdminAccountUpdateWithoutUserInput";
import { AdminAccountUpsertWithoutUserInput } from "../inputs/AdminAccountUpsertWithoutUserInput";
import { AdminAccountWhereUniqueInput } from "../inputs/AdminAccountWhereUniqueInput";
export declare class AdminAccountUpdateOneWithoutUserInput {
    create?: AdminAccountCreateWithoutUserInput | undefined;
    connectOrCreate?: AdminAccountCreateOrConnectWithoutUserInput | undefined;
    upsert?: AdminAccountUpsertWithoutUserInput | undefined;
    disconnect?: boolean | undefined;
    delete?: boolean | undefined;
    connect?: AdminAccountWhereUniqueInput | undefined;
    update?: AdminAccountUpdateWithoutUserInput | undefined;
}
