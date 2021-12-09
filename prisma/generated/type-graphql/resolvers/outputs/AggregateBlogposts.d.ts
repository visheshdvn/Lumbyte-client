import { BlogpostsAvgAggregate } from "../outputs/BlogpostsAvgAggregate";
import { BlogpostsCountAggregate } from "../outputs/BlogpostsCountAggregate";
import { BlogpostsMaxAggregate } from "../outputs/BlogpostsMaxAggregate";
import { BlogpostsMinAggregate } from "../outputs/BlogpostsMinAggregate";
import { BlogpostsSumAggregate } from "../outputs/BlogpostsSumAggregate";
export declare class AggregateBlogposts {
    _count: BlogpostsCountAggregate | null;
    _avg: BlogpostsAvgAggregate | null;
    _sum: BlogpostsSumAggregate | null;
    _min: BlogpostsMinAggregate | null;
    _max: BlogpostsMaxAggregate | null;
}
