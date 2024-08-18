// Desc: Base class for all form fields

class Field {
  constructor(value = {}) {
    this.value = typeof value === "string" ? value : { ...value };
    this.errorMsg = "";
  }

  validate() {
    throw new Error("validate method must be implemented");
  }

  isValid() {
    return !this.errorMsg;
  }

  setError(message) {
    this.errorMsg = message;
  }

  clearError() {
    this.errorMsg = "";
  }
}
