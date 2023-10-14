import { httpMutation, httpQuery } from '@/libs';
import {
  Categories,
  Category,
  CreateOrUpdateCategoryPayload,
  IUpdateOrDeleteResult,
} from '@/types';

export const getCategories = (format: 'simple' | 'tree') =>
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
