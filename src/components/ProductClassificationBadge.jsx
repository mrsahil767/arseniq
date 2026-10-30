export default function ProductClassificationBadge({ type }) {
  const isAirsoft = type === 'airsoft';
  
  return (
    <span className={`inline-block px-2 py-1 text-[10px] font-bold uppercase tracking-wider rounded border ${
      isAirsoft 
        ? 'bg-arseniq-olive/20 text-arseniq-lightOlive border-arseniq-olive/50' 
        : 'bg-arseniq-secondary text-arseniq-muted border-arseniq-border'
    }`}>
      {isAirsoft ? 'AIRSOFT MODEL' : 'NON-FUNCTIONAL DISPLAY MODEL'}
    </span>
  );
}