import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroImage from "@/assets/bmw-hero.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="BMW car in motion"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-left max-w-4xl">
        <div className="animate-fade-in-up">
          <h1 className="text-6xl md:text-8xl font-black mb-6 leading-tight">
            THE ULTIMATE
            <br />
            <span className="text-bmw-gradient">DRIVING MACHINE</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl leading-relaxed">
            Experience the perfect fusion of luxury, performance, and innovation. 
            Every BMW is crafted to deliver an extraordinary driving experience.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              size="lg" 
              className="btn-bmw-primary group"
            >
              Explore Models
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            
            <Button 
              size="lg" 
              variant="outline" 
              className="btn-bmw-secondary"
            >
              Book Test Drive
            </Button>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;