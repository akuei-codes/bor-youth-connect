import { useState, useEffect } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ProfileCard from "@/components/ProfileCard";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Search, 
  Filter, 
  Users, 
  MapPin,
  GraduationCap,
  Briefcase,
  Grid3X3,
  List,
  Loader2
} from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";

interface Profile {
  id: string;
  legal_name: string;
  age: number | null;
  payam: string | null;
  bio: string | null;
  skills: string[] | null;
  profile_photo_url: string | null;
  education?: {
    degree: string;
    institution: string;
    field_of_study: string | null;
  }[];
  work_experience?: {
    position: string;
    company: string;
    description: string | null;
  }[];
}

const Community = () => {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [selectedFilters, setSelectedFilters] = useState<string[]>([]);
  const [profiles, setProfiles] = useState<Profile[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const { toast } = useToast();

  useEffect(() => {
    fetchProfiles();
  }, []);

  const fetchProfiles = async () => {
    try {
      setLoading(true);
      
      // Fetch profiles first
      const { data: profilesData, error: profilesError } = await supabase
        .from('profiles')
        .select(`
          id,
          legal_name,
          age,
          payam,
          bio,
          skills,
          profile_photo_url
        `);

      if (profilesError) {
        throw profilesError;
      }

      // Fetch education and work experience for each profile
      const profilesWithDetails = await Promise.all(
        (profilesData || []).map(async (profile) => {
          const [educationResult, workExperienceResult] = await Promise.all([
            supabase
              .from('education')
              .select('degree, institution, field_of_study')
              .eq('user_id', profile.id),
            supabase
              .from('work_experience')
              .select('position, company, description')
              .eq('user_id', profile.id)
          ]);

          return {
            ...profile,
            education: educationResult.data || [],
            work_experience: workExperienceResult.data || []
          };
        })
      );

      setProfiles(profilesWithDetails);
    } catch (error) {
      console.error('Error fetching profiles:', error);
      toast({
        title: "Error",
        description: "Failed to load community profiles. Please try again.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const filteredProfiles = profiles.filter(profile => {
    if (searchTerm) {
      const searchLower = searchTerm.toLowerCase();
      const matchesName = profile.legal_name.toLowerCase().includes(searchLower);
      const matchesSkills = profile.skills?.some(skill => 
        skill.toLowerCase().includes(searchLower)
      );
      const matchesEducation = profile.education?.some(edu => 
        edu.degree.toLowerCase().includes(searchLower) ||
        edu.institution.toLowerCase().includes(searchLower) ||
        edu.field_of_study?.toLowerCase().includes(searchLower)
      );
      
      if (!matchesName && !matchesSkills && !matchesEducation) {
        return false;
      }
    }

    if (selectedFilters.length === 0 || selectedFilters.includes('all')) {
      return true;
    }

    return selectedFilters.some(filter => {
      if (filter === 'verified') {
        return profile.profile_photo_url !== null; // Consider profiles with photos as "verified"
      }
      if (profile.payam?.toLowerCase() === filter.toLowerCase()) {
        return true;
      }
      return false;
    });
  });

  const filterOptions = [
    { label: "All Payams", value: "all", icon: MapPin },
    { label: "Anyidi", value: "anyidi", icon: MapPin },
    { label: "Baidit", value: "baidit", icon: MapPin },
    { label: "Jalle", value: "jalle", icon: MapPin },
    { label: "Technology", value: "technology", icon: Briefcase },
    { label: "Healthcare", value: "healthcare", icon: Briefcase },
    { label: "Education", value: "education", icon: GraduationCap },
    { label: "Verified", value: "verified", icon: Users }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-20">
        {/* Header */}
        <section className="py-12 bg-gradient-surface">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-8">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Community
                <span className="block bg-gradient-primary bg-clip-text text-transparent">
                  Directory
                </span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Discover talented youth across all five Payams of Bor County
              </p>
            </div>

            {/* Search and Filters */}
            <Card className="p-6 shadow-medium">
              <div className="flex flex-col lg:flex-row gap-4 items-center justify-between mb-6">
                {/* Search */}
                <div className="relative flex-1 max-w-md">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                  <input 
                    type="text"
                    placeholder="Search by name, skills, or education..."
                    className="w-full pl-10 pr-4 py-2 border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-ring bg-background"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </div>

                {/* View Toggle */}
                <div className="flex items-center space-x-2">
                  <Button
                    variant={viewMode === 'grid' ? 'default' : 'ghost'}
                    size="sm"
                    onClick={() => setViewMode('grid')}
                  >
                    <Grid3X3 className="w-4 h-4" />
                  </Button>
                  <Button
                    variant={viewMode === 'list' ? 'default' : 'ghost'}
                    size="sm"
                    onClick={() => setViewMode('list')}
                  >
                    <List className="w-4 h-4" />
                  </Button>
                </div>
              </div>

              {/* Filter Tags */}
              <div className="flex flex-wrap gap-2">
                {filterOptions.map((filter) => (
                  <Button
                    key={filter.value}
                    variant={selectedFilters.includes(filter.value) ? 'default' : 'outline'}
                    size="sm"
                    className="text-xs"
                    onClick={() => {
                      if (filter.value === 'all') {
                        setSelectedFilters([]);
                      } else {
                        setSelectedFilters(prev => 
                          prev.includes(filter.value)
                            ? prev.filter(f => f !== filter.value)
                            : [...prev, filter.value]
                        );
                      }
                    }}
                  >
                    <filter.icon className="w-3 h-3 mr-1" />
                    {filter.label}
                  </Button>
                ))}
              </div>
            </Card>
          </div>
        </section>

        {/* Profiles Grid */}
        <section className="py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
              <Card className="p-4 text-center">
                <div className="text-2xl font-bold text-primary">{profiles.length}</div>
                <div className="text-sm text-muted-foreground">Total Members</div>
              </Card>
              <Card className="p-4 text-center">
                <div className="text-2xl font-bold text-secondary">
                  {profiles.filter(p => p.profile_photo_url).length}
                </div>
                <div className="text-sm text-muted-foreground">With Photos</div>
              </Card>
              <Card className="p-4 text-center">
                <div className="text-2xl font-bold text-accent">
                  {new Set(profiles.flatMap(p => p.skills || [])).size}
                </div>
                <div className="text-sm text-muted-foreground">Skills Covered</div>
              </Card>
              <Card className="p-4 text-center">
                <div className="text-2xl font-bold text-heritage-green">
                  {new Set(profiles.map(p => p.payam).filter(Boolean)).size}
                </div>
                <div className="text-sm text-muted-foreground">Active Payams</div>
              </Card>
            </div>

            {/* Profiles */}
            {loading ? (
              <div className="flex justify-center items-center py-12">
                <Loader2 className="w-8 h-8 animate-spin" />
                <span className="ml-2">Loading profiles...</span>
              </div>
            ) : filteredProfiles.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-lg text-muted-foreground">No profiles found.</p>
                <p className="text-sm text-muted-foreground mt-2">
                  Try adjusting your search or filters.
                </p>
              </div>
            ) : (
              <div className={`grid gap-6 ${
                viewMode === 'grid' 
                  ? 'md:grid-cols-2 lg:grid-cols-3' 
                  : 'grid-cols-1 max-w-4xl mx-auto'
              }`}>
                {filteredProfiles.map((profile) => (
                  <ProfileCard key={profile.id} profile={profile} />
                ))}
              </div>
            )}

            {/* Load More */}
            <div className="text-center mt-12">
              <Button variant="outline" size="lg">
                Load More Profiles
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Community;