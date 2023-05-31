import { useCallback, useEffect, useState } from 'react';

export function useLowerBarHeight(elm: HTMLDivElement | null) {
  const [lowerBarHeight, setLowerBarHeight] = useState<number>(0);

  const addBarHeight = useCallback(() => {
    if (elm) {
      const height = document.body.clientHeight - elm.getBoundingClientRect().y - window.scrollY;
      setLowerBarHeight(height);
    }
  }, [elm]);
  const onWindowResize = useCallback(() => {
    addBarHeight();
  }, [addBarHeight]);

  useEffect(() => {
    addBarHeight();
    window.addEventListener('resize', onWindowResize);

    return function () {
      window.removeEventListener('resize', onWindowResize);
    };
  }, [addBarHeight, onWindowResize]);

  return {
    lowerBarHeight,
  };
}
