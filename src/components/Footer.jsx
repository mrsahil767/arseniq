import Logo from './Logo';

export default function Footer() {
  return (
    <footer className="bg-arseniq-secondary border-t border-arseniq-olive/20 py-12 mt-auto">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <Logo />
            <p className="text-arseniq-muted text-sm mt-4 max-w-xs">
              Premium showcase for airsoft models and non-functional display collectibles. 
            </p>
          </div>
          <div>
            <h4 className="font-heading text-arseniq-text font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm text-arseniq-muted">
              <li><a href="/catalog" className="hover:text-arseniq-lightOlive transition-colors">Full Catalog</a></li>
              <li><a href="/categories" className="hover:text-arseniq-lightOlive transition-colors">Categories</a></li>
              <li><a href="/about" className="hover:text-arseniq-lightOlive transition-colors">About Us</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-heading text-arseniq-text font-semibold mb-4">Important Notice</h4>
            <p className="text-sm text-arseniq-muted">
              ARSENIQ is a demonstration platform exclusively for airsoft and display replicas. 
              We do not sell real firearms, ammunition, or functional weapon parts.
            </p>
          </div>
        </div>
        
        <div className="border-t border-arseniq-olive/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-arseniq-muted">
            &copy; {new Date().getFullYear()} ARSENIQ Showcase. All rights reserved.
          </p>
          <div className="flex gap-4 text-xs text-arseniq-muted">
            <span className="hover:text-arseniq-lightOlive cursor-pointer transition-colors">Terms of Demo</span>
            <span className="hover:text-arseniq-lightOlive cursor-pointer transition-colors">Privacy</span>
          </div>
        </div>
      </div>
    </footer>
  );
}