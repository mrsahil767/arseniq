import { useState, useEffect } from 'react';

export function useFavorites() {
  const [favoritesCount, setFavoritesCount] = useState(0);

  useEffect(() => {
    const handleStorage = () => {
      const favorites = JSON.parse(localStorage.getItem('arseniq_favorites') || '[]');
      setFavoritesCount(favorites.length);
    };
    handleStorage();
    window.addEventListener('storage', handleStorage);
    window.addEventListener('favoritesUpdated', handleStorage);
    return () => {
      window.removeEventListener('storage', handleStorage);
      window.removeEventListener('favoritesUpdated', handleStorage);
    };
  }, []);

  return { favoritesCount };
}