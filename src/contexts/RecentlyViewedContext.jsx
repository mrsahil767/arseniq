import { createContext, useContext, useState, useEffect } from 'react';

const RecentlyViewedContext = createContext();

export function RecentlyViewedProvider({ children }) {
  const [recentlyViewed, setRecentlyViewed] = useState(() => {
    const saved = localStorage.getItem('arseniq_recent');
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem('arseniq_recent', JSON.stringify(recentlyViewed));
  }, [recentlyViewed]);

  const addRecentlyViewed = (product) => {
    setRecentlyViewed((prev) => {
      // Remove if it already exists, then prepend to top
      const filtered = prev.filter(p => p.id !== product.id);
      return [product, ...filtered].slice(0, 5); // Keep strictly the last 5
    });
  };

  return (
    <RecentlyViewedContext.Provider value={{ recentlyViewed, addRecentlyViewed }}>
      {children}
    </RecentlyViewedContext.Provider>
  );
}

export const useRecentlyViewed = () => useContext(RecentlyViewedContext);