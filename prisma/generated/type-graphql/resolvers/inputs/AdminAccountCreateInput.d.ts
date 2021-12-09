import { UserCreateNestedOneWithoutAdminAccountInput } from "../inputs/UserCreateNestedOneWithoutAdminAccountInput";
export declare class AdminAccountCreateInput {
    password: string;
    created_at?: Date | undefined;
    upadted_at?: Date | undefined;
    restricted?: boolean | undefined;
    user: UserCreateNestedOneWithoutAdminAccountInput;
}
