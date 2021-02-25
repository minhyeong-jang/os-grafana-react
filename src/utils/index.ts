import { ControllerDataItems } from "api";
import randomstring from "randomstring";

export const generateControllerItem = (): ControllerDataItems => ({
  id: randomstring.generate(),
  label: "",
  type: "input",
  value: "",
});
