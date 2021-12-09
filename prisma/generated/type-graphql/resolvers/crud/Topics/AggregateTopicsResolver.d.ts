import { GraphQLResolveInfo } from "graphql";
import { AggregateTopicsArgs } from "./args/AggregateTopicsArgs";
import { AggregateTopics } from "../../outputs/AggregateTopics";
export declare class AggregateTopicsResolver {
    aggregateTopics(ctx: any, info: GraphQLResolveInfo, args: AggregateTopicsArgs): Promise<AggregateTopics>;
}
