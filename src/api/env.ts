import axios, { AxiosError, AxiosResponse } from 'axios';

export type MarshalableType = boolean | string | string[] | Record<string, any> | Array<Record<string, any>>;

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
      res.data?.error?.message ?? res.data?.message ?? res.data?.msg ?? res.statusText,
      res.status,
      res.data?.code
    );
  }

  throw error;
};

export const baseApi = {
  delete<T, P>(url: string, params?: P): Promise<T> {
    try {
      return axios
        .delete<T>(`${url}`, {
          params,
        })
        .then(axiosResponseToData)
        .catch(axiosErrorResToData);
    } catch (error) {
      return Promise.reject(error);
    }
  },
  get<T = MarshalableType, P = Record<string, any> | void>(url: string, params?: P): Promise<T> {
    try {
      return axios
        .get<T>(`${url}`, {
          params,
        })
        .then(axiosResponseToData)
        .catch(axiosErrorResToData);
    } catch (error) {
      return Promise.reject(error);
    }
  },
  post<T>(url: string, data: any = null): Promise<T> {
    try {
      return axios
        .post<T>(url, data)
        .then(axiosResponseToData)
        .catch(axiosErrorResToData);
    } catch (error) {
      return Promise.reject(error);
    }
  },
  put<T>(url: string, data: any = null): Promise<T> {
    try {
      return axios
        .put<T>(url, data)
        .then(axiosResponseToData)
        .catch(axiosErrorResToData);
    } catch (error) {
      return Promise.reject(error);
    }
  },
};
