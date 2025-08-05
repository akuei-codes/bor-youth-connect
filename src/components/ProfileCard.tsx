import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  MapPin, 
  GraduationCap, 
  Briefcase, 
  Star, 
  MessageSquare,
  Shield,
  ExternalLink
} from "lucide-react";

interface ProfileCardProps {
  profile: {
    id: string;
    name: string;
    age: number;
    payam: string;
    image: string;
    education: string;
    currentRole?: string;
    skills: string[];
    bio: string;
    verified?: boolean;
    endorsements: number;
  };
}

const ProfileCard = ({ profile }: ProfileCardProps) => {
  return (
    <Card className="p-6 hover:shadow-strong transition-all duration-300 group">
      <div className="flex items-start space-x-4">
        {/* Profile Image */}
        <div className="relative">
          <img 
            src={profile.image}
            alt={profile.name}
            className="w-16 h-16 rounded-full object-cover shadow-medium group-hover:scale-105 transition-transform duration-300"
          />
          {profile.verified && (
            <div className="absolute -top-1 -right-1 w-6 h-6 bg-accent rounded-full flex items-center justify-center shadow-soft">
              <Shield className="w-3 h-3 text-white" />
            </div>
          )}
        </div>

        {/* Profile Info */}
        <div className="flex-1 min-w-0">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-lg font-semibold group-hover:text-primary transition-colors truncate">
              {profile.name}
            </h3>
            <div className="flex items-center space-x-1 text-accent">
              <Star className="w-4 h-4" />
              <span className="text-sm font-medium">{profile.endorsements}</span>
            </div>
          </div>

          <div className="flex items-center space-x-4 text-sm text-muted-foreground mb-3">
            <span>Age {profile.age}</span>
            <div className="flex items-center space-x-1">
              <MapPin className="w-3 h-3" />
              <span>{profile.payam} Payam</span>
            </div>
          </div>

          {/* Education */}
          <div className="flex items-center space-x-2 mb-2">
            <GraduationCap className="w-4 h-4 text-primary" />
            <span className="text-sm">{profile.education}</span>
          </div>

          {/* Current Role */}
          {profile.currentRole && (
            <div className="flex items-center space-x-2 mb-3">
              <Briefcase className="w-4 h-4 text-secondary" />
              <span className="text-sm">{profile.currentRole}</span>
            </div>
          )}

          {/* Bio */}
          <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
            {profile.bio}
          </p>

          {/* Skills */}
          <div className="flex flex-wrap gap-1 mb-4">
            {profile.skills.slice(0, 3).map((skill) => (
              <Badge key={skill} variant="secondary" className="text-xs">
                {skill}
              </Badge>
            ))}
            {profile.skills.length > 3 && (
              <Badge variant="outline" className="text-xs">
                +{profile.skills.length - 3} more
              </Badge>
            )}
          </div>

          {/* Actions */}
          <div className="flex space-x-2">
            <Button variant="outline" size="sm" className="flex-1">
              <MessageSquare className="w-4 h-4 mr-2" />
              Connect
            </Button>
            <Button variant="ghost" size="sm">
              <ExternalLink className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default ProfileCard;