import { Account } from "../models/Account";
import { AdminAccount } from "../models/AdminAccount";
import { Blogposts } from "../models/Blogposts";
import { UserCount } from "../resolvers/outputs/UserCount";
export declare class User {
    id: string;
    firstname: string;
    lastname?: string | null;
    username: string;
    about?: string | null;
    dp?: string | null;
    dpalt?: string | null;
    email: string;
    phone?: string | null;
    role: string;
    blogposts?: Blogposts[];
    publicAccount?: Account | null;
    adminAccount?: AdminAccount | null;
    created_at: Date;
    upadted_at: Date;
    adminGrant: boolean;
    _count?: UserCount | null;
}
