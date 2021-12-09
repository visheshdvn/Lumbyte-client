import { GraphQLResolveInfo } from "graphql";
import { DeleteManyBlogpostsArgs } from "./args/DeleteManyBlogpostsArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class DeleteManyBlogpostsResolver {
    deleteManyBlogposts(ctx: any, info: GraphQLResolveInfo, args: DeleteManyBlogpostsArgs): Promise<AffectedRowsOutput>;
}
