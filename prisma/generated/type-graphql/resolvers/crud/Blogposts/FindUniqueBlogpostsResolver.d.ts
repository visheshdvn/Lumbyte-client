import { GraphQLResolveInfo } from "graphql";
import { FindUniqueBlogpostsArgs } from "./args/FindUniqueBlogpostsArgs";
import { Blogposts } from "../../../models/Blogposts";
export declare class FindUniqueBlogpostsResolver {
    findUniqueBlogposts(ctx: any, info: GraphQLResolveInfo, args: FindUniqueBlogpostsArgs): Promise<Blogposts | null>;
}
