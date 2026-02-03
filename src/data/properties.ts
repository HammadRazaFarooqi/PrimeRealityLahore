export interface Property {
  id: string;
  title: string;
  description: string;
  price: number;
  priceFormatted: string;
  location: string;
  area: string;
  size: string;
  sizeUnit: 'marla' | 'kanal';
  propertyType: 'house' | 'plot' | 'apartment' | 'commercial';
  bedrooms?: number;
  bathrooms?: number;
  features: string[];
  images: string[];
  featured: boolean;
  coordinates: {
    lat: number;
    lng: number;
  };
}

export const properties: Property[] = [
  {
    id: "prop-001",
    title: "Elegant Modern Villa",
    description: "A masterpiece of contemporary architecture in the heart of DHA Phase 6. This 10 Marla luxury residence features floor-to-ceiling windows, Italian marble flooring, and a state-of-the-art smart home system. The property includes a private garden, dedicated parking for 3 vehicles, and premium finishes throughout. Perfect for families seeking refined living in Lahore's most prestigious neighborhood.",
    price: 52500000,
    priceFormatted: "PKR 5.25 Crore",
    location: "DHA Phase 6",
    area: "DHA",
    size: "10",
    sizeUnit: "marla",
    propertyType: "house",
    bedrooms: 5,
    bathrooms: 6,
    features: ["Smart Home System", "Italian Marble", "Imported Fixtures", "Private Garden", "3-Car Parking", "Central Air Conditioning", "Solar Panels", "Security System"],
    images: [
      "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=1200",
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1200",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200"
    ],
    featured: true,
    coordinates: { lat: 31.4697, lng: 74.4063 }
  },
  {
    id: "prop-002",
    title: "Grand Kanal Estate",
    description: "An architectural marvel spanning 1 Kanal in the exclusive Bahria Town Lahore. This palatial residence offers unparalleled luxury with its grand entrance, double-height living spaces, and premium imported materials. Features include a private cinema, gymnasium, infinity pool, and professionally landscaped gardens. The epitome of luxury living for discerning investors.",
    price: 98000000,
    priceFormatted: "PKR 9.8 Crore",
    location: "Bahria Town",
    area: "Bahria Town",
    size: "1",
    sizeUnit: "kanal",
    propertyType: "house",
    bedrooms: 7,
    bathrooms: 8,
    features: ["Private Cinema", "Infinity Pool", "Home Gymnasium", "Wine Cellar", "Staff Quarters", "4-Car Garage", "Landscaped Gardens", "24/7 Security"],
    images: [
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200",
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=1200",
      "https://images.unsplash.com/photo-1600573472592-401b489a3cdc?w=1200"
    ],
    featured: true,
    coordinates: { lat: 31.3685, lng: 74.1802 }
  },
  {
    id: "prop-003",
    title: "Premium Commercial Plot",
    description: "A rare investment opportunity in the commercial heart of Gulberg III. This 5 Marla commercial plot offers prime frontage on a main boulevard with exceptional visibility and foot traffic. Ideal for corporate offices, flagship retail, or mixed-use development. Approved plans available for a 6-story commercial building.",
    price: 36000000,
    priceFormatted: "PKR 3.6 Crore",
    location: "Gulberg III",
    area: "Gulberg",
    size: "5",
    sizeUnit: "marla",
    propertyType: "commercial",
    features: ["Main Boulevard Location", "High Visibility", "Commercial Zoning", "6-Story Approval", "Corner Plot", "Underground Utilities"],
    images: [
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200",
      "https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200"
    ],
    featured: true,
    coordinates: { lat: 31.5204, lng: 74.3587 }
  },
  {
    id: "prop-004",
    title: "Skyline Luxury Apartment",
    description: "A sophisticated 2-bedroom apartment in the prestigious Gulberg district. This beautifully appointed residence offers panoramic city views, modern interiors, and resort-style amenities. Building features include 24-hour concierge, rooftop terrace, fitness center, and secured underground parking. Ideal for professionals and investors seeking premium urban living.",
    price: 21000000,
    priceFormatted: "PKR 2.1 Crore",
    location: "Gulberg",
    area: "Gulberg",
    size: "1500",
    sizeUnit: "marla",
    propertyType: "apartment",
    bedrooms: 2,
    bathrooms: 2,
    features: ["City Views", "24-Hour Concierge", "Rooftop Access", "Fitness Center", "Underground Parking", "Central Location", "Modern Kitchen", "Balcony"],
    images: [
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=1200",
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=1200"
    ],
    featured: true,
    coordinates: { lat: 31.5151, lng: 74.3547 }
  },
  {
    id: "prop-005",
    title: "Heritage Contemporary Home",
    description: "A stunning 1 Kanal residence in the established neighborhood of Model Town. This property seamlessly blends traditional elegance with contemporary design. Features include a grand formal living room, library, home office, and mature landscaped gardens. Recently renovated with premium materials while maintaining its classic charm.",
    price: 85000000,
    priceFormatted: "PKR 8.5 Crore",
    location: "Model Town",
    area: "Model Town",
    size: "1",
    sizeUnit: "kanal",
    propertyType: "house",
    bedrooms: 6,
    bathrooms: 7,
    features: ["Mature Gardens", "Home Library", "Private Office", "Servant Quarters", "3-Car Parking", "Renovated Interior", "Classic Architecture", "Prime Location"],
    images: [
      "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=1200",
      "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=1200"
    ],
    featured: false,
    coordinates: { lat: 31.4833, lng: 74.3167 }
  },
  {
    id: "prop-006",
    title: "Executive Residential Plot",
    description: "A prime 10 Marla residential plot in the rapidly developing Johar Town. This exceptional plot offers excellent value with its strategic location near major amenities and educational institutions. Ideal for building your dream home or as a sound investment with strong appreciation potential.",
    price: 42000000,
    priceFormatted: "PKR 4.2 Crore",
    location: "Johar Town",
    area: "Johar Town",
    size: "10",
    sizeUnit: "marla",
    propertyType: "plot",
    features: ["Corner Plot", "Near Schools", "Park Facing", "Wide Road", "All Utilities", "Clear Title", "Immediate Possession"],
    images: [
      "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=1200",
      "https://images.unsplash.com/photo-1523217582562-09d0def993a6?w=1200"
    ],
    featured: false,
    coordinates: { lat: 31.4697, lng: 74.2728 }
  },
  {
    id: "prop-007",
    title: "Raiwind Road Farmhouse",
    description: "An exclusive 4 Kanal farmhouse estate on Raiwind Road. This private retreat offers the perfect escape from city life while remaining accessible to Lahore. Features include a traditional baithak, expansive lawns, swimming pool, and organic orchard. Ideal for weekend getaways or as a permanent residence for those seeking tranquility.",
    price: 145000000,
    priceFormatted: "PKR 14.5 Crore",
    location: "Raiwind Road",
    area: "Raiwind Road",
    size: "4",
    sizeUnit: "kanal",
    propertyType: "house",
    bedrooms: 5,
    bathrooms: 6,
    features: ["Swimming Pool", "Organic Orchard", "Traditional Baithak", "Staff Accommodation", "Bore Water", "Boundary Wall", "CCTV Security", "Generator Backup"],
    images: [
      "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=1200",
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=1200"
    ],
    featured: false,
    coordinates: { lat: 31.2639, lng: 74.2222 }
  },
  {
    id: "prop-008",
    title: "DHA Phase 5 Bungalow",
    description: "A meticulously designed 1 Kanal bungalow in DHA Phase 5. This property showcases contemporary Pakistani architecture with international standards. Features include imported kitchen, home automation, solar power system, and a rooftop entertainment area. Perfect for families who appreciate modern living with cultural sensibility.",
    price: 72000000,
    priceFormatted: "PKR 7.2 Crore",
    location: "DHA Phase 5",
    area: "DHA",
    size: "1",
    sizeUnit: "kanal",
    propertyType: "house",
    bedrooms: 5,
    bathrooms: 6,
    features: ["Home Automation", "Solar Power", "Rooftop Terrace", "Imported Kitchen", "Home Theater", "Lawn Area", "Servant Quarter", "Double Glazed Windows"],
    images: [
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=1200",
      "https://images.unsplash.com/photo-1600607687644-aac4c3eac7f4?w=1200"
    ],
    featured: false,
    coordinates: { lat: 31.4583, lng: 74.3917 }
  }
];

export const locations = [
  { id: "all", name: "All Locations" },
  { id: "DHA", name: "DHA" },
  { id: "Bahria Town", name: "Bahria Town" },
  { id: "Gulberg", name: "Gulberg" },
  { id: "Model Town", name: "Model Town" },
  { id: "Johar Town", name: "Johar Town" },
  { id: "Raiwind Road", name: "Raiwind Road" },
];

export const propertyTypes = [
  { id: "all", name: "All Types" },
  { id: "house", name: "House" },
  { id: "plot", name: "Plot" },
  { id: "apartment", name: "Apartment" },
  { id: "commercial", name: "Commercial" },
];

export const primeLocations = [
  {
    name: "DHA Phase 5 & 6",
    description: "Lahore's most prestigious address",
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800"
  },
  {
    name: "Bahria Town",
    description: "Gated community living at its finest",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800"
  },
  {
    name: "Gulberg III",
    description: "The commercial heart of Lahore",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800"
  },
  {
    name: "Model Town",
    description: "Established elegance and heritage",
    image: "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=800"
  },
  {
    name: "Johar Town",
    description: "Rising star of Lahore real estate",
    image: "https://images.unsplash.com/photo-1523217582562-09d0def993a6?w=800"
  }
];

export function getPropertyById(id: string): Property | undefined {
  return properties.find(p => p.id === id);
}

export function getFeaturedProperties(): Property[] {
  return properties.filter(p => p.featured);
}

export function filterProperties(filters: {
  location?: string;
  propertyType?: string;
  minPrice?: number;
  maxPrice?: number;
  sizeUnit?: string;
}): Property[] {
  return properties.filter(property => {
    if (filters.location && filters.location !== 'all' && property.area !== filters.location) {
      return false;
    }
    if (filters.propertyType && filters.propertyType !== 'all' && property.propertyType !== filters.propertyType) {
      return false;
    }
    if (filters.minPrice && property.price < filters.minPrice) {
      return false;
    }
    if (filters.maxPrice && property.price > filters.maxPrice) {
      return false;
    }
    if (filters.sizeUnit && filters.sizeUnit !== 'all' && property.sizeUnit !== filters.sizeUnit) {
      return false;
    }
    return true;
  });
}
