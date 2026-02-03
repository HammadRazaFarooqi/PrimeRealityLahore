import { useState } from 'react';
import { Search, SlidersHorizontal, X } from 'lucide-react';
import { locations, propertyTypes } from '@/data/properties';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface PropertyFiltersProps {
  filters: {
    location: string;
    propertyType: string;
    minPrice: number;
    maxPrice: number;
  };
  onFilterChange: (filters: any) => void;
  className?: string;
}

export function PropertyFilters({ filters, onFilterChange, className }: PropertyFiltersProps) {
  const [isOpen, setIsOpen] = useState(false);

  const handleChange = (key: string, value: string | number) => {
    onFilterChange({ ...filters, [key]: value });
  };

  const clearFilters = () => {
    onFilterChange({
      location: 'all',
      propertyType: 'all',
      minPrice: 0,
      maxPrice: 200000000,
    });
  };

  const hasActiveFilters = 
    filters.location !== 'all' || 
    filters.propertyType !== 'all' || 
    filters.minPrice > 0 || 
    filters.maxPrice < 200000000;

  return (
    <div className={cn('', className)}>
      {/* Mobile Filter Toggle */}
      <div className="lg:hidden mb-6">
        <Button
          variant="outline"
          onClick={() => setIsOpen(!isOpen)}
          className="w-full justify-between"
        >
          <span className="flex items-center gap-2">
            <SlidersHorizontal className="w-4 h-4" />
            Filters
          </span>
          {hasActiveFilters && (
            <span className="w-2 h-2 bg-gold rounded-full" />
          )}
        </Button>
      </div>

      {/* Filters Container */}
      <div className={cn(
        'lg:flex lg:items-end lg:gap-6 lg:opacity-100 lg:max-h-none transition-all duration-300',
        isOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0 lg:max-h-none lg:opacity-100 overflow-hidden'
      )}>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 flex-1">
          {/* Location Filter */}
          <div>
            <label className="text-label text-muted-foreground mb-2 block">
              Location
            </label>
            <select
              value={filters.location}
              onChange={(e) => handleChange('location', e.target.value)}
              className="w-full h-12 px-4 bg-card border border-border rounded-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
            >
              {locations.map((loc) => (
                <option key={loc.id} value={loc.id}>
                  {loc.name}
                </option>
              ))}
            </select>
          </div>

          {/* Property Type Filter */}
          <div>
            <label className="text-label text-muted-foreground mb-2 block">
              Property Type
            </label>
            <select
              value={filters.propertyType}
              onChange={(e) => handleChange('propertyType', e.target.value)}
              className="w-full h-12 px-4 bg-card border border-border rounded-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
            >
              {propertyTypes.map((type) => (
                <option key={type.id} value={type.id}>
                  {type.name}
                </option>
              ))}
            </select>
          </div>

          {/* Min Price Filter */}
          <div>
            <label className="text-label text-muted-foreground mb-2 block">
              Min Price
            </label>
            <select
              value={filters.minPrice}
              onChange={(e) => handleChange('minPrice', Number(e.target.value))}
              className="w-full h-12 px-4 bg-card border border-border rounded-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
            >
              <option value={0}>No Minimum</option>
              <option value={10000000}>PKR 1 Crore</option>
              <option value={20000000}>PKR 2 Crore</option>
              <option value={50000000}>PKR 5 Crore</option>
              <option value={100000000}>PKR 10 Crore</option>
            </select>
          </div>

          {/* Max Price Filter */}
          <div>
            <label className="text-label text-muted-foreground mb-2 block">
              Max Price
            </label>
            <select
              value={filters.maxPrice}
              onChange={(e) => handleChange('maxPrice', Number(e.target.value))}
              className="w-full h-12 px-4 bg-card border border-border rounded-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
            >
              <option value={200000000}>No Maximum</option>
              <option value={30000000}>PKR 3 Crore</option>
              <option value={50000000}>PKR 5 Crore</option>
              <option value={80000000}>PKR 8 Crore</option>
              <option value={100000000}>PKR 10 Crore</option>
              <option value={150000000}>PKR 15 Crore</option>
            </select>
          </div>
        </div>

        {/* Clear Filters Button */}
        {hasActiveFilters && (
          <Button
            variant="ghost"
            onClick={clearFilters}
            className="mt-4 lg:mt-0 text-muted-foreground hover:text-foreground"
          >
            <X className="w-4 h-4 mr-2" />
            Clear
          </Button>
        )}
      </div>
    </div>
  );
}
