import { GraphQLResolveInfo } from "graphql";
import { UpsertBlogpostsArgs } from "./args/UpsertBlogpostsArgs";
import { Blogposts } from "../../../models/Blogposts";
export declare class UpsertBlogpostsResolver {
    upsertBlogposts(ctx: any, info: GraphQLResolveInfo, args: UpsertBlogpostsArgs): Promise<Blogposts>;
}
