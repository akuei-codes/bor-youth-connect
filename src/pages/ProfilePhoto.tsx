import { useState, useEffect } from 'react';
import { User } from '@supabase/supabase-js';
import { supabase } from '@/integrations/supabase/client';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Upload, Camera } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useToast } from '@/hooks/use-toast';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

interface UserProfile {
  id: string;
  user_id: string;
  legal_name: string;
  email: string;
  profile_photo_url: string | null;
  age: number | null;
  payam: string | null;
  phone_number: string | null;
  bio: string | null;
  skills: string[] | null;
  created_at: string;
  updated_at: string;
}

const ProfilePhoto = () => {
  const [user, setUser] = useState<User | null>(null);
  const [profile, setProfile] = useState<UserProfile | null>(null);
  const [loading, setLoading] = useState(true);
  const [uploading, setUploading] = useState(false);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const navigate = useNavigate();
  const { toast } = useToast();

  useEffect(() => {
    const getProfile = async () => {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) {
        navigate('/auth');
        return;
      }

      setUser(user);

      try {
        const { data, error } = await supabase.rpc('get_user_profile_from_auth', {
          user_id: user.id
        });

        if (error) throw error;
        
        if (data && data.length > 0) {
          setProfile(data[0]);
        }
      } catch (error) {
        console.error('Error fetching profile:', error);
      } finally {
        setLoading(false);
      }
    };

    getProfile();
  }, [navigate]);

  const handleFileUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file || !user) return;

    setUploading(true);
    try {
      // Create a unique filename
      const fileExt = file.name.split('.').pop();
      const fileName = `${user.id}/profile.${fileExt}`;

      // Upload file to Supabase Storage
      const { error: uploadError } = await supabase.storage
        .from('profile-photos')
        .upload(fileName, file, { upsert: true });

      if (uploadError) throw uploadError;

      // Get the public URL
      const { data } = supabase.storage
        .from('profile-photos')
        .getPublicUrl(fileName);

      const photoUrl = data.publicUrl;

      // Update the profile with the new photo URL
      const success = await supabase.rpc('update_profile_photo', {
        target_user_id: user.id,
        photo_url: photoUrl
      });

      if (!success) throw new Error('Failed to update profile photo');

      // Update local state
      if (profile) {
        setProfile({ ...profile, profile_photo_url: photoUrl });
      }
      setPreviewUrl(photoUrl);

      toast({
        title: "Photo updated",
        description: "Your profile photo has been successfully updated.",
      });

      // Navigate back to profile after a short delay
      setTimeout(() => {
        navigate('/profile');
      }, 1500);

    } catch (error: any) {
      console.error('Photo upload error:', error);
      toast({
        title: "Error uploading photo",
        description: error.message,
        variant: "destructive",
      });
    } finally {
      setUploading(false);
    }
  };

  const getInitials = (name: string) => {
    return name
      .split(' ')
      .map(word => word.charAt(0))
      .join('')
      .toUpperCase()
      .slice(0, 2);
  };

  if (loading) {
    return <div className="min-h-screen bg-background flex items-center justify-center">
      <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
    </div>;
  }

  if (!profile) {
    return <div className="min-h-screen bg-background">
      <Navigation />
      <main className="pt-20 px-4">
        <div className="max-w-2xl mx-auto text-center">
          <h1 className="text-2xl font-bold mb-4">Profile Not Found</h1>
          <Button onClick={() => navigate('/')}>Return Home</Button>
        </div>
      </main>
      <Footer />
    </div>;
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-20 px-4 pb-16">
        <div className="max-w-2xl mx-auto">
          <div className="mb-8">
            <h1 className="text-3xl font-bold mb-2">Update Profile Photo</h1>
            <p className="text-muted-foreground">Upload a new profile picture</p>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Profile Photo</CardTitle>
              <CardDescription>Choose a photo that represents you</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Current Photo Preview */}
              <div className="flex justify-center">
                <Avatar className="h-32 w-32">
                  <AvatarImage 
                    src={previewUrl || profile.profile_photo_url || undefined} 
                    alt={profile.legal_name}
                  />
                  <AvatarFallback className="bg-gradient-primary text-primary-foreground font-semibold text-2xl">
                    {getInitials(profile.legal_name)}
                  </AvatarFallback>
                </Avatar>
              </div>

              {/* Upload Section */}
              <div className="space-y-4">
                <Label htmlFor="photo-upload">Choose New Photo</Label>
                <div className="flex items-center gap-4">
                  <Input
                    id="photo-upload"
                    type="file"
                    accept="image/*"
                    onChange={handleFileUpload}
                    disabled={uploading}
                    className="flex-1"
                  />
                  <Button variant="outline" size="sm" disabled={uploading}>
                    {uploading ? (
                      <>
                        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-primary mr-2"></div>
                        Uploading...
                      </>
                    ) : (
                      <>
                        <Upload className="w-4 h-4 mr-2" />
                        Upload
                      </>
                    )}
                  </Button>
                </div>
                <p className="text-sm text-muted-foreground">
                  Recommended: Square image, at least 200x200 pixels. Max file size: 5MB.
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-4 pt-6">
                <Button variant="outline" onClick={() => navigate('/profile')} className="flex-1">
                  <Camera className="w-4 h-4 mr-2" />
                  Back to Profile
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ProfilePhoto;