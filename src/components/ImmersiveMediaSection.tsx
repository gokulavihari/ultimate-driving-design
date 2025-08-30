import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Play, Camera, Film, Mic } from "lucide-react";

const mediaContent = [
  {
    type: "video",
    title: "M5 Competition: Track Mastery",
    description: "Watch the M5 Competition dominate the Nürburgring Nordschleife",
    thumbnail: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=800&q=80",
    duration: "3:45",
    icon: Play
  },
  {
    type: "gallery",
    title: "Behind the Scenes: M Design",
    description: "Exclusive look into BMW M's design philosophy and development process",
    thumbnail: "https://images.unsplash.com/photo-1502877338535-766e1452684a?w=800&q=80",
    count: "24 Photos",
    icon: Camera
  },
  {
    type: "video",
    title: "M3 Competition: City to Circuit",
    description: "From Munich streets to the racetrack - the ultimate driving machine",
    thumbnail: "https://images.unsplash.com/photo-1494905998402-395d579af36f?w=800&q=80",
    duration: "4:20",
    icon: Film
  },
  {
    type: "podcast",
    title: "M Engineers Speak",
    description: "Conversations with the masterminds behind M Competition models",
    thumbnail: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&q=80",
    duration: "28:15",
    icon: Mic
  },
  {
    type: "video",
    title: "M8 Competition: Grand Tour",
    description: "Experience luxury and performance across European landscapes",
    thumbnail: "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=800&q=80",
    duration: "5:12",
    icon: Play
  },
  {
    type: "gallery",
    title: "M Competition Interiors",
    description: "Handcrafted luxury meets racing-inspired design",
    thumbnail: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80",
    count: "18 Photos", 
    icon: Camera
  }
];

const ImmersiveMediaSection = () => {
  return (
    <section className="py-32 px-6 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-20 animate-fade-in-up">
          <h2 className="text-6xl font-black mb-8 leading-tight">
            Immersive <span className="text-m-gradient">M Experience</span>
          </h2>
          <p className="text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Dive deep into the world of BMW M with exclusive content showcasing the artistry,
            engineering excellence, and pure emotion behind every M Competition model.
          </p>
        </div>
        
        {/* Featured Video */}
        <div className="mb-16">
          <Card className="card-m-premium overflow-hidden group">
            <div className="relative aspect-video">
              <img
                src="https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=1200&q=80"
                alt="Featured M Content"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
              
              {/* Play Button */}
              <div className="absolute inset-0 flex items-center justify-center">
                <Button 
                  size="lg"
                  className="w-24 h-24 rounded-full bg-white/10 backdrop-blur-lg border border-white/20 hover:bg-white/20 transition-all duration-500 group-hover:scale-110"
                >
                  <Play className="h-10 w-10 text-white ml-1" />
                </Button>
              </div>
              
              {/* Content Info */}
              <div className="absolute bottom-8 left-8 right-8">
                <div className="flex items-center gap-4 mb-4">
                  <span className="bg-red-600 text-white px-3 py-1 rounded-full text-sm font-bold uppercase">Featured</span>
                  <span className="text-white/80 text-sm">6:30</span>
                </div>
                <h3 className="text-3xl font-black text-white mb-2">
                  The Making of M Competition
                </h3>
                <p className="text-white/80 text-lg max-w-2xl">
                  An exclusive documentary following the development of BMW's most powerful M models
                </p>
              </div>
            </div>
          </Card>
        </div>
        
        {/* Media Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {mediaContent.map((media, index) => (
            <Card 
              key={media.title}
              className="card-m-premium group hover:scale-105 transition-all duration-700 cursor-pointer"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={media.thumbnail}
                  alt={media.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-1000"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                
                {/* Media Type Badge */}
                <div className="absolute top-4 left-4">
                  <div className="bg-gradient-to-r from-red-600 to-blue-600 rounded-full p-2">
                    <media.icon className="h-4 w-4 text-white" />
                  </div>
                </div>
                
                {/* Duration/Count */}
                <div className="absolute top-4 right-4">
                  <span className="bg-black/70 text-white px-2 py-1 rounded text-xs font-medium">
                    {media.duration || media.count}
                  </span>
                </div>
                
                {/* Play Overlay */}
                {media.type === 'video' && (
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                      <Play className="h-6 w-6 text-white ml-1" />
                    </div>
                  </div>
                )}
              </div>
              
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2 text-white group-hover:text-m-accent transition-colors">
                  {media.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {media.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
        
        {/* View All CTA */}
        <div className="text-center mt-16">
          <Button className="btn-m-secondary text-lg px-12">
            Explore M Media Hub
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ImmersiveMediaSection;