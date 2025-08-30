import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ChevronLeft, ChevronRight, Maximize2 } from "lucide-react";

const interiorFeatures = [
  {
    title: "M Competition Cockpit",
    description: "Driver-focused design with M-specific instrumentation and performance displays",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&q=80",
    highlights: ["M Performance Steering Wheel", "Carbon Fiber Trim", "Competition Badging"]
  },
  {
    title: "M Sports Seats",
    description: "Merino leather upholstery with contrast stitching and integrated headrests",
    image: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=1200&q=80",
    highlights: ["Adaptive Bolsters", "Memory Function", "Ventilation & Heating"]
  },
  {
    title: "M Digital Display",
    description: "12.3-inch fully digital instrument cluster with M-specific graphics",
    image: "https://images.unsplash.com/photo-1502877338535-766e1452684a?w=1200&q=80",
    highlights: ["Track Mode Display", "Lap Timer", "G-Force Meter"]
  },
  {
    title: "Carbon Interior Package",
    description: "Extensive use of carbon fiber throughout the cabin for race-inspired aesthetics",
    image: "https://images.unsplash.com/photo-1494905998402-395d579af36f?w=1200&q=80",
    highlights: ["Dashboard Trim", "Door Panels", "Gear Selector"]
  },
  {
    title: "M Sound System",
    description: "Harman Kardon surround sound with M-tuned acoustics",
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=1200&q=80",
    highlights: ["16 Speakers", "Logic 7 Processing", "M Sound Effects"]
  }
];

const LuxuryInteriorsSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % interiorFeatures.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + interiorFeatures.length) % interiorFeatures.length);
  };

  const currentFeature = interiorFeatures[currentSlide];

  return (
    <section className="py-32 px-6 bg-gradient-to-b from-muted/20 to-background">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-20 animate-fade-in-up">
          <h2 className="text-6xl font-black mb-8 leading-tight">
            Luxury <span className="text-m-gradient">Interiors</span>
          </h2>
          <p className="text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Step inside the cockpit where motorsport meets luxury. Every surface, every detail
            is crafted to deliver an unparalleled driving experience.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Interactive Image Slider */}
          <div className="relative">
            <Card className="card-m-premium overflow-hidden">
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={currentFeature.image}
                  alt={currentFeature.title}
                  className="w-full h-full object-cover transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
                
                {/* Navigation Controls */}
                <div className="absolute inset-y-0 left-4 flex items-center">
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={prevSlide}
                    className="w-12 h-12 bg-white/10 backdrop-blur-lg border border-white/20 hover:bg-white/20 rounded-full"
                  >
                    <ChevronLeft className="h-6 w-6 text-white" />
                  </Button>
                </div>
                
                <div className="absolute inset-y-0 right-4 flex items-center">
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={nextSlide}
                    className="w-12 h-12 bg-white/10 backdrop-blur-lg border border-white/20 hover:bg-white/20 rounded-full"
                  >
                    <ChevronRight className="h-6 w-6 text-white" />
                  </Button>
                </div>
                
                {/* Fullscreen Button */}
                <div className="absolute top-4 right-4">
                  <Button
                    variant="ghost"
                    size="icon"
                    className="w-10 h-10 bg-white/10 backdrop-blur-lg border border-white/20 hover:bg-white/20 rounded-full"
                  >
                    <Maximize2 className="h-5 w-5 text-white" />
                  </Button>
                </div>
              </div>
            </Card>
            
            {/* Slide Indicators */}
            <div className="flex justify-center mt-6 gap-3">
              {interiorFeatures.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentSlide 
                      ? 'bg-gradient-to-r from-red-500 to-blue-500 scale-125' 
                      : 'bg-white/30 hover:bg-white/50'
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Content Details */}
          <div className="space-y-8">
            <div>
              <h3 className="text-4xl font-black mb-4 text-white">
                {currentFeature.title}
              </h3>
              <p className="text-xl text-muted-foreground leading-relaxed mb-8">
                {currentFeature.description}
              </p>
            </div>

            {/* Feature Highlights */}
            <div className="space-y-4">
              <h4 className="text-xl font-bold text-m-accent uppercase tracking-wider">
                Key Features
              </h4>
              <div className="space-y-3">
                {currentFeature.highlights.map((highlight, index) => (
                  <div 
                    key={highlight}
                    className="flex items-center gap-4 p-4 bg-white/5 rounded-xl border border-white/10 hover:bg-white/10 transition-all duration-300"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="w-2 h-2 bg-gradient-to-r from-red-500 to-blue-500 rounded-full"></div>
                    <span className="text-white font-medium">{highlight}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-8">
              <Button className="btn-m-primary flex-1">
                Configure Interior
              </Button>
              <Button className="btn-m-secondary flex-1">
                Schedule Viewing
              </Button>
            </div>
          </div>
        </div>

        {/* Interior Tech Grid */}
        <div className="mt-20 grid md:grid-cols-4 gap-6">
          <div className="text-center p-6 card-m-premium">
            <div className="text-3xl font-black text-m-gradient mb-2">12.3"</div>
            <div className="text-sm text-muted-foreground">Digital Cluster</div>
          </div>
          <div className="text-center p-6 card-m-premium">
            <div className="text-3xl font-black text-m-gradient mb-2">16</div>
            <div className="text-sm text-muted-foreground">Speaker Audio</div>
          </div>
          <div className="text-center p-6 card-m-premium">
            <div className="text-3xl font-black text-m-gradient mb-2">100%</div>
            <div className="text-sm text-muted-foreground">Merino Leather</div>
          </div>
          <div className="text-center p-6 card-m-premium">
            <div className="text-3xl font-black text-m-gradient mb-2">Carbon</div>
            <div className="text-sm text-muted-foreground">Fiber Trim</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LuxuryInteriorsSection;