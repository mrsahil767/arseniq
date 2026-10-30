import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search } from 'lucide-react';

export default function SearchBar() {
  const [query, setQuery] = useState('');
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (query.trim()) {
      navigate(`/catalog?q=${encodeURIComponent(query.trim())}`);
      setQuery(''); 
    }
  };

  return (
    <form onSubmit={handleSearch} className="relative flex items-center w-full max-w-sm">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search models..."
        className="w-full bg-arseniq-primary border border-arseniq-border text-arseniq-text text-sm rounded px-4 py-2 pl-10 focus:outline-none focus:border-arseniq-lightOlive transition-colors placeholder:text-arseniq-muted"
      />
      <button type="submit" aria-label="Submit search" className="absolute left-3 text-arseniq-muted hover:text-arseniq-lightOlive transition-colors">
        <Search size={16} />
      </button>
    </form>
  );
}