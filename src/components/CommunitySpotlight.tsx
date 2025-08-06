import { useState, useEffect } from "react";
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
  Zap,
  Loader2
} from "lucide-react";
import communityHero from "@/assets/community-hero.jpg";
import { supabase } from "@/integrations/supabase/client";

interface SpotlightProfile {
  legal_name: string;
  age: number | null;
  payam: string | null;
  skills: string[] | null;
  profile_photo_url: string | null;
  education?: {
    degree: string;
    institution: string;
    field_of_study: string | null;
  }[];
}

interface PayamStat {
  name: string;
  count: number;
  color: string;
}

const CommunitySpotlight = () => {
  const [spotlightProfile, setSpotlightProfile] = useState<SpotlightProfile | null>(null);
  const [payamStats, setPayamStats] = useState<PayamStat[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchSpotlightData();
  }, []);

  const fetchSpotlightData = async () => {
    try {
      setLoading(true);
      
      // Fetch a random profile with skills and education for spotlight
      const { data: profiles, error: profilesError } = await supabase
        .from('profiles')
        .select('id, legal_name, age, payam, skills, profile_photo_url')
        .not('skills', 'is', null)
        .not('profile_photo_url', 'is', null)
        .limit(10);

      if (profilesError) throw profilesError;

      if (profiles && profiles.length > 0) {
        // Pick a random profile for spotlight
        const randomProfile = profiles[Math.floor(Math.random() * profiles.length)];
        
        // Fetch education for the spotlight profile
        const { data: education } = await supabase
          .from('education')
          .select('degree, institution, field_of_study')
          .eq('user_id', randomProfile.id);

        setSpotlightProfile({
          ...randomProfile,
          education: education || []
        });
      }

      // Fetch payam statistics
      const { data: allProfiles, error: statsError } = await supabase
        .from('profiles')
        .select('payam')
        .not('payam', 'is', null);

      if (statsError) throw statsError;

      // Calculate payam stats
      const payamCounts = allProfiles?.reduce((acc, profile) => {
        const payam = profile.payam;
        if (payam) {
          acc[payam] = (acc[payam] || 0) + 1;
        }
        return acc;
      }, {} as Record<string, number>) || {};

      const colors = ["bg-primary", "bg-secondary", "bg-accent", "bg-heritage-red", "bg-heritage-green"];
      const sortedPayams = Object.entries(payamCounts)
        .sort(([,a], [,b]) => b - a)
        .map(([name, count], index) => ({
          name,
          count,
          color: colors[index % colors.length]
        }));

      setPayamStats(sortedPayams);
    } catch (error) {
      console.error('Error fetching spotlight data:', error);
    } finally {
      setLoading(false);
    }
  };

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
            {loading || !spotlightProfile ? (
              <div className="flex items-center justify-center py-12">
                <Loader2 className="w-8 h-8 animate-spin" />
                <span className="ml-2">Loading spotlight...</span>
              </div>
            ) : (
              <>
                <div className="flex items-start space-x-6">
                  <div className="relative">
                    <img 
                      src={spotlightProfile.profile_photo_url || "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face"}
                      alt={spotlightProfile.legal_name}
                      className="w-20 h-20 rounded-full object-cover shadow-medium"
                    />
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-accent rounded-full flex items-center justify-center">
                      <Crown className="w-4 h-4 text-white" />
                    </div>
                  </div>
                  
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-2">{spotlightProfile.legal_name}</h3>
                    <div className="flex items-center space-x-4 text-muted-foreground mb-4">
                      {spotlightProfile.age && <span>Age {spotlightProfile.age}</span>}
                      {spotlightProfile.payam && (
                        <div className="flex items-center space-x-1">
                          <MapPin className="w-4 h-4" />
                          <span>{spotlightProfile.payam} Payam</span>
                        </div>
                      )}
                    </div>
                    
                    {spotlightProfile.education && spotlightProfile.education[0] && (
                      <div className="flex items-center space-x-2 mb-4">
                        <GraduationCap className="w-5 h-5 text-primary" />
                        <span className="text-sm">
                          {spotlightProfile.education[0].degree}
                          {spotlightProfile.education[0].field_of_study && ` in ${spotlightProfile.education[0].field_of_study}`}
                        </span>
                      </div>
                    )}

                    {spotlightProfile.skills && spotlightProfile.skills.length > 0 && (
                      <div className="flex flex-wrap gap-2 mb-4">
                        {spotlightProfile.skills.slice(0, 4).map((skill) => (
                          <Badge key={skill} variant="secondary" className="text-xs">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    )}

                    <div className="bg-accent/10 p-4 rounded-lg border border-accent/20">
                      <div className="flex items-center space-x-2 mb-2">
                        <Zap className="w-4 h-4 text-accent" />
                        <span className="font-semibold text-accent">Community Member</span>
                      </div>
                      <p className="text-sm">Featured for outstanding contribution to BorNet community</p>
                    </div>
                  </div>
                </div>
                
                <Button variant="outline" className="w-full mt-6">
                  View Full Profile
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </>
            )}
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

          {loading ? (
            <div className="flex justify-center py-8">
              <Loader2 className="w-6 h-6 animate-spin" />
              <span className="ml-2">Loading stats...</span>
            </div>
          ) : (
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
          )}
        </Card>
      </div>
    </section>
  );
};

export default CommunitySpotlight;