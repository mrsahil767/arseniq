import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';

export default function Layout() {
  return (
    <div className="min-h-screen flex flex-col bg-arseniq-primary">
      <Navbar />
      <main className="flex-grow w-full max-w-7xl mx-auto px-4 md:px-8 py-8">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}