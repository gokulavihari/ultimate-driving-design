import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, MapPin, Phone, ArrowRight } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-24 px-6 bg-gradient-to-b from-muted/20 to-background">
      <div className="container mx-auto max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="animate-fade-in-up">
            <h2 className="text-5xl font-black mb-6 leading-tight">
              Ready to Experience
              <br />
              <span className="text-bmw-gradient">BMW Excellence?</span>
            </h2>
            
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Schedule your personalized test drive today and discover why BMW is 
              the ultimate driving machine. Our expert team is ready to help you 
              find your perfect BMW.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <Calendar className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold">Flexible Scheduling</h4>
                  <p className="text-muted-foreground">Book at your convenience</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold">Multiple Locations</h4>
                  <p className="text-muted-foreground">Find a dealership near you</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold">Expert Consultation</h4>
                  <p className="text-muted-foreground">Professional guidance included</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Right Form */}
          <Card className="card-bmw">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-center">
                Book Your Test Drive
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="firstName">First Name</Label>
                  <Input 
                    id="firstName" 
                    placeholder="John"
                    className="bg-background/50 border-white/10"
                  />
                </div>
                <div>
                  <Label htmlFor="lastName">Last Name</Label>
                  <Input 
                    id="lastName" 
                    placeholder="Doe"
                    className="bg-background/50 border-white/10"
                  />
                </div>
              </div>
              
              <div>
                <Label htmlFor="email">Email Address</Label>
                <Input 
                  id="email" 
                  type="email" 
                  placeholder="john@example.com"
                  className="bg-background/50 border-white/10"
                />
              </div>
              
              <div>
                <Label htmlFor="phone">Phone Number</Label>
                <Input 
                  id="phone" 
                  type="tel" 
                  placeholder="+1 (555) 123-4567"
                  className="bg-background/50 border-white/10"
                />
              </div>
              
              <div>
                <Label htmlFor="model">Preferred Model</Label>
                <select 
                  id="model"
                  className="w-full px-3 py-2 bg-background/50 border border-white/10 rounded-md text-foreground"
                >
                  <option value="">Select a model</option>
                  <option value="x5">BMW X5</option>
                  <option value="i8">BMW i8</option>
                  <option value="7series">BMW 7 Series</option>
                  <option value="3series">BMW 3 Series</option>
                  <option value="x3">BMW X3</option>
                </select>
              </div>
              
              <Button className="w-full btn-bmw-primary group" size="lg">
                Schedule Test Drive
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              
              <p className="text-sm text-muted-foreground text-center">
                By submitting, you agree to our privacy policy and terms of service.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default CTASection;