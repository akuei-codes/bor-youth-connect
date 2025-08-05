-- Add Google OAuth configuration settings
-- Note: The actual Google OAuth client configuration should be done via Supabase dashboard
-- These are just helper functions and policies

-- Function to get user profile from auth metadata
CREATE OR REPLACE FUNCTION public.get_user_profile_from_auth(user_id UUID)
RETURNS TABLE (
  id UUID,
  user_id UUID,
  legal_name TEXT,
  email TEXT,
  profile_photo_url TEXT,
  age INTEGER,
  payam TEXT,
  phone_number TEXT,
  bio TEXT,
  skills TEXT[],
  created_at TIMESTAMPTZ,
  updated_at TIMESTAMPTZ
)
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
BEGIN
  RETURN QUERY
  SELECT 
    p.id,
    p.user_id,
    p.legal_name,
    p.email,
    p.profile_photo_url,
    p.age,
    p.payam,
    p.phone_number,
    p.bio,
    p.skills,
    p.created_at,
    p.updated_at
  FROM public.profiles p
  WHERE p.user_id = get_user_profile_from_auth.user_id;
END;
$$;

-- Function to update profile photo URL after upload
CREATE OR REPLACE FUNCTION public.update_profile_photo(user_id UUID, photo_url TEXT)
RETURNS BOOLEAN
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
BEGIN
  UPDATE public.profiles 
  SET profile_photo_url = photo_url, updated_at = NOW()
  WHERE profiles.user_id = update_profile_photo.user_id;
  
  RETURN FOUND;
END;
$$;