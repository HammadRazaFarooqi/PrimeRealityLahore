import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone } from 'lucide-react';
import { cn } from '@/lib/utils';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/properties', label: 'Properties' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-500',
        isScrolled
          ? 'bg-background/95 backdrop-blur-md shadow-sm py-4'
          : 'bg-transparent py-6'
      )}
    >
      <div className="container-luxury">
        <nav className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex flex-col">
            <span className={cn(
              'font-serif text-2xl md:text-3xl font-semibold tracking-tight transition-colors duration-300',
              isScrolled ? 'text-primary' : 'text-white'
            )}>
              Prime Realty
            </span>
            <span className={cn(
              'text-xs uppercase tracking-luxury transition-colors duration-300',
              isScrolled ? 'text-muted-foreground' : 'text-white/70'
            )}>
              Lahore
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className={cn(
                  'text-sm uppercase tracking-widest font-medium link-underline transition-colors duration-300',
                  location.pathname === link.href
                    ? isScrolled ? 'text-primary' : 'text-white'
                    : isScrolled ? 'text-muted-foreground hover:text-primary' : 'text-white/80 hover:text-white'
                )}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Contact CTA */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href="tel:+923001234567"
              className={cn(
                'flex items-center gap-2 text-sm transition-colors duration-300',
                isScrolled ? 'text-primary' : 'text-white'
              )}
            >
              <Phone className="w-4 h-4" />
              <span className="font-medium">+92 300 123 4567</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={cn(
              'md:hidden p-2 transition-colors duration-300',
              isScrolled ? 'text-primary' : 'text-white'
            )}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </nav>

        {/* Mobile Menu */}
        <div
          className={cn(
            'md:hidden overflow-hidden transition-all duration-500',
            isMobileMenuOpen ? 'max-h-96 opacity-100 mt-6' : 'max-h-0 opacity-0'
          )}
        >
          <div className={cn(
            'py-6 px-4 rounded-lg',
            isScrolled ? 'bg-card' : 'bg-black/30 backdrop-blur-md'
          )}>
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  className={cn(
                    'text-lg font-medium py-2 transition-colors duration-300',
                    location.pathname === link.href
                      ? isScrolled ? 'text-primary' : 'text-white'
                      : isScrolled ? 'text-muted-foreground' : 'text-white/80'
                  )}
                >
                  {link.label}
                </Link>
              ))}
              <a
                href="tel:+923001234567"
                className={cn(
                  'flex items-center gap-2 py-2 mt-2 pt-4 border-t',
                  isScrolled ? 'text-primary border-border' : 'text-white border-white/20'
                )}
              >
                <Phone className="w-5 h-5" />
                <span>+92 300 123 4567</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
