import { Blogposts } from "../models/Blogposts";
import { User } from "../models/User";
import { AccountCount } from "../resolvers/outputs/AccountCount";
export declare class Account {
    id: string;
    password: string;
    facebook?: string | null;
    twitter?: string | null;
    instagram?: string | null;
    linkedin?: string | null;
    github?: string | null;
    behance?: string | null;
    pintrest?: string | null;
    eyeem?: string | null;
    px365?: string | null;
    user?: User;
    userId: string;
    savedPosts?: Blogposts[];
    created_at: Date;
    upadted_at: Date;
    disabled: boolean;
    _count?: AccountCount | null;
}
