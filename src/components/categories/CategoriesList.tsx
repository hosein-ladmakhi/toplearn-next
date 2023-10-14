import { Categories } from '@/types';
import CategoryItem from './CategoryItem';

interface IProps {
  categories: Categories;
}

export default function CategoriesList({ categories }: IProps) {
  return categories.map((category) => (
    <CategoryItem key={category.id} category={category} />
  ));
}
