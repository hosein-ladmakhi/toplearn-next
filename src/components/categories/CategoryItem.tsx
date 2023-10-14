import Typography from '@/common/Typography';
import { Category } from '@/types';
import Link from 'next/link';

interface IProps {
  category: Category;
}

export default function CategoryItem({ category }: IProps) {
  return (
    <Link
      href={`/dashboard/categories/${category.id}`}
      className="block border-b-2 border-gray-500 py-3"
    >
      <Typography variant="h1">Name : {category.title}</Typography>
      <Typography variant="caption">
        Created At : {new Date(category.createdAt).toLocaleDateString()}
      </Typography>
    </Link>
  );
}
