import { httpMutation } from '@/libs';
import { ISignupPayload } from '@/types';

export const signup = (data: ISignupPayload) =>
  httpMutation('/auth/signup', { method: 'POST', isFormData: false, data });
