import { GraphQLResolveInfo } from "graphql";
import { AggregateBlogpostsArgs } from "./args/AggregateBlogpostsArgs";
import { AggregateBlogposts } from "../../outputs/AggregateBlogposts";
export declare class AggregateBlogpostsResolver {
    aggregateBlogposts(ctx: any, info: GraphQLResolveInfo, args: AggregateBlogpostsArgs): Promise<AggregateBlogposts>;
}
