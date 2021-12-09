import { AccountCountAggregate } from "../outputs/AccountCountAggregate";
import { AccountMaxAggregate } from "../outputs/AccountMaxAggregate";
import { AccountMinAggregate } from "../outputs/AccountMinAggregate";
export declare class AccountGroupBy {
    id: string;
    password: string;
    facebook: string | null;
    twitter: string | null;
    instagram: string | null;
    linkedin: string | null;
    github: string | null;
    behance: string | null;
    pintrest: string | null;
    eyeem: string | null;
    px365: string | null;
    userId: string;
    created_at: Date;
    upadted_at: Date;
    disabled: boolean;
    _count: AccountCountAggregate | null;
    _min: AccountMinAggregate | null;
    _max: AccountMaxAggregate | null;
}
