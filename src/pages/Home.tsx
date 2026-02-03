import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Shield, Clock, Sparkles, ChevronDown } from 'lucide-react';
import { PageLayout } from '@/components/layout';
import { PropertyCard } from '@/components/properties';
import { getFeaturedProperties, primeLocations } from '@/data/properties';
import { Button } from '@/components/ui/button';

export default function Home() {
  const featuredProperties = getFeaturedProperties();
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Animate elements on scroll
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-up');
        }
      });
    }, observerOptions);

    document.querySelectorAll('.scroll-animate').forEach(el => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const scrollToContent = () => {
    window.scrollTo({
      top: window.innerHeight - 100,
      behavior: 'smooth'
    });
  };

  return (
    <PageLayout>
      {/* Hero Section with Video Background */}
      <section ref={heroRef} className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Video Background */}
        <video
          autoPlay
          muted
          loop
          playsInline
          className="video-background"
          poster="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1920"
        >
          <source
            src="https://cdn.coverr.co/videos/coverr-aerial-view-of-luxury-villas-5925/1080p.mp4"
            type="video/mp4"
          />
        </video>

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/70" />

        {/* Hero Content */}
        <div className="relative z-10 container-luxury text-center text-white">
          <p className="text-label text-white/80 mb-6 animate-fade-up">
            Prime Realty Lahore
          </p>
          <h1 className="heading-display text-white mb-6 animate-fade-up-delay-1">
            Premium Properties in
            <br />
            <span className="text-gold-gradient">the Heart of Lahore</span>
          </h1>
          <p className="text-xl md:text-2xl text-white/80 max-w-2xl mx-auto mb-10 font-light animate-fade-up-delay-2">
            We don't sell properties. We curate investments.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-up-delay-3">
            <Button asChild className="btn-luxury bg-white text-primary hover:bg-white/90">
              <Link to="/properties">
                Explore Properties
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
            <Button asChild variant="outline" className="btn-luxury border-white text-white hover:bg-white hover:text-primary">
              <Link to="/contact">
                Book Consultation
              </Link>
            </Button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <button
          onClick={scrollToContent}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white animate-bounce cursor-pointer"
          aria-label="Scroll to content"
        >
          <ChevronDown className="w-8 h-8" />
        </button>
      </section>

      {/* Philosophy Section */}
      <section className="section-padding bg-background">
        <div className="container-luxury">
          <div className="max-w-4xl mx-auto text-center scroll-animate opacity-0">
            <p className="text-label text-gold mb-6">Our Philosophy</p>
            <h2 className="heading-section text-foreground mb-8">
              Curating Exceptional Investments
              <br />
              for Discerning Clients
            </h2>
            <p className="text-body text-muted-foreground max-w-3xl mx-auto">
              For over a decade, Prime Realty Lahore has been the trusted partner for high-net-worth 
              individuals and overseas investors seeking premium properties in Pakistan's cultural capital. 
              Our meticulous approach ensures every property meets the highest standards of quality, 
              location, and investment potential.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Properties Section */}
      <section className="section-padding bg-secondary">
        <div className="container-luxury">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12 scroll-animate opacity-0">
            <div>
              <p className="text-label text-gold mb-4">Featured Collection</p>
              <h2 className="heading-section text-foreground">
                Handpicked Properties
              </h2>
            </div>
            <Link
              to="/properties"
              className="mt-6 md:mt-0 text-primary font-medium link-underline inline-flex items-center gap-2"
            >
              View All Properties
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProperties.map((property, index) => (
              <div
                key={property.id}
                className="scroll-animate opacity-0"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <PropertyCard property={property} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Prime Locations Section */}
      <section className="section-padding bg-background">
        <div className="container-luxury">
          <div className="text-center mb-16 scroll-animate opacity-0">
            <p className="text-label text-gold mb-4">Prime Locations</p>
            <h2 className="heading-section text-foreground">
              Lahore's Most Prestigious Addresses
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {primeLocations.map((location, index) => (
              <Link
                key={location.name}
                to={`/properties?area=${encodeURIComponent(location.name.split(' ')[0])}`}
                className="group relative aspect-[4/3] overflow-hidden rounded-sm scroll-animate opacity-0"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <img
                  src={location.image}
                  alt={location.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="font-serif text-2xl text-white mb-2">{location.name}</h3>
                  <p className="text-white/70 text-sm">{location.description}</p>
                </div>
                <div className="absolute inset-0 border-2 border-transparent group-hover:border-gold transition-colors duration-500 rounded-sm" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="section-padding bg-primary text-primary-foreground">
        <div className="container-luxury">
          <div className="text-center mb-16 scroll-animate opacity-0">
            <p className="text-label text-gold mb-4">Why Prime Realty</p>
            <h2 className="heading-section">
              The Difference is in the Details
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
            <div className="text-center scroll-animate opacity-0">
              <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-gold/20 flex items-center justify-center">
                <Shield className="w-8 h-8 text-gold" />
              </div>
              <h3 className="font-serif text-2xl mb-4">Trust & Transparency</h3>
              <p className="text-primary-foreground/70 leading-relaxed">
                Complete documentation, verified properties, and honest guidance. 
                Your investment security is our priority.
              </p>
            </div>

            <div className="text-center scroll-animate opacity-0" style={{ animationDelay: '0.1s' }}>
              <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-gold/20 flex items-center justify-center">
                <Clock className="w-8 h-8 text-gold" />
              </div>
              <h3 className="font-serif text-2xl mb-4">A Decade of Experience</h3>
              <p className="text-primary-foreground/70 leading-relaxed">
                10+ years navigating Lahore's real estate landscape with 
                deep market insights and proven expertise.
              </p>
            </div>

            <div className="text-center scroll-animate opacity-0" style={{ animationDelay: '0.2s' }}>
              <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-gold/20 flex items-center justify-center">
                <Sparkles className="w-8 h-8 text-gold" />
              </div>
              <h3 className="font-serif text-2xl mb-4">Curated Excellence</h3>
              <p className="text-primary-foreground/70 leading-relaxed">
                We don't list everything. Only properties that meet our 
                stringent standards make the collection.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-secondary">
        <div className="container-luxury">
          <div className="max-w-3xl mx-auto text-center scroll-animate opacity-0">
            <p className="text-label text-gold mb-6">Ready to Invest?</p>
            <h2 className="heading-section text-foreground mb-8">
              Let's Find Your Perfect Property
            </h2>
            <p className="text-body text-muted-foreground mb-10">
              Book a private consultation with our expert advisors. We'll understand 
              your requirements and present properties that align with your vision.
            </p>
            <Button asChild className="btn-luxury-primary">
              <Link to="/contact">
                Book a Consultation
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
