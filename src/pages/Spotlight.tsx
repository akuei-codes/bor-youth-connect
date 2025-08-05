import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Star, 
  Crown, 
  Trophy, 
  Calendar,
  MapPin,
  GraduationCap,
  Briefcase,
  Users,
  ArrowRight,
  Sparkles,
  Award,
  Target
} from "lucide-react";

const Spotlight = () => {
  const currentSpotlight = {
    name: "Mary Achol Deng",
    age: 22,
    payam: "Anyidi",
    image: "https://images.unsplash.com/photo-1494790108755-2616b612b047?w=400&h=400&fit=crop&crop=face",
    title: "Tech Innovator & Community Leader",
    education: "Bachelor's in Computer Science",
    achievement: "Founded BorTech Initiative - Training 200+ youth in coding",
    story: "Mary started coding at 18 with limited resources. Through determination and online courses, she mastered web development. Now she runs coding bootcamps in rural areas, bridging the digital divide in Bor County. Her initiative has trained over 200 young people, with 80% finding employment or starting their own tech ventures.",
    skills: ["Web Development", "Python", "Community Leadership", "Tech Education"],
    impact: {
      youth_trained: 200,
      projects_completed: 45,
      employment_rate: "80%",
      communities_reached: 8
    },
    quote: "Technology is not just about code - it's about empowering our community to build a better future together.",
    socialProof: {
      endorsements: 45,
      mentorships: 12,
      testimonials: 28
    }
  };

  const previousSpotlights = [
    {
      name: "John Mabior Garang",
      payam: "Baidit",
      title: "Agricultural Innovation Leader",
      achievement: "Introduced sustainable farming to 500+ families",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face",
      week: "Week 47, 2024"
    },
    {
      name: "Grace Nyandeng Malek",
      payam: "Jalle",
      title: "Healthcare Community Champion",
      achievement: "Reduced child mortality by 30% in remote villages",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&crop=face",
      week: "Week 46, 2024"
    },
    {
      name: "Daniel Deng Nhial",
      payam: "Kolnyang",
      title: "Infrastructure Development Pioneer",
      achievement: "Built 3 community centers with local materials",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face",
      week: "Week 45, 2024"
    }
  ];

  const upcomingEvents = [
    {
      title: "Spotlight Awards Ceremony",
      date: "December 15, 2024",
      description: "Annual celebration of outstanding youth achievements",
      type: "Award Ceremony"
    },
    {
      title: "Spotlight Nomination Period",
      date: "January 1-7, 2025",
      description: "Submit nominations for next week's spotlight",
      type: "Nominations"
    },
    {
      title: "Community Impact Workshop",
      date: "December 20, 2024",
      description: "Learn from this month's spotlight winners",
      type: "Workshop"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-20">
        {/* Header */}
        <section className="py-12 bg-gradient-heritage">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <Badge className="bg-white/20 text-white border-white/30 mb-4">
              <Star className="w-4 h-4 mr-2" />
              Week 48, 2024
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
              Spotlight
              <span className="block text-accent">of the Week</span>
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Celebrating extraordinary youth making a difference in Bor County
            </p>
          </div>
        </section>

        {/* Current Spotlight */}
        <section className="py-12 -mt-16 relative z-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Card className="p-8 md:p-12 shadow-strong bg-gradient-to-br from-card to-surface">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                {/* Profile Image & Basic Info */}
                <div className="text-center lg:text-left">
                  <div className="relative inline-block mb-6">
                    <img 
                      src={currentSpotlight.image}
                      alt={currentSpotlight.name}
                      className="w-48 h-48 rounded-full object-cover shadow-strong mx-auto lg:mx-0"
                    />
                    <div className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-sunset rounded-full flex items-center justify-center shadow-glow">
                      <Crown className="w-8 h-8 text-white" />
                    </div>
                  </div>
                  
                  <h2 className="text-3xl md:text-4xl font-bold mb-2">{currentSpotlight.name}</h2>
                  <p className="text-xl text-accent font-semibold mb-4">{currentSpotlight.title}</p>
                  
                  <div className="flex flex-wrap justify-center lg:justify-start gap-4 text-muted-foreground mb-6">
                    <div className="flex items-center space-x-1">
                      <span>Age {currentSpotlight.age}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <MapPin className="w-4 h-4" />
                      <span>{currentSpotlight.payam} Payam</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <GraduationCap className="w-4 h-4" />
                      <span>{currentSpotlight.education}</span>
                    </div>
                  </div>

                  {/* Skills */}
                  <div className="flex flex-wrap justify-center lg:justify-start gap-2 mb-6">
                    {currentSpotlight.skills.map((skill) => (
                      <Badge key={skill} variant="secondary" className="text-sm">
                        {skill}
                      </Badge>
                    ))}
                  </div>

                  {/* Social Proof */}
                  <div className="grid grid-cols-3 gap-4 mb-6">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-primary">{currentSpotlight.socialProof.endorsements}</div>
                      <div className="text-xs text-muted-foreground">Endorsements</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-secondary">{currentSpotlight.socialProof.mentorships}</div>
                      <div className="text-xs text-muted-foreground">Mentorships</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-accent">{currentSpotlight.socialProof.testimonials}</div>
                      <div className="text-xs text-muted-foreground">Testimonials</div>
                    </div>
                  </div>
                </div>

                {/* Story & Impact */}
                <div>
                  <div className="bg-accent/10 p-6 rounded-lg border border-accent/20 mb-6">
                    <div className="flex items-center space-x-2 mb-3">
                      <Trophy className="w-5 h-5 text-accent" />
                      <span className="font-semibold text-accent">Key Achievement</span>
                    </div>
                    <p className="text-lg font-medium">{currentSpotlight.achievement}</p>
                  </div>

                  <div className="mb-6">
                    <h3 className="font-semibold mb-3 flex items-center space-x-2">
                      <Sparkles className="w-5 h-5 text-primary" />
                      <span>Impact Story</span>
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">{currentSpotlight.story}</p>
                  </div>

                  {/* Impact Metrics */}
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="bg-surface p-4 rounded-lg text-center">
                      <div className="text-2xl font-bold text-primary">{currentSpotlight.impact.youth_trained}</div>
                      <div className="text-sm text-muted-foreground">Youth Trained</div>
                    </div>
                    <div className="bg-surface p-4 rounded-lg text-center">
                      <div className="text-2xl font-bold text-secondary">{currentSpotlight.impact.projects_completed}</div>
                      <div className="text-sm text-muted-foreground">Projects</div>
                    </div>
                    <div className="bg-surface p-4 rounded-lg text-center">
                      <div className="text-2xl font-bold text-accent">{currentSpotlight.impact.employment_rate}</div>
                      <div className="text-sm text-muted-foreground">Employment Rate</div>
                    </div>
                    <div className="bg-surface p-4 rounded-lg text-center">
                      <div className="text-2xl font-bold text-heritage-green">{currentSpotlight.impact.communities_reached}</div>
                      <div className="text-sm text-muted-foreground">Communities</div>
                    </div>
                  </div>

                  {/* Quote */}
                  <div className="bg-gradient-to-r from-primary/5 to-secondary/5 p-6 rounded-lg border-l-4 border-primary">
                    <p className="italic text-lg mb-2">"{currentSpotlight.quote}"</p>
                    <p className="text-sm text-muted-foreground">- {currentSpotlight.name}</p>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8 pt-8 border-t border-border">
                <Button variant="hero" size="lg">
                  <Users className="w-5 h-5 mr-2" />
                  Connect with Mary
                </Button>
                <Button variant="outline" size="lg">
                  <Target className="w-5 h-5 mr-2" />
                  Nominate Someone
                </Button>
                <Button variant="ghost" size="lg">
                  <ArrowRight className="w-5 h-5 mr-2" />
                  View Full Profile
                </Button>
              </div>
            </Card>
          </div>
        </section>

        {/* Previous Spotlights */}
        <section className="py-12 bg-gradient-surface">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Previous
                <span className="block bg-gradient-primary bg-clip-text text-transparent">
                  Spotlight Winners
                </span>
              </h2>
              <p className="text-xl text-muted-foreground">
                Celebrating our community's ongoing achievements
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {previousSpotlights.map((spotlight, index) => (
                <Card key={spotlight.name} className="p-6 hover:shadow-strong transition-all duration-300 group">
                  <div className="text-center">
                    <div className="relative inline-block mb-4">
                      <img 
                        src={spotlight.image}
                        alt={spotlight.name}
                        className="w-24 h-24 rounded-full object-cover shadow-medium group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute -top-2 -right-2 w-8 h-8 bg-accent rounded-full flex items-center justify-center text-white text-xs font-bold">
                        {index + 1}
                      </div>
                    </div>
                    
                    <h3 className="text-lg font-bold mb-1">{spotlight.name}</h3>
                    <p className="text-sm text-muted-foreground mb-2">{spotlight.payam} Payam</p>
                    <p className="text-sm font-medium text-primary mb-3">{spotlight.title}</p>
                    <p className="text-sm text-muted-foreground mb-4">{spotlight.achievement}</p>
                    
                    <Badge variant="outline" className="mb-4">
                      <Calendar className="w-3 h-3 mr-1" />
                      {spotlight.week}
                    </Badge>
                    
                    <Button variant="outline" size="sm" className="w-full">
                      View Story
                    </Button>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Upcoming Events */}
        <section className="py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              <div>
                <h2 className="text-3xl font-bold mb-6">
                  Upcoming
                  <span className="block bg-gradient-sunset bg-clip-text text-transparent">
                    Spotlight Events
                  </span>
                </h2>
                <div className="space-y-4">
                  {upcomingEvents.map((event) => (
                    <Card key={event.title} className="p-6">
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <div className="flex items-center space-x-2 mb-2">
                            <Badge variant="secondary" className="text-xs">
                              {event.type}
                            </Badge>
                            <span className="text-sm text-muted-foreground">{event.date}</span>
                          </div>
                          <h3 className="font-semibold mb-2">{event.title}</h3>
                          <p className="text-sm text-muted-foreground">{event.description}</p>
                        </div>
                        <Button variant="ghost" size="sm">
                          <Calendar className="w-4 h-4" />
                        </Button>
                      </div>
                    </Card>
                  ))}
                </div>
              </div>

              <Card className="p-8 bg-gradient-to-br from-primary/5 to-secondary/5 border-primary/10">
                <div className="text-center">
                  <Award className="w-16 h-16 text-primary mx-auto mb-4" />
                  <h3 className="text-2xl font-bold mb-4">
                    Nominate a Rising Star
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    Know someone making a difference in Bor County? Submit their story for our weekly spotlight.
                  </p>
                  <Button variant="hero" size="lg" className="w-full">
                    <Star className="w-5 h-5 mr-2" />
                    Submit Nomination
                  </Button>
                  <p className="text-sm text-muted-foreground mt-4">
                    Next nomination deadline: January 7, 2025
                  </p>
                </div>
              </Card>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Spotlight;