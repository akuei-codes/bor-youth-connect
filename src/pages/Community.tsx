import { useState } from "react";
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
  List
} from "lucide-react";

const Community = () => {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [selectedFilters, setSelectedFilters] = useState<string[]>([]);

  // Sample profile data
  const profiles = [
    {
      id: "1",
      name: "Mary Achol Deng",
      age: 22,
      payam: "Anyidi",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b047?w=400&h=400&fit=crop&crop=face",
      education: "Bachelor's in Computer Science",
      currentRole: "Software Developer at Local NGO",
      skills: ["Web Development", "Python", "Project Management", "Community Outreach"],
      bio: "Passionate about using technology to solve local challenges. Founded a coding bootcamp for youth in Bor County.",
      verified: true,
      endorsements: 24
    },
    {
      id: "2",
      name: "John Mabior Garang",
      age: 25,
      payam: "Baidit",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
      education: "Diploma in Agricultural Sciences",
      currentRole: "Agricultural Extension Officer",
      skills: ["Sustainable Farming", "Community Training", "Crop Management"],
      bio: "Working to improve agricultural practices and food security in rural communities across Bor County.",
      verified: true,
      endorsements: 18
    },
    {
      id: "3",
      name: "Grace Nyandeng Malek",
      age: 19,
      payam: "Jalle",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face",
      education: "Certificate in Community Health",
      skills: ["Healthcare", "Community Outreach", "Health Education"],
      bio: "Dedicated to improving maternal and child health outcomes in rural communities.",
      verified: false,
      endorsements: 12
    },
    {
      id: "4",
      name: "Daniel Deng Nhial",
      age: 21,
      payam: "Kolnyang",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
      education: "Bachelor's in Civil Engineering",
      currentRole: "Junior Engineer",
      skills: ["Engineering", "Project Management", "CAD Design", "Infrastructure"],
      bio: "Focused on developing sustainable infrastructure solutions for growing communities.",
      verified: true,
      endorsements: 16
    }
  ];

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
                <div className="text-2xl font-bold text-primary">475</div>
                <div className="text-sm text-muted-foreground">Total Members</div>
              </Card>
              <Card className="p-4 text-center">
                <div className="text-2xl font-bold text-secondary">89</div>
                <div className="text-sm text-muted-foreground">Verified Profiles</div>
              </Card>
              <Card className="p-4 text-center">
                <div className="text-2xl font-bold text-accent">150+</div>
                <div className="text-sm text-muted-foreground">Skills Covered</div>
              </Card>
              <Card className="p-4 text-center">
                <div className="text-2xl font-bold text-heritage-green">5</div>
                <div className="text-sm text-muted-foreground">Active Payams</div>
              </Card>
            </div>

            {/* Profiles */}
            <div className={`grid gap-6 ${
              viewMode === 'grid' 
                ? 'md:grid-cols-2 lg:grid-cols-3' 
                : 'grid-cols-1 max-w-4xl mx-auto'
            }`}>
              {profiles.map((profile) => (
                <ProfileCard key={profile.id} profile={profile} />
              ))}
            </div>

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