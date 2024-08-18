// Asset Field Class

import { FIELD_CONFIGS } from "../../constants";

class AssetField extends Field {
  constructor(value = "") {
    super(value);
    this.minLength = FIELD_CONFIGS.asset.minLength;
    this.maxLength = FIELD_CONFIGS.asset.maxLength;
  }

  validate() {
    const length = this.value.length;

    if (length < this.minLength || length > this.maxLength) {
      this.setError(
        `Asset name must be between ${this.minLength} and ${this.maxLength} characters long`
      );
    } else {
      this.clearError();
    }
  }
}
