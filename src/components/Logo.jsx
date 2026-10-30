import { Link } from 'react-router-dom';

export default function Logo({ onClick }) {
  return (
    <Link 
      to="/" 
      onClick={onClick}
      className="font-heading text-2xl font-bold tracking-widest text-arseniq-text hover:text-arseniq-lightOlive transition-colors"
    >
      ARSENIQ
    </Link>
  );
}