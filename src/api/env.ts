import axios, { AxiosError, AxiosResponse } from 'axios';
import { PanelOptionMethod } from 'types';

export type MarshalableType =
  | boolean
  | string
  | string[]
  | Record<string, any>
  | Array<Record<string, any>>;

/**
 * API Url 정의
 */

const getError = (message = '오류', status = 400, code?: string) => {
  return {
    code,
    message,
    name: '',
    status,
  };
};

const axiosResponseToData = <T>(axiosRes: AxiosResponse<T>) => axiosRes.data;
const axiosErrorResToData = (err: AxiosError) => {
  const res: AxiosResponse | undefined = err.response;
  let error: Error;
  if (!res) {
    error = getError(err.message);
  } else {
    error = getError(
      res.data?.error?.message ??
        res.data?.message ??
        res.data?.msg ??
        res.statusText,
      res.status,
      res.data?.code,
    );
  }

  throw error;
};

export const baseApi = <T = MarshalableType, P = Record<string, any> | void>(
  method: PanelOptionMethod,
  url: string,
  params?: P,
) => {
  try {
    return axios
      .request<T>({
        method,
        url,
        data: params,
      })
      .then(axiosResponseToData)
      .catch(axiosErrorResToData);
  } catch (error) {
    return Promise.reject(error);
  }
};
