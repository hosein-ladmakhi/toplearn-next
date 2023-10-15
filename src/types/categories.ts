import { CoreEntity } from '.';

export interface Category extends CoreEntity {
  title: string;
  slug: string;
  parent?: Category;
  subcategory?: Category[];
}

export type Categories = Category[];

export interface CreateOrUpdateCategoryPayload {
  title: string;
  slug: string;
  parent?: string;
}

export enum CategoriesListType {
  simple = 'simple',
  tree = 'tree',
}
