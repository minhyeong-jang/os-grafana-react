import { PanelOptionMethod } from 'types';
import { baseApi } from './env';

interface GetControllerResponseItem {
  value: string | boolean;
}
export interface GetControllerResponse {
  items?: GetControllerResponseItem[];
  selectedId?: number;
}

export interface ControllerData {
  id: string | number;
  type: ControllerDataType;
  items: ControllerDataItems[];
  selectedId: number | null;
}

export interface ControllerDataItems {
  id: string | number;
  type: ControllerItemType;
  label: string;
  value: boolean | string;
}
export type ControllerDataType =
  | 'switch'
  | 'radio'
  | 'input'
  | 'checkbox'
  | 'multiple';
export type ControllerItemType = 'switch' | 'radio' | 'input' | 'checkbox';

export const getController = (method: PanelOptionMethod, url: string) => {
  return baseApi<GetControllerResponse>(method, url);
};
