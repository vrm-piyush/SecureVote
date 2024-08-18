// Phone Field Class

import { FIELD_CONFIGS } from "../../constants";
import {
  isPossiblePhoneNumber,
  isValidPhoneNumber,
} from "react-phone-number-input";

class PhoneField extends Field {
  constructor(phone = "") {
    super(phone);
  }
  validate() {
    if (this.value > FIELD_CONFIGS.phone.validationThreshold) {
      if (
        !isValidPhoneNumber(this.value) &&
        isPossiblePhoneNumber(this.value)
      ) {
        this.setError(FIELD_CONFIGS.phone.errorMessage);
      } else {
        this.clearError();
      }
    }
  }
}

export default PhoneField;
