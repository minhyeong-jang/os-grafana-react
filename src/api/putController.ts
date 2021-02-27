import { baseApi } from "./env";
import { ControllerDataItems } from "./getController";

export interface PutControllerParams {
  controllerId: string | number;
  items: ControllerDataItems[];
  selectedId: string | number | null;
}
export interface PutControllerResponse {}

export const putController = (url: string, params: PutControllerParams) => {
  return baseApi.put<PutControllerParams>(url, params);
};
