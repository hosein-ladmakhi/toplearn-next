import { CoreEntity } from '.';

export interface Category extends CoreEntity {
  title: string;
  slug: string;
  parent?: Category;
  subcategory?: Category[];
}

export type Categories = Category[];

export type CreateOrUpdateCategoryPayload = Pick<
  Category,
  'parent' | 'slug' | 'title'
>;
