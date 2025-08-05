import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  MapPin, 
  Users, 
  Search,
  Filter,
  TrendingUp,
  Star,
  Eye,
  MessageSquare
} from "lucide-react";
import borMap from "@/assets/bor-map.jpg";

const Map = () => {
  const [selectedPayam, setSelectedPayam] = useState<string | null>("Anyidi");
  const [searchQuery, setSearchQuery] = useState("");

  const payams = [
    {
      name: "Anyidi",
      members: 127,
      featured: "Mary Achol Deng",
      specialties: ["Technology", "Education", "Arts"],
      growth: "+12%",
      coordinates: { x: 25, y: 30 },
      color: "bg-primary",
      recentActivity: "5 new members this week",
      topSkills: ["Web Development", "Teaching", "Digital Art"]
    },
    {
      name: "Baidit",
      members: 98,
      featured: "John Mabior Garang",
      specialties: ["Agriculture", "Business", "Leadership"],
      growth: "+8%",
      coordinates: { x: 60, y: 45 },
      color: "bg-secondary",
      recentActivity: "New agricultural project launched",
      topSkills: ["Farming", "Entrepreneurship", "Project Management"]
    },
    {
      name: "Jalle",
      members: 89,
      featured: "Grace Nyandeng Malek",
      specialties: ["Healthcare", "Social Work", "Music"],
      growth: "+15%",
      coordinates: { x: 70, y: 25 },
      color: "bg-accent",
      recentActivity: "Health outreach program active",
      topSkills: ["Nursing", "Community Health", "Traditional Music"]
    },
    {
      name: "Kolnyang",
      members: 76,
      featured: "Daniel Deng Nhial",
      specialties: ["Sports", "Media", "Engineering"],
      growth: "+10%",
      coordinates: { x: 40, y: 60 },
      color: "bg-heritage-red",
      recentActivity: "Youth sports tournament organized",
      topSkills: ["Football", "Broadcasting", "Civil Engineering"]
    },
    {
      name: "Makuach",
      members: 85,
      featured: "Rebecca Akech Deng",
      specialties: ["Tourism", "Culture", "Finance"],
      growth: "+6%",
      coordinates: { x: 80, y: 70 },
      color: "bg-heritage-green",
      recentActivity: "Cultural preservation initiative",
      topSkills: ["Tour Guiding", "Cultural Studies", "Accounting"]
    }
  ];

  const selectedPayamData = payams.find(p => p.name === selectedPayam);

  const profilePreviews = [
    {
      name: "Mary Achol Deng",
      payam: "Anyidi",
      skills: ["Web Development", "Python"],
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b047?w=100&h=100&fit=crop&crop=face"
    },
    {
      name: "John Mabior Garang", 
      payam: "Baidit",
      skills: ["Agriculture", "Leadership"],
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face"
    },
    {
      name: "Grace Nyandeng Malek",
      payam: "Jalle", 
      skills: ["Healthcare", "Community"],
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face"
    }
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
                Interactive
                <span className="block bg-gradient-sunset bg-clip-text text-transparent">
                  Bor County Map
                </span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Explore talented youth across all five Payams. Click on regions to discover local communities and skills.
              </p>
            </div>

            {/* Search */}
            <Card className="p-6 shadow-medium">
              <div className="flex flex-col md:flex-row gap-4">
                <div className="relative flex-1">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                  <input 
                    type="text"
                    placeholder="Search by location, skills, or name..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-10 pr-4 py-2 border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-ring bg-background"
                  />
                </div>
                <Button variant="outline">
                  <Filter className="w-4 h-4 mr-2" />
                  Filters
                </Button>
              </div>
            </Card>
          </div>
        </section>

        {/* Map Section */}
        <section className="py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-3 gap-8">
              {/* Interactive Map */}
              <div className="lg:col-span-2">
                <Card className="p-8 shadow-strong">
                  <div className="relative">
                    <img 
                      src={borMap}
                      alt="Bor County Map"
                      className="w-full h-[500px] object-cover rounded-lg"
                    />
                    
                    {/* Payam Markers */}
                    {payams.map((payam) => (
                      <button
                        key={payam.name}
                        onClick={() => setSelectedPayam(payam.name)}
                        className={`absolute w-10 h-10 ${payam.color} rounded-full shadow-medium hover:scale-125 transition-all duration-300 flex items-center justify-center text-white font-bold animate-pulse-glow ${
                          selectedPayam === payam.name ? 'ring-4 ring-white scale-125' : ''
                        }`}
                        style={{ 
                          left: `${payam.coordinates.x}%`, 
                          top: `${payam.coordinates.y}%`,
                          transform: 'translate(-50%, -50%)'
                        }}
                      >
                        <MapPin className="w-5 h-5" />
                      </button>
                    ))}

                    {/* Legend */}
                    <div className="absolute bottom-4 left-4 bg-white/95 backdrop-blur-sm rounded-lg p-4 shadow-medium">
                      <h4 className="font-semibold mb-3 text-sm">Payams</h4>
                      <div className="space-y-2">
                        {payams.map((payam) => (
                          <button
                            key={payam.name}
                            onClick={() => setSelectedPayam(payam.name)}
                            className={`flex items-center space-x-2 text-xs w-full text-left p-2 rounded transition-colors ${
                              selectedPayam === payam.name ? 'bg-primary/10' : 'hover:bg-gray-50'
                            }`}
                          >
                            <div className={`w-3 h-3 ${payam.color} rounded-full`}></div>
                            <span className="font-medium">{payam.name}</span>
                            <span className="text-muted-foreground">({payam.members})</span>
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Overall Stats */}
                  <div className="grid grid-cols-4 gap-4 mt-6">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-primary">475</div>
                      <div className="text-sm text-muted-foreground">Total Members</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-secondary">5</div>
                      <div className="text-sm text-muted-foreground">Active Payams</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-accent">150+</div>
                      <div className="text-sm text-muted-foreground">Skills</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-heritage-green">89</div>
                      <div className="text-sm text-muted-foreground">Verified</div>
                    </div>
                  </div>
                </Card>
              </div>

              {/* Payam Details Sidebar */}
              <div className="space-y-6">
                {selectedPayamData ? (
                  <>
                    {/* Selected Payam Info */}
                    <Card className="p-6 shadow-strong animate-slide-up">
                      <div className="flex items-center space-x-4 mb-6">
                        <div className={`w-12 h-12 ${selectedPayamData.color} rounded-lg flex items-center justify-center shadow-soft`}>
                          <MapPin className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold">{selectedPayamData.name} Payam</h3>
                          <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                            <div className="flex items-center space-x-1">
                              <Users className="w-4 h-4" />
                              <span>{selectedPayamData.members} members</span>
                            </div>
                            <div className="flex items-center space-x-1 text-heritage-green">
                              <TrendingUp className="w-4 h-4" />
                              <span>{selectedPayamData.growth}</span>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="space-y-4">
                        <div>
                          <h4 className="font-semibold mb-2">Featured Member</h4>
                          <div className="bg-surface p-3 rounded-lg">
                            <div className="flex items-center space-x-2">
                              <Star className="w-4 h-4 text-accent" />
                              <span className="font-medium">{selectedPayamData.featured}</span>
                            </div>
                          </div>
                        </div>

                        <div>
                          <h4 className="font-semibold mb-2">Top Specialties</h4>
                          <div className="flex flex-wrap gap-2">
                            {selectedPayamData.specialties.map((specialty) => (
                              <Badge key={specialty} variant="secondary" className="text-xs">
                                {specialty}
                              </Badge>
                            ))}
                          </div>
                        </div>

                        <div>
                          <h4 className="font-semibold mb-2">Recent Activity</h4>
                          <p className="text-sm text-muted-foreground">
                            {selectedPayamData.recentActivity}
                          </p>
                        </div>

                        <div>
                          <h4 className="font-semibold mb-2">Top Skills</h4>
                          <div className="space-y-1">
                            {selectedPayamData.topSkills.map((skill, index) => (
                              <div key={skill} className="flex items-center space-x-2 text-sm">
                                <span className="text-muted-foreground">#{index + 1}</span>
                                <span>{skill}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>

                      <Button variant="outline" className="w-full mt-6">
                        <Eye className="w-4 h-4 mr-2" />
                        Explore {selectedPayamData.name} Profiles
                      </Button>
                    </Card>

                    {/* Quick Profile Previews */}
                    <Card className="p-6 shadow-medium">
                      <h4 className="font-semibold mb-4">Recent Members</h4>
                      <div className="space-y-3">
                        {profilePreviews.map((profile) => (
                          <div key={profile.name} className="flex items-center space-x-3 p-2 rounded-lg hover:bg-surface transition-colors cursor-pointer">
                            <img 
                              src={profile.image}
                              alt={profile.name}
                              className="w-10 h-10 rounded-full object-cover"
                            />
                            <div className="flex-1 min-w-0">
                              <div className="font-medium text-sm truncate">{profile.name}</div>
                              <div className="text-xs text-muted-foreground">{profile.payam} Payam</div>
                            </div>
                            <Button variant="ghost" size="sm">
                              <MessageSquare className="w-4 h-4" />
                            </Button>
                          </div>
                        ))}
                      </div>
                      <Button variant="outline" size="sm" className="w-full mt-4">
                        View All Recent
                      </Button>
                    </Card>
                  </>
                ) : (
                  <Card className="p-6 shadow-medium text-center">
                    <MapPin className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
                    <h3 className="text-xl font-semibold mb-2">Select a Payam</h3>
                    <p className="text-muted-foreground">
                      Click on any marker on the map to explore that region's community
                    </p>
                  </Card>
                )}
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Map;