import { ReactNode } from 'react';
import Typography from './Typography';
import { BsX } from 'react-icons/bs';

interface IProps {
  children: ReactNode;
  cardClasses: string;
  title: string;
  open: boolean;
  onClose: () => void;
}

export default function Modal({ children, cardClasses, title }: IProps) {
  return (
    <div className="flex justify-center items-center z-50 absolute top-0 left-0 h-full w-full">
      <div className={cardClasses}>
        <div className="flex justify-between items-center">
          <Typography variant="h1">{title}</Typography>
          <div className="flex justify-center items-center h-12 w-12 cursor-pointer rounded-full">
            <BsX fontSize={30} />
          </div>
        </div>
        {children}
      </div>
    </div>
  );
}
