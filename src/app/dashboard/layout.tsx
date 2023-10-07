import { ReactNode } from 'react';

interface IProps {
  children: ReactNode;
}

export default function RootDashboardLayout({ children }: IProps) {
  return <div className="p-5">{children}</div>;
}
