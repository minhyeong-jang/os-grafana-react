import axios from 'axios';
import { PanelOptionMethod } from 'types';
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
