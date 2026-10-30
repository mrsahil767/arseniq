import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Heart } from 'lucide-react';
import PrimaryButton from './PrimaryButton';
import ProductClassificationBadge from './ProductClassificationBadge';
import { useCart } from '../contexts/CartContext';
import { useFavorites } from '../contexts/FavoritesContext';
import { formatPrice } from '../utils/formatPrice';

export default function ProductCard({ product }) {
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const { toggleFavorite, isFavorite } = useFavorites();
  
  const [added, setAdded] = useState(false);
  const favoriteStatus = isFavorite(product.id);

  const handleToggleFavorite = (e) => {
    e.preventDefault();
    toggleFavorite(product);
  };

  const handleAddToCart = () => {
    addToCart(product);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  const handleImageError = (e) => {
    e.target.src = '/images/fallback.jpg';
  };

  return (
    <div className="group flex flex-col bg-arseniq-card border border-arseniq-border rounded-lg overflow-hidden hover:border-arseniq-olive/50 transition-colors h-full">
      <div className="block relative aspect-square bg-arseniq-primary overflow-hidden border-b border-arseniq-border">
        <button 
          onClick={handleToggleFavorite}
          className="absolute top-3 right-3 z-10 p-2 rounded-full bg-arseniq-secondary/80 text-arseniq-text hover:text-arseniq-lightOlive transition-colors backdrop-blur-sm"
          aria-label="Toggle Favorite"
        >
          <Heart size={18} className={favoriteStatus ? "fill-arseniq-lightOlive text-arseniq-lightOlive" : ""} />
        </button>
        <Link to={`/product/${product.id}`} className="w-full h-full block group-hover:opacity-80 transition-opacity">
          <img 
            src={product.image || '/images/fallback.jpg'} 
            alt={product.name}
            onError={handleImageError}
            className="w-full h-full object-cover"
          />
        </Link>
      </div>
      
      <div className="p-5 flex flex-col flex-grow gap-4">
        <div>
          <div className="flex justify-between items-start gap-2 mb-1">
            <span className="text-xs text-arseniq-olive uppercase tracking-wider">{product.category}</span>
            <span className="text-sm font-semibold text-arseniq-text">{formatPrice(product.price)}</span>
          </div>
          <h3 className="font-heading text-lg text-arseniq-text group-hover:text-arseniq-lightOlive transition-colors line-clamp-1 mb-1">
            {product.name}
          </h3>
          <p className="text-xs text-arseniq-muted mb-2">By {product.manufacturer}</p>
          <ProductClassificationBadge type={product.type} />
        </div>

        <p className="text-sm text-arseniq-muted line-clamp-2 flex-grow">
          {product.description}
        </p>
        
        <div className="mt-2 flex flex-col gap-2">
          <PrimaryButton onClick={handleAddToCart} className="w-full" disabled={added}>
            {added ? 'Added ✓' : 'Add to Demo Cart'}
          </PrimaryButton>
          <PrimaryButton onClick={() => navigate(`/product/${product.id}`)} className="w-full bg-transparent border border-arseniq-olive text-arseniq-lightOlive hover:bg-arseniq-olive/20">
            View Details
          </PrimaryButton>
        </div>
      </div>
    </div>
  );
}