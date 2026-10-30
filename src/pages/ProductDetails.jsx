
import { useState, useEffect, useMemo } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, Heart, ShieldCheck, Info } from 'lucide-react';

import PrimaryButton from '../components/PrimaryButton';
import ProductClassificationBadge from '../components/ProductClassificationBadge';
import ProductCard from '../components/ProductCard';

import productsData from '../data/products.json';

import { useCart } from '../contexts/CartContext';
import { useFavorites } from '../contexts/FavoritesContext';
import { useRecentlyViewed } from '../contexts/RecentlyViewedContext';

import { formatPrice } from '../utils/formatPrice';

export default function ProductDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  const { addToCart } = useCart();
  const { toggleFavorite, isFavorite } = useFavorites();
  const { addRecentlyViewed } = useRecentlyViewed();

  const [product, setProduct] = useState(null);
  const [selectedImage, setSelectedImage] = useState(0);
  const [addedToCart, setAddedToCart] = useState(false);

  // Find Product Using Route ID
  useEffect(() => {
    const foundProduct = productsData.find(
      p => String(p.id) === String(id)
    );

    setProduct(foundProduct || null);
    setSelectedImage(0);
    setAddedToCart(false);

    if (foundProduct) {
      addRecentlyViewed(foundProduct);
    }

    window.scrollTo(0, 0);
  }, [id]);

  // Related Products
  const relatedProducts = useMemo(() => {
    if (!product) return [];

    return productsData
      .filter(
        p =>
          p.category === product.category &&
          String(p.id) !== String(product.id)
      )
      .slice(0, 3);
  }, [product]);

  // Add Product to Global Cart
  const handleAddToCart = () => {
    if (!product || addedToCart) return;

    addToCart(product);

    setAddedToCart(true);

    setTimeout(() => {
      setAddedToCart(false);
    }, 2000);
  };

  // Handle Missing Images
  const handleImageError = (e) => {
    e.currentTarget.onerror = null;
    e.currentTarget.src = '/images/fallback.jpg';
  };

  // Product Not Found
  if (!product) {
    return (
      <div className="w-full py-24 flex flex-col items-center justify-center bg-arseniq-secondary border border-dashed border-arseniq-olive/20 rounded-xl mt-4">

        <h1 className="font-heading text-3xl text-arseniq-text mb-4">
          Model Not Found
        </h1>

        <p className="text-arseniq-muted mb-8 text-center max-w-md">
          The requested display model could not be located in our catalog.
        </p>

        <PrimaryButton onClick={() => navigate('/catalog')}>
          Return to Catalog
        </PrimaryButton>

      </div>
    );
  }

  // Generate Dynamic Product Gallery Images
  const baseImagePath = product.image
    ? product.image.replace(/\.jpg$/i, '')
    : '';

  const galleryImages = [
    product.image || '/images/fallback.jpg',
    baseImagePath ? `${baseImagePath}-2.jpg` : '/images/fallback.jpg',
    baseImagePath ? `${baseImagePath}-3.jpg` : '/images/fallback.jpg',
    baseImagePath ? `${baseImagePath}-4.jpg` : '/images/fallback.jpg'
  ];

  return (
    <div className="w-full flex flex-col gap-16 pb-16">

      {/* Back Navigation */}
      <div className="pt-4">
        <button
          onClick={() => navigate('/catalog')}
          className="flex items-center gap-2 text-sm text-arseniq-muted hover:text-arseniq-lightOlive transition-colors"
        >
          <ArrowLeft size={16} />
          Back to Catalog
        </button>
      </div>

      {/* Main Product Layout */}
      <div className="flex flex-col lg:flex-row gap-12 items-start">

        {/* Product Image Gallery */}
        <div className="w-full lg:w-1/2 flex flex-col gap-4">

          {/* Main Product Image */}
          <div className="w-full aspect-[4/3] bg-arseniq-primary border border-arseniq-border rounded-xl flex items-center justify-center relative overflow-hidden">

            <img
              src={galleryImages[selectedImage]}
              alt={`${product.name} - View ${selectedImage + 1}`}
              onError={handleImageError}
              className="w-full h-full object-cover"
            />

          </div>

          {/* Gallery Thumbnails */}
          <div className="grid grid-cols-4 gap-4">

            {galleryImages.map((imgSrc, index) => (
              <button
                key={index}
                onClick={() => setSelectedImage(index)}
                className={`w-full aspect-square rounded-lg border overflow-hidden transition-all ${
                  selectedImage === index
                    ? 'border-arseniq-olive opacity-100'
                    : 'border-arseniq-border opacity-50 hover:opacity-100 hover:border-arseniq-olive/50'
                }`}
              >

                <img
                  src={imgSrc}
                  alt={`Thumbnail ${index + 1}`}
                  onError={handleImageError}
                  className="w-full h-full object-cover"
                />

              </button>
            ))}

          </div>
        </div>

        {/* Product Information */}
        <div className="w-full lg:w-1/2 flex flex-col gap-8">

          {/* Product Heading */}
          <div className="flex flex-col gap-4">

            <div className="flex items-center justify-between">

              <span className="text-sm text-arseniq-olive uppercase tracking-widest font-semibold">
                {product.category}
              </span>

              {/* UPDATED: Centralized Price Formatting */}
              <span className="font-heading text-2xl text-arseniq-text">
                {formatPrice(product.price)}
              </span>

            </div>

            <h1 className="font-heading text-4xl md:text-5xl text-arseniq-text font-bold leading-tight">
              {product.name}
            </h1>

            {/* Product Classification */}
            <div className="flex items-center gap-4 flex-wrap">

              <ProductClassificationBadge type={product.type} />

              {product.manufacturer && (
                <span className="text-sm text-arseniq-muted flex items-center gap-1">
                  <ShieldCheck size={16} className="text-arseniq-olive" />
                  By {product.manufacturer}
                </span>
              )}

            </div>
          </div>

          {/* Product Description */}
          <div className="bg-arseniq-card border border-arseniq-border rounded-lg p-5">

            <p className="text-arseniq-text leading-relaxed">
              {product.description}
            </p>

          </div>

          {/* Product Specifications */}
          <div className="space-y-4">

            <div className="flex items-center gap-2 text-arseniq-text font-heading text-lg">
              <Info size={20} className="text-arseniq-olive" />
              Appearance & Display Specifications
            </div>

            <ul className="list-disc list-inside text-sm text-arseniq-muted space-y-2 ml-1">

              <li>
                Constructed with premium synthetic and alloy materials for authentic static weight.
              </li>

              <li>
                Features an anodized, highly detailed exterior finish suitable for macro photography.
              </li>

              <li>
                Strictly non-functional/replica mechanism design; cannot be converted to fire live ammunition.
              </li>

              <li>
                Designed exclusively for safe demonstration, competitive sport, or collector display cases.
              </li>

            </ul>
          </div>

          {/* Cart and Favorites Buttons */}
          <div className="flex items-center gap-4 pt-4 border-t border-arseniq-border">

            {/* Add to Cart */}
            <PrimaryButton
              onClick={handleAddToCart}
              className="flex-1 py-4 text-base"
              disabled={addedToCart}
            >
              {addedToCart
                ? 'Added to Demo Cart ✓'
                : 'Add to Demo Cart'}
            </PrimaryButton>

            {/* Add to Favorites */}
            <button
              onClick={() => toggleFavorite(product)}
              className={`p-4 rounded border transition-colors flex items-center justify-center ${
                isFavorite(product.id)
                  ? 'bg-arseniq-olive/20 border-arseniq-olive text-arseniq-lightOlive'
                  : 'bg-arseniq-secondary border-arseniq-border text-arseniq-text hover:border-arseniq-olive/60'
              }`}
              title="Toggle Favorite"
              aria-label="Toggle Favorite"
            >

              <Heart
                size={24}
                className={
                  isFavorite(product.id)
                    ? "fill-arseniq-lightOlive"
                    : ""
                }
              />

            </button>

          </div>
        </div>
      </div>

      {/* Related Products */}
      {relatedProducts.length > 0 && (

        <div className="pt-16 border-t border-arseniq-border mt-8">

          <h2 className="font-heading text-3xl text-arseniq-text mb-8">
            Similar Models in {product.category}
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

            {relatedProducts.map(related => (
              <ProductCard
                key={related.id}
                product={related}
              />
            ))}

          </div>

        </div>

      )}

    </div>
  );
}
