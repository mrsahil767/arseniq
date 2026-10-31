import { Link, useNavigate } from 'react-router-dom';
import PrimaryButton from '../components/PrimaryButton';
import CategoryCard from '../components/CategoryCard';
import ProductCard from '../components/ProductCard';
import productsData from '../data/products.json';

export default function Home() {
  const navigate = useNavigate();
  const featuredProducts = productsData.slice(0, 4);

  const categories = [
    { title: "Rifles", count: 12, path: "/catalog?category=rifles" },
    { title: "Handguns", count: 8, path: "/catalog?category=handguns" },
    { title: "Sniper Rifles", count: 5, path: "/catalog?category=sniper-rifles" },
    { title: "Shotguns", count: 7, path: "/catalog?category=shotguns" },
    { title: "Machine Guns", count: 15, path: "/catalog?category=machine-guns" },
    { title: "Revolvers", count: 24, path: "/catalog?category=revolvers" },
  ];

  return (
    <div className="w-full flex flex-col gap-20 pb-12">
      <section className="relative w-full h-[70vh] min-h-[500px] flex items-center justify-center bg-arseniq-secondary border border-arseniq-border rounded-2xl overflow-hidden mt-4">
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(11,15,12,0.3),rgba(11,15,12,1))] z-10" />
        <div className="absolute inset-0 flex items-center justify-center opacity-10">
          <span className="text-arseniq-text tracking-widest text-sm uppercase">Cinematic Visual Placeholder</span>
        </div>
        
        <div className="relative z-20 text-center px-4 max-w-4xl mx-auto flex flex-col items-center gap-6">
          <h1 className="font-heading text-4xl sm:text-5xl md:text-7xl lg:text-8xl text-arseniq-text font-bold tracking-tighter leading-tight drop-shadow-lg">
            Precision Meets Design.
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-arseniq-lightOlive max-w-2xl font-light">
            Premium showcase for meticulously crafted airsoft models and non-functional display collectibles. Engineering excellence for collectors.
          </p>
          <div className="mt-4">
            <PrimaryButton onClick={() => navigate('/catalog')} className="px-8 py-3 text-base">
              Explore Collection
            </PrimaryButton>
          </div>
        </div>
      </section>

      <section>
        <div className="flex justify-between items-end mb-8 border-b border-arseniq-border pb-4">
          <h2 className="font-heading text-2xl sm:text-3xl text-arseniq-text">Featured Collections</h2>
          <Link to="/categories" className="text-xs sm:text-sm font-semibold text-arseniq-olive hover:text-arseniq-lightOlive transition-colors uppercase tracking-wider">
            View All
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((cat, index) => (
            <CategoryCard 
              key={index}
              title={cat.title} 
              count={cat.count} 
              path={cat.path} 
            />
          ))}
        </div>
      </section>

      <section>
        <div className="flex justify-between items-end mb-8 border-b border-arseniq-border pb-4">
          <h2 className="font-heading text-2xl sm:text-3xl text-arseniq-text">New Arrivals</h2>
          <Link to="/catalog" className="text-xs sm:text-sm font-semibold text-arseniq-olive hover:text-arseniq-lightOlive transition-colors uppercase tracking-wider">
            Shop Catalog
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      <section className="bg-arseniq-secondary border border-arseniq-border rounded-2xl p-6 sm:p-8 md:p-16 flex flex-col lg:flex-row gap-12 items-center">
        <div className="flex-1 space-y-6 text-center lg:text-left">
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl text-arseniq-text font-bold tracking-tight">
            Uncompromising Detail.
          </h2>
          <p className="text-arseniq-muted text-base sm:text-lg leading-relaxed">
            At ARSENIQ, we curate only the highest fidelity airsoft models and display models. Every piece in our collection represents the pinnacle of manufacturing precision, designed for enthusiasts who demand authenticity without compromise.
          </p>
          <p className="text-arseniq-muted text-base sm:text-lg leading-relaxed border-l-2 border-arseniq-olive pl-4 text-left mx-auto lg:mx-0 max-w-xl">
            Our commitment to safety is absolute. All items showcased are strictly for demonstration, sport, or display purposes.
          </p>
          <div className="pt-4">
            <PrimaryButton onClick={() => navigate('/about')} className="bg-transparent border border-arseniq-olive text-arseniq-lightOlive hover:bg-arseniq-olive/10 w-full sm:w-auto">
              Read Our Story
            </PrimaryButton>
          </div>
        </div>
        <div className="flex-1 w-full aspect-square max-h-[400px] lg:max-h-[500px] bg-arseniq-primary border border-arseniq-border rounded-xl flex items-center justify-center relative overflow-hidden group">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(120,134,90,0.1),transparent_70%)]" />
          <span className="text-arseniq-muted/50 tracking-widest text-xs sm:text-sm uppercase group-hover:text-arseniq-olive transition-colors">
            Brand Visual Showcase
          </span>
        </div>
      </section>
    </div>
  );
}