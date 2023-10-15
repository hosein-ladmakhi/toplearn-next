import Typography from '@/common/Typography';
import { Category } from '@/types';
import Link from 'next/link';

interface IProps {
  category: Category;
}

export default function CategoryItem({ category }: IProps) {
  return (
    <Link href={`/dashboard/categories/${category.id}`} className="block py-3">
      <Typography variant="h1">{category.title}</Typography>
    </Link>
  );
}
