'use client';

import {
  createCategoryAction,
  updateCategoryAction,
} from '@/app/dashboard/categories/actions';
import Button from '@/common/Button';
import InputField from '@/common/InputField';
import Modal from '@/common/Modal';
import SelectBox from '@/common/SelectBox';
import { useSearchQueryState } from '@/hooks/useSearchQueryState';
import { getCategoryById } from '@/services';
import { Categories, CreateOrUpdateCategoryPayload } from '@/types';
import { zodResolver } from '@hookform/resolvers/zod';
import { useEffect, useTransition } from 'react';
import { useForm } from 'react-hook-form';
import zod from 'zod';

export const createCategoryFormValidation = zod.object({
  title: zod
    .string({ required_error: 'You must provide your title' })
    .min(3, 'Your title must at least contain 3 characters'),
  slug: zod
    .string({ required_error: 'You must provide your slug' })
    .min(3, 'Your slug must at least contain 3 characters'),
  parent: zod.any().optional(),
});

interface IProps {
  categories: Categories;
}

export default function CreateOrEditCategoryModal({ categories }: IProps) {
  const { onSetQueryState, searchParms } = useSearchQueryState();

  const { control, handleSubmit, reset, setValue } =
    useForm<CreateOrUpdateCategoryPayload>({
      mode: 'all',
      resolver: zodResolver(createCategoryFormValidation),
      defaultValues: { title: '', slug: '', parent: '' },
    });

  const onCloseCreateOrEditModal = () => {
    onSetQueryState('modal-status', undefined);
    onSetQueryState('selected-category', undefined);
    reset();
  };

  const selectedCategory = +searchParms.get('selected-category')!;

  useEffect(() => {
    if (selectedCategory) {
      getCategoryById(selectedCategory).then((data) => {
        setValue('title', data.title);
        setValue('slug', data.slug);
        if (data.parent) {
          setValue('parent', data?.parent?.id?.toString());
        }
      });
    }
  }, [selectedCategory]);

  const [createOrEditCategoryPending, startCreateOrEditCategory] =
    useTransition();

  const onSubmit = (data: CreateOrUpdateCategoryPayload) =>
    startCreateOrEditCategory(() => {
      const payload: CreateOrUpdateCategoryPayload = {
        title: data.title,
        slug: data.slug,
      };
      if (data.parent) {
        payload.parent = data.parent;
      }
      selectedCategory
        ? updateCategoryAction(selectedCategory, payload)
        : createCategoryAction(payload);
      onCloseCreateOrEditModal();
    });

  const actionText = selectedCategory ? 'Update Category' : 'Create Category';

  return (
    <Modal title={actionText} cardClasses="bg-base-300 p-5 rounded">
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
            valueKey="id"
            labelKey="title"
            defaultOptionLabel="Select Your Category"
            control={control}
            name="parent"
            label="Parent Category"
            options={categories}
          />
        )}
        <Button isLoading={createOrEditCategoryPending} options="w-full mt-5">
          {actionText}
        </Button>
      </form>
    </Modal>
  );
}
