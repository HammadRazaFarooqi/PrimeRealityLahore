import { Award, Users, Building2, TrendingUp } from 'lucide-react';
import { PageLayout } from '@/components/layout';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const stats = [
  { icon: Clock, value: '10+', label: 'Years of Experience' },
  { icon: Building2, value: '500+', label: 'Properties Sold' },
  { icon: Users, value: '300+', label: 'Satisfied Clients' },
  { icon: TrendingUp, value: '₨50B+', label: 'Transaction Value' },
];

import { Clock } from 'lucide-react';

export default function About() {
  return (
    <PageLayout>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-primary overflow-hidden">
        <div className="container-luxury text-center relative z-10">
          <p className="text-label text-gold mb-4">About Us</p>
          <h1 className="heading-display text-primary-foreground mb-6">
            Your Trusted Partner in
            <br />
            <span className="text-gold-gradient">Lahore Real Estate</span>
          </h1>
          <p className="text-xl text-primary-foreground/80 max-w-2xl mx-auto">
            A decade of excellence in curating premium properties for discerning investors.
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="section-padding bg-background">
        <div className="container-luxury">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-label text-gold mb-4">Our Story</p>
              <h2 className="heading-section text-foreground mb-8">
                Building Trust, One Property at a Time
              </h2>
              <div className="space-y-6 text-body text-muted-foreground">
                <p>
                  Founded in 2014, Prime Realty Lahore emerged from a simple observation: 
                  the Lahore property market needed an agency that prioritized integrity 
                  over volume. Too many investors, especially those abroad, were falling 
                  victim to misleading information and unreliable transactions.
                </p>
                <p>
                  We set out to change that. Our founding principle was clear: 
                  only list properties we would invest in ourselves. This philosophy 
                  has guided every decision we've made and every property we've curated.
                </p>
                <p>
                  Today, Prime Realty Lahore is recognized as one of Lahore's most 
                  trusted real estate consultancies. Our clients range from local 
                  entrepreneurs to overseas Pakistanis and international investors—all 
                  united by their appreciation for transparency, quality, and 
                  professional service.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square overflow-hidden rounded-sm">
                <img
                  src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800"
                  alt="Luxury property interior"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-8 -left-8 w-48 h-48 bg-gold/10 rounded-sm -z-10" />
              <div className="absolute -top-8 -right-8 w-48 h-48 bg-primary/10 rounded-sm -z-10" />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-secondary">
        <div className="container-luxury">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                  <stat.icon className="w-7 h-7 text-primary" />
                </div>
                <p className="font-serif text-4xl font-semibold text-primary mb-2">
                  {stat.value}
                </p>
                <p className="text-muted-foreground text-sm">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section-padding bg-background">
        <div className="container-luxury">
          <div className="text-center mb-16">
            <p className="text-label text-gold mb-4">Our Values</p>
            <h2 className="heading-section text-foreground">
              The Principles That Guide Us
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="w-20 h-20 mx-auto mb-6 rounded-sm bg-gold/10 flex items-center justify-center">
                <Award className="w-10 h-10 text-gold" />
              </div>
              <h3 className="font-serif text-2xl text-foreground mb-4">
                Uncompromising Quality
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Every property in our collection undergoes rigorous verification. 
                We inspect documentation, assess market value, and evaluate 
                investment potential before listing.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 mx-auto mb-6 rounded-sm bg-gold/10 flex items-center justify-center">
                <Users className="w-10 h-10 text-gold" />
              </div>
              <h3 className="font-serif text-2xl text-foreground mb-4">
                Client-First Approach
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Your goals are our priority. We take time to understand your 
                requirements, budget, and timeline—then present options that 
                genuinely match your needs.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 mx-auto mb-6 rounded-sm bg-gold/10 flex items-center justify-center">
                <Building2 className="w-10 h-10 text-gold" />
              </div>
              <h3 className="font-serif text-2xl text-foreground mb-4">
                Deep Market Expertise
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Our team brings decades of combined experience in Lahore's 
                property market. We know the neighborhoods, understand the 
                trends, and can advise with confidence.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Overseas Focus Section */}
      <section className="section-padding bg-primary text-primary-foreground">
        <div className="container-luxury">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-label text-gold mb-4">For Overseas Investors</p>
            <h2 className="heading-section mb-8">
              Investing From Abroad? We've Got You Covered.
            </h2>
            <p className="text-xl text-primary-foreground/80 mb-8 leading-relaxed">
              We understand the unique challenges faced by overseas Pakistanis 
              and international investors. Distance shouldn't mean uncertainty. 
              Our dedicated overseas investor services include:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left mb-12">
              <div className="bg-white/5 p-6 rounded-sm">
                <h4 className="font-serif text-lg mb-2">Virtual Property Tours</h4>
                <p className="text-primary-foreground/70 text-sm">
                  Detailed video walkthroughs of properties you're interested in.
                </p>
              </div>
              <div className="bg-white/5 p-6 rounded-sm">
                <h4 className="font-serif text-lg mb-2">Complete Documentation</h4>
                <p className="text-primary-foreground/70 text-sm">
                  Full transparency on all paperwork, verified and explained.
                </p>
              </div>
              <div className="bg-white/5 p-6 rounded-sm">
                <h4 className="font-serif text-lg mb-2">Transaction Management</h4>
                <p className="text-primary-foreground/70 text-sm">
                  End-to-end handling of purchases, even in your absence.
                </p>
              </div>
              <div className="bg-white/5 p-6 rounded-sm">
                <h4 className="font-serif text-lg mb-2">Post-Purchase Support</h4>
                <p className="text-primary-foreground/70 text-sm">
                  Property management and rental services if needed.
                </p>
              </div>
            </div>
            <Button asChild className="btn-luxury bg-white text-primary hover:bg-white/90">
              <Link to="/contact">Schedule a Call</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-secondary">
        <div className="container-luxury">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="heading-section text-foreground mb-8">
              Ready to Work Together?
            </h2>
            <p className="text-body text-muted-foreground mb-10">
              Whether you're looking to buy, sell, or simply explore the market, 
              we're here to help. Let's start a conversation.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button asChild className="btn-luxury-primary">
                <Link to="/properties">Explore Properties</Link>
              </Button>
              <Button asChild variant="outline" className="btn-luxury-outline">
                <Link to="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
