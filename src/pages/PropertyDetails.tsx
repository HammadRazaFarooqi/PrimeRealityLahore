import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, MapPin, Bed, Bath, Maximize, Check, Phone } from 'lucide-react';
import { PageLayout } from '@/components/layout';
import { ImageGallery } from '@/components/properties';
import { ContactForm } from '@/components/forms';
import { getPropertyById, getFeaturedProperties } from '@/data/properties';
import { PropertyCard } from '@/components/properties';
import { Button } from '@/components/ui/button';

export default function PropertyDetails() {
  const { id } = useParams<{ id: string }>();
  const property = getPropertyById(id || '');
  const similarProperties = getFeaturedProperties().filter(p => p.id !== id).slice(0, 3);

  if (!property) {
    return (
      <PageLayout>
        <section className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h1 className="font-serif text-4xl text-foreground mb-4">Property Not Found</h1>
            <p className="text-muted-foreground mb-8">
              The property you're looking for doesn't exist or has been removed.
            </p>
            <Button asChild className="btn-luxury-primary">
              <Link to="/properties">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Properties
              </Link>
            </Button>
          </div>
        </section>
      </PageLayout>
    );
  }

  return (
    <PageLayout>
      {/* Breadcrumb */}
      <section className="pt-28 pb-8 bg-secondary">
        <div className="container-luxury">
          <Link 
            to="/properties" 
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Properties
          </Link>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 bg-background">
        <div className="container-luxury">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Left Column - Images & Details */}
            <div className="lg:col-span-2 space-y-10">
              {/* Image Gallery */}
              <ImageGallery images={property.images} title={property.title} />

              {/* Property Header */}
              <div>
                <div className="flex items-center gap-2 text-muted-foreground mb-3">
                  <MapPin className="w-4 h-4" />
                  <span>{property.location}</span>
                </div>
                <h1 className="heading-section text-foreground mb-4">{property.title}</h1>
                <p className="text-3xl font-serif font-semibold text-primary">
                  {property.priceFormatted}
                </p>
              </div>

              {/* Key Details */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 p-6 bg-secondary rounded-sm">
                <div className="text-center">
                  <Maximize className="w-6 h-6 mx-auto text-gold mb-2" />
                  <p className="text-sm text-muted-foreground mb-1">Size</p>
                  <p className="font-semibold text-foreground">
                    {property.size} {property.sizeUnit === 'kanal' ? 'Kanal' : 'Marla'}
                  </p>
                </div>
                <div className="text-center">
                  <span className="inline-block w-6 h-6 mx-auto text-gold mb-2 text-center font-bold">
                    ⌂
                  </span>
                  <p className="text-sm text-muted-foreground mb-1">Type</p>
                  <p className="font-semibold text-foreground capitalize">{property.propertyType}</p>
                </div>
                {property.bedrooms && (
                  <div className="text-center">
                    <Bed className="w-6 h-6 mx-auto text-gold mb-2" />
                    <p className="text-sm text-muted-foreground mb-1">Bedrooms</p>
                    <p className="font-semibold text-foreground">{property.bedrooms}</p>
                  </div>
                )}
                {property.bathrooms && (
                  <div className="text-center">
                    <Bath className="w-6 h-6 mx-auto text-gold mb-2" />
                    <p className="text-sm text-muted-foreground mb-1">Bathrooms</p>
                    <p className="font-semibold text-foreground">{property.bathrooms}</p>
                  </div>
                )}
              </div>

              {/* Description */}
              <div>
                <h2 className="font-serif text-2xl text-foreground mb-4">About This Property</h2>
                <p className="text-body text-muted-foreground leading-relaxed">
                  {property.description}
                </p>
              </div>

              {/* Features */}
              <div>
                <h2 className="font-serif text-2xl text-foreground mb-6">Features & Amenities</h2>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {property.features.map((feature, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <div className="w-6 h-6 rounded-full bg-gold/20 flex items-center justify-center flex-shrink-0">
                        <Check className="w-3 h-3 text-gold" />
                      </div>
                      <span className="text-foreground text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Location Map */}
              <div>
                <h2 className="font-serif text-2xl text-foreground mb-6">Location</h2>
                <div className="aspect-video rounded-sm overflow-hidden bg-muted">
                  <iframe
                    src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3403.8!2d${property.coordinates.lng}!3d${property.coordinates.lat}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzHCsDI4JzEwLjkiTiA3NMKwMjQnMjIuNyJF!5e0!3m2!1sen!2s!4v1600000000000!5m2!1sen!2s`}
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title={`Map showing ${property.location}`}
                  />
                </div>
                <p className="mt-4 text-muted-foreground">
                  {property.location}, Lahore, Pakistan
                </p>
              </div>
            </div>

            {/* Right Column - Contact Form */}
            <div className="lg:col-span-1">
              <div className="sticky top-32">
                <div className="bg-card rounded-sm p-8 shadow-luxury">
                  <h3 className="font-serif text-2xl text-foreground mb-2">
                    Interested in this property?
                  </h3>
                  <p className="text-muted-foreground text-sm mb-8">
                    Fill out the form below and our team will contact you shortly.
                  </p>
                  <ContactForm propertyTitle={property.title} />
                  
                  <div className="mt-8 pt-8 border-t border-border">
                    <p className="text-sm text-muted-foreground mb-4">Or call us directly:</p>
                    <a
                      href="tel:+923001234567"
                      className="flex items-center justify-center gap-2 w-full py-4 bg-secondary hover:bg-muted text-foreground rounded-sm transition-colors"
                    >
                      <Phone className="w-4 h-4" />
                      <span className="font-medium">+92 300 123 4567</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Similar Properties */}
      {similarProperties.length > 0 && (
        <section className="section-padding bg-secondary">
          <div className="container-luxury">
            <div className="flex items-end justify-between mb-12">
              <div>
                <p className="text-label text-gold mb-4">More Options</p>
                <h2 className="heading-section text-foreground">Similar Properties</h2>
              </div>
              <Link
                to="/properties"
                className="text-primary font-medium link-underline hidden md:inline-block"
              >
                View All
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {similarProperties.map((prop) => (
                <PropertyCard key={prop.id} property={prop} />
              ))}
            </div>
          </div>
        </section>
      )}
    </PageLayout>
  );
}
