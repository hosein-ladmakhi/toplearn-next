'use client';

import { usePathname, useSearchParams, useRouter } from 'next/navigation';

export const useSearchQueryState = () => {
  const pathname = usePathname();
  const router = useRouter();
  const searchParms = useSearchParams();

  const onSetQueryState = (key: string, value: any) => {
    const params = new URLSearchParams(searchParms);
    params.set(key, value);
    router.replace(pathname + '?' + params);
  };

  return { searchParms, onSetQueryState };
};
