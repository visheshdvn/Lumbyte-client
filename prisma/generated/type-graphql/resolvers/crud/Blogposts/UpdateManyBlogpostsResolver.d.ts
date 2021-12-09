import { GraphQLResolveInfo } from "graphql";
import { UpdateManyBlogpostsArgs } from "./args/UpdateManyBlogpostsArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class UpdateManyBlogpostsResolver {
    updateManyBlogposts(ctx: any, info: GraphQLResolveInfo, args: UpdateManyBlogpostsArgs): Promise<AffectedRowsOutput>;
}
