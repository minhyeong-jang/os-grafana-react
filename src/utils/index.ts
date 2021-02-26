import {
  ControllerDataItems,
  ControllerDataType,
  ControllerItemType,
} from "api";
import randomstring from "randomstring";

export const generateControllerItem = (
  type: ControllerDataType
): ControllerDataItems => {
  let defaultType: ControllerItemType = "input";

  if (type !== "multiple") {
    defaultType = type as ControllerItemType;
  }

  return {
    id: randomstring.generate(),
    label: "",
    type: defaultType,
    value: defaultType === "input" ? "" : false,
  };
};
