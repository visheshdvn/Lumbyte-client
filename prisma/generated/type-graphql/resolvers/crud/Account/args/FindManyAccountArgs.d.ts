import { AccountOrderByWithRelationInput } from "../../../inputs/AccountOrderByWithRelationInput";
import { AccountWhereInput } from "../../../inputs/AccountWhereInput";
import { AccountWhereUniqueInput } from "../../../inputs/AccountWhereUniqueInput";
export declare class FindManyAccountArgs {
    where?: AccountWhereInput | undefined;
    orderBy?: AccountOrderByWithRelationInput[] | undefined;
    cursor?: AccountWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
    distinct?: Array<"id" | "password" | "facebook" | "twitter" | "instagram" | "linkedin" | "github" | "behance" | "pintrest" | "eyeem" | "px365" | "userId" | "created_at" | "upadted_at" | "disabled"> | undefined;
}
