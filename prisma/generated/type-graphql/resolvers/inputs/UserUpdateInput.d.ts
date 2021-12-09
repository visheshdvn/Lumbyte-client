import { AccountUpdateOneWithoutUserInput } from "../inputs/AccountUpdateOneWithoutUserInput";
import { AdminAccountUpdateOneWithoutUserInput } from "../inputs/AdminAccountUpdateOneWithoutUserInput";
import { BlogpostsUpdateManyWithoutAuthorInput } from "../inputs/BlogpostsUpdateManyWithoutAuthorInput";
import { BoolFieldUpdateOperationsInput } from "../inputs/BoolFieldUpdateOperationsInput";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { NullableStringFieldUpdateOperationsInput } from "../inputs/NullableStringFieldUpdateOperationsInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
export declare class UserUpdateInput {
    id?: StringFieldUpdateOperationsInput | undefined;
    firstname?: StringFieldUpdateOperationsInput | undefined;
    lastname?: NullableStringFieldUpdateOperationsInput | undefined;
    username?: StringFieldUpdateOperationsInput | undefined;
    about?: NullableStringFieldUpdateOperationsInput | undefined;
    dp?: NullableStringFieldUpdateOperationsInput | undefined;
    dpalt?: NullableStringFieldUpdateOperationsInput | undefined;
    email?: StringFieldUpdateOperationsInput | undefined;
    phone?: NullableStringFieldUpdateOperationsInput | undefined;
    role?: StringFieldUpdateOperationsInput | undefined;
    created_at?: DateTimeFieldUpdateOperationsInput | undefined;
    upadted_at?: DateTimeFieldUpdateOperationsInput | undefined;
    adminGrant?: BoolFieldUpdateOperationsInput | undefined;
    blogposts?: BlogpostsUpdateManyWithoutAuthorInput | undefined;
    publicAccount?: AccountUpdateOneWithoutUserInput | undefined;
    adminAccount?: AdminAccountUpdateOneWithoutUserInput | undefined;
}
