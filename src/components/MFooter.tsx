import { Button } from "@/components/ui/button";
import { 
  Instagram, 
  Youtube, 
  Twitter, 
  Facebook,
  MapPin, 
  Phone, 
  Mail 
} from "lucide-react";

const MFooter = () => {
  const mFooterLinks = {
    "M Models": [
      "M2 Competition",
      "M3 Competition", 
      "M4 Competition",
      "M5 Competition",
      "M8 Competition",
      "X3 M Competition"
    ],
    "M Experience": [
      "M Track Days",
      "M Driving Experience",
      "M Performance Centers",
      "M Configurator",
      "M Accessories",
      "M Service"
    ],
    "BMW M": [
      "M Heritage",
      "M Motorsport",
      "M Technology",
      "M Design",
      "M Community",
      "M News"
    ],
    "Support": [
      "Contact M",
      "Find M Dealer",
      "M Owner Portal",
      "M ConnectedDrive",
      "M Warranty",
      "M FAQ"
    ]
  };

  const socialLinks = [
    { icon: Instagram, href: "#", label: "Instagram", color: "from-pink-500 to-purple-500" },
    { icon: Youtube, href: "#", label: "YouTube", color: "from-red-500 to-red-600" },
    { icon: Twitter, href: "#", label: "Twitter", color: "from-blue-400 to-blue-500" },
    { icon: Facebook, href: "#", label: "Facebook", color: "from-blue-600 to-blue-700" }
  ];

  return (
    <footer className="bg-gradient-to-b from-background to-muted/20 border-t border-white/10">
      {/* Main Footer Content */}
      <div className="container mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-6 gap-12">
          {/* BMW M Brand Section */}
          <div className="lg:col-span-2">
            <div className="mb-8">
              <h3 className="text-4xl font-black text-m-gradient mb-6">BMW M</h3>
              <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                The most powerful letter in the world. Born on the racetrack, 
                perfected for the road. Experience the ultimate expression of 
                BMW M performance with Competition models.
              </p>
            </div>
            
            {/* Contact Info */}
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-gradient-to-br from-red-600 to-blue-600 rounded-lg flex items-center justify-center">
                  <MapPin className="h-5 w-5 text-white" />
                </div>
                <span className="text-muted-foreground">
                  BMW M GmbH, Munich, Germany
                </span>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-lg flex items-center justify-center">
                  <Phone className="h-5 w-5 text-white" />
                </div>
                <span className="text-muted-foreground">
                  1-800-BMW-MPOWER
                </span>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-gradient-to-br from-purple-600 to-pink-600 rounded-lg flex items-center justify-center">
                  <Mail className="h-5 w-5 text-white" />
                </div>
                <span className="text-muted-foreground">
                  info@bmw-m.com
                </span>
              </div>
            </div>
          </div>
          
          {/* Footer Links */}
          {Object.entries(mFooterLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="font-bold text-white mb-8 text-lg">{category}</h4>
              <ul className="space-y-4">
                {links.map((link) => (
                  <li key={link}>
                    <a 
                      href="#"
                      className="text-muted-foreground hover:text-white transition-colors duration-300 hover:translate-x-1 transform inline-block"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        {/* Newsletter Section */}
        <div className="mt-20 pt-16 border-t border-white/10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h4 className="text-2xl font-black text-white mb-4">Stay in the M Zone</h4>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Get exclusive access to M Competition news, track events, and performance updates.
              </p>
            </div>
            
            <div className="flex gap-4">
              <input
                type="email"
                placeholder="Enter your email for M updates"
                className="flex-1 px-6 py-4 bg-white/5 border border-white/20 rounded-xl text-white placeholder-white/50 focus:border-white/40 focus:outline-none transition-colors"
              />
              <Button className="btn-m-primary px-8">
                Join M Community
              </Button>
            </div>
          </div>
        </div>
        
        {/* M Performance Stats */}
        <div className="mt-16 grid md:grid-cols-4 gap-8">
          <div className="text-center p-6 card-m-premium">
            <div className="text-3xl font-black text-m-gradient mb-2">50+</div>
            <div className="text-sm text-muted-foreground">Years of M Heritage</div>
          </div>
          <div className="text-center p-6 card-m-premium">
            <div className="text-3xl font-black text-m-gradient mb-2">630</div>
            <div className="text-sm text-muted-foreground">HP Max Power</div>
          </div>
          <div className="text-center p-6 card-m-premium">
            <div className="text-3xl font-black text-m-gradient mb-2">2.9s</div>
            <div className="text-sm text-muted-foreground">0-100 Acceleration</div>
          </div>
          <div className="text-center p-6 card-m-premium">
            <div className="text-3xl font-black text-m-gradient mb-2">∞</div>
            <div className="text-sm text-muted-foreground">Driving Pleasure</div>
          </div>
        </div>
      </div>
      
      {/* Bottom Footer */}
      <div className="border-t border-white/10 py-8">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            {/* Copyright */}
            <div className="text-muted-foreground text-sm">
              © 2024 BMW M GmbH. All rights reserved. | Privacy Policy | Terms of Service | M Competition Legal
            </div>
            
            {/* Social Links */}
            <div className="flex items-center gap-6">
              <span className="text-sm text-muted-foreground mr-4">Follow BMW M:</span>
              {socialLinks.map((social) => (
                <Button
                  key={social.label}
                  variant="ghost"
                  size="sm"
                  className="w-12 h-12 rounded-xl hover:scale-110 transition-all duration-300 p-0 overflow-hidden group"
                  aria-label={social.label}
                >
                  <div className={`w-full h-full bg-gradient-to-br ${social.color} flex items-center justify-center opacity-80 group-hover:opacity-100 transition-opacity`}>
                    <social.icon className="h-5 w-5 text-white" />
                  </div>
                </Button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default MFooter;