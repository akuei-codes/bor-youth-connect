import { useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';

const PendingDataHandler = () => {
  const { toast } = useToast();

  useEffect(() => {
    const handlePendingData = async () => {
      const pendingDataStr = localStorage.getItem('pendingProfileData');
      if (!pendingDataStr) return;

      try {
        const pendingData = JSON.parse(pendingDataStr);
        const { data: { session } } = await supabase.auth.getSession();
        
        if (!session?.user) return;

        // Insert education records
        if (pendingData.education?.length > 0) {
          const educationRecords = pendingData.education.map((edu: any) => ({
            user_id: session.user.id,
            institution: edu.institution,
            field_of_study: edu.field_of_study,
            degree: edu.degree,
            start_year: edu.start_date ? parseInt(edu.start_date) : null,
            end_year: edu.end_date ? parseInt(edu.end_date) : null,
          }));

          const { error: eduError } = await supabase
            .from('education')
            .insert(educationRecords);

          if (eduError) {
            console.error('Education insert error:', eduError);
          }
        }

        // Insert work experience records
        if (pendingData.workExperience?.length > 0) {
          const workRecords = pendingData.workExperience.map((work: any) => ({
            user_id: session.user.id,
            company: work.company,
            position: work.position,
            description: work.description,
            start_year: work.start_date ? parseInt(work.start_date) : null,
            end_year: work.end_date ? parseInt(work.end_date) : null,
          }));

          const { error: workError } = await supabase
            .from('work_experience')
            .insert(workRecords);

          if (workError) {
            console.error('Work experience insert error:', workError);
          }
        }

        // Clear pending data after successful insertion
        localStorage.removeItem('pendingProfileData');
        
        toast({
          title: "Profile completed",
          description: "Your education and work experience have been added to your profile.",
        });

      } catch (error) {
        console.error('Error processing pending data:', error);
      }
    };

    // Wait a moment after mount to ensure auth state is stable
    const timer = setTimeout(handlePendingData, 2000);
    return () => clearTimeout(timer);
  }, [toast]);

  return null;
};

export default PendingDataHandler;