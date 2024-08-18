// Email Field Class

import { FIELD_CONFIGS } from "../../constants";

class EmailField extends Field {
  constructor(value = "") {
    super(value);
    this.regex = FIELD_CONFIGS.email.regex;
  }

  validate() {
    if (!this.regex.test(this.value)) {
      this.setError(FIELD_CONFIGS.email.errorMessage);
    } else {
      this.clearError();
    }
  }
}

export default EmailField;
