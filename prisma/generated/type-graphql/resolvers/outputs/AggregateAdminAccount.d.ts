import { AdminAccountAvgAggregate } from "../outputs/AdminAccountAvgAggregate";
import { AdminAccountCountAggregate } from "../outputs/AdminAccountCountAggregate";
import { AdminAccountMaxAggregate } from "../outputs/AdminAccountMaxAggregate";
import { AdminAccountMinAggregate } from "../outputs/AdminAccountMinAggregate";
import { AdminAccountSumAggregate } from "../outputs/AdminAccountSumAggregate";
export declare class AggregateAdminAccount {
    _count: AdminAccountCountAggregate | null;
    _avg: AdminAccountAvgAggregate | null;
    _sum: AdminAccountSumAggregate | null;
    _min: AdminAccountMinAggregate | null;
    _max: AdminAccountMaxAggregate | null;
}
