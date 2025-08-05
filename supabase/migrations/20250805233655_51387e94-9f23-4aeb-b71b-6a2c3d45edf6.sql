-- Function to update profile photo URL after upload
CREATE OR REPLACE FUNCTION public.update_profile_photo(target_user_id UUID, photo_url TEXT)
RETURNS BOOLEAN
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
BEGIN
  UPDATE public.profiles 
  SET profile_photo_url = photo_url, updated_at = NOW()
  WHERE user_id = target_user_id;
  
  RETURN FOUND;
END;
$$;