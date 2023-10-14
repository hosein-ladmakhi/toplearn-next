import { BASE_URL } from '@/constants';
import { tokenStore } from '@/store';

const token = tokenStore?.getState()?.token;

const tokenAuthHeader: object = token
  ? { Authorization: `Bearer ${token}` }
  : {};

export const httpQuery = (url: string, tags?: string[]) =>
  fetch(BASE_URL + url, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      ...tokenAuthHeader,
    },
    next: { tags: tags || [] },
  })
    .then((res) => res.json())
    .catch((error) => {
      console.log('HTTP QUERY', error.message);
      return error;
    });

export const httpMutation = (
  url: string,
  options: {
    method: 'POST' | 'PATCH' | 'PUT' | 'DELETE';
    isFormData?: boolean;
    data?: any;
  },
) => {
  const requestOptions: RequestInit = { headers: {} };
  if (options.data) {
    requestOptions.body = options.data;
  }

  if (!options.isFormData) {
    if (options.data) {
      requestOptions.body = JSON.stringify(options.data);
    }
    requestOptions.headers = {
      ...requestOptions.headers,
      'Content-Type': 'application/json',
    };
  }

  requestOptions.headers = {
    ...requestOptions.headers,
    ...tokenAuthHeader,
  };
  return fetch(BASE_URL + url, {
    method: options.method,
    ...requestOptions,
  })
    .then((res) => res.json())
    .catch((error) => {
      console.log('HTTP MUTATION', error.message);
      return error;
    });
};
