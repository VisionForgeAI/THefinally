import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';

interface ContactFormProps {
  type: 'demo' | 'contact';
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function ContactForm({ type, open, onOpenChange }: ContactFormProps) {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get('name'),
      email: formData.get('email'),
      company: formData.get('company'),
      message: formData.get('message'),
      type: type
    };

    try {
      const response = await fetch('https://your-webhook-url.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) throw new Error('Failed to submit');

      toast({
        title: 'Success!',
        description: type === 'demo' 
          ? "We've received your demo request. We'll be in touch soon!"
          : "Thanks for reaching out! We'll get back to you shortly.",
      });

      onOpenChange(false);
    } catch (error) {
      toast({
        title: 'Error',
        description: 'Something went wrong. Please try again.',
        variant: 'destructive',
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle>
            {type === 'demo' ? 'Schedule a Demo' : 'Contact Us'}
          </DialogTitle>
          <DialogDescription>
            {type === 'demo'
              ? "See our AI solutions in action. Fill out the form below and we will get back to you shortly."
              : "Have questions? We would love to hear from you. Send us a message and we will respond as soon as possible."}
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-6 mt-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Input
                id="name"
                name="name"
                placeholder="Your Name"
                required
                disabled={loading}
              />
            </div>
            <div className="space-y-2">
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="Email Address"
                required
                disabled={loading}
              />
            </div>
          </div>

          <div className="space-y-2">
            <Input
              id="company"
              name="company"
              placeholder="Company Name"
              required
              disabled={loading}
            />
          </div>

          <div className="space-y-2">
            <Textarea
              id="message"
              name="message"
              placeholder={type === 'demo' 
                ? "Tell us about your needs and what you would like to see in the demo"
                : "How can we help you?"}
              className="min-h-[100px]"
              required
              disabled={loading}
            />
          </div>

          <Button type="submit" className="w-full" disabled={loading}>
            {loading ? 'Submitting...' : type === 'demo' ? 'Request Demo' : 'Send Message'}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}