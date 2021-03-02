import { PanelOptionMethod } from 'types';
import { baseApi } from './env';
import { ControllerData } from './getController';

export interface CreateControllerParams extends ControllerData {}
export interface CreateControllerResponse {}

export const createController = (
  method: PanelOptionMethod,
  url: string,
  params: CreateControllerParams,
) => {
  return baseApi<CreateControllerParams>(method, url, params);
};
