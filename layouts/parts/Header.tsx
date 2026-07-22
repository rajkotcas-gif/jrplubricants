import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Header() {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { href: '/products', label: 'Products' },
    { href: '/about', label: 'About' },
    { href: '/export', label: 'Export' },
    { href: '/contact', label: 'Contact' },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-white/10" style={{ background: '#0d0d0d' }}>
      <div className="container mx-auto px-6">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center shrink-0 min-w-0">
            <img
              src="/assets/JRP.png"
              alt="JRP Lubricants"
              className="block h-auto max-h-10 md:max-h-12 w-auto max-w-full object-contain self-center"
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8" aria-label="Main navigation">
            {navItems.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                className={`text-sm font-semibold tracking-widest uppercase transition-colors ${
                  location.pathname === item.href
                    ? 'text-primary'
                    : 'text-white/70 hover:text-white'
                }`}
              >
                {item.label}
              </Link>
            ))}
            <Link
              to="/contact"
              className="ml-4 px-5 py-2.5 text-sm font-bold tracking-widest uppercase text-white transition-all hover:opacity-90 active:scale-95"
              style={{ background: '#D4620A' }}
            >
              Request Quote
            </Link>
          </nav>

          {/* Mobile Toggle */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-white/70 hover:text-white transition-colors"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-white/10 py-4">
            <nav className="flex flex-col gap-1" aria-label="Mobile navigation">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  to={item.href}
                  className="text-sm font-semibold tracking-widest uppercase text-white/70 hover:text-white py-3 px-2 transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <Link
                to="/contact"
                className="mt-3 px-5 py-3 text-sm font-bold tracking-widest uppercase text-white text-center transition-all hover:opacity-90"
                style={{ background: '#D4620A' }}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Request Quote
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
