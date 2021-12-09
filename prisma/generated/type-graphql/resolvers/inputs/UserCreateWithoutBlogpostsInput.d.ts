import { AccountCreateNestedOneWithoutUserInput } from "../inputs/AccountCreateNestedOneWithoutUserInput";
import { AdminAccountCreateNestedOneWithoutUserInput } from "../inputs/AdminAccountCreateNestedOneWithoutUserInput";
export declare class UserCreateWithoutBlogpostsInput {
    id?: string | undefined;
    firstname: string;
    lastname?: string | undefined;
    username: string;
    about?: string | undefined;
    dp?: string | undefined;
    dpalt?: string | undefined;
    email: string;
    phone?: string | undefined;
    role?: string | undefined;
    created_at?: Date | undefined;
    upadted_at?: Date | undefined;
    adminGrant?: boolean | undefined;
    publicAccount?: AccountCreateNestedOneWithoutUserInput | undefined;
    adminAccount?: AdminAccountCreateNestedOneWithoutUserInput | undefined;
}
