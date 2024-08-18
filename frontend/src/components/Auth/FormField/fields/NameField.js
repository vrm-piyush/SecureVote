// Name Field Class

import { FIELD_CONFIGS } from "../../constants";

class NameField extends Field {
  constructor(firstName = "", lastName = "") {
    super({ firstName, lastName }); // Passes an object with firstName and lastName to the Field constructor
    this.minLength = FIELD_CONFIGS.name.minLength;
    this.maxLength = FIELD_CONFIGS.name.maxLength;
    this.regex = FIELD_CONFIGS.name.regex;
  }

  validate() {
    const { firstName, lastName } = this.value;
    const totalLength = (firstName + lastName).replace(/\s+/g, "").length;

    if (totalLength < this.minLength) {
      this.setError(`Name must be at least ${this.minLength} characters long`);
    } else if (totalLength > this.maxLength) {
      this.setError(`Name must be at most ${this.maxLength} characters long`);
    } else if (this.regex.test(firstName) || this.regex.test(lastName)) {
      this.setError(FIELD_CONFIGS.name.errorMessage);
    } else {
      this.clearError();
    }
  }
}

export default NameField;
