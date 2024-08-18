// Organization Field Class

import { FIELD_CONFIGS } from "../../constants";

class OrganizationField extends Field {
  constructor(value = "") {
    super(value);
    this.minLength = FIELD_CONFIGS.organization.minLength;
    this.maxLength = FIELD_CONFIGS.organization.maxLength;
    this.regex = FIELD_CONFIGS.organization.regex;
  }

  validate() {
    const length = this.value.length;

    if (length < this.minLength) {
      this.setError(
        `Organization name must be at least ${this.minLength} characters long`
      );
    } else if (length > this.maxLength) {
      this.setError(
        `Organization name must be at most ${this.maxLength} characters long`
      );
    } else if (!this.regex.test(this.value)) {
      this.setError(FIELD_CONFIGS.organization.errorMessage);
    } else {
      this.clearError();
    }
  }
}

export default OrganizationField;
