import { UserCreateNestedOneWithoutPublicAccountInput } from "../inputs/UserCreateNestedOneWithoutPublicAccountInput";
export declare class AccountCreateWithoutSavedPostsInput {
    id?: string | undefined;
    password: string;
    facebook?: string | undefined;
    twitter?: string | undefined;
    instagram?: string | undefined;
    linkedin?: string | undefined;
    github?: string | undefined;
    behance?: string | undefined;
    pintrest?: string | undefined;
    eyeem?: string | undefined;
    px365?: string | undefined;
    created_at?: Date | undefined;
    upadted_at?: Date | undefined;
    disabled?: boolean | undefined;
    user: UserCreateNestedOneWithoutPublicAccountInput;
}
