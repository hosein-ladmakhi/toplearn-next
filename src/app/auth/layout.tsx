'use client';

import { useScreenDimention } from '@/hooks/useScreenDimention';
import { ReactNode } from 'react';

interface IProps {
  children: ReactNode;
}

export default function AuthLayout({ children }: IProps) {
  const { height, width } = useScreenDimention();

  return (
    <div
      className="overflow-auto overflow-auto p-5 sm:flex sm:flex-col sm:justify-center sm:items-center block"
      style={{ height, width }}
    >
      {children}
    </div>
  );
}
