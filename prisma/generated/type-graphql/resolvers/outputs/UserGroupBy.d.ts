import { UserCountAggregate } from "../outputs/UserCountAggregate";
import { UserMaxAggregate } from "../outputs/UserMaxAggregate";
import { UserMinAggregate } from "../outputs/UserMinAggregate";
export declare class UserGroupBy {
    id: string;
    firstname: string;
    lastname: string | null;
    username: string;
    about: string | null;
    dp: string | null;
    dpalt: string | null;
    email: string;
    phone: string | null;
    role: string;
    created_at: Date;
    upadted_at: Date;
    adminGrant: boolean;
    _count: UserCountAggregate | null;
    _min: UserMinAggregate | null;
    _max: UserMaxAggregate | null;
}
