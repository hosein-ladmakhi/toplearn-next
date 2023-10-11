import { cookies } from 'next/headers';

export const prepareToastMessage = (payload: {
  type: string;
  message: string;
}) => {
  cookies().set('message', JSON.stringify(payload));
};
