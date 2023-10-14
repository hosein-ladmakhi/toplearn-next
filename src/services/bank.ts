import { httpMutation, httpQuery } from '@/libs';
import {
  Bank,
  Banks,
  CreateOrUpdateBankPayload,
  IUpdateOrDeleteResult,
} from '@/types';

export const getBanks = () => httpQuery('/banks', ['banks']) as Promise<Banks>;

export const createBank = (data: CreateOrUpdateBankPayload) =>
  httpMutation('/banks', {
    method: 'POST',
    data,
    isFormData: false,
  }) as Promise<Bank>;

export const deleteBank = (id: number) =>
  httpMutation(`/banks/${id}`, { method: 'DELETE' });

export const getBankById = (id: number) =>
  httpQuery(`/banks/${id}`) as Promise<Bank>;

export const updateBank = (
  id: number,
  data: Partial<CreateOrUpdateBankPayload>,
) =>
  httpMutation(`/banks/${id}`, {
    method: 'PATCH',
    data,
    isFormData: false,
  }) as Promise<IUpdateOrDeleteResult>;
