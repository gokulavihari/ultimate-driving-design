import { Button } from "@/components/ui/button";
import { 
  Facebook, 
  Instagram, 
  Twitter, 
  Youtube, 
  MapPin, 
  Phone, 
  Mail 
} from "lucide-react";

const Footer = () => {
  const footerLinks = {
    "BMW Models": [
      "3 Series",
      "5 Series", 
      "7 Series",
      "X3 SUV",
      "X5 SUV",
      "i8 Electric"
    ],
    "Services": [
      "Test Drive",
      "Service Center",
      "Parts & Accessories",
      "Financing",
      "Insurance",
      "Maintenance"
    ],
    "Company": [
      "About BMW",
      "Careers",
      "News & Press",
      "Sustainability",
      "Innovation",
      "Investor Relations"
    ],
    "Support": [
      "Contact Us",
      "Find Dealer",
      "Owner Portal",
      "BMW ConnectedDrive",
      "Warranty",
      "FAQ"
    ]
  };

  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Youtube, href: "#", label: "YouTube" }
  ];

  return (
    <footer className="bg-gradient-to-b from-background to-muted/20 border-t border-white/10">
      {/* Main Footer Content */}
      <div className="container mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-6 gap-12">
          {/* BMW Brand Section */}
          <div className="lg:col-span-2">
            <div className="mb-6">
              <h3 className="text-3xl font-black text-bmw-gradient mb-4">BMW</h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                The Ultimate Driving Machine. Experience luxury, innovation, and 
                performance in every BMW vehicle. Join millions of drivers worldwide 
                who trust BMW for exceptional quality.
              </p>
            </div>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <MapPin className="h-5 w-5 text-primary" />
                <span className="text-sm text-muted-foreground">
                  BMW Group HQ, Munich, Germany
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-primary" />
                <span className="text-sm text-muted-foreground">
                  1-800-BMW-INFO
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-primary" />
                <span className="text-sm text-muted-foreground">
                  info@bmw.com
                </span>
              </div>
            </div>
          </div>
          
          {/* Footer Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="font-semibold text-foreground mb-6">{category}</h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <a 
                      href="#"
                      className="text-muted-foreground hover:text-primary transition-colors duration-200"
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
        <div className="mt-16 pt-12 border-t border-white/10">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h4 className="text-xl font-bold mb-2">Stay Updated</h4>
              <p className="text-muted-foreground">
                Get the latest BMW news, offers, and updates delivered to your inbox.
              </p>
            </div>
            
            <div className="flex gap-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-background/50 border border-white/10 rounded-lg text-foreground placeholder-muted-foreground focus:border-primary focus:outline-none transition-colors"
              />
              <Button className="btn-bmw-primary px-8">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Bottom Footer */}
      <div className="border-t border-white/10 py-8">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            {/* Copyright */}
            <div className="text-muted-foreground text-sm">
              © 2024 BMW Group. All rights reserved. | Privacy Policy | Terms of Service
            </div>
            
            {/* Social Links */}
            <div className="flex items-center gap-4">
              <span className="text-sm text-muted-foreground mr-2">Follow BMW:</span>
              {socialLinks.map((social) => (
                <Button
                  key={social.label}
                  variant="ghost"
                  size="sm"
                  className="w-10 h-10 rounded-full hover:bg-primary/10 hover:text-primary transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="h-5 w-5" />
                </Button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;