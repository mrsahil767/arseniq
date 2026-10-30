
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Heart, ShoppingBag, Clock, Settings, LayoutDashboard } from 'lucide-react';
import { useUser } from '../contexts/UserContext';
import { useFavorites } from '../contexts/FavoritesContext';
import { useCart } from '../contexts/CartContext';
import { useRecentlyViewed } from '../contexts/RecentlyViewedContext';
import ProductCard from '../components/ProductCard';
import PrimaryButton from '../components/PrimaryButton';
import { formatPrice } from '../utils/formatPrice';

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState('settings');
  const navigate = useNavigate();

  const { user, updateUser, resetUser } = useUser();
  const { favorites, favoritesCount } = useFavorites();
  const { cart, cartCount } = useCart();
  const { recentlyViewed } = useRecentlyViewed();

  const [formData, setFormData] = useState({ name: user.name, email: user.email });
  const [saveMessage, setSaveMessage] = useState('');

  const handleSaveProfile = (e) => {
    e.preventDefault();
    updateUser(formData);
    setSaveMessage('Profile settings saved locally.');
    setTimeout(() => setSaveMessage(''), 3000);
  };

  const tabs = [
    { id: 'overview', label: 'Overview', icon: LayoutDashboard },
    { id: 'favorites', label: 'My Favorites', icon: Heart },
    { id: 'cart', label: 'Cart Summary', icon: ShoppingBag },
    { id: 'recent', label: 'Recently Viewed', icon: Clock },
    { id: 'settings', label: 'Account Settings', icon: Settings },
  ];

  return (
    /* FIXED: Using CSS Grid to enforce a strict left/right layout on desktop, preventing any overlap */
    <div className="w-full grid grid-cols-1 lg:grid-cols-[16rem_1fr] gap-8 items-start pb-16 mt-4">

      {/* Sidebar Navigation */}
      <aside className="w-full flex flex-col gap-4 lg:sticky lg:top-24">

        <div className="bg-arseniq-card border border-arseniq-border rounded-xl p-6 hidden lg:flex flex-col items-center text-center gap-3 w-full shadow-lg">
          <div className="w-16 h-16 rounded-full bg-arseniq-primary border border-arseniq-olive text-arseniq-lightOlive flex items-center justify-center text-2xl font-heading font-bold">
            {user.name.charAt(0)}
          </div>
          <div>
            <p className="font-heading text-arseniq-text">{user.name}</p>
            <p className="text-xs text-arseniq-muted">Demo Profile</p>
          </div>
        </div>

        <nav className="flex flex-row lg:flex-col gap-2 overflow-x-auto w-full hide-scrollbar pb-2 lg:pb-0">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;

            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center justify-center lg:justify-start gap-3 px-4 py-3 rounded-lg transition-colors whitespace-nowrap lg:whitespace-normal flex-shrink-0 ${
                  isActive
                    ? 'bg-arseniq-olive/20 text-arseniq-lightOlive border border-arseniq-olive/50'
                    : 'bg-arseniq-card text-arseniq-muted hover:text-arseniq-text hover:bg-arseniq-secondary border border-transparent'
                }`}
              >
                <Icon size={18} className="flex-shrink-0" />
                <span className="text-sm font-medium">{tab.label}</span>
              </button>
            );
          })}
        </nav>
      </aside>

      {/* Main Content Area */}
      <main className="w-full min-w-0 bg-arseniq-secondary border border-arseniq-border rounded-xl p-6 sm:p-8 min-h-[500px] shadow-lg">

        {/* OVERVIEW TAB */}
        {activeTab === 'overview' && (
          <div className="flex flex-col gap-8">
            <div className="border-b border-arseniq-border pb-6">
              <h1 className="font-heading text-3xl text-arseniq-text font-bold mb-2">
                Welcome back, {user.name}
              </h1>
              <p className="text-arseniq-muted text-sm">
                Demo account created on {user.joined}
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="bg-arseniq-card border border-arseniq-border rounded-lg p-6 flex flex-col gap-2">
                <Heart className="text-arseniq-olive mb-2" size={24} />
                <span className="text-3xl font-heading text-arseniq-text">{favoritesCount}</span>
                <span className="text-sm text-arseniq-muted">Saved Favorites</span>
              </div>

              <div className="bg-arseniq-card border border-arseniq-border rounded-lg p-6 flex flex-col gap-2">
                <ShoppingBag className="text-arseniq-olive mb-2" size={24} />
                <span className="text-3xl font-heading text-arseniq-text">{cartCount}</span>
                <span className="text-sm text-arseniq-muted">Items in Demo Cart</span>
              </div>

              <div className="bg-arseniq-card border border-arseniq-border rounded-lg p-6 flex flex-col gap-2">
                <Clock className="text-arseniq-olive mb-2" size={24} />
                <span className="text-3xl font-heading text-arseniq-text">{recentlyViewed.length}</span>
                <span className="text-sm text-arseniq-muted">Recently Viewed</span>
              </div>
            </div>
          </div>
        )}

        {/* FAVORITES TAB */}
        {activeTab === 'favorites' && (
          <div className="flex flex-col gap-6">
            <h2 className="font-heading text-2xl text-arseniq-text border-b border-arseniq-border pb-4">
              My Favorites
            </h2>

            {favorites.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                {favorites.map(product => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            ) : (
              <div className="py-12 text-center bg-arseniq-card border border-dashed border-arseniq-border rounded-lg">
                <p className="text-arseniq-muted">No models saved to favorites.</p>
                <button
                  onClick={() => navigate('/catalog')}
                  className="mt-4 text-sm text-arseniq-olive hover:text-arseniq-lightOlive underline"
                >
                  Browse Catalog
                </button>
              </div>
            )}
          </div>
        )}

        {/* CART SUMMARY TAB */}
        {activeTab === 'cart' && (
          <div className="flex flex-col gap-6">
            <h2 className="font-heading text-2xl text-arseniq-text border-b border-arseniq-border pb-4">
              Cart Summary
            </h2>

            {cart.length > 0 ? (
              <div className="flex flex-col gap-4">
                {cart.map(item => (
                  <div
                    key={item.id}
                    className="flex flex-col sm:flex-row items-start sm:items-center gap-4 bg-arseniq-card border border-arseniq-border p-4 rounded-lg"
                  >
                    <div className="w-16 h-16 bg-arseniq-primary border border-arseniq-border rounded flex-shrink-0">
                      <img
                        src={item.image || '/images/fallback.jpg'}
                        alt={item.name}
                        className="w-full h-full object-cover rounded"
                        onError={(e) => {
                          e.target.src = '/images/fallback.jpg';
                        }}
                      />
                    </div>

                    <div className="flex-1 min-w-0 w-full">
                      <h4 className="font-heading text-arseniq-text truncate">
                        {item.name}
                      </h4>
                      <p className="text-sm text-arseniq-muted">
                        Qty: {item.quantity}
                      </p>
                    </div>

                    <div className="sm:text-right flex-shrink-0">
                      <p className="font-heading text-arseniq-text">
                        {formatPrice(item.price * item.quantity)}
                      </p>
                    </div>
                  </div>
                ))}

                <div className="mt-4">
                  <PrimaryButton onClick={() => navigate('/cart')}>
                    Manage Full Cart
                  </PrimaryButton>
                </div>
              </div>
            ) : (
              <div className="py-12 text-center bg-arseniq-card border border-dashed border-arseniq-border rounded-lg">
                <p className="text-arseniq-muted">Your demo cart is empty.</p>
              </div>
            )}
          </div>
        )}

        {/* RECENTLY VIEWED TAB */}
        {activeTab === 'recent' && (
          <div className="flex flex-col gap-6">
            <h2 className="font-heading text-2xl text-arseniq-text border-b border-arseniq-border pb-4">
              Recently Viewed
            </h2>

            {recentlyViewed.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                {recentlyViewed.map(product => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            ) : (
              <div className="py-12 text-center bg-arseniq-card border border-dashed border-arseniq-border rounded-lg">
                <p className="text-arseniq-muted">
                  You haven't viewed any specific models yet.
                </p>
              </div>
            )}
          </div>
        )}

        {/* SETTINGS TAB */}
        {activeTab === 'settings' && (
          <div className="flex flex-col gap-6 max-w-lg">
            <h2 className="font-heading text-2xl text-arseniq-text border-b border-arseniq-border pb-4">
              Account Settings
            </h2>

            <form
              onSubmit={handleSaveProfile}
              className="flex flex-col gap-5 bg-arseniq-card border border-arseniq-border p-6 rounded-xl"
            >
              <div className="flex flex-col gap-2">
                <label className="text-sm text-arseniq-muted font-medium">
                  Display Name
                </label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="bg-arseniq-primary border border-arseniq-border rounded px-4 py-2 text-arseniq-text focus:outline-none focus:border-arseniq-olive transition-colors w-full"
                  required
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-sm text-arseniq-muted font-medium">
                  Demo Email Address
                </label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="bg-arseniq-primary border border-arseniq-border rounded px-4 py-2 text-arseniq-text focus:outline-none focus:border-arseniq-olive transition-colors w-full"
                  required
                />
              </div>

              {saveMessage && (
                <p className="text-sm text-arseniq-lightOlive">{saveMessage}</p>
              )}

              <PrimaryButton type="submit" className="mt-2 w-full sm:w-auto self-start">
                Save Changes
              </PrimaryButton>
            </form>

            <div className="mt-8 pt-6 border-t border-arseniq-border">
              <h3 className="text-lg text-arseniq-text font-heading mb-2">
                Reset Profile
              </h3>
              <p className="text-sm text-arseniq-muted mb-4">
                Revert your demonstration profile back to its original state.
              </p>

              <button
                onClick={() => {
                  resetUser();
                  setFormData({
                    name: 'Demo Collector',
                    email: 'collector@demo.com'
                  });
                }}
                className="text-sm text-red-400 border border-red-900 bg-red-950/20 hover:bg-red-900/40 px-4 py-2 rounded transition-colors self-start inline-flex"
              >
                Reset Demo Account
              </button>
            </div>
          </div>
        )}

      </main>
    </div>
  );
}
