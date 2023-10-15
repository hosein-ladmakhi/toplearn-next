import CategoriesHeader from '@/components/categories/CategoriesHeader';
import CategoriesList from '@/components/categories/CategoriesList';
import CreateOrEditCategoryModal from '@/components/categories/CreateOrEditCategory';
import { getCategories } from '@/services';
import { CategoriesListType } from '@/types';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Categories',
};

export default async function CategoriesPage() {
  const categories = await getCategories(CategoriesListType.tree);
  return (
    <div>
      <CreateOrEditCategoryModal categories={categories} />
      <CategoriesHeader categoriesCount={categories.length} />
      <CategoriesList categories={categories} />
    </div>
  );
}
