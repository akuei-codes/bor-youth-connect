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
  };
}

const ProfileCard = ({ profile }: ProfileCardProps) => {
  const defaultImage = "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face";
  
  // Get primary education and work experience
  const primaryEducation = profile.education?.[0];
  const primaryWork = profile.work_experience?.[0];
  
  return (
    <Card className="p-6 hover:shadow-strong transition-all duration-300 group">
      <div className="flex items-start space-x-4">
        {/* Profile Image */}
        <div className="relative">
          <img 
            src={profile.profile_photo_url || defaultImage}
            alt={profile.legal_name}
            className="w-16 h-16 rounded-full object-cover shadow-medium group-hover:scale-105 transition-transform duration-300"
          />
          {profile.profile_photo_url && (
            <div className="absolute -top-1 -right-1 w-6 h-6 bg-accent rounded-full flex items-center justify-center shadow-soft">
              <Shield className="w-3 h-3 text-white" />
            </div>
          )}
        </div>

        {/* Profile Info */}
        <div className="flex-1 min-w-0">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-lg font-semibold group-hover:text-primary transition-colors truncate">
              {profile.legal_name}
            </h3>
            <div className="flex items-center space-x-1 text-accent">
              <Star className="w-4 h-4" />
              <span className="text-sm font-medium">
                {profile.skills?.length || 0}
              </span>
            </div>
          </div>

          <div className="flex items-center space-x-4 text-sm text-muted-foreground mb-3">
            {profile.age && <span>Age {profile.age}</span>}
            {profile.payam && (
              <div className="flex items-center space-x-1">
                <MapPin className="w-3 h-3" />
                <span>{profile.payam} Payam</span>
              </div>
            )}
          </div>

          {/* Education */}
          {primaryEducation && (
            <div className="flex items-center space-x-2 mb-2">
              <GraduationCap className="w-4 h-4 text-primary" />
              <span className="text-sm">
                {primaryEducation.degree}
                {primaryEducation.field_of_study && ` in ${primaryEducation.field_of_study}`}
                {primaryEducation.institution && ` - ${primaryEducation.institution}`}
              </span>
            </div>
          )}

          {/* Current Role */}
          {primaryWork && (
            <div className="flex items-center space-x-2 mb-3">
              <Briefcase className="w-4 h-4 text-secondary" />
              <span className="text-sm">
                {primaryWork.position} at {primaryWork.company}
              </span>
            </div>
          )}

          {/* Bio */}
          {profile.bio && (
            <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
              {profile.bio}
            </p>
          )}

          {/* Skills */}
          {profile.skills && profile.skills.length > 0 && (
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
          )}

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