import { AccountCreateOrConnectWithoutSavedPostsInput } from "../inputs/AccountCreateOrConnectWithoutSavedPostsInput";
import { AccountCreateWithoutSavedPostsInput } from "../inputs/AccountCreateWithoutSavedPostsInput";
import { AccountScalarWhereInput } from "../inputs/AccountScalarWhereInput";
import { AccountUpdateManyWithWhereWithoutSavedPostsInput } from "../inputs/AccountUpdateManyWithWhereWithoutSavedPostsInput";
import { AccountUpdateWithWhereUniqueWithoutSavedPostsInput } from "../inputs/AccountUpdateWithWhereUniqueWithoutSavedPostsInput";
import { AccountUpsertWithWhereUniqueWithoutSavedPostsInput } from "../inputs/AccountUpsertWithWhereUniqueWithoutSavedPostsInput";
import { AccountWhereUniqueInput } from "../inputs/AccountWhereUniqueInput";
export declare class AccountUpdateManyWithoutSavedPostsInput {
    create?: AccountCreateWithoutSavedPostsInput[] | undefined;
    connectOrCreate?: AccountCreateOrConnectWithoutSavedPostsInput[] | undefined;
    upsert?: AccountUpsertWithWhereUniqueWithoutSavedPostsInput[] | undefined;
    set?: AccountWhereUniqueInput[] | undefined;
    disconnect?: AccountWhereUniqueInput[] | undefined;
    delete?: AccountWhereUniqueInput[] | undefined;
    connect?: AccountWhereUniqueInput[] | undefined;
    update?: AccountUpdateWithWhereUniqueWithoutSavedPostsInput[] | undefined;
    updateMany?: AccountUpdateManyWithWhereWithoutSavedPostsInput[] | undefined;
    deleteMany?: AccountScalarWhereInput[] | undefined;
}
