import { baseApi } from "./env";

export interface GetControllerDataResponse {
  data: ControllerData[];
}
export interface ControllerData {
  id: string | number;
  title: string;
  type: ControllerType;
  items: ControllerDataItems[];
}
export interface ControllerDataItems {
  id: string | number;
  type: ControllerItemType;
  label: string;
  value: boolean | string;
}
export type ControllerType =
  | "switch"
  | "radio"
  | "input"
  | "checkbox"
  | "multiple";
export type ControllerItemType = "switch" | "radio" | "input" | "checkbox";

export const getControllerData = (url: string) => {
  return baseApi.get<GetControllerDataResponse>(url);
};
