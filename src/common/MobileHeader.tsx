import Typography from './Typography';
import { BsMenuDown as BsMenuAppIcon } from 'react-icons/bs';

interface IProps {
  onOpenDrawer: () => void;
}

export default function MobileHeader({ onOpenDrawer }: IProps) {
  return (
    <div className="flex justify-between items-center">
      <Typography variant="h1">Dashboard</Typography>
      <div
        onClick={onOpenDrawer}
        className="cursor-pointer h-8 w-8 flex justify-center items-center rounded-full"
      >
        <BsMenuAppIcon />
      </div>
    </div>
  );
}
