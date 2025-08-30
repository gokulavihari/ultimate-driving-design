import { Card, CardContent } from "@/components/ui/card";
import { 
  Zap, 
  Gauge, 
  Shield, 
  Wind, 
  Cog, 
  Trophy,
  Target,
  Flame
} from "lucide-react";

const performanceFeatures = [
  {
    icon: Zap,
    title: "M TwinPower Turbo",
    value: "630 HP",
    description: "High-revving twin-turbocharged engines delivering exceptional power and torque across the entire rev range.",
    color: "from-red-500 to-orange-500"
  },
  {
    icon: Gauge,
    title: "Lightning Acceleration", 
    value: "2.9s",
    description: "0-100 km/h acceleration that rivals supercars, thanks to optimized powertrains and M xDrive technology.",
    color: "from-blue-500 to-cyan-500"
  },
  {
    icon: Shield,
    title: "M Adaptive Suspension",
    value: "Track-Ready",
    description: "Electronically controlled dampers adapt to driving conditions in milliseconds for ultimate handling precision.",
    color: "from-purple-500 to-pink-500"
  },
  {
    icon: Wind,
    title: "Active Aerodynamics",
    value: "Race-Bred",
    description: "Advanced aerodynamic elements including active front splitter and rear spoiler for optimal downforce.",
    color: "from-green-500 to-emerald-500"
  },
  {
    icon: Cog,
    title: "M Differential",
    value: "Electronic",
    description: "Active M differential ensures optimal traction and power delivery to maximize cornering performance.",
    color: "from-yellow-500 to-amber-500"
  },
  {
    icon: Trophy,
    title: "Competition Package",
    value: "Standard",
    description: "Track-focused enhancements including upgraded suspension, aerodynamics, and performance tuning.",
    color: "from-red-500 to-pink-500"
  },
  {
    icon: Target,
    title: "M Driver Package",
    value: "Unlimited",
    description: "Removes electronic speed limiter and includes M Driver's Package with professional driving instruction.",
    color: "from-indigo-500 to-blue-500"
  },
  {
    icon: Flame,
    title: "Launch Control",
    value: "Optimized",
    description: "Perfect starts every time with launch control that manages power delivery for maximum acceleration.",
    color: "from-orange-500 to-red-500"
  }
];

const MPerformanceSection = () => {
  return (
    <section className="py-32 px-6 bg-gradient-to-b from-muted/10 to-background">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-20 animate-fade-in-up">
          <h2 className="text-6xl font-black mb-8 leading-tight">
            M Performance <span className="text-m-gradient">Engineering</span>
          </h2>
          <p className="text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Every BMW M Competition model is the result of decades of motorsport expertise,
            combining cutting-edge technology with track-proven performance innovations.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {performanceFeatures.map((feature, index) => (
            <Card 
              key={feature.title}
              className="card-m-premium group hover:bg-primary/5 transition-all duration-700 hover:scale-105"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-8 text-center h-full flex flex-col">
                <div className="mb-6 relative flex-shrink-0">
                  <div className={`w-20 h-20 bg-gradient-to-br ${feature.color} rounded-3xl mx-auto flex items-center justify-center group-hover:scale-110 transition-transform duration-500 shadow-lg`}>
                    <feature.icon className="h-10 w-10 text-white" />
                  </div>
                  <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} rounded-3xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500`}></div>
                </div>
                
                <div className="flex-grow">
                  <h3 className="text-2xl font-black mb-3 text-white group-hover:text-m-accent transition-colors duration-300">
                    {feature.title}
                  </h3>
                  
                  <div className="text-3xl font-black text-m-accent mb-4">
                    {feature.value}
                  </div>
                  
                  <p className="text-muted-foreground leading-relaxed text-sm">
                    {feature.description}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        {/* Performance Stats Section */}
        <div className="mt-20 grid md:grid-cols-3 gap-8">
          <div className="text-center p-8 card-m-premium">
            <div className="text-5xl font-black text-m-gradient mb-4">100+</div>
            <div className="text-xl font-bold text-white mb-2">Years of Motorsport</div>
            <div className="text-muted-foreground">Racing heritage since 1916</div>
          </div>
          <div className="text-center p-8 card-m-premium">
            <div className="text-5xl font-black text-m-gradient mb-4">25+</div>
            <div className="text-xl font-bold text-white mb-2">Championship Titles</div>
            <div className="text-muted-foreground">DTM, Formula 1, and more</div>
          </div>
          <div className="text-center p-8 card-m-premium">
            <div className="text-5xl font-black text-m-gradient mb-4">50+</div>
            <div className="text-xl font-bold text-white mb-2">M Models Available</div>
            <div className="text-muted-foreground">Complete performance lineup</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MPerformanceSection;