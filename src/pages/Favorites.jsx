import { Link } from 'react-router-dom';
import PrimaryButton from '../components/PrimaryButton';
import ProductCard from '../components/ProductCard';
import { useFavorites } from '../contexts/FavoritesContext';

export default function Favorites() {
  const { favorites } = useFavorites();

  return (
    <div className="w-full flex flex-col gap-10 pb-16">
      
      {/* Page Header */}
      <div className="border-b border-arseniq-olive/20 pb-6 mt-4">
        <h1 className="font-heading text-4xl text-arseniq-text font-bold mb-2">Saved Models</h1>
        <p className="text-arseniq-muted">
          Your curated selection of airsoft models and non-functional display pieces.
        </p>
      </div>

      {/* Grid or Empty State */}
      {favorites.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {favorites.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <div className="w-full py-24 flex flex-col items-center justify-center bg-arseniq-secondary border border-dashed border-arseniq-olive/20 rounded-xl">
          <h2 className="font-heading text-2xl text-arseniq-lightOlive mb-4">No Saved Models</h2>
          <p className="text-arseniq-muted mb-8 text-center max-w-sm">
            You have not added any items to your favorites yet. Browse the catalog to curate your collection.
          </p>
          <PrimaryButton>
            <Link to="/catalog">Explore Collection</Link>
          </PrimaryButton>
        </div>
      )}
      
    </div>
  );
}