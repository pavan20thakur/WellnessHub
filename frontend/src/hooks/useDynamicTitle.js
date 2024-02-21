import {useEffect} from 'react';

export const useDynamicTitle = (pageTitle, defaultTitle="Wellness Hub") => {
  useEffect(() => {
    document.title = pageTitle;
    return () => {
      document.title = defaultTitle;
    }
  });
  return null;
}

