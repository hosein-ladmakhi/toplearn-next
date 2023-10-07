'use client';

import { useScreenDimention } from './useScreenDimention';

export const usePlatform = () => {
  const { width } = useScreenDimention();

  if (width >= 300 && width <= 768) {
    return 'mobile';
  }

  return 'desktop';
};
