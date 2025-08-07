-- Fix the parameter name for get_user_profile_from_auth function
DROP FUNCTION IF EXISTS public.get_user_profile_from_auth(uuid);

CREATE OR REPLACE FUNCTION public.get_user_profile_from_auth(input_user_id uuid)
RETURNS TABLE (
  id uuid,
  legal_name text,
  age integer,
  email text,
  phone text,
  payam text,
  bio text,
  skills text[],
  profile_photo_url text,
  created_at timestamptz,
  updated_at timestamptz
)
LANGUAGE sql
SECURITY DEFINER
AS $$
  SELECT 
    p.id,
    p.legal_name,
    p.age,
    p.email,
    p.phone,
    p.payam,
    p.bio,
    p.skills,
    p.profile_photo_url,
    p.created_at,
    p.updated_at
  FROM public.profiles p
  WHERE p.user_id = input_user_id;
$$;