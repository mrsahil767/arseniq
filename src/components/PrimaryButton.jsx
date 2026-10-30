export default function PrimaryButton({ children, onClick, className = '', type = 'button', disabled = false }) {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`px-6 py-2 bg-arseniq-olive text-arseniq-primary font-heading font-semibold text-sm uppercase tracking-wide rounded hover:bg-arseniq-lightOlive transition-colors disabled:opacity-50 disabled:cursor-not-allowed ${className}`}
    >
      {children}
    </button>
  );
}