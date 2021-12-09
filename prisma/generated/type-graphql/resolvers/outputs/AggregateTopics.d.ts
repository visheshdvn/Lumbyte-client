import { TopicsAvgAggregate } from "../outputs/TopicsAvgAggregate";
import { TopicsCountAggregate } from "../outputs/TopicsCountAggregate";
import { TopicsMaxAggregate } from "../outputs/TopicsMaxAggregate";
import { TopicsMinAggregate } from "../outputs/TopicsMinAggregate";
import { TopicsSumAggregate } from "../outputs/TopicsSumAggregate";
export declare class AggregateTopics {
    _count: TopicsCountAggregate | null;
    _avg: TopicsAvgAggregate | null;
    _sum: TopicsSumAggregate | null;
    _min: TopicsMinAggregate | null;
    _max: TopicsMaxAggregate | null;
}
