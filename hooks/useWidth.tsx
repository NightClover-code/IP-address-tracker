import { MutableRefObject, useEffect, useState } from 'react';

export const useWidth = (target: MutableRefObject<HTMLDivElement | null>) => {
  const [width, setWidth] = useState<number | null>(null);

  useEffect(() => {
    const updateSize = () => {
      if (target.current) setWidth(target.current?.clientWidth);
    };

    updateSize();

    window.addEventListener('resize', updateSize);

    return () => window.removeEventListener('resize', updateSize);
  }, [target]);

  return width;
};
