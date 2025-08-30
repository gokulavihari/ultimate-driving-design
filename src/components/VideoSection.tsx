import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";

const VideoSection = () => {
  return (
    <section className="py-24 px-6 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-5xl font-black mb-6">
            Design & <span className="text-bmw-gradient">Legacy</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover the story behind BMW's iconic design philosophy and rich heritage
          </p>
        </div>
        
        <div className="relative group">
          {/* Video Placeholder */}
          <div className="relative aspect-video bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl overflow-hidden shadow-[var(--shadow-luxury)]">
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20"></div>
            
            {/* Play Button */}
            <div className="absolute inset-0 flex items-center justify-center">
              <Button 
                size="lg"
                className="w-20 h-20 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all duration-300 group-hover:scale-110"
              >
                <Play className="h-8 w-8 text-white ml-1" />
              </Button>
            </div>
            
            {/* Video Info */}
            <div className="absolute bottom-6 left-6 right-6">
              <h3 className="text-2xl font-bold text-white mb-2">
                The Art of BMW Design
              </h3>
              <p className="text-white/80">
                Explore how BMW's design philosophy creates vehicles that are both beautiful and functional
              </p>
            </div>
            
            {/* Decorative Grid Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="grid grid-cols-12 grid-rows-6 h-full w-full">
                {Array.from({ length: 72 }, (_, i) => (
                  <div key={i} className="border border-white/20"></div>
                ))}
              </div>
            </div>
          </div>
          
          {/* Video Stats */}
          <div className="grid grid-cols-3 gap-8 mt-12">
            <div className="text-center">
              <div className="text-3xl font-black text-primary mb-2">100+</div>
              <div className="text-muted-foreground">Years of Innovation</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-black text-primary mb-2">2.5M+</div>
              <div className="text-muted-foreground">Cars Delivered Annually</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-black text-primary mb-2">31</div>
              <div className="text-muted-foreground">Countries Worldwide</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;