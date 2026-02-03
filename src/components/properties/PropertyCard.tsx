import { Link } from 'react-router-dom';
import { MapPin, Bed, Bath, Maximize } from 'lucide-react';
import { Property } from '@/data/properties';
import { cn } from '@/lib/utils';

interface PropertyCardProps {
  property: Property;
  className?: string;
}

export function PropertyCard({ property, className }: PropertyCardProps) {
  return (
    <Link
      to={`/properties/${property.id}`}
      className={cn(
        'group block bg-card rounded-sm overflow-hidden card-hover shadow-luxury',
        className
      )}
    >
      {/* Image Container */}
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={property.images[0]}
          alt={property.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          loading="lazy"
        />
        
        {/* Overlay on Hover */}
        <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/20 transition-colors duration-500" />
        
        {/* Property Type Badge */}
        <div className="absolute top-4 left-4">
          <span className="px-3 py-1.5 bg-primary/90 text-primary-foreground text-xs uppercase tracking-widest font-medium">
            {property.propertyType}
          </span>
        </div>

        {/* Featured Badge */}
        {property.featured && (
          <div className="absolute top-4 right-4">
            <span className="px-3 py-1.5 bg-gold text-white text-xs uppercase tracking-widest font-medium">
              Featured
            </span>
          </div>
        )}

        {/* View Details Overlay */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          <span className="px-6 py-3 bg-white text-primary text-sm uppercase tracking-widest font-medium transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
            View Details
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Location */}
        <div className="flex items-center gap-1.5 text-muted-foreground text-sm mb-2">
          <MapPin className="w-4 h-4" />
          <span>{property.location}</span>
        </div>

        {/* Title */}
        <h3 className="heading-card text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
          {property.title}
        </h3>

        {/* Price */}
        <p className="text-xl font-serif font-semibold text-primary mb-4">
          {property.priceFormatted}
        </p>

        {/* Details */}
        <div className="flex items-center gap-4 pt-4 border-t border-border">
          <div className="flex items-center gap-1.5 text-muted-foreground text-sm">
            <Maximize className="w-4 h-4" />
            <span>{property.size} {property.sizeUnit === 'kanal' ? 'Kanal' : 'Marla'}</span>
          </div>
          
          {property.bedrooms && (
            <div className="flex items-center gap-1.5 text-muted-foreground text-sm">
              <Bed className="w-4 h-4" />
              <span>{property.bedrooms}</span>
            </div>
          )}
          
          {property.bathrooms && (
            <div className="flex items-center gap-1.5 text-muted-foreground text-sm">
              <Bath className="w-4 h-4" />
              <span>{property.bathrooms}</span>
            </div>
          )}
        </div>
      </div>
    </Link>
  );
}
