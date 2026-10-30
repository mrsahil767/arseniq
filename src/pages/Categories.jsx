import { useNavigate } from 'react-router-dom';
import PrimaryButton from '../components/PrimaryButton';
import ProductCard from '../components/ProductCard';
import productsData from '../data/products.json';

const CATEGORY_METADATA = [
  {
    id: "handguns",
    title: "Handguns",
    description: "Precision-crafted sidearm models for tactical training, sport, and cinematic display.",
    image: "/images/categories/handguns.jpg"
  },
  {
    id: "revolvers",
    title: "Revolvers",
    description: "Classic and modern wheel-gun models featuring authentic weight and cylinder actions.",
    image: "/images/categories/revolvers.jpg"
  },
  {
    id: "rifles",
    title: "Rifles",
    description: "Full-scale assault and battle rifle static models for comprehensive man-cave collections.",
    image: "/images/categories/rifles.jpg"
  },
  {
    id: "shotguns",
    title: "Shotguns",
    description: "Pump-action and semi-automatic scattergun airsoft models with realistic handling profiles.",
    image: "/images/categories/shotguns.jpg"
  },
  {
    id: "machine-guns",
    title: "Machine Guns",
    description: "Heavy-duty squad support weapon props for the ultimate collector or cinematic set.",
    image: "/images/categories/machine-guns.jpg"
  },
  {
    id: "sniper-rifles",
    title: "Sniper Rifles",
    description: "Long-range precision rifle models featuring intricate, non-firing bolt action mechanisms.",
    image: "/images/categories/snipers.jpg"
  }
];

export default function Categories() {
  const navigate = useNavigate();

  return (
    <div className="w-full flex flex-col gap-20 pb-16">
      <div className="border-b border-arseniq-border pb-6 mt-4">
        <h1 className="font-heading text-4xl md:text-5xl text-arseniq-text font-bold mb-4">
          Model Categories
        </h1>
        <p className="text-arseniq-muted text-lg max-w-3xl">
          Explore our extensive catalog organized by platform type. From precision sport sidearms to heavy-duty display props, find the exact model to complete your collection.
        </p>
      </div>

      <div className="flex flex-col gap-24">
        {CATEGORY_METADATA.map((category) => {
          const categoryProducts = productsData.filter(p => p.categoryId === category.id);
          const previewProducts = categoryProducts.slice(0, 3);
          
          return (
            <section key={category.id} className="flex flex-col gap-8">
              <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
                <div>
                  <h2 className="font-heading text-3xl md:text-4xl text-arseniq-text font-semibold mb-2">
                    {category.title}
                  </h2>
                  <p className="text-arseniq-muted mb-2 max-w-2xl">
                    {category.description}
                  </p>
                  <span className="text-sm font-semibold text-arseniq-lightOlive uppercase tracking-wider">
                    {categoryProducts.length} Models Available
                  </span>
                </div>
                <PrimaryButton onClick={() => navigate(`/catalog?category=${category.id}`)} className="whitespace-nowrap">
                  Explore {category.title}
                </PrimaryButton>
              </div>

              <div className="w-full h-64 md:h-80 lg:h-96 bg-arseniq-primary border border-arseniq-border rounded-xl flex items-center justify-center relative overflow-hidden group cursor-pointer"
                   onClick={() => navigate(`/catalog?category=${category.id}`)}>
                <img 
                  src={category.image} 
                  alt={category.title} 
                  onError={(e) => { e.target.src = '/images/fallback-banner.jpg'; }}
                  className="absolute inset-0 w-full h-full object-cover z-0 opacity-60 group-hover:opacity-80 transition-opacity duration-300"
                />
                <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(17,23,19,0.3),rgba(11,15,12,0.9))] z-10" />
                <h3 className="relative z-20 text-arseniq-text font-heading tracking-[0.2em] text-3xl uppercase group-hover:text-arseniq-lightOlive transition-colors">
                  {category.title}
                </h3>
              </div>

              {previewProducts.length > 0 ? (
                <div>
                  <h3 className="text-sm text-arseniq-muted uppercase tracking-wider mb-4 border-b border-arseniq-border pb-2">
                    Featured in this category
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {previewProducts.map(product => (
                      <ProductCard key={product.id} product={product} />
                    ))}
                  </div>
                </div>
              ) : (
                <div className="p-8 border border-dashed border-arseniq-border rounded-lg text-center bg-arseniq-card">
                  <p className="text-arseniq-muted text-sm">More models arriving soon for this category.</p>
                </div>
              )}
            </section>
          );
        })}
      </div>
    </div>
  );
}