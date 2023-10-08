import { httpMutation, httpQuery } from '@/libs';
import { IFile } from '@/types';

export const uploadFile = (data: FormData) =>
  httpMutation('/files', {
    method: 'POST',
    data,
    isFormData: true,
  }) as Promise<IFile>;

export const fetchFileById = (id: number) =>
  httpQuery(`/files/${id}`) as Promise<IFile>;
