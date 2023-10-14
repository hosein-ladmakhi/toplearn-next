'use client';

import { createCategoryAction } from '@/app/dashboard/categories/actions';
import Button from '@/common/Button';
import InputField from '@/common/InputField';
import Modal from '@/common/Modal';
import SelectBox from '@/common/SelectBox';
import { useSearchQueryState } from '@/hooks/useSearchQueryState';
import { Categories, CreateOrUpdateCategoryPayload } from '@/types';
import { zodResolver } from '@hookform/resolvers/zod';
import { useTransition } from 'react';
import { useForm } from 'react-hook-form';
import zod from 'zod';

export const createCategoryFormValidation = zod.object({
  title: zod
    .string({ required_error: 'You must provide your title' })
    .min(3, 'Your title must at least contain 3 characters'),
  slug: zod
    .string({ required_error: 'You must provide your slug' })
    .min(3, 'Your slug must at least contain 3 characters'),
  parent: zod.string().optional(),
});

interface IProps {
  categories: Categories;
}

export default function CreateOrEditCategoryModal({ categories }: IProps) {
  const { onSetQueryState } = useSearchQueryState();
  const onCloseCreateOrEditModal = () => onSetQueryState('modal-status', false);

  const { control, handleSubmit, reset } =
    useForm<CreateOrUpdateCategoryPayload>({
      mode: 'all',
      resolver: zodResolver(createCategoryFormValidation),
      defaultValues: { title: '', slug: '' },
    });
  const [createOrEditCategoryPending, startCreateOrEditCategory] =
    useTransition();

  const onSubmit = (data: CreateOrUpdateCategoryPayload) =>
    startCreateOrEditCategory(() => {
      createCategoryAction(data);
      reset();
      onCloseCreateOrEditModal();
    });

  return (
    <Modal title="Create Category" cardClasses="bg-base-300 p-5 rounded">
      <form onSubmit={handleSubmit(onSubmit)}>
        <InputField
          control={control}
          name="title"
          inputType="text"
          label="Category Title"
        />
        <InputField
          control={control}
          name="slug"
          inputType="text"
          label="Category Slug"
        />
        {categories?.length > 0 && (
          <SelectBox
            control={control}
            name="parent"
            label="Parent Category"
            options={[
              { value: undefined, text: 'Select Your Parent Category' },
              ...categories?.map((category) => ({
                text: category.title,
                value: category.id,
              })),
            ]}
          />
        )}
        <Button isLoading={createOrEditCategoryPending} options="w-full mt-5">
          Create Category
        </Button>
      </form>
    </Modal>
  );
}
