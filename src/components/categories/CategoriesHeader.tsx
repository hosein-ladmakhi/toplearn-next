'use client';

import Button from '@/common/Button';
import Typography from '@/common/Typography';
import { useSearchQueryState } from '@/hooks/useSearchQueryState';

interface IProps {
  categoriesCount: number;
}

export default function CategoriesHeader({ categoriesCount }: IProps) {
  const { onSetQueryState } = useSearchQueryState();
  const onCreateCategory = () => onSetQueryState('modal-status', true);

  return (
    <div className="flex justify-between items-end pb-5 mb-5 border-b-2 border-gray-500">
      <Typography variant="h1">Categories ({categoriesCount})</Typography>
      <Button onClick={onCreateCategory}>Create New Category</Button>
    </div>
  );
}
