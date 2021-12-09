import { BoolFieldUpdateOperationsInput } from "../inputs/BoolFieldUpdateOperationsInput";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
import { UserUpdateOneRequiredWithoutAdminAccountInput } from "../inputs/UserUpdateOneRequiredWithoutAdminAccountInput";
export declare class AdminAccountUpdateInput {
    password?: StringFieldUpdateOperationsInput | undefined;
    created_at?: DateTimeFieldUpdateOperationsInput | undefined;
    upadted_at?: DateTimeFieldUpdateOperationsInput | undefined;
    restricted?: BoolFieldUpdateOperationsInput | undefined;
    user?: UserUpdateOneRequiredWithoutAdminAccountInput | undefined;
}
