import { BASE_URL } from '@/constants';

export const httpQuery = (url: string) =>
  fetch(BASE_URL + url, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  }).then((res) => res.json());

export const httpMutation = (
  url: string,
  options: {
    method: 'POST' | 'PATCH' | 'PUT' | 'DELETE';
    isFormData?: boolean;
    data: any;
  },
) => {
  const requestOptions: RequestInit = { body: options.data, headers: {} };

  if (!options.isFormData) {
    requestOptions.body = JSON.stringify(options.data);
    requestOptions.headers = {
      ...requestOptions.headers,
      'Content-Type': 'application/json',
    };
  }
  return fetch(BASE_URL + url, {
    method: options.method,
    ...requestOptions,
  }).then((res) => res.json());
};
