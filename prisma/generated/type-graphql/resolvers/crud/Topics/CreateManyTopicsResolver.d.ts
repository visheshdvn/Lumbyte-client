import { GraphQLResolveInfo } from "graphql";
import { CreateManyTopicsArgs } from "./args/CreateManyTopicsArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class CreateManyTopicsResolver {
    createManyTopics(ctx: any, info: GraphQLResolveInfo, args: CreateManyTopicsArgs): Promise<AffectedRowsOutput>;
}
