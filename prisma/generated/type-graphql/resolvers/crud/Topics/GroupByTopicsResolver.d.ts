import { GraphQLResolveInfo } from "graphql";
import { GroupByTopicsArgs } from "./args/GroupByTopicsArgs";
import { TopicsGroupBy } from "../../outputs/TopicsGroupBy";
export declare class GroupByTopicsResolver {
    groupByTopics(ctx: any, info: GraphQLResolveInfo, args: GroupByTopicsArgs): Promise<TopicsGroupBy[]>;
}
