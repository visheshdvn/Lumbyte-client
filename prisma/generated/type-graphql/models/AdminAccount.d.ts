import { User } from "../models/User";
export declare class AdminAccount {
    id: number;
    password: string;
    user?: User;
    userId: string;
    created_at: Date;
    upadted_at: Date;
    restricted: boolean;
}
