import { BoolFieldUpdateOperationsInput } from "../inputs/BoolFieldUpdateOperationsInput";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { NullableBoolFieldUpdateOperationsInput } from "../inputs/NullableBoolFieldUpdateOperationsInput";
import { NullableDateTimeFieldUpdateOperationsInput } from "../inputs/NullableDateTimeFieldUpdateOperationsInput";
import { NullableIntFieldUpdateOperationsInput } from "../inputs/NullableIntFieldUpdateOperationsInput";
import { NullableStringFieldUpdateOperationsInput } from "../inputs/NullableStringFieldUpdateOperationsInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
export declare class BlogpostsUpdateManyMutationInput {
    title?: StringFieldUpdateOperationsInput | undefined;
    slug?: StringFieldUpdateOperationsInput | undefined;
    metaDescription?: NullableStringFieldUpdateOperationsInput | undefined;
    excerpt?: NullableStringFieldUpdateOperationsInput | undefined;
    content?: NullableStringFieldUpdateOperationsInput | undefined;
    banner?: NullableStringFieldUpdateOperationsInput | undefined;
    banneralt?: NullableStringFieldUpdateOperationsInput | undefined;
    minuteRead?: NullableIntFieldUpdateOperationsInput | undefined;
    featured?: NullableBoolFieldUpdateOperationsInput | undefined;
    topPick?: NullableBoolFieldUpdateOperationsInput | undefined;
    date?: NullableDateTimeFieldUpdateOperationsInput | undefined;
    created_at?: DateTimeFieldUpdateOperationsInput | undefined;
    upadted_at?: DateTimeFieldUpdateOperationsInput | undefined;
    published_at?: NullableDateTimeFieldUpdateOperationsInput | undefined;
    published?: BoolFieldUpdateOperationsInput | undefined;
    blocked?: BoolFieldUpdateOperationsInput | undefined;
}
