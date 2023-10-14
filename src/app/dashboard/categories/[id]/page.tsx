import Typography from '@/common/Typography';
import SingleCategoryAction from '@/components/categories/SingleCategoryAction';
import { getCategoryById } from '@/services';
import { IDefaultPage } from '@/types';
import { Metadata } from 'next';
import Link from 'next/link';

export const generateMetadata = async ({
  params,
}: IDefaultPage<{ id: number }>): Promise<Metadata> => {
  const category = await getCategoryById(params.id!);
  return {
    title: category?.title || 'Not Found Category',
  };
};

export default async function CategoryByIdPage({
  params,
}: IDefaultPage<{ id: number }>) {
  const category = await getCategoryById(params.id);
  return (
    <div>
      <Typography variant="caption">
        <b>Title :</b> {category.title}
      </Typography>
      <Typography variant="caption">
        <b>Slug :</b> {category.slug}
      </Typography>
      {category?.parent && (
        <Typography variant="caption">
          <Link href={`/dashboard/categories/${category.parent?.id}`}>
            <b>Parent :</b> {category.parent?.title}
          </Link>
        </Typography>
      )}
      <Typography variant="caption">
        <b>CreatedAt :</b> {new Date(category.createdAt).toLocaleDateString()}
      </Typography>
      <Typography variant="caption">
        <b>UpdatedAt :</b> {new Date(category.updatedAt).toLocaleDateString()}
      </Typography>
      {category?.subcategory?.length! > 0 && (
        <Typography variant="caption">
          <b>Sub Categories : </b>
          {category.subcategory?.map((category) => (
            <Link
              key={category.id}
              href={`/dashboard/categories/${category.id}`}
            >
              {category.title}
              {' - '}
            </Link>
          ))}
        </Typography>
      )}
      <SingleCategoryAction selectedCategory={category} />
    </div>
  );
}
