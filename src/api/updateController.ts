import { PanelOptionMethod } from 'types';
import { baseApi } from './env';
import { ControllerDataItems, ControllerDataType } from './getController';

export interface UpdateControllerParams {
  controllerId: string | number;
  type: ControllerDataType;
  items: ControllerDataItems[];
  selectedId?: string | number | null;
}
export interface UpdateControllerResponse {}

export const updateController = (
  method: PanelOptionMethod,
  url: string,
  params: UpdateControllerParams,
) => {
  return baseApi<UpdateControllerParams>(method, url, params);
};
