import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import heroVideoStill from "@/assets/bmw-m-hero-video-still.jpg";

const MHero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Cinematic Video Background */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroVideoStill}
          alt="BMW M Competition in motion"
          className="w-full h-full object-cover"
        />
        {/* Video Overlay Effects */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-black/30"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20"></div>
        
        {/* Animated Grid Pattern */}
        <div className="absolute inset-0 opacity-20">
          <div className="grid grid-cols-20 grid-rows-12 h-full w-full">
            {Array.from({ length: 240 }, (_, i) => (
              <div 
                key={i} 
                className="border border-white/10 animate-pulse"
                style={{ animationDelay: `${i * 0.01}s` }}
              ></div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-6 text-center max-w-7xl">
        <div className="animate-fade-in-up">
          {/* M Series Badge */}
          <div className="mb-8 flex justify-center">
            <div className="inline-flex items-center px-6 py-3 bg-white/10 backdrop-blur-lg rounded-full border border-white/20">
              <span className="text-sm font-bold uppercase tracking-wider text-white">BMW M Series</span>
            </div>
          </div>
          
          <h1 className="text-7xl md:text-9xl font-black mb-8 leading-none">
            <span className="text-white">M COMPETITION</span>
            <br />
            <span className="text-m-gradient">PURE DRIVING POWER</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
            Experience the ultimate expression of BMW M performance. 
            Where track-bred engineering meets uncompromising luxury in every Competition model.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button 
              size="lg" 
              className="btn-m-primary group text-lg"
            >
              Discover M Competition
              <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-2 transition-transform duration-300" />
            </Button>
            
            <Button 
              size="lg" 
              className="btn-m-secondary group text-lg"
            >
              <Play className="mr-3 h-6 w-6" />
              Watch Performance
            </Button>
          </div>
          
          {/* Performance Stats */}
          <div className="grid grid-cols-3 gap-8 mt-16 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-4xl font-black text-m-accent mb-2">630HP</div>
              <div className="text-sm text-gray-400 uppercase tracking-wider">Max Power</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-black text-m-accent mb-2">2.9s</div>
              <div className="text-sm text-gray-400 uppercase tracking-wider">0-100 KM/H</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-black text-m-accent mb-2">305</div>
              <div className="text-sm text-gray-400 uppercase tracking-wider">KM/H Top</div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-8 h-12 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1.5 h-4 bg-white/70 rounded-full mt-3 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default MHero;