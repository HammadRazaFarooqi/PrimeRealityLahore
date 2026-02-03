import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin } from 'lucide-react';

const footerLinks = {
  properties: [
    { label: 'DHA Properties', href: '/properties?area=DHA' },
    { label: 'Bahria Town', href: '/properties?area=Bahria Town' },
    { label: 'Gulberg', href: '/properties?area=Gulberg' },
    { label: 'Model Town', href: '/properties?area=Model Town' },
  ],
  company: [
    { label: 'About Us', href: '/about' },
    { label: 'Our Properties', href: '/properties' },
    { label: 'Contact', href: '/contact' },
  ],
};

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      {/* Main Footer */}
      <div className="container-luxury section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Link to="/" className="inline-block mb-6">
              <span className="font-serif text-3xl font-semibold">Prime Realty</span>
              <span className="block text-xs uppercase tracking-luxury text-primary-foreground/70 mt-1">
                Lahore
              </span>
            </Link>
            <p className="text-primary-foreground/80 text-sm leading-relaxed mb-6">
              Curating premium investments in Lahore's most prestigious addresses since 2010.
            </p>
            <div className="flex items-center gap-2 text-gold">
              <span className="text-sm font-medium">We don't sell properties.</span>
            </div>
            <div className="text-sm text-primary-foreground/90 italic">
              We curate investments.
            </div>
          </div>

          {/* Properties Links */}
          <div>
            <h4 className="text-label text-primary-foreground/60 mb-6">Prime Locations</h4>
            <ul className="space-y-3">
              {footerLinks.properties.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-primary-foreground/80 hover:text-primary-foreground transition-colors duration-300 text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="text-label text-primary-foreground/60 mb-6">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-primary-foreground/80 hover:text-primary-foreground transition-colors duration-300 text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-label text-primary-foreground/60 mb-6">Contact</h4>
            <ul className="space-y-4">
              <li>
                <a
                  href="tel:+923001234567"
                  className="flex items-start gap-3 text-primary-foreground/80 hover:text-primary-foreground transition-colors duration-300 text-sm"
                >
                  <Phone className="w-4 h-4 mt-0.5 flex-shrink-0" />
                  <span>+92 300 123 4567</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@primerealtylahore.com"
                  className="flex items-start gap-3 text-primary-foreground/80 hover:text-primary-foreground transition-colors duration-300 text-sm"
                >
                  <Mail className="w-4 h-4 mt-0.5 flex-shrink-0" />
                  <span>info@primerealtylahore.com</span>
                </a>
              </li>
              <li>
                <div className="flex items-start gap-3 text-primary-foreground/80 text-sm">
                  <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                  <span>
                    Office 12, Liberty Market,<br />
                    Gulberg III, Lahore
                  </span>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary-foreground/10">
        <div className="container-luxury py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-primary-foreground/60">
            <p>© 2024 Prime Realty Lahore. All rights reserved.</p>
            <p className="text-xs">Crafted with precision for discerning investors</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
