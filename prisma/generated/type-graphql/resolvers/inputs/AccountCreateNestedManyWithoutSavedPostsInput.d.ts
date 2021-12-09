import { AccountCreateOrConnectWithoutSavedPostsInput } from "../inputs/AccountCreateOrConnectWithoutSavedPostsInput";
import { AccountCreateWithoutSavedPostsInput } from "../inputs/AccountCreateWithoutSavedPostsInput";
import { AccountWhereUniqueInput } from "../inputs/AccountWhereUniqueInput";
export declare class AccountCreateNestedManyWithoutSavedPostsInput {
    create?: AccountCreateWithoutSavedPostsInput[] | undefined;
    connectOrCreate?: AccountCreateOrConnectWithoutSavedPostsInput[] | undefined;
    connect?: AccountWhereUniqueInput[] | undefined;
}
