import { GraphQLResolveInfo } from "graphql";
import { CreateManyBlogpostsArgs } from "./args/CreateManyBlogpostsArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class CreateManyBlogpostsResolver {
    createManyBlogposts(ctx: any, info: GraphQLResolveInfo, args: CreateManyBlogpostsArgs): Promise<AffectedRowsOutput>;
}
