import { useState, useMemo, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Search, SlidersHorizontal } from 'lucide-react';
import ProductCard from '../components/ProductCard';
import productsData from '../data/products.json';

const CATEGORIES = [
  { id: "all", label: "All Categories" },
  { id: "handguns", label: "Handguns" },
  { id: "revolvers", label: "Revolvers" },
  { id: "rifles", label: "Rifles" },
  { id: "shotguns", label: "Shotguns" },
  { id: "machine-guns", label: "Machine Guns" },
  { id: "sniper-rifles", label: "Sniper Rifles" }
];

const CLASSIFICATIONS = [
  { label: "All Types", value: "all" },
  { label: "Airsoft Models", value: "airsoft" },
  { label: "Display Models", value: "display" }
];

export default function Catalog() {
  const [searchParams] = useSearchParams();
  
  const initialCategory = searchParams.get('category') || "all";
  const initialSearch = searchParams.get('q') || "";

  const [searchTerm, setSearchTerm] = useState(initialSearch);
  const [selectedCategory, setSelectedCategory] = useState(initialCategory);
  const [selectedType, setSelectedType] = useState("all");
  const [sortOrder, setSortOrder] = useState("a-z");
  const [showMobileFilters, setShowMobileFilters] = useState(false);

  useEffect(() => {
    const categoryFromUrl = searchParams.get('category');
    if (categoryFromUrl && CATEGORIES.some(c => c.id === categoryFromUrl)) {
      setSelectedCategory(categoryFromUrl);
    }
    
    const queryFromUrl = searchParams.get('q');
    if (queryFromUrl !== null) {
      setSearchTerm(queryFromUrl);
    }
  }, [searchParams]);

  const filteredProducts = useMemo(() => {
    let results = productsData;

    if (searchTerm) {
      results = results.filter(p => p.name.toLowerCase().includes(searchTerm.toLowerCase()));
    }
    if (selectedCategory !== "all") {
      results = results.filter(p => p.categoryId === selectedCategory);
    }
    if (selectedType !== "all") {
      results = results.filter(p => p.type === selectedType);
    }

    results.sort((a, b) => {
      if (sortOrder === "a-z") return a.name.localeCompare(b.name);
      if (sortOrder === "z-a") return b.name.localeCompare(a.name);
      return 0;
    });

    return results;
  }, [searchTerm, selectedCategory, selectedType, sortOrder]);

  return (
    <div className="w-full flex flex-col md:flex-row gap-8 pb-12">
      <button 
        onClick={() => setShowMobileFilters(!showMobileFilters)}
        className="md:hidden flex items-center justify-center gap-2 w-full py-3 bg-arseniq-secondary border border-arseniq-border rounded text-arseniq-text font-heading"
      >
        <SlidersHorizontal size={18} />
        {showMobileFilters ? "Hide Filters" : "Show Filters"}
      </button>

      <aside className={`${showMobileFilters ? 'block' : 'hidden'} md:block w-full md:w-64 flex-shrink-0 space-y-8`}>
        <div>
          <h3 className="font-heading text-arseniq-text text-lg mb-3">Search</h3>
          <div className="relative">
            <input
              type="text"
              placeholder="Model name..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-arseniq-primary border border-arseniq-border text-arseniq-text text-sm rounded px-4 py-2 pl-10 focus:outline-none focus:border-arseniq-lightOlive transition-colors"
            />
            <Search size={16} className="absolute left-3 top-2.5 text-arseniq-muted" />
          </div>
        </div>

        <div>
          <h3 className="font-heading text-arseniq-text text-lg mb-3">Categories</h3>
          <div className="flex flex-col gap-2">
            {CATEGORIES.map(category => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`text-left text-sm py-1 px-2 rounded transition-colors ${
                  selectedCategory === category.id 
                    ? 'bg-arseniq-olive/20 text-arseniq-lightOlive border-l-2 border-arseniq-lightOlive' 
                    : 'text-arseniq-muted hover:text-arseniq-text hover:bg-arseniq-secondary'
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>

        <div>
          <h3 className="font-heading text-arseniq-text text-lg mb-3">Classification</h3>
          <div className="flex flex-col gap-2">
            {CLASSIFICATIONS.map(type => (
              <button
                key={type.value}
                onClick={() => setSelectedType(type.value)}
                className={`text-left text-sm py-1 px-2 rounded transition-colors ${
                  selectedType === type.value 
                    ? 'bg-arseniq-olive/20 text-arseniq-lightOlive border-l-2 border-arseniq-lightOlive' 
                    : 'text-arseniq-muted hover:text-arseniq-text hover:bg-arseniq-secondary'
                }`}
              >
                {type.label}
              </button>
            ))}
          </div>
        </div>
      </aside>

      <div className="flex-1 flex flex-col gap-6">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 bg-arseniq-secondary p-4 rounded border border-arseniq-border">
          <p className="text-arseniq-muted text-sm">
            Showing <span className="text-arseniq-text font-semibold">{filteredProducts.length}</span> results
          </p>
          <div className="flex items-center gap-3 w-full sm:w-auto">
            <label className="text-sm text-arseniq-muted whitespace-nowrap">Sort by:</label>
            <select 
              value={sortOrder}
              onChange={(e) => setSortOrder(e.target.value)}
              className="bg-arseniq-primary border border-arseniq-border text-arseniq-text text-sm rounded px-3 py-1.5 focus:outline-none focus:border-arseniq-lightOlive w-full sm:w-auto"
            >
              <option value="a-z">Alphabetical (A-Z)</option>
              <option value="z-a">Alphabetical (Z-A)</option>
            </select>
          </div>
        </div>

        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="w-full flex flex-col items-center justify-center py-24 px-4 bg-arseniq-secondary rounded border border-dashed border-arseniq-border">
            <p className="text-arseniq-lightOlive text-lg font-heading mb-2">No models found</p>
            <p className="text-arseniq-muted text-sm text-center">
              There are no products matching your current filters.
            </p>
            <button 
              onClick={() => {
                setSearchTerm("");
                setSelectedCategory("all");
                setSelectedType("all");
              }}
              className="mt-6 text-sm text-arseniq-olive hover:text-arseniq-lightOlive underline underline-offset-4"
            >
              Clear all filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
}