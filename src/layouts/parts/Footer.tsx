import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Award } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer style={{ background: '#0d0d0d' }} className="border-t border-white/10">
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Link to="/" className="inline-block mb-5">
              <img
                src="/assets/JRP.png"
                alt="JRP Lubricants"
                className="block h-auto max-h-10 w-auto max-w-full object-contain"
              />
            </Link>
            <p className="text-sm text-white/50 leading-relaxed mb-6">
              Gujarat-based manufacturer of high-performance industrial oils, automotive lubricants, and specialty greases — a brand of Jay Trading Company.
            </p>
            <div className="flex gap-3">
              <div className="flex items-center gap-1.5 px-3 py-1.5 border border-white/20 text-xs font-bold tracking-widest uppercase text-white/60">
                <Award size={12} className="text-primary" />
                ISO 9001
              </div>
              <div className="flex items-center gap-1.5 px-3 py-1.5 border border-white/20 text-xs font-bold tracking-widest uppercase text-white/60">
                <Award size={12} className="text-primary" />
                ISO 14001
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xs font-bold tracking-widest uppercase text-primary mb-5">Quick Links</h4>
            <nav className="flex flex-col gap-3" aria-label="Footer links">
              {[
                { href: '/products', label: 'Products' },
                { href: '/about', label: 'About Us' },
                { href: '/export', label: 'Export & Global Reach' },
                { href: '/contact', label: 'Contact Us' },
              ].map((item) => (
                <Link
                  key={item.href}
                  to={item.href}
                  className="text-sm text-white/50 hover:text-white transition-colors"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-xs font-bold tracking-widest uppercase text-primary mb-5">Products</h4>
            <div className="flex flex-col gap-3">
              {[
                'Industrial Oils',
                'Automotive Lubricants',
                'Specialty Greases',
                'Marine & Heavy-Duty',
                'Hydraulic Fluids',
              ].map((item) => (
                <Link
                  key={item}
                  to="/products"
                  className="text-sm text-white/50 hover:text-white transition-colors"
                >
                  {item}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xs font-bold tracking-widest uppercase text-primary mb-5">Contact</h4>
            <div className="flex flex-col gap-4">
              <div className="flex items-start gap-3">
                <MapPin size={14} className="text-primary mt-0.5 shrink-0" />
                <span className="text-sm text-white/50 leading-relaxed">
                  Jay Trading Co., Navagam, Rajkot, Gujarat, India
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Phone size={14} className="text-primary shrink-0" />
                <a href="tel:+919033076190" className="text-sm text-white/50 hover:text-white transition-colors">
                  +91 90330 76190
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail size={14} className="text-primary shrink-0" />
                <a href="mailto:jaytradingco1810@gmail.com" className="text-sm text-white/50 hover:text-white transition-colors">
                  jaytradingco1810@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-6 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-white/30">
            © {currentYear} JRP Lubricants — Jay Trading Company. All rights reserved. | Made in Gujarat, India
          </p>
          <div className="flex gap-6">
            <Link to="/privacy" className="text-xs text-white/30 hover:text-white/60 transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-xs text-white/30 hover:text-white/60 transition-colors">
              Terms of Use
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
