import { ReactNode } from 'react';
import '@/assets/styles/global.css';

interface IProps {
  children: ReactNode;
}

export default function RootLayout({ children }: IProps) {
  return (
    <html>
      <body>{children}</body>
    </html>
  );
}
