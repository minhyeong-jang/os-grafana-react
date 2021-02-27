import { baseApi } from "./env";
import { ControllerData } from "./getController";

export interface PostControllerParams extends ControllerData {}
export interface PostControllerResponse {}

export const postController = (url: string, params: PostControllerParams) => {
  return baseApi.post<PostControllerParams>(url, params);
};
