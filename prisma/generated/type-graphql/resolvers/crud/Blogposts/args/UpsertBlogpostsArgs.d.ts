import { BlogpostsCreateInput } from "../../../inputs/BlogpostsCreateInput";
import { BlogpostsUpdateInput } from "../../../inputs/BlogpostsUpdateInput";
import { BlogpostsWhereUniqueInput } from "../../../inputs/BlogpostsWhereUniqueInput";
export declare class UpsertBlogpostsArgs {
    where: BlogpostsWhereUniqueInput;
    create: BlogpostsCreateInput;
    update: BlogpostsUpdateInput;
}
