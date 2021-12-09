import { Account } from "../../../models/Account";
import { Blogposts } from "../../../models/Blogposts";
import { Tags } from "../../../models/Tags";
import { Topics } from "../../../models/Topics";
import { User } from "../../../models/User";
import { BlogpostsSavedByArgs } from "./args/BlogpostsSavedByArgs";
import { BlogpostsTagsArgs } from "./args/BlogpostsTagsArgs";
export declare class BlogpostsRelationsResolver {
    author(blogposts: Blogposts, ctx: any): Promise<User | null>;
    topics(blogposts: Blogposts, ctx: any): Promise<Topics | null>;
    tags(blogposts: Blogposts, ctx: any, args: BlogpostsTagsArgs): Promise<Tags[]>;
    savedBy(blogposts: Blogposts, ctx: any, args: BlogpostsSavedByArgs): Promise<Account[]>;
}
