import { httpMutation, httpQuery } from '@/libs';
import { Bank, Banks, CreateBankPayload } from '@/types';

export const getBanks = () => httpQuery('/banks', ['banks']) as Promise<Banks>;

export const createBank = (data: CreateBankPayload) =>
  httpMutation('/banks', {
    method: 'POST',
    data,
    isFormData: false,
  }) as Promise<Bank>;

export const deleteBank = (id: number) =>
  httpMutation(`/banks/${id}`, { method: 'DELETE' });
