import { ShoppingBag } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useCart } from '../contexts/CartContext';

export default function CartIcon() {
  const { cartCount } = useCart();
  
  return (
    <Link to="/cart" className="relative p-2 text-arseniq-text hover:text-arseniq-lightOlive transition-colors">
      <ShoppingBag size={20} strokeWidth={1.5} />
      {cartCount > 0 && (
        <span className="absolute top-0 right-0 flex h-4 w-4 items-center justify-center rounded-full bg-arseniq-olive text-[10px] font-bold text-arseniq-primary">
          {cartCount > 99 ? '99+' : cartCount}
        </span>
      )}
    </Link>
  );
}