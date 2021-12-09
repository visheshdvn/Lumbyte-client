import { AdminAccountAvgAggregate } from "../outputs/AdminAccountAvgAggregate";
import { AdminAccountCountAggregate } from "../outputs/AdminAccountCountAggregate";
import { AdminAccountMaxAggregate } from "../outputs/AdminAccountMaxAggregate";
import { AdminAccountMinAggregate } from "../outputs/AdminAccountMinAggregate";
import { AdminAccountSumAggregate } from "../outputs/AdminAccountSumAggregate";
export declare class AdminAccountGroupBy {
    id: number;
    password: string;
    userId: string;
    created_at: Date;
    upadted_at: Date;
    restricted: boolean;
    _count: AdminAccountCountAggregate | null;
    _avg: AdminAccountAvgAggregate | null;
    _sum: AdminAccountSumAggregate | null;
    _min: AdminAccountMinAggregate | null;
    _max: AdminAccountMaxAggregate | null;
}
