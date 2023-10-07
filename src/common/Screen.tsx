import { ReactNode } from 'react';

interface IProps {
  children: ReactNode;
}

export default function Screen({ children }: IProps) {
  return (
    <div className="absolute top-0 left-0 h-full w-full flex justify-center items-center flex-col">
      {children}
    </div>
  );
}
