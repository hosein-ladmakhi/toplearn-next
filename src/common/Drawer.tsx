'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Button from './Button';

const items = [
  {
    href: '/dashboard',
    text: 'Dashboard',
  },
  {
    href: '/dashboard/profile',
    text: 'Profile',
  },
  {
    href: '/dashboard/courses',
    text: 'Courses',
  },
  {
    href: '/dashboard/blogs',
    text: 'Blogs',
  },
];

interface IProps {
  onClose: () => void;
  platform: string;
}

export default function Drawer({ onClose, platform }: IProps) {
  const pathname = usePathname();
  return (
    <div className="p-4 h-full w-full bg-base-200 relative">
      {platform === 'mobile' && (
        <Button onClick={onClose} options="w-full">
          Close Button
        </Button>
      )}

      <ul className="menu h-full text-base-content w-full rounded">
        {items.map((item) => (
          <li
            className={item.href === pathname ? 'text-white' : ''}
            key={item.href}
          >
            <Link href={item.href}>{item.text}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}