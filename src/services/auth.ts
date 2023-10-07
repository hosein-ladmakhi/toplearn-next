import { httpMutation } from '@/libs';
import { IAuthResponse, ISignInPayload, ISignupPayload } from '@/types';

export const signup = (data: ISignupPayload) =>
  httpMutation('/auth/signup', {
    method: 'POST',
    isFormData: false,
    data,
  }) as Promise<IAuthResponse>;

export const signin = (data: ISignInPayload) =>
  httpMutation('/auth/signin', {
    method: 'POST',
    data,
    isFormData: false,
  }) as Promise<IAuthResponse>;
