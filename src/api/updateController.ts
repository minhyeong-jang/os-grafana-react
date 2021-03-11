import { PanelOptionMethod } from 'types';
import { baseApi } from './env';

interface UpdateControllerResponseItem {
  value: string | boolean;
}
export interface UpdateControllerParams {
  items?: UpdateControllerResponseItem[];
  selectedId?: number;
}
export interface UpdateControllerResponse {}

export const updateController = (
  method: PanelOptionMethod,
  url: string,
  params: UpdateControllerParams,
) => {
  return baseApi<UpdateControllerParams>(method, url, params);
};
