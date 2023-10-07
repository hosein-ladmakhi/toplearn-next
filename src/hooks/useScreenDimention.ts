'use client';

import { useEffect, useState } from 'react';

export const useScreenDimention = () => {
  const [height, setHeight] = useState(window.innerHeight);
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleDimention = () => {
      setHeight(window.innerHeight);
      setWidth(window.innerWidth);
    };
    window.addEventListener('resize', handleDimention);
    return () => {
      window.removeEventListener('resize', handleDimention);
    };
  }, []);

  return { height, width };
};
