import { BlogpostsOrderByWithRelationInput } from "../../../inputs/BlogpostsOrderByWithRelationInput";
import { BlogpostsWhereInput } from "../../../inputs/BlogpostsWhereInput";
import { BlogpostsWhereUniqueInput } from "../../../inputs/BlogpostsWhereUniqueInput";
export declare class AggregateBlogpostsArgs {
    where?: BlogpostsWhereInput | undefined;
    orderBy?: BlogpostsOrderByWithRelationInput[] | undefined;
    cursor?: BlogpostsWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
