import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Briefcase, 
  GraduationCap, 
  DollarSign, 
  MapPin, 
  Calendar,
  Clock,
  Building,
  Users,
  Search,
  Filter,
  Bookmark,
  ExternalLink,
  ArrowRight,
  Sparkles,
  Globe,
  Heart
} from "lucide-react";

const Opportunities = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  const categories = [
    { id: "all", label: "All Opportunities", count: 42 },
    { id: "jobs", label: "Jobs", count: 18 },
    { id: "scholarships", label: "Scholarships", count: 12 },
    { id: "internships", label: "Internships", count: 8 },
    { id: "projects", label: "Community Projects", count: 4 }
  ];

  const opportunities = [
    {
      id: "1",
      title: "Junior Software Developer",
      organization: "Juba Tech Solutions",
      type: "job",
      location: "Juba, South Sudan",
      salary: "$800-1200/month",
      deadline: "2024-12-30",
      posted: "2 days ago",
      description: "Seeking a passionate junior developer to join our growing team. Experience with React and Node.js preferred.",
      requirements: ["Bachelor's degree in Computer Science", "1+ years experience", "React.js knowledge"],
      remote: false,
      logo: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=100&h=100&fit=crop",
      featured: true,
      applicants: 23
    },
    {
      id: "2", 
      title: "USAID Youth Development Scholarship",
      organization: "USAID South Sudan",
      type: "scholarship",
      location: "Various Universities",
      amount: "$15,000/year",
      deadline: "2025-01-15",
      posted: "1 week ago",
      description: "Full scholarship for outstanding South Sudanese youth pursuing higher education in development fields.",
      requirements: ["Age 18-25", "High school certificate", "Leadership experience", "English proficiency"],
      remote: true,
      logo: "https://images.unsplash.com/photo-1562654501-a0ccc0fc3fb1?w=100&h=100&fit=crop",
      featured: true,
      applicants: 156
    },
    {
      id: "3",
      title: "Agricultural Innovation Intern",
      organization: "FAO South Sudan",
      type: "internship", 
      location: "Bor, Jonglei State",
      salary: "$400/month",
      deadline: "2024-12-25",
      posted: "3 days ago",
      description: "6-month internship focusing on sustainable farming practices and community outreach in rural areas.",
      requirements: ["Agricultural studies background", "Community engagement skills", "Dinka language"],
      remote: false,
      logo: "https://images.unsplash.com/photo-1574943320219-553eb213f72d?w=100&h=100&fit=crop",
      featured: false,
      applicants: 31
    },
    {
      id: "4",
      title: "BorNet Platform Development",
      organization: "BorNet Community",
      type: "project",
      location: "Bor County",
      compensation: "Volunteer + Certificate",
      deadline: "2025-01-31",
      posted: "5 days ago",
      description: "Help build and improve the BorNet platform. Great opportunity for developers to gain experience.",
      requirements: ["Web development skills", "Passion for community", "Local knowledge preferred"],
      remote: true,
      logo: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=100&h=100&fit=crop",
      featured: false,
      applicants: 12
    },
    {
      id: "5",
      title: "Healthcare Assistant",
      organization: "Doctors Without Borders",
      type: "job",
      location: "Bor Hospital",
      salary: "$600-800/month",
      deadline: "2024-12-28",
      posted: "4 days ago",
      description: "Support medical staff in providing healthcare services to underserved communities.",
      requirements: ["Medical training certificate", "First aid certification", "Local language skills"],
      remote: false,
      logo: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=100&h=100&fit=crop",
      featured: false,
      applicants: 45
    },
    {
      id: "6",
      title: "Peace Leadership Program",
      organization: "UNMISS",
      type: "scholarship",
      location: "Various Locations",
      amount: "Full funding",
      deadline: "2025-02-01",
      posted: "1 week ago",
      description: "12-month leadership development program focusing on peacebuilding and conflict resolution.",
      requirements: ["Age 20-30", "Leadership experience", "Community involvement", "English fluency"],
      remote: false,
      logo: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=100&h=100&fit=crop",
      featured: true,
      applicants: 89
    }
  ];

  const filteredOpportunities = opportunities.filter(opp => {
    const matchesCategory = selectedCategory === "all" || opp.type === selectedCategory;
    const matchesSearch = opp.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         opp.organization.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const getTypeIcon = (type: string) => {
    switch (type) {
      case "job": return <Briefcase className="w-4 h-4" />;
      case "scholarship": return <GraduationCap className="w-4 h-4" />;
      case "internship": return <Users className="w-4 h-4" />;
      case "project": return <Heart className="w-4 h-4" />;
      default: return <Briefcase className="w-4 h-4" />;
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case "job": return "bg-primary text-primary-foreground";
      case "scholarship": return "bg-secondary text-secondary-foreground";
      case "internship": return "bg-accent text-accent-foreground";
      case "project": return "bg-heritage-green text-white";
      default: return "bg-muted text-muted-foreground";
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-20">
        {/* Header */}
        <section className="py-12 bg-gradient-sunset">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <Badge className="bg-white/20 text-white border-white/30 mb-4">
              <Sparkles className="w-4 h-4 mr-2" />
              42 Active Opportunities
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
              Opportunities
              <span className="block text-accent">& Growth</span>
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Discover scholarships, jobs, internships, and community projects designed for Bor County youth
            </p>
          </div>
        </section>

        {/* Search and Filters */}
        <section className="py-8 -mt-8 relative z-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Card className="p-6 shadow-strong">
              <div className="flex flex-col lg:flex-row gap-4 items-center justify-between mb-6">
                {/* Search */}
                <div className="relative flex-1 max-w-md">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                  <input 
                    type="text"
                    placeholder="Search opportunities..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-10 pr-4 py-2 border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-ring bg-background"
                  />
                </div>

                <div className="flex items-center space-x-2">
                  <Button variant="outline" size="sm">
                    <Filter className="w-4 h-4 mr-2" />
                    Filters
                  </Button>
                  <Button variant="outline" size="sm">
                    <Bookmark className="w-4 h-4 mr-2" />
                    Saved
                  </Button>
                </div>
              </div>

              {/* Category Tabs */}
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <Button
                    key={category.id}
                    variant={selectedCategory === category.id ? 'default' : 'outline'}
                    size="sm"
                    onClick={() => setSelectedCategory(category.id)}
                    className="text-sm"
                  >
                    {category.label}
                    <Badge variant="secondary" className="ml-2 text-xs">
                      {category.count}
                    </Badge>
                  </Button>
                ))}
              </div>
            </Card>
          </div>
        </section>

        {/* Opportunities Grid */}
        <section className="py-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-3 gap-8">
              {/* Main Opportunities List */}
              <div className="lg:col-span-2 space-y-6">
                {filteredOpportunities.map((opportunity) => (
                  <Card key={opportunity.id} className={`p-6 hover:shadow-strong transition-all duration-300 ${opportunity.featured ? 'ring-2 ring-accent/20 bg-gradient-to-r from-card to-accent/5' : ''}`}>
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 rounded-lg overflow-hidden shadow-soft">
                          <img 
                            src={opportunity.logo}
                            alt={opportunity.organization}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center space-x-2 mb-2">
                            <h3 className="text-lg font-bold hover:text-primary transition-colors cursor-pointer">
                              {opportunity.title}
                            </h3>
                            {opportunity.featured && (
                              <Badge className="bg-accent text-white">
                                Featured
                              </Badge>
                            )}
                          </div>
                          <p className="text-muted-foreground mb-2">{opportunity.organization}</p>
                          <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                            <div className="flex items-center space-x-1">
                              <MapPin className="w-4 h-4" />
                              <span>{opportunity.location}</span>
                            </div>
                            <div className="flex items-center space-x-1">
                              <Clock className="w-4 h-4" />
                              <span>{opportunity.posted}</span>
                            </div>
                            <div className="flex items-center space-x-1">
                              <Users className="w-4 h-4" />
                              <span>{opportunity.applicants} applicants</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <Button variant="ghost" size="sm">
                        <Bookmark className="w-4 h-4" />
                      </Button>
                    </div>

                    <div className="mb-4">
                      <div className="flex items-center justify-between mb-3">
                        <Badge className={getTypeColor(opportunity.type)}>
                          {getTypeIcon(opportunity.type)}
                          <span className="ml-1 capitalize">{opportunity.type}</span>
                        </Badge>
                        <div className="flex items-center space-x-4 text-sm">
                          <div className="flex items-center space-x-1 text-heritage-green">
                            <DollarSign className="w-4 h-4" />
                            <span>{opportunity.salary || opportunity.amount || opportunity.compensation}</span>
                          </div>
                          <div className="flex items-center space-x-1 text-heritage-red">
                            <Calendar className="w-4 h-4" />
                            <span>Due {opportunity.deadline}</span>
                          </div>
                        </div>
                      </div>

                      <p className="text-muted-foreground mb-4 leading-relaxed">
                        {opportunity.description}
                      </p>

                      <div className="mb-4">
                        <h4 className="font-semibold mb-2 text-sm">Key Requirements:</h4>
                        <div className="flex flex-wrap gap-1">
                          {opportunity.requirements.slice(0, 3).map((req, index) => (
                            <Badge key={index} variant="outline" className="text-xs">
                              {req}
                            </Badge>
                          ))}
                          {opportunity.requirements.length > 3 && (
                            <Badge variant="outline" className="text-xs">
                              +{opportunity.requirements.length - 3} more
                            </Badge>
                          )}
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center justify-between pt-4 border-t border-border">
                      <div className="flex items-center space-x-2">
                        {opportunity.remote && (
                          <Badge variant="secondary" className="text-xs">
                            <Globe className="w-3 h-3 mr-1" />
                            Remote OK
                          </Badge>
                        )}
                      </div>
                      <div className="flex space-x-2">
                        <Button variant="outline" size="sm">
                          <ExternalLink className="w-4 h-4 mr-2" />
                          Details
                        </Button>
                        <Button variant="default" size="sm">
                          Apply Now
                          <ArrowRight className="w-4 h-4 ml-2" />
                        </Button>
                      </div>
                    </div>
                  </Card>
                ))}

                {filteredOpportunities.length === 0 && (
                  <Card className="p-12 text-center">
                    <Briefcase className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
                    <h3 className="text-xl font-semibold mb-2">No opportunities found</h3>
                    <p className="text-muted-foreground">
                      Try adjusting your search or filter criteria
                    </p>
                  </Card>
                )}
              </div>

              {/* Sidebar */}
              <div className="space-y-6">
                {/* Quick Stats */}
                <Card className="p-6">
                  <h3 className="font-semibold mb-4">Quick Stats</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Total Opportunities</span>
                      <span className="font-medium">42</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">New This Week</span>
                      <span className="font-medium text-heritage-green">8</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Closing Soon</span>
                      <span className="font-medium text-heritage-red">5</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Success Rate</span>
                      <span className="font-medium text-accent">68%</span>
                    </div>
                  </div>
                </Card>

                {/* Application Tips */}
                <Card className="p-6 bg-gradient-to-br from-primary/5 to-secondary/5 border-primary/10">
                  <h3 className="font-semibold mb-4">Application Tips</h3>
                  <div className="space-y-3 text-sm">
                    <div className="flex items-start space-x-2">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                      <span>Customize your application for each opportunity</span>
                    </div>
                    <div className="flex items-start space-x-2">
                      <div className="w-2 h-2 bg-secondary rounded-full mt-2"></div>
                      <span>Highlight your connection to Bor County</span>
                    </div>
                    <div className="flex items-start space-x-2">
                      <div className="w-2 h-2 bg-accent rounded-full mt-2"></div>
                      <span>Submit applications early</span>
                    </div>
                    <div className="flex items-start space-x-2">
                      <div className="w-2 h-2 bg-heritage-green rounded-full mt-2"></div>
                      <span>Follow up professionally</span>
                    </div>
                  </div>
                </Card>

                {/* Success Stories */}
                <Card className="p-6">
                  <h3 className="font-semibold mb-4">Recent Success</h3>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <img 
                        src="https://images.unsplash.com/photo-1494790108755-2616b612b047?w=40&h=40&fit=crop&crop=face"
                        alt="Success story"
                        className="w-10 h-10 rounded-full object-cover"
                      />
                      <div>
                        <p className="text-sm font-medium">Mary A.</p>
                        <p className="text-xs text-muted-foreground">Got USAID scholarship</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <img 
                        src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=face"
                        alt="Success story"
                        className="w-10 h-10 rounded-full object-cover"
                      />
                      <div>
                        <p className="text-sm font-medium">John M.</p>
                        <p className="text-xs text-muted-foreground">Joined NGO as developer</p>
                      </div>
                    </div>
                  </div>
                  <Button variant="outline" size="sm" className="w-full mt-4">
                    View All Stories
                  </Button>
                </Card>

                {/* Submit Opportunity */}
                <Card className="p-6 bg-gradient-heritage text-white">
                  <h3 className="font-semibold mb-2">Post an Opportunity</h3>
                  <p className="text-white/90 text-sm mb-4">
                    Help Bor County youth by sharing job openings, scholarships, or projects.
                  </p>
                  <Button variant="secondary" size="sm" className="w-full">
                    Submit Opportunity
                  </Button>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Opportunities;