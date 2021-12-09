import { GraphQLResolveInfo } from "graphql";
import { CreateBlogpostsArgs } from "./args/CreateBlogpostsArgs";
import { Blogposts } from "../../../models/Blogposts";
export declare class CreateBlogpostsResolver {
    createBlogposts(ctx: any, info: GraphQLResolveInfo, args: CreateBlogpostsArgs): Promise<Blogposts>;
}
