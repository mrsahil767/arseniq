
import { Link } from 'react-router-dom';
import { Trash2, Plus, Minus, ArrowRight, Info } from 'lucide-react';

import { useCart } from '../contexts/CartContext';
import PrimaryButton from '../components/PrimaryButton';
import ProductClassificationBadge from '../components/ProductClassificationBadge';
import { formatPrice } from '../utils/formatPrice';

export default function Cart() {
  const {
    cart,
    updateQuantity,
    removeFromCart,
    clearCart,
    cartTotal
  } = useCart();

  // Empty Cart
  if (cart.length === 0) {
    return (
      <div className="w-full py-24 flex flex-col items-center justify-center bg-arseniq-secondary border border-dashed border-arseniq-olive/20 rounded-xl mt-4">

        <h1 className="font-heading text-3xl text-arseniq-text mb-4">
          Demo Cart is Empty
        </h1>

        <p className="text-arseniq-muted mb-8 text-center max-w-md">
          You haven't added any display models or replicas to your demonstration cart yet.
        </p>

        <PrimaryButton>
          <Link to="/catalog">
            Explore Collection
          </Link>
        </PrimaryButton>

      </div>
    );
  }

  return (
    <div className="w-full flex flex-col gap-10 pb-16">

      {/* Cart Header */}
      <div className="border-b border-arseniq-olive/20 pb-6 mt-4">

        <h1 className="font-heading text-4xl text-arseniq-text font-bold mb-2">
          Demo Cart
        </h1>

        <p className="text-arseniq-muted">
          Review your selected showcase items.
        </p>

      </div>

      <div className="flex flex-col lg:flex-row gap-12">

        {/* Cart Items List */}
        <div className="w-full lg:w-2/3 flex flex-col gap-6">

          {/* Clear Cart Button */}
          <div className="flex justify-end mb-2">

            <button
              onClick={clearCart}
              className="text-sm text-arseniq-muted hover:text-red-400 transition-colors underline underline-offset-4"
            >
              Clear Entire Cart
            </button>

          </div>

          {/* Individual Cart Items */}
          {cart.map((item) => (

            <div
              key={item.id}
              className="flex flex-col sm:flex-row gap-6 bg-arseniq-secondary border border-arseniq-olive/10 rounded-lg p-4 relative"
            >

              {/* Product Thumbnail */}
              <Link
                to={`/product/${item.id}`}
                className="w-24 h-24 sm:w-32 sm:h-32 flex-shrink-0 bg-arseniq-primary border border-arseniq-border rounded block overflow-hidden hover:border-arseniq-olive/50 transition-colors"
              >
                <img
                  src={item.image || '/images/fallback.jpg'}
                  alt={item.name}
                  onError={(e) => {
                    e.currentTarget.onerror = null;
                    e.currentTarget.src = '/images/fallback.jpg';
                  }}
                  className="w-full h-full object-cover"
                />
              </Link>

              {/* Product Information */}
              <div className="flex-1 flex flex-col justify-between gap-4">

                <div className="flex justify-between items-start gap-4">

                  <div>

                    <Link
                      to={`/product/${item.id}`}
                      className="font-heading text-lg text-arseniq-text hover:text-arseniq-lightOlive transition-colors"
                    >
                      {item.name}
                    </Link>

                    <div className="mt-2">
                      <ProductClassificationBadge type={item.type} />
                    </div>

                  </div>

                  {/* UPDATED: Product Total Price */}
                  <div className="sm:text-right flex-shrink-0">
                    <p className="font-heading text-lg text-arseniq-text">
                      {formatPrice(item.price * item.quantity)}
                    </p>
                  </div>

                </div>

                {/* Quantity and Remove Controls */}
                <div className="flex justify-between items-center border-t border-arseniq-olive/10 pt-4 mt-auto">

                  {/* Quantity Controls */}
                  <div className="flex items-center gap-4 bg-arseniq-primary rounded border border-arseniq-olive/20 px-2 py-1">

                    <button
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      className="p-1 text-arseniq-muted hover:text-arseniq-lightOlive transition-colors"
                      aria-label="Decrease quantity"
                    >
                      <Minus size={16} />
                    </button>

                    <span className="w-8 text-center text-sm font-semibold text-arseniq-text">
                      {item.quantity}
                    </span>

                    <button
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      className="p-1 text-arseniq-muted hover:text-arseniq-lightOlive transition-colors"
                      aria-label="Increase quantity"
                    >
                      <Plus size={16} />
                    </button>

                  </div>

                  {/* Remove Product */}
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="flex items-center gap-2 text-sm text-arseniq-muted hover:text-red-400 transition-colors"
                  >
                    <Trash2 size={16} />
                    <span className="hidden sm:inline">
                      Remove
                    </span>
                  </button>

                </div>

              </div>

            </div>

          ))}

        </div>

        {/* Demo Checkout Summary */}
        <div className="w-full lg:w-1/3">

          <div className="bg-arseniq-secondary border border-arseniq-olive/20 rounded-lg p-6 sticky top-24">

            <h2 className="font-heading text-xl text-arseniq-text border-b border-arseniq-olive/10 pb-4 mb-4">
              Demonstration Summary
            </h2>

            {/* UPDATED: Price Breakdown */}
            <div className="space-y-3 text-sm text-arseniq-muted mb-6">

              <div className="flex justify-between">

                <span>Subtotal</span>

                <span className="text-arseniq-text">
                  {formatPrice(cartTotal)}
                </span>

              </div>

              <div className="flex justify-between">

                <span>Shipping (Demo)</span>

                <span className="text-arseniq-text">
                  {formatPrice(0)}
                </span>

              </div>

              <div className="border-t border-arseniq-border pt-3 mt-3 flex justify-between items-center font-heading text-base sm:text-lg text-arseniq-lightOlive">

                <span>Total</span>

                <span>
                  {formatPrice(cartTotal)}
                </span>

              </div>

            </div>

            {/* Demo Mode Notice */}
            <div className="bg-arseniq-primary/50 border border-arseniq-olive/10 p-4 rounded text-xs text-arseniq-muted flex gap-3 mb-6">

              <Info
                size={24}
                className="text-arseniq-olive flex-shrink-0"
              />

              <p>
                <strong>Demo Mode Active:</strong> This is a frontend demonstration.
                No real transactions, firearm acquisitions, or checkout flows are processed here.
              </p>

            </div>

            {/* Checkout Button */}
            <PrimaryButton
              className="w-full flex items-center justify-center gap-2"
              disabled={true}
            >
              Simulate Checkout
              <ArrowRight size={16} />
            </PrimaryButton>

            {/* Continue Shopping */}
            <div className="mt-4 text-center">

              <Link
                to="/catalog"
                className="text-sm text-arseniq-olive hover:text-arseniq-lightOlive transition-colors"
              >
                Continue Browsing
              </Link>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
}
