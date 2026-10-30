import { useState, useEffect } from 'react';

export function useCart() {
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    const handleStorage = () => {
      const cart = JSON.parse(localStorage.getItem('arseniq_cart') || '[]');
      const count = cart.reduce((total, item) => total + (item.quantity || 1), 0);
      setCartCount(count);
    };
    handleStorage();
    window.addEventListener('storage', handleStorage);
    // Custom event for same-tab updates
    window.addEventListener('cartUpdated', handleStorage);
    return () => {
      window.removeEventListener('storage', handleStorage);
      window.removeEventListener('cartUpdated', handleStorage);
    };
  }, []);

  return { cartCount };
}