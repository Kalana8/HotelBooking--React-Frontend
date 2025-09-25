// Utility: scroll to top on route change
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';

const ScrollToTop = () => {

  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  // Explicitly render nothing
  return null;
};

export default ScrollToTop;
