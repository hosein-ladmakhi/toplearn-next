'use server';

import { prepareToastMessage } from '@/helpers';
import { createBank } from '@/services';
import { CreateBankPayload } from '@/types';
import { revalidateTag } from 'next/cache';

export const createBankAction = async (data: CreateBankPayload) => {
  const bank = await createBank(data);
  if (!bank.id) {
    prepareToastMessage({
      message: 'Create bank has failed ...',
      type: 'error',
    });
    return;
  }
  prepareToastMessage({
    message: 'Create bank done successfully',
    type: 'success',
  });
  revalidateTag('banks');
};
