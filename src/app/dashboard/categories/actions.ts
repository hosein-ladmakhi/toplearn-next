'use server';

import { createCategory, deleteCategory, updateCategory } from '@/services';
import { CreateOrUpdateCategoryPayload } from '@/types';
import { revalidatePath, revalidateTag } from 'next/cache';
import { redirect } from 'next/navigation';

export const createCategoryAction = async (
  data: CreateOrUpdateCategoryPayload,
) => {
  await createCategory(data);
  revalidateTag('categories');
};

export const deleteCategoryAction = async (id: number) => {
  const response = await deleteCategory(+id);
  if (response.affected) {
    revalidateTag('categories');
    revalidatePath('/dashboard/categories/[id]', 'page');
    redirect('/dashboard/categories');
    return;
  }

  redirect(`/dashboard/categories/${id}`);
};

export const updateCategoryAction = async (
  id: number,
  data: Partial<CreateOrUpdateCategoryPayload>,
) => {
  const response = await updateCategory(id, data);
  console.log('response', response);
  if (response.affected) {
    revalidateTag('categories');
    revalidateTag(`categories-${id}`);
    revalidatePath('/dashboard/categories/[id]', 'page');
    return;
  }
};
