import { GraphQLResolveInfo } from "graphql";
import { AggregateAdminAccountArgs } from "./args/AggregateAdminAccountArgs";
import { AggregateAdminAccount } from "../../outputs/AggregateAdminAccount";
export declare class AggregateAdminAccountResolver {
    aggregateAdminAccount(ctx: any, info: GraphQLResolveInfo, args: AggregateAdminAccountArgs): Promise<AggregateAdminAccount>;
}
