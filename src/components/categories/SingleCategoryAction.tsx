'use client';

import { deleteCategoryAction } from '@/app/dashboard/categories/actions';
import ButtonGroup from '@/common/ButtonGroup';
import { useSearchQueryState } from '@/hooks/useSearchQueryState';
import { getCategories } from '@/services';
import {
  Categories,
  CategoriesListType,
  Category,
  IButtonGroup,
} from '@/types';
import React, { lazy, useMemo, useState } from 'react';

interface IProps {
  selectedCategory: Category;
}

export default function SingleCategoryAction({ selectedCategory }: IProps) {
  const { onSetQueryState } = useSearchQueryState();
  const [categories, setCategories] = useState<Categories>([]);
  const [CreateOrEditCategoryModal, setCreateOrEditCategoryModal] =
    useState<any>();

  const onDeleteCategory = () => deleteCategoryAction(selectedCategory?.id);
  const onEditCategory = async () => {
    onSetQueryState('modal-status', true);
    onSetQueryState('selected-category', selectedCategory?.id);
    setCreateOrEditCategoryModal(lazy(() => import('./CreateOrEditCategory')));
    if (!categories.length) {
      getCategories(CategoriesListType.tree).then((categories) =>
        setCategories(categories),
      );
    }
  };

  const actions = useMemo((): IButtonGroup[] => {
    return [
      {
        action: onDeleteCategory,
        text: 'Delete Category',
        type: 'server',
        className: 'my-5 mr-5',
      },
      {
        action: onEditCategory,
        text: 'Edit Category',
        type: 'client',
        className: 'my-5',
      },
    ];
  }, [selectedCategory]);
  return (
    <>
      {CreateOrEditCategoryModal && (
        <CreateOrEditCategoryModal categories={categories} />
      )}
      <ButtonGroup actions={actions} />
    </>
  );
}
