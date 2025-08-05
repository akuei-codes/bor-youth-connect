import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  MessageSquare, 
  Users, 
  Pin, 
  Calendar,
  Search,
  Plus,
  ThumbsUp,
  MessageCircle,
  Eye,
  TrendingUp,
  Hash,
  Clock,
  Filter
} from "lucide-react";

const Forum = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  const categories = [
    { id: "all", label: "All Topics", count: 127 },
    { id: "education", label: "Education", count: 34 },
    { id: "culture", label: "Culture & Heritage", count: 28 },
    { id: "opportunities", label: "Opportunities", count: 21 },
    { id: "leadership", label: "Leadership", count: 18 },
    { id: "technology", label: "Technology", count: 15 },
    { id: "general", label: "General Discussion", count: 11 }
  ];

  const discussions = [
    {
      id: "1",
      title: "How to Bridge the Digital Divide in Rural Bor County",
      author: "Mary Achol Deng",
      authorPayam: "Anyidi",
      authorImage: "https://images.unsplash.com/photo-1494790108755-2616b612b047?w=40&h=40&fit=crop&crop=face",
      category: "technology",
      content: "I've been thinking about ways to bring internet connectivity and digital skills to remote villages. What are your thoughts on mobile learning centers?",
      replies: 23,
      likes: 45,
      views: 312,
      timeAgo: "2 hours ago",
      lastReply: "30 minutes ago",
      tags: ["technology", "education", "rural development"],
      pinned: true,
      trending: true
    },
    {
      id: "2",
      title: "Preserving Dinka Bor Traditional Music for Future Generations",
      author: "James Akech Mawan",
      authorPayam: "Makuach",
      authorImage: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face",
      category: "culture",
      content: "Our traditional songs and dances are slowly being forgotten. I propose creating a digital archive and teaching programs. Who wants to collaborate?",
      replies: 18,
      likes: 67,
      views: 189,
      timeAgo: "5 hours ago",
      lastReply: "1 hour ago",
      tags: ["culture", "music", "preservation"],
      pinned: false,
      trending: true
    },
    {
      id: "3",
      title: "Best Universities for South Sudanese Students - Your Experiences?",
      author: "Grace Nyandeng Malek",
      authorPayam: "Jalle",
      authorImage: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=40&h=40&fit=crop&crop=face",
      category: "education",
      content: "I'm researching higher education options both locally and internationally. Would love to hear about your university experiences and recommendations.",
      replies: 31,
      likes: 28,
      views: 456,
      timeAgo: "1 day ago",
      lastReply: "2 hours ago",
      tags: ["education", "university", "scholarships"],
      pinned: false,
      trending: false
    },
    {
      id: "4",
      title: "Youth Leadership in Community Development Projects",
      author: "Daniel Deng Nhial",
      authorPayam: "Kolnyang",
      authorImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=face",
      category: "leadership",
      content: "How can we, as young people, take more active roles in local development? Share your successful project experiences and lessons learned.",
      replies: 15,
      likes: 34,
      views: 267,
      timeAgo: "2 days ago",
      lastReply: "4 hours ago",
      tags: ["leadership", "community", "development"],
      pinned: false,
      trending: false
    },
    {
      id: "5",
      title: "Starting a Business in Bor County - Challenges and Opportunities",
      author: "Rebecca Akech Deng",
      authorPayam: "Baidit",
      authorImage: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=40&h=40&fit=crop&crop=face",
      category: "opportunities",
      content: "I'm planning to start a small business. What are the main challenges you've faced, and what opportunities do you see in our local market?",
      replies: 22,
      likes: 41,
      views: 334,
      timeAgo: "3 days ago",
      lastReply: "6 hours ago",
      tags: ["business", "entrepreneurship", "economy"],
      pinned: false,
      trending: false
    }
  ];

  const filteredDiscussions = discussions.filter(discussion => {
    const matchesCategory = selectedCategory === "all" || discussion.category === selectedCategory;
    const matchesSearch = discussion.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         discussion.content.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "education": return "bg-primary text-primary-foreground";
      case "culture": return "bg-secondary text-secondary-foreground";
      case "opportunities": return "bg-accent text-accent-foreground";
      case "leadership": return "bg-heritage-red text-white";
      case "technology": return "bg-heritage-green text-white";
      default: return "bg-muted text-muted-foreground";
    }
  };

  const popularTags = [
    { name: "education", count: 45 },
    { name: "culture", count: 32 },
    { name: "technology", count: 28 },
    { name: "leadership", count: 24 },
    { name: "development", count: 19 }
  ];

  const activeMembers = [
    {
      name: "Mary Achol Deng",
      payam: "Anyidi",
      posts: 23,
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b047?w=40&h=40&fit=crop&crop=face"
    },
    {
      name: "John Mabior Garang", 
      payam: "Baidit",
      posts: 18,
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=face"
    },
    {
      name: "Grace Nyandeng Malek",
      payam: "Jalle",
      posts: 15,
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=40&h=40&fit=crop&crop=face"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-20">
        {/* Header */}
        <section className="py-12 bg-gradient-primary">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <Badge className="bg-white/20 text-white border-white/30 mb-4">
              <MessageSquare className="w-4 h-4 mr-2" />
              127 Active Discussions
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
              Community
              <span className="block text-accent">Forum</span>
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Connect, discuss, and share ideas with fellow youth across Bor County
            </p>
          </div>
        </section>

        {/* Search and New Topic */}
        <section className="py-8 -mt-8 relative z-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Card className="p-6 shadow-strong">
              <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
                {/* Search */}
                <div className="relative flex-1 max-w-md">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                  <input 
                    type="text"
                    placeholder="Search discussions..."
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
                  <Button variant="secondary" size="sm">
                    <Plus className="w-4 h-4 mr-2" />
                    New Topic
                  </Button>
                </div>
              </div>
            </Card>
          </div>
        </section>

        {/* Forum Content */}
        <section className="py-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-4 gap-8">
              {/* Categories Sidebar */}
              <div className="space-y-6">
                <Card className="p-6">
                  <h3 className="font-semibold mb-4">Categories</h3>
                  <div className="space-y-2">
                    {categories.map((category) => (
                      <button
                        key={category.id}
                        onClick={() => setSelectedCategory(category.id)}
                        className={`w-full text-left p-3 rounded-lg transition-colors ${
                          selectedCategory === category.id 
                            ? 'bg-primary text-primary-foreground' 
                            : 'hover:bg-surface'
                        }`}
                      >
                        <div className="flex items-center justify-between">
                          <span className="text-sm font-medium">{category.label}</span>
                          <span className="text-xs opacity-70">{category.count}</span>
                        </div>
                      </button>
                    ))}
                  </div>
                </Card>

                <Card className="p-6">
                  <h3 className="font-semibold mb-4">Popular Tags</h3>
                  <div className="space-y-2">
                    {popularTags.map((tag) => (
                      <div key={tag.name} className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                          <Hash className="w-3 h-3 text-muted-foreground" />
                          <span className="text-sm">{tag.name}</span>
                        </div>
                        <span className="text-xs text-muted-foreground">{tag.count}</span>
                      </div>
                    ))}
                  </div>
                </Card>

                <Card className="p-6">
                  <h3 className="font-semibold mb-4">Active Members</h3>
                  <div className="space-y-3">
                    {activeMembers.map((member, index) => (
                      <div key={member.name} className="flex items-center space-x-3">
                        <div className="relative">
                          <img 
                            src={member.image}
                            alt={member.name}
                            className="w-10 h-10 rounded-full object-cover"
                          />
                          <div className={`absolute -top-1 -right-1 w-4 h-4 rounded-full flex items-center justify-center text-xs font-bold text-white ${
                            index === 0 ? 'bg-accent' : index === 1 ? 'bg-secondary' : 'bg-heritage-green'
                          }`}>
                            {index + 1}
                          </div>
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="font-medium text-sm truncate">{member.name}</div>
                          <div className="text-xs text-muted-foreground">{member.payam} • {member.posts} posts</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </Card>
              </div>

              {/* Main Discussion Area */}
              <div className="lg:col-span-3 space-y-6">
                {/* Forum Stats */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <Card className="p-4 text-center">
                    <div className="text-2xl font-bold text-primary">127</div>
                    <div className="text-sm text-muted-foreground">Total Topics</div>
                  </Card>
                  <Card className="p-4 text-center">
                    <div className="text-2xl font-bold text-secondary">456</div>
                    <div className="text-sm text-muted-foreground">Total Replies</div>
                  </Card>
                  <Card className="p-4 text-center">
                    <div className="text-2xl font-bold text-accent">89</div>
                    <div className="text-sm text-muted-foreground">Active Today</div>
                  </Card>
                  <Card className="p-4 text-center">
                    <div className="text-2xl font-bold text-heritage-green">234</div>
                    <div className="text-sm text-muted-foreground">Members</div>
                  </Card>
                </div>

                {/* Discussions List */}
                <div className="space-y-4">
                  {filteredDiscussions.map((discussion) => (
                    <Card key={discussion.id} className={`p-6 hover:shadow-medium transition-all duration-300 ${discussion.pinned ? 'ring-2 ring-accent/20 bg-gradient-to-r from-card to-accent/5' : ''}`}>
                      <div className="flex items-start space-x-4">
                        <img 
                          src={discussion.authorImage}
                          alt={discussion.author}
                          className="w-12 h-12 rounded-full object-cover shadow-medium"
                        />
                        
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center space-x-2 mb-2">
                            {discussion.pinned && (
                              <Pin className="w-4 h-4 text-accent" />
                            )}
                            {discussion.trending && (
                              <Badge className="bg-heritage-red text-white text-xs">
                                <TrendingUp className="w-3 h-3 mr-1" />
                                Trending
                              </Badge>
                            )}
                            <Badge className={`${getCategoryColor(discussion.category)} text-xs`}>
                              {discussion.category}
                            </Badge>
                          </div>
                          
                          <h3 className="text-lg font-semibold mb-2 hover:text-primary transition-colors cursor-pointer">
                            {discussion.title}
                          </h3>
                          
                          <p className="text-muted-foreground mb-3 line-clamp-2">
                            {discussion.content}
                          </p>
                          
                          <div className="flex flex-wrap gap-1 mb-3">
                            {discussion.tags.map((tag) => (
                              <Badge key={tag} variant="outline" className="text-xs">
                                #{tag}
                              </Badge>
                            ))}
                          </div>
                          
                          <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                              <span className="font-medium text-foreground">{discussion.author}</span>
                              <span>{discussion.authorPayam} Payam</span>
                              <div className="flex items-center space-x-1">
                                <Clock className="w-4 h-4" />
                                <span>{discussion.timeAgo}</span>
                              </div>
                            </div>
                            
                            <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                              <div className="flex items-center space-x-1">
                                <ThumbsUp className="w-4 h-4" />
                                <span>{discussion.likes}</span>
                              </div>
                              <div className="flex items-center space-x-1">
                                <MessageCircle className="w-4 h-4" />
                                <span>{discussion.replies}</span>
                              </div>
                              <div className="flex items-center space-x-1">
                                <Eye className="w-4 h-4" />
                                <span>{discussion.views}</span>
                              </div>
                            </div>
                          </div>
                          
                          {discussion.lastReply !== discussion.timeAgo && (
                            <div className="mt-2 text-xs text-muted-foreground">
                              Last reply {discussion.lastReply}
                            </div>
                          )}
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>

                {/* Load More */}
                <div className="text-center">
                  <Button variant="outline" size="lg">
                    Load More Discussions
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Forum;