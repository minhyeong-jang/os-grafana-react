import { baseApi } from './env';

export interface GetControllerResponse {
  data: ControllerData[];
}
export interface ControllerData {
  id: string | number;
  title: string;
  type: ControllerDataType;
  items: ControllerDataItems[];
  selectedId: string | number | null;
}
export interface ControllerDataItems {
  id: string | number;
  type: ControllerItemType;
  label: string;
  value: boolean | string;
}
export type ControllerDataType = 'switch' | 'radio' | 'input' | 'checkbox' | 'multiple';
export type ControllerItemType = 'switch' | 'radio' | 'input' | 'checkbox';

export const getController = (url: string) => {
  return baseApi.get<GetControllerResponse>(url);
};
