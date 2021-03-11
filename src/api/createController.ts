import { PanelOptionMethod } from 'types';
import { baseApi } from './env';
import { ControllerDataItems, ControllerDataType } from './getController';

export interface CreateControllerParams {
  id: string | number;
  type: ControllerDataType;
  items: ControllerDataItems[];
  selectedId: number | null;
}
export interface CreateControllerResponse {}

export const createController = (
  method: PanelOptionMethod,
  url: string,
  params: CreateControllerParams,
) => {
  return baseApi<CreateControllerParams>(method, url, params);
};
