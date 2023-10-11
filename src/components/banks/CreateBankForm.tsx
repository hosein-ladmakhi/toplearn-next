'use client';

import { createBankAction } from '@/app/dashboard/banks/action';
import Button from '@/common/Button';
import InputField from '@/common/InputField';
import Modal from '@/common/Modal';
import Toggle from '@/common/Toggle';
import { useSearchQueryState } from '@/hooks/useSearchQueryState';
import { CreateBankPayload } from '@/types';
import { zodResolver } from '@hookform/resolvers/zod';
import { useTransition } from 'react';
import { useForm } from 'react-hook-form';
import zod from 'zod';

export const createBankValidation = zod.object({
  name: zod.string({ required_error: 'You must provided bank name' }),
  slug: zod.string({ required_error: 'You must provided bank slug' }),
});

export default function CreateBankFormModal() {
  const { control, handleSubmit, reset } = useForm<CreateBankPayload>({
    resolver: zodResolver(createBankValidation),
    defaultValues: {
      isActive: false,
      name: '',
      slug: '',
    },
  });
  const [isCreateBankPending, startBankCreation] = useTransition();

  const { onSetQueryState } = useSearchQueryState();

  const onSubmit = async (data: CreateBankPayload) =>
    startBankCreation(() => {
      createBankAction(data);
      onSetQueryState('is-open', false);
      reset();
    });

  return (
    <Modal title="Create Bank" cardClasses="bg-base-300 p-5 rounded">
      <form onSubmit={handleSubmit(onSubmit as any)}>
        <div className="flex justify-start items-center gap-5">
          <div className="w-full">
            <InputField
              control={control}
              inputType="text"
              name="name"
              label="Name"
            />
          </div>
          <div className="w-full">
            <InputField
              control={control}
              inputType="text"
              name="slug"
              label="Slug"
            />
          </div>
        </div>
        <Toggle name="isActive" label="Is Active" />
        <Button isLoading={isCreateBankPending} options="my-0 mt-5">
          Create Bank
        </Button>
      </form>
    </Modal>
  );
}
