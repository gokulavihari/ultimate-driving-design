import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Zap, Crown, Rocket, Trophy, Gauge } from "lucide-react";
import bmwM2 from "@/assets/bmw-m2-competition.jpg";
import bmwM3 from "@/assets/bmw-m3-competition.jpg";
import bmwM4 from "@/assets/bmw-m4-competition.jpg";
import bmwM5 from "@/assets/bmw-m5-competition.jpg";
import bmwM8 from "@/assets/bmw-m8-competition.jpg";

const mModels = [
  {
    name: "M2 Competition",
    category: "Compact Performance",
    image: bmwM2,
    icon: Zap,
    description: "Pure driving dynamics in compact form",
    price: "From €61,500",
    specs: { hp: "410", torque: "550", acceleration: "4.2" },
    features: ["Racing Blue", "Carbon Fiber", "M Driver Package"]
  },
  {
    name: "M3 Competition",
    category: "Sports Sedan",
    image: bmwM3,
    icon: Trophy,
    description: "The ultimate sports sedan redefined",
    price: "From €91,600",
    specs: { hp: "510", torque: "650", acceleration: "3.9" },
    features: ["Storm Bay", "Adaptive M Suspension", "Competition Package"]
  },
  {
    name: "M4 Competition",
    category: "Sports Coupe", 
    image: bmwM4,
    icon: Crown,
    description: "Coupe perfection with M DNA",
    price: "From €94,700",  
    specs: { hp: "510", torque: "650", acceleration: "3.9" },
    features: ["Fire Orange", "Carbon M Roof", "M Track Package"]
  },
  {
    name: "M5 Competition",
    category: "Executive Performance",
    image: bmwM5,
    icon: Rocket,
    description: "Luxury meets uncompromising performance",
    price: "From €142,400",
    specs: { hp: "625", torque: "750", acceleration: "3.3" },
    features: ["Black Sapphire", "M xDrive", "Executive Package"]
  },
  {
    name: "M8 Competition",
    category: "Grand Tourer",
    image: bmwM8,
    icon: Gauge,
    description: "The pinnacle of M performance luxury",
    price: "From €174,600",
    specs: { hp: "625", torque: "750", acceleration: "3.2" },
    features: ["Alpine White", "Carbon Package", "Luxury Interior"]
  }
];

const MModelsShowcase = () => {
  return (
    <section className="py-32 px-6 bg-gradient-to-b from-background to-muted/10">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-20 animate-fade-in-up">
          <h2 className="text-6xl font-black mb-8 leading-tight">
            M Competition <span className="text-m-gradient">Collection</span>
          </h2>
          <p className="text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Five exceptional models. One uncompromising philosophy. 
            Discover the BMW M Competition lineup where every detail is engineered for performance.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-10">
          {mModels.map((model, index) => (
            <Card 
              key={model.name} 
              className={`card-m-premium group hover:scale-105 transition-all duration-700 ${
                index === 2 ? 'xl:col-span-3 xl:w-1/3 xl:mx-auto' : ''
              }`}
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={model.image}
                  alt={model.name}
                  className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-1000"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                
                {/* Category Badge */}
                <div className="absolute top-6 left-6">
                  <div className="bg-gradient-to-r from-red-600 to-blue-600 rounded-full p-3">
                    <model.icon className="h-6 w-6 text-white" />
                  </div>
                </div>
                
                {/* Model Category */}
                <div className="absolute top-6 right-6">
                  <span className="bg-black/70 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-bold uppercase tracking-wider">
                    {model.category}
                  </span>
                </div>
                
                {/* Performance Stats Overlay */}
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="grid grid-cols-3 gap-4 mb-4">
                    <div className="text-center bg-black/50 rounded-lg p-2">
                      <div className="text-xl font-black text-white">{model.specs.hp}</div>
                      <div className="text-xs text-gray-300">HP</div>
                    </div>
                    <div className="text-center bg-black/50 rounded-lg p-2">
                      <div className="text-xl font-black text-white">{model.specs.torque}</div>
                      <div className="text-xs text-gray-300">NM</div>
                    </div>
                    <div className="text-center bg-black/50 rounded-lg p-2">
                      <div className="text-xl font-black text-white">{model.specs.acceleration}</div>
                      <div className="text-xs text-gray-300">0-100</div>
                    </div>
                  </div>
                </div>
              </div>
              
              <CardContent className="p-8">
                <h3 className="text-3xl font-black mb-3">{model.name}</h3>
                <p className="text-muted-foreground mb-6 text-lg leading-relaxed">{model.description}</p>
                
                <div className="mb-6">
                  <span className="text-3xl font-black text-m-accent">{model.price}</span>
                </div>
                
                <div className="space-y-3 mb-8">
                  {model.features.map((feature) => (
                    <div key={feature} className="flex items-center text-muted-foreground">
                      <div className="w-2 h-2 bg-gradient-to-r from-red-500 to-blue-500 rounded-full mr-3"></div>
                      <span className="font-medium">{feature}</span>
                    </div>
                  ))}
                </div>
                
                <Button className="w-full btn-m-primary group text-lg">
                  Configure & Price
                  <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-2 transition-transform duration-300" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
        
        {/* View All Models CTA */}
        <div className="text-center mt-16">
          <Button className="btn-m-secondary text-lg px-12">
            View Complete M Lineup
            <ArrowRight className="ml-3 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default MModelsShowcase;