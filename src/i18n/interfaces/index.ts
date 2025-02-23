import { constants } from "../../constants/common";

// Direction of html content specially for locale
export interface Direction {
    direction: typeof constants.leftToRight | typeof constants.rightToLeft;
  }