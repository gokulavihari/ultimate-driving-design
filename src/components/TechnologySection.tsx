import { Card, CardContent } from "@/components/ui/card";
import { 
  Zap, 
  Brain, 
  Shield, 
  Wifi, 
  Gauge, 
  Car 
} from "lucide-react";

const technologies = [
  {
    icon: Zap,
    title: "Electric Innovation",
    description: "Leading the charge with cutting-edge electric and hybrid powertrains for sustainable luxury."
  },
  {
    icon: Brain,
    title: "AI Driving Assistant",
    description: "Advanced artificial intelligence that learns your driving patterns and enhances safety."
  },
  {
    icon: Shield,
    title: "Safety Technology",
    description: "5-star safety rating with comprehensive driver assistance and protection systems."
  },
  {
    icon: Wifi,
    title: "Connected Services",
    description: "Stay connected with BMW ConnectedDrive and seamless smartphone integration."
  },
  {
    icon: Gauge,
    title: "Performance Engineering",
    description: "Precision-engineered engines delivering exceptional power and efficiency."
  },
  {
    icon: Car,
    title: "Luxury Interiors",
    description: "Handcrafted interiors with premium materials and innovative comfort features."
  }
];

const TechnologySection = () => {
  return (
    <section className="py-24 px-6 bg-muted/10">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-5xl font-black mb-6">
            Technology & <span className="text-bmw-gradient">Innovation</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Experience the future of automotive technology with BMW's groundbreaking innovations
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {technologies.map((tech, index) => (
            <Card 
              key={tech.title}
              className="card-bmw group hover:bg-primary/5 transition-all duration-500"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-8 text-center">
                <div className="mb-6 relative">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary/70 rounded-2xl mx-auto flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <tech.icon className="h-8 w-8 text-white" />
                  </div>
                  <div className="absolute inset-0 bg-primary/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                
                <h3 className="text-xl font-bold mb-4 group-hover:text-primary transition-colors">
                  {tech.title}
                </h3>
                
                <p className="text-muted-foreground leading-relaxed">
                  {tech.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechnologySection;