import axios, { AxiosPromise, AxiosRequestConfig } from "axios";

axios.defaults.headers.common["Accept"] = "application/json";
axios.defaults.headers.common["Content-Type"] = "application/json";
axios.defaults.headers.post["Content-Type"] = "multipart/form-data";
axios.defaults.headers.common["X-Requested-With"] = "XMLHttpRequest";

type AxiosRequestConfigType = AxiosRequestConfig & {
  urlParams?: {
    [key: string]: string;
  };
};

export const setRestParams: (request: AxiosRequestConfigType) => AxiosRequestConfig = (request: AxiosRequestConfigType) => {
  if (request.urlParams !== undefined) {
    for (let param in request.urlParams) {
      request.url = request.url?.replace(`{{${param}}}`, request.urlParams[param]);
    }
  }
  delete request.urlParams;
  return request;
};

export const restHandler: (request: AxiosRequestConfigType) => AxiosPromise = (request: AxiosRequestConfigType) => {
  return axios(setRestParams(request));
};
