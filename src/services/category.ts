import { httpMutation, httpQuery } from '@/libs';
import {
  Categories,
  CategoriesListType,
  Category,
  CreateOrUpdateCategoryPayload,
  IUpdateOrDeleteResult,
} from '@/types';

export const getCategories = (format: CategoriesListType) =>
  httpQuery(`/categories?format=${format}`, [
    'categories',
  ]) as Promise<Categories>;

export const getCategoryById = (id: number) =>
  httpQuery(`/categories/${id}`, [`categories-${id}`]) as Promise<Category>;

export const createCategory = (data: CreateOrUpdateCategoryPayload) =>
  httpMutation('/categories', {
    method: 'POST',
    data,
  }) as Promise<Category>;

export const deleteCategory = (id: number) =>
  httpMutation(`/categories/${id}`, {
    method: 'DELETE',
  }) as Promise<IUpdateOrDeleteResult>;

export const updateCategory = (
  id: number,
  data: Partial<CreateOrUpdateCategoryPayload>,
) =>
  httpMutation(`/categories/${id}`, {
    data,
    method: 'PATCH',
  }) as Promise<IUpdateOrDeleteResult>;
