import { ReactNode } from 'react';
import '@/assets/styles/global.css';
import Screen from '@/common/Screen';

interface IProps {
  children: ReactNode;
}

export default function RootLayout({ children }: IProps) {
  return (
    <html>
      <body>
        <Screen>{children}</Screen>
      </body>
    </html>
  );
}
