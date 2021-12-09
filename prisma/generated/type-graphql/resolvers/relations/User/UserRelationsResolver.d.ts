import { Account } from "../../../models/Account";
import { AdminAccount } from "../../../models/AdminAccount";
import { Blogposts } from "../../../models/Blogposts";
import { User } from "../../../models/User";
import { UserBlogpostsArgs } from "./args/UserBlogpostsArgs";
export declare class UserRelationsResolver {
    blogposts(user: User, ctx: any, args: UserBlogpostsArgs): Promise<Blogposts[]>;
    publicAccount(user: User, ctx: any): Promise<Account | null>;
    adminAccount(user: User, ctx: any): Promise<AdminAccount | null>;
}
