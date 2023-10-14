'use client';

import { useEffect, useState } from 'react';

export const useScreenDimention = () => {
  const [height, setHeight] = useState(0);
  const [width, setWidth] = useState(0);

  useEffect(() => {
    setHeight(window.innerHeight);
    setWidth(window.innerWidth);
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
