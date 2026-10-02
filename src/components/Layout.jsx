import { useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import SearchModal from './SearchModal';
import DeviceModal from './DeviceModal';

export default function Layout() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isDeviceOpen, setIsDeviceOpen] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setIsSearchOpen((prev) => !prev);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <div className="page-wrapper">
      <Navbar
        onOpenSearch={() => setIsSearchOpen(true)}
        onOpenDevice={() => setIsDeviceOpen(true)}
      />

      <main>
        <Outlet />
      </main>

      <Footer />

      <SearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
      />
      <DeviceModal
        isOpen={isDeviceOpen}
        onClose={() => setIsDeviceOpen(false)}
      />
    </div>
  );
}
