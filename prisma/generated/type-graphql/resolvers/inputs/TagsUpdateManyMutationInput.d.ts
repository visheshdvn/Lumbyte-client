import { BoolFieldUpdateOperationsInput } from "../inputs/BoolFieldUpdateOperationsInput";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { NullableDateTimeFieldUpdateOperationsInput } from "../inputs/NullableDateTimeFieldUpdateOperationsInput";
import { NullableStringFieldUpdateOperationsInput } from "../inputs/NullableStringFieldUpdateOperationsInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
export declare class TagsUpdateManyMutationInput {
    tagname?: StringFieldUpdateOperationsInput | undefined;
    color?: NullableStringFieldUpdateOperationsInput | undefined;
    metaDescription?: NullableStringFieldUpdateOperationsInput | undefined;
    ogimg?: NullableStringFieldUpdateOperationsInput | undefined;
    ogalt?: NullableStringFieldUpdateOperationsInput | undefined;
    created_at?: DateTimeFieldUpdateOperationsInput | undefined;
    upadted_at?: DateTimeFieldUpdateOperationsInput | undefined;
    published_at?: NullableDateTimeFieldUpdateOperationsInput | undefined;
    published?: BoolFieldUpdateOperationsInput | undefined;
}
