import { ReactNode } from 'react';
import '@/assets/styles/global.css';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: {
    default: 'TopLearn',
    template: '%s | TopLearn.com',
  },
};

interface IProps {
  children: ReactNode;
}

export default function RootLayout({ children }: IProps) {
  return (
    <html data-theme="dark">
      <body>{children}</body>
    </html>
  );
}
