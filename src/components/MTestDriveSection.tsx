import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, MapPin, Phone, ArrowRight, Trophy, Zap, Shield } from "lucide-react";

const MTestDriveSection = () => {
  return (
    <section className="py-32 px-6 bg-gradient-to-b from-muted/20 to-background">
      <div className="container mx-auto max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* Left Content */}
          <div className="animate-fade-in-up">
            <div className="mb-8">
              <span className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-red-600/20 to-blue-600/20 rounded-full border border-white/20 text-sm font-bold uppercase tracking-wider text-white mb-6">
                Exclusive M Experience
              </span>
            </div>
            
            <h2 className="text-6xl font-black mb-8 leading-tight">
              Ready to Experience
              <br />
              <span className="text-m-gradient">M Competition?</span>
            </h2>
            
            <p className="text-xl text-muted-foreground mb-12 leading-relaxed">
              Book your exclusive M Competition test drive and discover what it means 
              to command pure driving power. Our M specialists will guide you through 
              the complete experience at your preferred BMW M Center.
            </p>
            
            <div className="space-y-8">
              <div className="flex items-center gap-6">
                <div className="w-16 h-16 bg-gradient-to-br from-red-600 to-blue-600 rounded-2xl flex items-center justify-center">
                  <Calendar className="h-8 w-8 text-white" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-white mb-1">Premium Scheduling</h4>
                  <p className="text-muted-foreground">Book your M Competition experience at your convenience</p>
                </div>
              </div>
              
              <div className="flex items-center gap-6">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-2xl flex items-center justify-center">
                  <MapPin className="h-8 w-8 text-white" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-white mb-1">M Performance Centers</h4>
                  <p className="text-muted-foreground">Visit our specialized M facilities worldwide</p>
                </div>
              </div>
              
              <div className="flex items-center gap-6">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-pink-600 rounded-2xl flex items-center justify-center">
                  <Trophy className="h-8 w-8 text-white" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-white mb-1">M Expert Guidance</h4>
                  <p className="text-muted-foreground">Learn from certified M driving instructors</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Right Form */}
          <Card className="card-m-premium">
            <CardHeader className="text-center pb-8">
              <CardTitle className="text-3xl font-black text-white mb-4">
                Book M Competition Test Drive
              </CardTitle>
              <p className="text-muted-foreground">
                Experience the ultimate expression of BMW M performance
              </p>
            </CardHeader>
            <CardContent className="space-y-8">
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="firstName" className="text-white font-medium">First Name</Label>
                  <Input 
                    id="firstName" 
                    placeholder="John"
                    className="bg-white/5 border-white/20 text-white placeholder-white/50 mt-2 focus:border-white/40"
                  />
                </div>
                <div>
                  <Label htmlFor="lastName" className="text-white font-medium">Last Name</Label>
                  <Input 
                    id="lastName" 
                    placeholder="Doe"
                    className="bg-white/5 border-white/20 text-white placeholder-white/50 mt-2 focus:border-white/40"
                  />
                </div>
              </div>
              
              <div>
                <Label htmlFor="email" className="text-white font-medium">Email Address</Label>
                <Input 
                  id="email" 
                  type="email" 
                  placeholder="john@example.com"
                  className="bg-white/5 border-white/20 text-white placeholder-white/50 mt-2 focus:border-white/40"
                />
              </div>
              
              <div>
                <Label htmlFor="phone" className="text-white font-medium">Phone Number</Label>
                <Input 
                  id="phone" 
                  type="tel" 
                  placeholder="+1 (555) 123-4567"
                  className="bg-white/5 border-white/20 text-white placeholder-white/50 mt-2 focus:border-white/40"
                />
              </div>
              
              <div>
                <Label htmlFor="model" className="text-white font-medium">Preferred M Model</Label>
                <select 
                  id="model"
                  className="w-full px-4 py-3 mt-2 bg-white/5 border border-white/20 rounded-lg text-white focus:border-white/40 focus:outline-none transition-colors"
                >
                  <option value="">Select M Competition Model</option>
                  <option value="m2">M2 Competition</option>
                  <option value="m3">M3 Competition</option>
                  <option value="m4">M4 Competition</option>
                  <option value="m5">M5 Competition</option>
                  <option value="m8">M8 Competition</option>
                </select>
              </div>
              
              <div>
                <Label htmlFor="experience" className="text-white font-medium">Driving Experience</Label>
                <select 
                  id="experience"
                  className="w-full px-4 py-3 mt-2 bg-white/5 border border-white/20 rounded-lg text-white focus:border-white/40 focus:outline-none transition-colors"
                >
                  <option value="">Select Experience Level</option>
                  <option value="beginner">New to Performance Cars</option>
                  <option value="intermediate">Some Performance Experience</option>
                  <option value="advanced">Experienced Performance Driver</option>
                  <option value="professional">Track/Racing Experience</option>
                </select>
              </div>
              
              <Button className="w-full btn-m-primary group text-lg" size="lg">
                Book M Competition Experience
                <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-2 transition-transform duration-300" />
              </Button>
              
              <p className="text-sm text-muted-foreground text-center leading-relaxed">
                By submitting, you agree to BMW M's privacy policy and terms of service. 
                You'll receive exclusive M performance updates and offers.
              </p>
            </CardContent>
          </Card>
        </div>
        
        {/* Experience Features */}
        <div className="mt-20 grid md:grid-cols-3 gap-8">
          <div className="text-center p-8 card-m-premium">
            <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-orange-500 rounded-2xl mx-auto mb-6 flex items-center justify-center">
              <Zap className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-xl font-bold text-white mb-4">Track Experience</h3>
            <p className="text-muted-foreground">Experience M Competition models on professional race circuits</p>
          </div>
          
          <div className="text-center p-8 card-m-premium">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl mx-auto mb-6 flex items-center justify-center">
              <Shield className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-xl font-bold text-white mb-4">Safety First</h3>
            <p className="text-muted-foreground">Professional instruction and safety equipment provided</p>
          </div>
          
          <div className="text-center p-8 card-m-premium">
            <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl mx-auto mb-6 flex items-center justify-center">
              <Trophy className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-xl font-bold text-white mb-4">VIP Treatment</h3>
            <p className="text-muted-foreground">Exclusive M lounge access and personalized service</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MTestDriveSection;