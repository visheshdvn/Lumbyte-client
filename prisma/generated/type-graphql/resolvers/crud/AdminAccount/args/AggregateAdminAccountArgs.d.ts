import { AdminAccountOrderByWithRelationInput } from "../../../inputs/AdminAccountOrderByWithRelationInput";
import { AdminAccountWhereInput } from "../../../inputs/AdminAccountWhereInput";
import { AdminAccountWhereUniqueInput } from "../../../inputs/AdminAccountWhereUniqueInput";
export declare class AggregateAdminAccountArgs {
    where?: AdminAccountWhereInput | undefined;
    orderBy?: AdminAccountOrderByWithRelationInput[] | undefined;
    cursor?: AdminAccountWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
