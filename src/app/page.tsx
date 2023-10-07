'use client';

import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function HomePage() {
  const { replace } = useRouter();
  useEffect(() => {
    replace('/dashboard');
  }, []);
  return <></>;
}
