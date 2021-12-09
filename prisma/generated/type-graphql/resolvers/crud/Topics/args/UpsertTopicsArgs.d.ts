import { TopicsCreateInput } from "../../../inputs/TopicsCreateInput";
import { TopicsUpdateInput } from "../../../inputs/TopicsUpdateInput";
import { TopicsWhereUniqueInput } from "../../../inputs/TopicsWhereUniqueInput";
export declare class UpsertTopicsArgs {
    where: TopicsWhereUniqueInput;
    create: TopicsCreateInput;
    update: TopicsUpdateInput;
}
