import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Users, 
  MapPin, 
  Shield, 
  Search, 
  Star, 
  BarChart3,
  Briefcase,
  MessageSquare,
  ArrowRight,
  Sparkles
} from "lucide-react";

const FeaturesSection = () => {
  const features = [
    {
      icon: Users,
      title: "Youth Profiles",
      description: "Showcase your education, skills, achievements, and Payam affiliation",
      gradient: "from-primary to-primary-light",
      highlights: ["Bio & Photo", "Skills & Certifications", "Payam Connection"]
    },
    {
      icon: MapPin,
      title: "Interactive Map",
      description: "Explore talents across all five Payams of Bor County",
      gradient: "from-secondary to-secondary-light",
      highlights: ["Clickable Payam Map", "Profile Discovery", "Regional Insights"]
    },
    {
      icon: Shield,
      title: "Verification System",
      description: "Build trust with optional verification by local chiefs and leaders",
      gradient: "from-heritage-green to-accent",
      highlights: ["Chief Verification", "Community Trust", "Credible Profiles"]
    },
    {
      icon: Search,
      title: "Smart Filters",
      description: "Find exactly who you're looking for with advanced search options",
      gradient: "from-accent to-secondary",
      highlights: ["Skill Matching", "Location Filter", "Age & Experience"]
    },
    {
      icon: Star,
      title: "Weekly Spotlight",
      description: "Get featured and inspire others with your achievements",
      gradient: "from-heritage-red to-secondary",
      highlights: ["Featured Stories", "Community Recognition", "Inspiration Hub"]
    },
    {
      icon: BarChart3,
      title: "Payam Analytics",
      description: "Track community growth and engagement across regions",
      gradient: "from-primary to-heritage-green",
      highlights: ["Growth Metrics", "Engagement Stats", "Regional Comparison"]
    },
    {
      icon: Briefcase,
      title: "Opportunities Board",
      description: "Discover scholarships, jobs, and projects from NGOs and diaspora",
      gradient: "from-secondary to-heritage-red",
      highlights: ["Job Listings", "Scholarships", "Project Opportunities"]
    },
    {
      icon: MessageSquare,
      title: "Community Forum",
      description: "Discuss education, leadership, culture, and share experiences",
      gradient: "from-heritage-green to-primary",
      highlights: ["Topic Discussions", "Cultural Exchange", "Peer Support"]
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge className="bg-primary/10 text-primary border-primary/20 mb-4">
            <Sparkles className="w-4 h-4 mr-2" />
            Platform Features
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Everything You Need to
            <span className="block bg-gradient-primary bg-clip-text text-transparent">
              Showcase Your Talent
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            BorNet combines professional networking with cultural pride, 
            creating opportunities for youth across all five Payams
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mb-16">
          {features.map((feature, index) => (
            <Card 
              key={feature.title}
              className="p-6 hover:shadow-strong transition-all duration-300 group cursor-pointer animate-fade-in border-0 bg-gradient-to-br from-card to-surface"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${feature.gradient} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-soft`}>
                <feature.icon className="w-6 h-6 text-white" />
              </div>
              
              <h3 className="text-lg font-semibold mb-3 group-hover:text-primary transition-colors">
                {feature.title}
              </h3>
              
              <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                {feature.description}
              </p>
              
              <div className="space-y-2">
                {feature.highlights.map((highlight, idx) => (
                  <div key={idx} className="flex items-center space-x-2 text-xs">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                    <span className="text-muted-foreground">{highlight}</span>
                  </div>
                ))}
              </div>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gradient-to-r from-primary/5 to-secondary/5 p-12 rounded-2xl border border-primary/10">
          <h3 className="text-3xl font-bold mb-4">
            Ready to Join the Community?
          </h3>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Start building your profile today and connect with fellow youth from across Bor County
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="lg" className="group">
              Create Your Profile
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="outline" size="lg">
              Explore Community
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;