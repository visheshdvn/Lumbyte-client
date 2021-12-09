import { AdminAccount } from "../../../models/AdminAccount";
import { User } from "../../../models/User";
export declare class AdminAccountRelationsResolver {
    user(adminAccount: AdminAccount, ctx: any): Promise<User>;
}
