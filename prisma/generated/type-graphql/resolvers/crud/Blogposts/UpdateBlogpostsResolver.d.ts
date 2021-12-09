import { GraphQLResolveInfo } from "graphql";
import { UpdateBlogpostsArgs } from "./args/UpdateBlogpostsArgs";
import { Blogposts } from "../../../models/Blogposts";
export declare class UpdateBlogpostsResolver {
    updateBlogposts(ctx: any, info: GraphQLResolveInfo, args: UpdateBlogpostsArgs): Promise<Blogposts | null>;
}
