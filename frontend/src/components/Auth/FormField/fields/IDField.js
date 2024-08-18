// ID Field Class

import { FIELD_CONFIGS } from "../../constants";

class IDField extends Field {
  validate() {
    const formattedID = this.formatID(this.value);
    const cleanID = this.value.replace(/\s+/g, "");

    if (
      (cleanID.length === 12 &&
        FIELD_CONFIGS.aadhaar.regex.test(formattedID)) ||
      (cleanID.length === 10 && FIELD_CONFIGS.epic.regex.test(cleanID))
    ) {
      this.clearError();
    } else {
      this.setError("Invalid ID");
    }
  }

  formatID(id) {
    const cleanID = id.replace(/\s+/g, "");
    if (/^\d*$/.test(cleanID)) {
      return cleanID.match(/.{1,4}/g)?.join(" ") || id;
    } else if (/^[A-Z]{0,3}[A-Z0-9]{0,7}$/.test(cleanID)) {
      return cleanID;
    }
    return id;
  }
}

export default IDField;
