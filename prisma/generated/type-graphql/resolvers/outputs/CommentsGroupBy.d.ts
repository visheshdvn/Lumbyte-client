import { CommentsAvgAggregate } from "../outputs/CommentsAvgAggregate";
import { CommentsCountAggregate } from "../outputs/CommentsCountAggregate";
import { CommentsMaxAggregate } from "../outputs/CommentsMaxAggregate";
import { CommentsMinAggregate } from "../outputs/CommentsMinAggregate";
import { CommentsSumAggregate } from "../outputs/CommentsSumAggregate";
export declare class CommentsGroupBy {
    id: number;
    content: string;
    created_at: Date;
    upadted_at: Date;
    _count: CommentsCountAggregate | null;
    _avg: CommentsAvgAggregate | null;
    _sum: CommentsSumAggregate | null;
    _min: CommentsMinAggregate | null;
    _max: CommentsMaxAggregate | null;
}
