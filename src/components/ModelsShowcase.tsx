import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Zap, Crown, Rocket } from "lucide-react";
import bmwX5 from "@/assets/bmw-x5.jpg";
import bmwI8 from "@/assets/bmw-i8.jpg";
import bmw7Series from "@/assets/bmw-7series.jpg";

const models = [
  {
    name: "BMW X5",
    category: "Luxury SUV",
    image: bmwX5,
    icon: Crown,
    description: "The perfect blend of luxury and versatility",
    price: "From $65,400",
    features: ["xDrive AWD", "Panoramic Roof", "Premium Audio"]
  },
  {
    name: "BMW i8",
    category: "Electric Sports",
    image: bmwI8,
    icon: Zap,
    description: "Revolutionary hybrid sports car of the future",
    price: "From $147,500",
    features: ["Hybrid Engine", "Butterfly Doors", "Carbon Fiber"]
  },
  {
    name: "BMW 7 Series",
    category: "Executive Sedan",
    image: bmw7Series,
    icon: Rocket,
    description: "The pinnacle of luxury and innovation",
    price: "From $91,900",
    features: ["Executive Lounge", "Massage Seats", "Laser Lights"]
  }
];

const ModelsShowcase = () => {
  return (
    <section className="py-24 px-6 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-5xl font-black mb-6">
            Explore Our <span className="text-bmw-gradient">Models</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover the BMW lineup - where cutting-edge technology meets uncompromising luxury
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {models.map((model, index) => (
            <Card 
              key={model.name} 
              className="card-bmw group hover:scale-105 transition-all duration-500 overflow-hidden"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={model.image}
                  alt={model.name}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute top-4 left-4">
                  <div className="bg-primary/90 backdrop-blur-sm rounded-full p-2">
                    <model.icon className="h-5 w-5 text-white" />
                  </div>
                </div>
                <div className="absolute top-4 right-4">
                  <span className="bg-black/50 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm font-medium">
                    {model.category}
                  </span>
                </div>
              </div>
              
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold mb-2">{model.name}</h3>
                <p className="text-muted-foreground mb-4">{model.description}</p>
                
                <div className="mb-4">
                  <span className="text-2xl font-bold text-primary">{model.price}</span>
                </div>
                
                <div className="space-y-2 mb-6">
                  {model.features.map((feature) => (
                    <div key={feature} className="flex items-center text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></div>
                      {feature}
                    </div>
                  ))}
                </div>
                
                <Button className="w-full btn-bmw-primary group">
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ModelsShowcase;