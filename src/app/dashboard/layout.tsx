'use client';

import { ReactNode, useState } from 'react';
import Drawer from '@/common/Drawer';
import { usePlatform } from '@/hooks/usePlatform';
import { useScreenDimention } from '@/hooks/useScreenDimention';
import MobileHeader from '@/common/MobileHeader';

interface IProps {
  children: ReactNode;
}

export default function RootDashboardLayout({ children }: IProps) {
  const { height } = useScreenDimention();
  const platform = usePlatform();
  const [isMobileDrawerOpen, setMobileDrawerOpen] = useState<boolean>(false);

  return (
    <div className="p-5 w-full pb-20" style={{ height }}>
      {platform === 'mobile' && (
        <MobileHeader onOpenDrawer={() => setMobileDrawerOpen(true)} />
      )}
      <div className="gap-10 flex justify-start items-start h-full w-full">
        <div
          className={`h-full md:w-2/12 md:relative absolute top-0 left-0 ${
            isMobileDrawerOpen ? 'w-6/12' : 'w-0'
          } overflow-hidden`}
        >
          <Drawer
            platform={platform}
            onClose={() => setMobileDrawerOpen(false)}
          />
        </div>
        <div className="h-full md:w-10/12 w-full overflow-auto scroll-smooth">
          {children}
        </div>
      </div>
    </div>
  );
}
