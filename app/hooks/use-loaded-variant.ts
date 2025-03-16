import { useLayoutEffect } from 'react';

export const useLoadedVariant = () => {
  useLayoutEffect(() => {
    document.documentElement.classList.add('loaded');
  }, []);
};
