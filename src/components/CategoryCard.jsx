import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function CategoryCard({ title, path, count }) {
  return (
    <Link 
      to={path}
      className="group relative flex items-end p-6 h-48 bg-arseniq-card border border-arseniq-border rounded-lg overflow-hidden hover:border-arseniq-olive/50 transition-all"
    >
      <div className="absolute inset-0 bg-gradient-to-t from-arseniq-primary/90 to-transparent z-10" />
      
      <div className="relative z-20 w-full flex justify-between items-end">
        <div>
          <h3 className="font-heading text-xl text-arseniq-text group-hover:text-arseniq-lightOlive transition-colors">
            {title}
          </h3>
          <p className="text-sm text-arseniq-muted mt-1">{count} Models</p>
        </div>
        <ArrowRight size={20} className="text-arseniq-olive transform group-hover:translate-x-1 transition-transform" />
      </div>
    </Link>
  );
}