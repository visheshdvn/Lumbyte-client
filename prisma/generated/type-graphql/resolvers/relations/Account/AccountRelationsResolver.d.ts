import { Account } from "../../../models/Account";
import { Blogposts } from "../../../models/Blogposts";
import { User } from "../../../models/User";
import { AccountSavedPostsArgs } from "./args/AccountSavedPostsArgs";
export declare class AccountRelationsResolver {
    user(account: Account, ctx: any): Promise<User>;
    savedPosts(account: Account, ctx: any, args: AccountSavedPostsArgs): Promise<Blogposts[]>;
}
