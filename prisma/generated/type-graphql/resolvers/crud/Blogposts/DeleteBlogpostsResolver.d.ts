import { GraphQLResolveInfo } from "graphql";
import { DeleteBlogpostsArgs } from "./args/DeleteBlogpostsArgs";
import { Blogposts } from "../../../models/Blogposts";
export declare class DeleteBlogpostsResolver {
    deleteBlogposts(ctx: any, info: GraphQLResolveInfo, args: DeleteBlogpostsArgs): Promise<Blogposts | null>;
}
