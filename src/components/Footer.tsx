import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { 
  Globe, 
  MapPin, 
  Users, 
  MessageSquare, 
  Mail, 
  Phone,
  Facebook,
  Twitter,
  Instagram,
  Heart
} from "lucide-react";

const Footer = () => {
  const quickLinks = [
    { label: "About BorNet", href: "/about" },
    { label: "How It Works", href: "/how-it-works" },
    { label: "Community Guidelines", href: "/guidelines" },
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms of Service", href: "/terms" }
  ];

  const communityLinks = [
    { label: "Youth Profiles", href: "/community", icon: Users },
    { label: "Interactive Map", href: "/map", icon: MapPin },
    { label: "Discussion Forum", href: "/forum", icon: MessageSquare },
    { label: "Success Stories", href: "/stories", icon: Heart }
  ];

  const payams = ["Anyidi", "Baidit", "Jalle", "Kolnyang", "Makuach"];

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Brand Section */}
            <div className="lg:col-span-1">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center">
                  <Globe className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xl font-bold">BorNet</span>
                  <p className="text-sm text-primary-foreground/80">Youth Talent Platform</p>
                </div>
              </div>
              <p className="text-primary-foreground/80 mb-6 leading-relaxed">
                Empowering the youth of Bor County, South Sudan through connection, 
                showcase, and opportunity. Building bridges between talent and success.
              </p>
              <div className="flex space-x-3">
                <Button variant="ghost" size="icon" className="text-primary-foreground hover:bg-white/10">
                  <Facebook className="w-5 h-5" />
                </Button>
                <Button variant="ghost" size="icon" className="text-primary-foreground hover:bg-white/10">
                  <Twitter className="w-5 h-5" />
                </Button>
                <Button variant="ghost" size="icon" className="text-primary-foreground hover:bg-white/10">
                  <Instagram className="w-5 h-5" />
                </Button>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="font-semibold mb-6">About</h3>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.href}>
                    <Link 
                      to={link.href}
                      className="text-primary-foreground/80 hover:text-white transition-colors text-sm"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Community Links */}
            <div>
              <h3 className="font-semibold mb-6">Community</h3>
              <ul className="space-y-3">
                {communityLinks.map((link) => (
                  <li key={link.href}>
                    <Link 
                      to={link.href}
                      className="flex items-center space-x-2 text-primary-foreground/80 hover:text-white transition-colors text-sm group"
                    >
                      <link.icon className="w-4 h-4 group-hover:scale-110 transition-transform" />
                      <span>{link.label}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Payams & Contact */}
            <div>
              <h3 className="font-semibold mb-6">Payams</h3>
              <div className="grid grid-cols-2 gap-2 mb-6">
                {payams.map((payam) => (
                  <Link 
                    key={payam}
                    to={`/map?payam=${payam.toLowerCase()}`}
                    className="text-xs bg-white/10 px-3 py-2 rounded-md hover:bg-white/20 transition-colors text-center"
                  >
                    {payam}
                  </Link>
                ))}
              </div>
              
              <div className="space-y-3">
                <div className="flex items-center space-x-2 text-sm text-primary-foreground/80">
                  <Mail className="w-4 h-4" />
                  <span>info@bornet.ss</span>
                </div>
                <div className="flex items-center space-x-2 text-sm text-primary-foreground/80">
                  <Phone className="w-4 h-4" />
                  <span>+211 XXX XXX XXX</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="border-t border-white/10 py-8">
          <div className="text-center">
            <h3 className="text-xl font-semibold mb-2">Stay Connected</h3>
            <p className="text-primary-foreground/80 mb-6 max-w-2xl mx-auto">
              Get updates on new features, community highlights, and opportunities. 
              Join our newsletter to stay informed about the BorNet community.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input 
                type="email" 
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/30"
              />
              <Button variant="secondary" className="shrink-0">
                Subscribe
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-primary-foreground/60">
            <div className="mb-4 md:mb-0">
              © 2024 BorNet. All rights reserved. Made with ❤️ for Bor County youth.
            </div>
            <div className="flex space-x-6">
              <span>English</span>
              <span>•</span>
              <span>Dinka Bor</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;