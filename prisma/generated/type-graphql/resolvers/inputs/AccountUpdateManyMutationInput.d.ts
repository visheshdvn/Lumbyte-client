import { BoolFieldUpdateOperationsInput } from "../inputs/BoolFieldUpdateOperationsInput";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { NullableStringFieldUpdateOperationsInput } from "../inputs/NullableStringFieldUpdateOperationsInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
export declare class AccountUpdateManyMutationInput {
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
}
