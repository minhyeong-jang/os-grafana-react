import { PanelOptionMethod } from 'types';
import { baseApi } from './env';

export interface DeleteControllerParams {}
export interface DeleteControllerResponse {}

export const deleteController = (method: PanelOptionMethod, url: string) => {
  return baseApi<DeleteControllerParams>(method, url);
};
