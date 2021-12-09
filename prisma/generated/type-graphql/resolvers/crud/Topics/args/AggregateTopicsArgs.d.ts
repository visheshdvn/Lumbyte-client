import { TopicsOrderByWithRelationInput } from "../../../inputs/TopicsOrderByWithRelationInput";
import { TopicsWhereInput } from "../../../inputs/TopicsWhereInput";
import { TopicsWhereUniqueInput } from "../../../inputs/TopicsWhereUniqueInput";
export declare class AggregateTopicsArgs {
    where?: TopicsWhereInput | undefined;
    orderBy?: TopicsOrderByWithRelationInput[] | undefined;
    cursor?: TopicsWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
