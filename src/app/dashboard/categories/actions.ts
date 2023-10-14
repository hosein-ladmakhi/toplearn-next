'use server';

import { createCategory, deleteCategory } from '@/services';
import { CreateOrUpdateCategoryPayload } from '@/types';
import { revalidateTag } from 'next/cache';
import { redirect } from 'next/navigation';

export const createCategoryAction = async (
  data: CreateOrUpdateCategoryPayload,
) => {
  await createCategory(data);
  revalidateTag('categories');
};

export const deleteCategoryAction = async (id: number) => {
  const response = await deleteCategory(+id);
  console.log(response);
  if (response.affected) {
    revalidateTag('categories');
    redirect('/dashboard/categories');
    return;
  }

  redirect(`/dashboard/categories/${id}`);
};
