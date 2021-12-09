import { GraphQLResolveInfo } from "graphql";
import { FindManyBlogpostsArgs } from "./args/FindManyBlogpostsArgs";
import { Blogposts } from "../../../models/Blogposts";
export declare class FindManyBlogpostsResolver {
    findManyBlogposts(ctx: any, info: GraphQLResolveInfo, args: FindManyBlogpostsArgs): Promise<Blogposts[]>;
}
