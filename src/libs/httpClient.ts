import { BASE_URL } from '@/constants';

const token =
  typeof window === typeof undefined
    ? require('next/headers').cookies().get('token')?.value
    : require('js-cookie').get('token');

export const httpQuery = (url: string) =>
  fetch(BASE_URL + url, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
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

  requestOptions.headers = {
    ...requestOptions.headers,
    Authorization: `Bearer ${token}`,
  };
  return fetch(BASE_URL + url, {
    method: options.method,
    ...requestOptions,
  }).then((res) => res.json());
};
