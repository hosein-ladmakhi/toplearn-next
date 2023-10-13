"use client";

import { usePathname, useSearchParams, useRouter } from "next/navigation";

export const useSearchQueryState = () => {
  const pathname = usePathname();
  const router = useRouter();
  const searchParms = useSearchParams();
  const params = new URLSearchParams(Array.from(searchParms.entries()));

  const onSetQueryState = (key: string, value: any) => {
    const isDefinedBefore = typeof value === typeof undefined;
    if (isDefinedBefore) {
      params.delete(key);
    }

    if (params.has(key) && !isDefinedBefore) {
      params.set(key, value);
    } else if (!isDefinedBefore) {
      params.append(key, value);
    }

    router.push(pathname + "?" + params.toString());
  };

  return { searchParms, onSetQueryState };
};
