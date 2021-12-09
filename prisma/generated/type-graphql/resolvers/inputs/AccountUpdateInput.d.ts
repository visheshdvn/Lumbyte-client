import { BlogpostsUpdateManyWithoutSavedByInput } from "../inputs/BlogpostsUpdateManyWithoutSavedByInput";
import { BoolFieldUpdateOperationsInput } from "../inputs/BoolFieldUpdateOperationsInput";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { NullableStringFieldUpdateOperationsInput } from "../inputs/NullableStringFieldUpdateOperationsInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
import { UserUpdateOneRequiredWithoutPublicAccountInput } from "../inputs/UserUpdateOneRequiredWithoutPublicAccountInput";
export declare class AccountUpdateInput {
    id?: StringFieldUpdateOperationsInput | undefined;
    password?: StringFieldUpdateOperationsInput | undefined;
    facebook?: NullableStringFieldUpdateOperationsInput | undefined;
    twitter?: NullableStringFieldUpdateOperationsInput | undefined;
    instagram?: NullableStringFieldUpdateOperationsInput | undefined;
    linkedin?: NullableStringFieldUpdateOperationsInput | undefined;
    github?: NullableStringFieldUpdateOperationsInput | undefined;
    behance?: NullableStringFieldUpdateOperationsInput | undefined;
    pintrest?: NullableStringFieldUpdateOperationsInput | undefined;
    eyeem?: NullableStringFieldUpdateOperationsInput | undefined;
    px365?: NullableStringFieldUpdateOperationsInput | undefined;
    created_at?: DateTimeFieldUpdateOperationsInput | undefined;
    upadted_at?: DateTimeFieldUpdateOperationsInput | undefined;
    disabled?: BoolFieldUpdateOperationsInput | undefined;
    user?: UserUpdateOneRequiredWithoutPublicAccountInput | undefined;
    savedPosts?: BlogpostsUpdateManyWithoutSavedByInput | undefined;
}
