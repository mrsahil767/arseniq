import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Heart, User } from 'lucide-react';
import Logo from './Logo';
import SearchBar from './SearchBar';
import CartIcon from './CartIcon';
import { useFavorites } from '../contexts/FavoritesContext';

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const { favoritesCount } = useFavorites();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Catalog', path: '/catalog' },
    { name: 'Categories', path: '/categories' },
    { name: 'About', path: '/about' },
  ];

  const isActive = (path) => location.pathname === path;
  const closeMenu = () => setIsMobileMenuOpen(false);

  return (
    <nav className="sticky top-0 z-50 w-full bg-arseniq-secondary/95 backdrop-blur-sm border-b border-arseniq-border">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between h-16">
          
          <div className="flex items-center gap-8">
            <Logo onClick={closeMenu} />
            <div className="hidden lg:flex items-center gap-6">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`text-sm font-medium transition-colors ${
                    isActive(link.path) ? 'text-arseniq-lightOlive' : 'text-arseniq-text hover:text-arseniq-lightOlive'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          <div className="hidden lg:flex items-center gap-6">
            <SearchBar />
            <div className="flex items-center gap-2">
              <Link to="/dashboard" className={`p-2 transition-colors ${isActive('/dashboard') ? 'text-arseniq-lightOlive' : 'text-arseniq-text hover:text-arseniq-lightOlive'}`}>
                <User size={20} strokeWidth={1.5} />
              </Link>
              <Link to="/favorites" className="relative p-2 text-arseniq-text hover:text-arseniq-lightOlive transition-colors">
                <Heart size={20} strokeWidth={1.5} />
                {favoritesCount > 0 && (
                  <span className="absolute top-0 right-0 flex h-4 w-4 items-center justify-center rounded-full bg-arseniq-olive text-[10px] font-bold text-arseniq-primary">
                    {favoritesCount}
                  </span>
                )}
              </Link>
              <CartIcon />
            </div>
          </div>

          <div className="flex items-center gap-2 lg:hidden">
            <CartIcon />
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-arseniq-text hover:text-arseniq-lightOlive transition-colors"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="lg:hidden border-t border-arseniq-border bg-arseniq-secondary">
          <div className="px-4 pt-4 pb-6 space-y-2">
            <div className="pb-4">
              <SearchBar />
            </div>
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={closeMenu}
                className={`block px-4 py-3 text-base font-medium rounded-md ${
                  isActive(link.path) ? 'text-arseniq-lightOlive bg-arseniq-primary/50' : 'text-arseniq-text hover:text-arseniq-lightOlive hover:bg-arseniq-primary/30'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <div className="border-t border-arseniq-border my-2 pt-2">
              <Link to="/dashboard" onClick={closeMenu} className="flex items-center gap-2 px-4 py-3 text-base font-medium text-arseniq-text hover:text-arseniq-lightOlive hover:bg-arseniq-primary/30 rounded-md">
                <User size={18} /> My Dashboard
              </Link>
              <Link to="/favorites" onClick={closeMenu} className="flex items-center gap-2 px-4 py-3 text-base font-medium text-arseniq-text hover:text-arseniq-lightOlive hover:bg-arseniq-primary/30 rounded-md">
                <Heart size={18} /> Favorites 
                {favoritesCount > 0 && <span className="bg-arseniq-olive text-arseniq-primary px-2 py-0.5 rounded-full text-xs ml-2">{favoritesCount}</span>}
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}