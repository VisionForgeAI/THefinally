import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Checkbox } from '@/components/ui/checkbox';
import { Card } from '@/components/ui/card';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

const LeadForm = () => {
  return (
    <section className="py-24 bg-accent/5">
      <div className="container px-4 mx-auto">
        <div className="max-w-3xl mx-auto">
          <Card className="p-8 md:p-12">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">
                Get Your Free Automation Assessment
              </h2>
              <p className="text-lg text-muted-foreground">
                Discover how our crazy automations can transform your business.
                Limited time offer: Get a free consultation worth $500!
              </p>
            </div>

            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <Input placeholder="First Name" />
                </div>
                <div>
                  <Input placeholder="Last Name" />
                </div>
              </div>

              <div>
                <Input type="email" placeholder="Work Email" />
              </div>

              <div>
                <Input placeholder="Company Name" />
              </div>

              <div>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Company Size" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="1-10">1-10 employees</SelectItem>
                    <SelectItem value="11-50">11-50 employees</SelectItem>
                    <SelectItem value="51-200">51-200 employees</SelectItem>
                    <SelectItem value="201-500">201-500 employees</SelectItem>
                    <SelectItem value="501+">501+ employees</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="flex items-start space-x-2">
                <Checkbox id="newsletter" />
                <label
                  htmlFor="newsletter"
                  className="text-sm text-muted-foreground leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  I agree to receive updates about VisionForge AI products and
                  services. You can unsubscribe at any time.
                </label>
              </div>

              <Button className="w-full" size="lg">
                Get Free Assessment
              </Button>

              <p className="text-xs text-center text-muted-foreground">
                By submitting this form, you agree to our{' '}
                <a href="#" className="underline hover:text-primary">
                  Terms of Service
                </a>{' '}
                and{' '}
                <a href="#" className="underline hover:text-primary">
                  Privacy Policy
                </a>
                .
              </p>
            </form>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default LeadForm;