'use client';

import { useEffect, useState } from 'react';
import { BsImage as BsImageIcon } from 'react-icons/bs';

interface IProps {
  path: string;
  additionalClass?: string;
}

export default function Image({ path, additionalClass = '' }: IProps) {
  const [src, setSrc] = useState<string>();
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<boolean>(false);

  useEffect(() => {
    setLoading(true);
    fetch(path, { cache: 'no-cache' })
      .then((res) => res.blob())
      .then((data) => {
        setSrc(URL.createObjectURL(data));
        return data;
      })
      .catch(() => setError(true))
      .finally(() => setLoading(false));
  }, [path]);

  if (error) {
    return (
      <div className="rounded w-full h-full bg-gray-700 flex justify-center items-center">
        <BsImageIcon fontSize={30} />
      </div>
    );
  }

  if (loading) {
    return (
      <div className="rounded w-full h-full bg-gray-700 flex justify-center items-center">
        <span className="loading loading-infinity loading-lg"></span>
      </div>
    );
  }

  return (
    <img
      onError={() => setError(true)}
      className={'w-full h-full'.concat(additionalClass)}
      src={src}
    />
  );
}
