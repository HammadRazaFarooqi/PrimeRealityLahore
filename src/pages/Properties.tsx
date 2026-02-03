import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { PageLayout } from '@/components/layout';
import { PropertyCard, PropertyFilters } from '@/components/properties';
import { filterProperties, properties } from '@/data/properties';

export default function Properties() {
  const [searchParams] = useSearchParams();
  const [filters, setFilters] = useState({
    location: searchParams.get('area') || 'all',
    propertyType: 'all',
    minPrice: 0,
    maxPrice: 200000000,
  });

  const [filteredProperties, setFilteredProperties] = useState(properties);

  useEffect(() => {
    const result = filterProperties({
      location: filters.location,
      propertyType: filters.propertyType,
      minPrice: filters.minPrice,
      maxPrice: filters.maxPrice,
    });
    setFilteredProperties(result);
  }, [filters]);

  return (
    <PageLayout>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-primary">
        <div className="container-luxury text-center">
          <p className="text-label text-gold mb-4">Our Collection</p>
          <h1 className="heading-display text-primary-foreground mb-6">
            Premium Properties
          </h1>
          <p className="text-xl text-primary-foreground/80 max-w-2xl mx-auto">
            Explore our curated selection of Lahore's finest properties. 
            Each listing is verified and meets our stringent quality standards.
          </p>
        </div>
      </section>

      {/* Filters Section */}
      <section className="py-8 bg-card border-b border-border sticky top-0 z-30">
        <div className="container-luxury">
          <PropertyFilters 
            filters={filters} 
            onFilterChange={setFilters} 
          />
        </div>
      </section>

      {/* Properties Grid */}
      <section className="section-padding bg-background">
        <div className="container-luxury">
          {/* Results Count */}
          <div className="mb-8">
            <p className="text-muted-foreground">
              Showing <span className="text-foreground font-medium">{filteredProperties.length}</span> properties
            </p>
          </div>

          {filteredProperties.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProperties.map((property, index) => (
                <div
                  key={property.id}
                  className="animate-fade-up"
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  <PropertyCard property={property} />
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <h3 className="font-serif text-2xl text-foreground mb-4">
                No Properties Found
              </h3>
              <p className="text-muted-foreground mb-6">
                Try adjusting your filters to see more results.
              </p>
              <button
                onClick={() => setFilters({
                  location: 'all',
                  propertyType: 'all',
                  minPrice: 0,
                  maxPrice: 200000000,
                })}
                className="text-primary font-medium link-underline"
              >
                Clear all filters
              </button>
            </div>
          )}
        </div>
      </section>
    </PageLayout>
  );
}
