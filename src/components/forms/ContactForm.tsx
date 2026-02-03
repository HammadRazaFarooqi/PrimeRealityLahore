import { useState } from 'react';
import { Send, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';

interface ContactFormProps {
  propertyTitle?: string;
  className?: string;
}

export function ContactForm({ propertyTitle, className }: ContactFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: propertyTitle 
      ? `I'm interested in learning more about "${propertyTitle}". Please contact me with more details.`
      : '',
  });
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));

    toast({
      title: "Message Sent",
      description: "Thank you for your inquiry. We'll get back to you shortly.",
    });

    setFormData({
      name: '',
      email: '',
      phone: '',
      message: '',
    });
    setIsSubmitting(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <form onSubmit={handleSubmit} className={className}>
      <div className="space-y-5">
        <div>
          <label htmlFor="name" className="text-label text-muted-foreground mb-2 block">
            Full Name
          </label>
          <Input
            id="name"
            name="name"
            type="text"
            value={formData.name}
            onChange={handleChange}
            required
            placeholder="Your name"
            className="h-12 bg-card border-border focus:border-primary"
          />
        </div>

        <div>
          <label htmlFor="email" className="text-label text-muted-foreground mb-2 block">
            Email Address
          </label>
          <Input
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            required
            placeholder="your@email.com"
            className="h-12 bg-card border-border focus:border-primary"
          />
        </div>

        <div>
          <label htmlFor="phone" className="text-label text-muted-foreground mb-2 block">
            Phone Number
          </label>
          <Input
            id="phone"
            name="phone"
            type="tel"
            value={formData.phone}
            onChange={handleChange}
            required
            placeholder="+92 300 123 4567"
            className="h-12 bg-card border-border focus:border-primary"
          />
        </div>

        <div>
          <label htmlFor="message" className="text-label text-muted-foreground mb-2 block">
            Message
          </label>
          <Textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            placeholder="Tell us about your requirements..."
            rows={5}
            className="bg-card border-border focus:border-primary resize-none"
          />
        </div>

        <Button
          type="submit"
          disabled={isSubmitting}
          className="w-full h-14 btn-luxury-primary"
        >
          {isSubmitting ? (
            <>
              <Loader2 className="w-4 h-4 mr-2 animate-spin" />
              Sending...
            </>
          ) : (
            <>
              <Send className="w-4 h-4 mr-2" />
              Send Message
            </>
          )}
        </Button>
      </div>
    </form>
  );
}
