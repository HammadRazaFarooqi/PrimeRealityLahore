import { Phone, Mail, MapPin, Clock, MessageCircle } from 'lucide-react';
import { PageLayout } from '@/components/layout';
import { ContactForm } from '@/components/forms';

const contactInfo = [
  {
    icon: Phone,
    title: 'Phone',
    details: ['+92 300 123 4567', '+92 42 1234 5678'],
    action: 'tel:+923001234567',
  },
  {
    icon: Mail,
    title: 'Email',
    details: ['info@primerealtylahore.com', 'sales@primerealtylahore.com'],
    action: 'mailto:info@primerealtylahore.com',
  },
  {
    icon: MessageCircle,
    title: 'WhatsApp',
    details: ['+92 300 123 4567'],
    action: 'https://wa.me/923001234567',
  },
  {
    icon: Clock,
    title: 'Office Hours',
    details: ['Monday - Saturday', '10:00 AM - 7:00 PM'],
  },
];

export default function Contact() {
  return (
    <PageLayout>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-primary">
        <div className="container-luxury text-center">
          <p className="text-label text-gold mb-4">Get in Touch</p>
          <h1 className="heading-display text-primary-foreground mb-6">
            Let's Start a Conversation
          </h1>
          <p className="text-xl text-primary-foreground/80 max-w-2xl mx-auto">
            Have questions about a property? Looking to invest in Lahore real estate? 
            We're here to help.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section-padding bg-background">
        <div className="container-luxury">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div>
              <h2 className="font-serif text-3xl text-foreground mb-4">
                Send Us a Message
              </h2>
              <p className="text-muted-foreground mb-8">
                Fill out the form below and our team will respond within 24 hours.
              </p>
              <ContactForm />
            </div>

            {/* Contact Info */}
            <div>
              <h2 className="font-serif text-3xl text-foreground mb-4">
                Contact Information
              </h2>
              <p className="text-muted-foreground mb-8">
                Prefer to reach out directly? Here's how you can contact us.
              </p>

              <div className="space-y-6 mb-12">
                {contactInfo.map((item, index) => (
                  <div 
                    key={index}
                    className="flex items-start gap-4 p-6 bg-secondary rounded-sm"
                  >
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-2">{item.title}</h3>
                      {item.details.map((detail, i) => (
                        item.action ? (
                          <a
                            key={i}
                            href={item.action}
                            className="block text-muted-foreground hover:text-primary transition-colors"
                          >
                            {detail}
                          </a>
                        ) : (
                          <p key={i} className="text-muted-foreground">{detail}</p>
                        )
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              {/* Office Address */}
              <div className="p-6 bg-primary text-primary-foreground rounded-sm">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Office Address</h3>
                    <p className="text-primary-foreground/80 leading-relaxed">
                      Office 12, Liberty Market<br />
                      Gulberg III<br />
                      Lahore, Punjab 54000<br />
                      Pakistan
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="h-[500px] bg-muted">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3401.5!2d74.3547!3d31.5151!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391904c9f4f64895%3A0x8f5c9c5ab7b7d8b0!2sLiberty%20Market!5e0!3m2!1sen!2s!4v1600000000000!5m2!1sen!2s"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Prime Realty Lahore Office Location"
        />
      </section>

      {/* FAQ Section */}
      <section className="section-padding bg-secondary">
        <div className="container-luxury">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <p className="text-label text-gold mb-4">Common Questions</p>
              <h2 className="heading-section text-foreground">
                Frequently Asked Questions
              </h2>
            </div>

            <div className="space-y-6">
              <div className="p-6 bg-card rounded-sm">
                <h3 className="font-serif text-xl text-foreground mb-3">
                  Do you assist overseas investors?
                </h3>
                <p className="text-muted-foreground">
                  Yes, a significant portion of our clients are overseas Pakistanis and 
                  international investors. We offer virtual tours, complete documentation 
                  handling, and end-to-end transaction management for remote buyers.
                </p>
              </div>

              <div className="p-6 bg-card rounded-sm">
                <h3 className="font-serif text-xl text-foreground mb-3">
                  How do you verify properties?
                </h3>
                <p className="text-muted-foreground">
                  Every property undergoes a thorough verification process including 
                  title deed checks, encumbrance verification, NOC status, and physical 
                  inspection. We only list properties with clear, verified documentation.
                </p>
              </div>

              <div className="p-6 bg-card rounded-sm">
                <h3 className="font-serif text-xl text-foreground mb-3">
                  What areas of Lahore do you cover?
                </h3>
                <p className="text-muted-foreground">
                  We specialize in premium neighborhoods including DHA (all phases), 
                  Bahria Town, Gulberg, Model Town, Johar Town, and select developments 
                  on Raiwind Road. These areas offer the best investment potential.
                </p>
              </div>

              <div className="p-6 bg-card rounded-sm">
                <h3 className="font-serif text-xl text-foreground mb-3">
                  Is there a fee for consultation?
                </h3>
                <p className="text-muted-foreground">
                  Initial consultations are complimentary. We believe in building 
                  relationships first. Our commission structure is transparent and 
                  only applies upon successful transaction completion.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
