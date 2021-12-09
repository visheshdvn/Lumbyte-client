import { TagsAvgAggregate } from "../outputs/TagsAvgAggregate";
import { TagsCountAggregate } from "../outputs/TagsCountAggregate";
import { TagsMaxAggregate } from "../outputs/TagsMaxAggregate";
import { TagsMinAggregate } from "../outputs/TagsMinAggregate";
import { TagsSumAggregate } from "../outputs/TagsSumAggregate";
export declare class TagsGroupBy {
    id: number;
    tagname: string;
    color: string | null;
    metaDescription: string | null;
    ogimg: string | null;
    ogalt: string | null;
    created_at: Date;
    upadted_at: Date;
    published_at: Date | null;
    published: boolean;
    _count: TagsCountAggregate | null;
    _avg: TagsAvgAggregate | null;
    _sum: TagsSumAggregate | null;
    _min: TagsMinAggregate | null;
    _max: TagsMaxAggregate | null;
}
