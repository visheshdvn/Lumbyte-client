import { GraphQLResolveInfo } from "graphql";
import { GroupByBlogpostsArgs } from "./args/GroupByBlogpostsArgs";
import { BlogpostsGroupBy } from "../../outputs/BlogpostsGroupBy";
export declare class GroupByBlogpostsResolver {
    groupByBlogposts(ctx: any, info: GraphQLResolveInfo, args: GroupByBlogpostsArgs): Promise<BlogpostsGroupBy[]>;
}
