import { Button } from "@/components/ui/button";
import { ArrowRight, Users, MapPin, Star } from "lucide-react";
import heroNile from "@/assets/hero-nile.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroNile})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-primary/80 via-primary/60 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 animate-fade-in">
            Empowering
            <span className="block bg-gradient-sunset bg-clip-text text-transparent">
              Bor Youth
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed animate-slide-up">
            Connect, showcase your talents, and unlock opportunities in the largest 
            youth community platform for Bor County, South Sudan.
          </p>

          {/* Stats */}
          <div className="flex flex-wrap justify-center gap-8 mb-10 animate-slide-up">
            <div className="flex items-center space-x-2 text-white/90">
              <Users className="w-6 h-6 text-accent" />
              <span className="text-lg font-semibold">500+ Youth</span>
            </div>
            <div className="flex items-center space-x-2 text-white/90">
              <MapPin className="w-6 h-6 text-secondary" />
              <span className="text-lg font-semibold">5 Payams</span>
            </div>
            <div className="flex items-center space-x-2 text-white/90">
              <Star className="w-6 h-6 text-accent" />
              <span className="text-lg font-semibold">100+ Success Stories</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-slide-up">
            <Button variant="hero" size="lg" className="group">
              Join Our Community
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="outline" size="lg" className="bg-white/10 border-white/30 text-white hover:bg-white hover:text-primary">
              Explore Profiles
            </Button>
          </div>

          {/* Cultural Note */}
          <p className="text-white/70 mt-8 text-sm animate-fade-in">
            Proudly connecting the youth of Anyidi, Baidit, Jalle, Kolnyang, and Makuach
          </p>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute bottom-10 left-10 w-20 h-20 bg-accent/20 rounded-full animate-float hidden lg:block"></div>
      <div className="absolute top-20 right-20 w-16 h-16 bg-secondary/20 rounded-full animate-float hidden lg:block" style={{ animationDelay: '1s' }}></div>
      <div className="absolute bottom-32 right-16 w-12 h-12 bg-heritage-red/20 rounded-full animate-float hidden lg:block" style={{ animationDelay: '2s' }}></div>
    </section>
  );
};

export default Hero;