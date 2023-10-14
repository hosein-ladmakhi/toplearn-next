import { httpQuery } from '@/libs';

export const getCategories = () => httpQuery('/categories', ['categories']);
