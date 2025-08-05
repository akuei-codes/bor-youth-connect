import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Star, 
  MapPin, 
  GraduationCap, 
  Users, 
  ArrowRight,
  Crown,
  Zap
} from "lucide-react";
import communityHero from "@/assets/community-hero.jpg";

const CommunitySpotlight = () => {
  const spotlightProfile = {
    name: "Mary Achol Deng",
    age: 22,
    payam: "Anyidi",
    education: "Bachelor's in Computer Science",
    skills: ["Web Development", "Digital Marketing", "Leadership"],
    achievement: "Founded local tech startup",
    image: "https://images.unsplash.com/photo-1494790108755-2616b612b047?w=400&h=400&fit=crop&crop=face"
  };

  const payamStats = [
    { name: "Anyidi", count: 127, color: "bg-primary" },
    { name: "Baidit", count: 98, color: "bg-secondary" },
    { name: "Jalle", count: 89, color: "bg-accent" },
    { name: "Kolnyang", count: 76, color: "bg-heritage-red" },
    { name: "Makuach", count: 85, color: "bg-heritage-green" }
  ];

  return (
    <section className="py-20 bg-gradient-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge className="bg-accent/10 text-accent border-accent/20 mb-4">
            <Star className="w-4 h-4 mr-2" />
            Community Spotlight
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Celebrating Our
            <span className="block bg-gradient-heritage bg-clip-text text-transparent">
              Rising Stars
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Every week, we highlight exceptional youth making a difference in Bor County
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Spotlight Profile */}
          <Card className="p-8 shadow-strong hover:shadow-glow transition-all duration-300 bg-gradient-to-br from-card to-surface">
            <div className="flex items-start space-x-6">
              <div className="relative">
                <img 
                  src={spotlightProfile.image}
                  alt={spotlightProfile.name}
                  className="w-20 h-20 rounded-full object-cover shadow-medium"
                />
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-accent rounded-full flex items-center justify-center">
                  <Crown className="w-4 h-4 text-white" />
                </div>
              </div>
              
              <div className="flex-1">
                <h3 className="text-2xl font-bold mb-2">{spotlightProfile.name}</h3>
                <div className="flex items-center space-x-4 text-muted-foreground mb-4">
                  <span>Age {spotlightProfile.age}</span>
                  <div className="flex items-center space-x-1">
                    <MapPin className="w-4 h-4" />
                    <span>{spotlightProfile.payam} Payam</span>
                  </div>
                </div>
                
                <div className="flex items-center space-x-2 mb-4">
                  <GraduationCap className="w-5 h-5 text-primary" />
                  <span className="text-sm">{spotlightProfile.education}</span>
                </div>

                <div className="flex flex-wrap gap-2 mb-4">
                  {spotlightProfile.skills.map((skill) => (
                    <Badge key={skill} variant="secondary" className="text-xs">
                      {skill}
                    </Badge>
                  ))}
                </div>

                <div className="bg-accent/10 p-4 rounded-lg border border-accent/20">
                  <div className="flex items-center space-x-2 mb-2">
                    <Zap className="w-4 h-4 text-accent" />
                    <span className="font-semibold text-accent">Latest Achievement</span>
                  </div>
                  <p className="text-sm">{spotlightProfile.achievement}</p>
                </div>
              </div>
            </div>
            
            <Button variant="outline" className="w-full mt-6">
              View Full Profile
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </Card>

          {/* Community Image */}
          <div className="relative">
            <img 
              src={communityHero}
              alt="BorNet Community"
              className="w-full h-96 object-cover rounded-2xl shadow-strong"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent rounded-2xl"></div>
            <div className="absolute bottom-6 left-6 text-white">
              <h3 className="text-2xl font-bold mb-2">United in Growth</h3>
              <p className="text-white/90">Building tomorrow's leaders today</p>
            </div>
          </div>
        </div>

        {/* Payam Leaderboard */}
        <Card className="p-8 shadow-medium">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h3 className="text-2xl font-bold mb-2">Payam Leaderboard</h3>
              <p className="text-muted-foreground">Active community members by region</p>
            </div>
            <Button variant="ghost" size="sm">
              View All Stats
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {payamStats.map((payam, index) => (
              <div key={payam.name} className="relative">
                <div className="bg-surface rounded-lg p-6 text-center hover:shadow-soft transition-all duration-300">
                  <div className={`w-12 h-12 ${payam.color} rounded-full mx-auto mb-4 flex items-center justify-center text-white font-bold text-lg`}>
                    {index + 1}
                  </div>
                  <h4 className="font-semibold mb-1">{payam.name}</h4>
                  <p className="text-2xl font-bold text-primary mb-1">{payam.count}</p>
                  <p className="text-xs text-muted-foreground">Active Members</p>
                </div>
                {index === 0 && (
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-accent rounded-full flex items-center justify-center">
                    <Crown className="w-3 h-3 text-white" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </Card>
      </div>
    </section>
  );
};

export default CommunitySpotlight;