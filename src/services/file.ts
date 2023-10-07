import { httpMutation } from '@/libs';
import { IFile } from '@/types';

export const uploadFile = (data: FormData) =>
  httpMutation('/files', {
    method: 'POST',
    data,
    isFormData: true,
  }) as Promise<IFile>;
