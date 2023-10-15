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
        <>
          <Typography moreClassNames="mt-5" variant="h1">
            Sub Categories
          </Typography>
          <ul>
            {category?.subcategory?.map((subCategory) => (
              <li key={subCategory.id}>
                <Link href={`/dashboard/categories/${subCategory.id}`}>
                  {subCategory.title}
                </Link>
              </li>
            ))}
          </ul>
        </>
      )}
      <SingleCategoryAction selectedCategory={category} />
    </div>
  );
}
