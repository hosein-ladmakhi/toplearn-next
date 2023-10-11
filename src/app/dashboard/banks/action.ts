'use server';

import { prepareToastMessage } from '@/helpers';
import { createBank, deleteBank } from '@/services';
import { Bank, CreateBankPayload } from '@/types';
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

export const deleteBankAction = async (selectedBank: Bank) => {
  const response = await deleteBank(selectedBank.id);
  console.log(response, selectedBank.id);
  if (response) {
    prepareToastMessage({
      message: `Delete ${selectedBank?.name} done successfully`,
      type: 'success',
    });
    revalidateTag('banks');
    return;
  }
  prepareToastMessage({
    message: `Delete ${selectedBank?.name} has failed ...`,
    type: 'error',
  });
};
