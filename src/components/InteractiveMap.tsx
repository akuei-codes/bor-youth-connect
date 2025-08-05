import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  MapPin, 
  Users, 
  ArrowRight, 
  Star,
  TrendingUp 
} from "lucide-react";
import borMap from "@/assets/bor-map.jpg";

const InteractiveMap = () => {
  const [selectedPayam, setSelectedPayam] = useState<string | null>(null);

  const payams = [
    {
      name: "Anyidi",
      members: 127,
      featured: "Mary Achol Deng",
      specialties: ["Technology", "Education", "Arts"],
      growth: "+12%",
      coordinates: { x: 25, y: 30 },
      color: "bg-primary"
    },
    {
      name: "Baidit",
      members: 98,
      featured: "John Mabior Garang",
      specialties: ["Agriculture", "Business", "Leadership"],
      growth: "+8%",
      coordinates: { x: 60, y: 45 },
      color: "bg-secondary"
    },
    {
      name: "Jalle",
      members: 89,
      featured: "Grace Nyandeng Malek",
      specialties: ["Healthcare", "Social Work", "Music"],
      growth: "+15%",
      coordinates: { x: 70, y: 25 },
      color: "bg-accent"
    },
    {
      name: "Kolnyang",
      members: 76,
      featured: "Daniel Deng Nhial",
      specialties: ["Sports", "Media", "Engineering"],
      growth: "+10%",
      coordinates: { x: 40, y: 60 },
      color: "bg-heritage-red"
    },
    {
      name: "Makuach",
      members: 85,
      featured: "Rebecca Akech Deng",
      specialties: ["Tourism", "Culture", "Finance"],
      growth: "+6%",
      coordinates: { x: 80, y: 70 },
      color: "bg-heritage-green"
    }
  ];

  const selectedPayamData = payams.find(p => p.name === selectedPayam);

  return (
    <section className="py-20 bg-gradient-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge className="bg-secondary/10 text-secondary border-secondary/20 mb-4">
            <MapPin className="w-4 h-4 mr-2" />
            Explore by Region
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Discover Talent Across
            <span className="block bg-gradient-sunset bg-clip-text text-transparent">
              Bor County
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Click on any Payam to explore the diverse talents and opportunities in each region
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Interactive Map */}
          <Card className="p-8 shadow-strong">
            <div className="relative">
              <img 
                src={borMap}
                alt="Bor County Map"
                className="w-full h-96 object-cover rounded-lg"
              />
              
              {/* Payam Markers */}
              {payams.map((payam) => (
                <button
                  key={payam.name}
                  onClick={() => setSelectedPayam(payam.name)}
                  className={`absolute w-8 h-8 ${payam.color} rounded-full shadow-medium hover:scale-125 transition-all duration-300 flex items-center justify-center text-white font-bold animate-pulse-glow`}
                  style={{ 
                    left: `${payam.coordinates.x}%`, 
                    top: `${payam.coordinates.y}%`,
                    transform: 'translate(-50%, -50%)'
                  }}
                >
                  <MapPin className="w-4 h-4" />
                </button>
              ))}

              {/* Legend */}
              <div className="absolute bottom-4 left-4 bg-white/95 backdrop-blur-sm rounded-lg p-4 shadow-medium">
                <h4 className="font-semibold mb-2 text-sm">Payams</h4>
                <div className="space-y-1">
                  {payams.map((payam) => (
                    <div key={payam.name} className="flex items-center space-x-2 text-xs">
                      <div className={`w-3 h-3 ${payam.color} rounded-full`}></div>
                      <span>{payam.name}</span>
                      <span className="text-muted-foreground">({payam.members})</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Map Stats */}
            <div className="grid grid-cols-3 gap-4 mt-6">
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
                <div className="text-sm text-muted-foreground">Skills Covered</div>
              </div>
            </div>
          </Card>

          {/* Payam Details */}
          <div className="space-y-6">
            {selectedPayamData ? (
              <Card className="p-8 shadow-strong animate-slide-up">
                <div className="flex items-center space-x-4 mb-6">
                  <div className={`w-12 h-12 ${selectedPayamData.color} rounded-lg flex items-center justify-center shadow-soft`}>
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold">{selectedPayamData.name} Payam</h3>
                    <div className="flex items-center space-x-4 text-muted-foreground">
                      <div className="flex items-center space-x-1">
                        <Users className="w-4 h-4" />
                        <span>{selectedPayamData.members} members</span>
                      </div>
                      <div className="flex items-center space-x-1 text-heritage-green">
                        <TrendingUp className="w-4 h-4" />
                        <span>{selectedPayamData.growth} this month</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">Featured Member</h4>
                    <div className="bg-surface p-4 rounded-lg">
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
                </div>

                <Button variant="outline" className="w-full mt-6">
                  Explore {selectedPayamData.name} Profiles
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Card>
            ) : (
              <Card className="p-8 shadow-medium text-center">
                <MapPin className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Select a Payam</h3>
                <p className="text-muted-foreground">
                  Click on any marker on the map to explore that region's community
                </p>
              </Card>
            )}

            {/* Quick Stats */}
            <div className="grid grid-cols-2 gap-4">
              {payams.slice(0, 4).map((payam) => (
                <Card 
                  key={payam.name}
                  className="p-4 cursor-pointer hover:shadow-soft transition-all duration-300"
                  onClick={() => setSelectedPayam(payam.name)}
                >
                  <div className="flex items-center space-x-3">
                    <div className={`w-8 h-8 ${payam.color} rounded-full flex items-center justify-center`}>
                      <span className="text-white text-xs font-bold">
                        {payam.name.charAt(0)}
                      </span>
                    </div>
                    <div>
                      <div className="font-semibold text-sm">{payam.name}</div>
                      <div className="text-xs text-muted-foreground">{payam.members} members</div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InteractiveMap;