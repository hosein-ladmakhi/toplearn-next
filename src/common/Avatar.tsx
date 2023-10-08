import { getMedia } from '@/helpers';
import Image from './Image';

interface IProps {
  path?: string;
}

export default function Avatar({ path }: IProps) {
  return (
    <div className="avatar">
      <div className="w-24 h-24 rounded">
        <Image path={getMedia(path!)} />
      </div>
    </div>
  );
}
