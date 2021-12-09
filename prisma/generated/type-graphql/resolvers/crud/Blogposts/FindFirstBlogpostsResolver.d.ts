import { GraphQLResolveInfo } from "graphql";
import { FindFirstBlogpostsArgs } from "./args/FindFirstBlogpostsArgs";
import { Blogposts } from "../../../models/Blogposts";
export declare class FindFirstBlogpostsResolver {
    findFirstBlogposts(ctx: any, info: GraphQLResolveInfo, args: FindFirstBlogpostsArgs): Promise<Blogposts | null>;
}
