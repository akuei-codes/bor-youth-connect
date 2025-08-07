import { useState } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Plus, Trash2, Save, X } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

interface WorkExperience {
  id: string;
  company: string;
  position: string;
  description: string | null;
  start_year: number | null;
  end_year: number | null;
}

interface WorkExperienceSectionProps {
  userId: string;
  workExperience: WorkExperience[];
  onUpdate: (workExperience: WorkExperience[]) => void;
}

const WorkExperienceSection = ({ userId, workExperience, onUpdate }: WorkExperienceSectionProps) => {
  const [isAdding, setIsAdding] = useState(false);
  const [newWork, setNewWork] = useState({
    company: '',
    position: '',
    description: '',
    start_year: '',
    end_year: ''
  });
  const { toast } = useToast();

  const addWorkExperience = async () => {
    if (!newWork.company.trim() || !newWork.position.trim()) return;

    try {
      const { data, error } = await supabase
        .from('work_experience')
        .insert({
          user_id: userId,
          company: newWork.company,
          position: newWork.position,
          description: newWork.description || null,
          start_year: newWork.start_year ? parseInt(newWork.start_year) : null,
          end_year: newWork.end_year ? parseInt(newWork.end_year) : null,
        })
        .select()
        .single();

      if (error) throw error;

      onUpdate([...workExperience, data]);
      setNewWork({ company: '', position: '', description: '', start_year: '', end_year: '' });
      setIsAdding(false);
      
      toast({
        title: "Work experience added",
        description: "Your work experience entry has been added successfully.",
      });
    } catch (error: any) {
      toast({
        title: "Error adding work experience",
        description: error.message,
        variant: "destructive",
      });
    }
  };

  const deleteWorkExperience = async (id: string) => {
    try {
      const { error } = await supabase
        .from('work_experience')
        .delete()
        .eq('id', id);

      if (error) throw error;

      onUpdate(workExperience.filter(work => work.id !== id));
      
      toast({
        title: "Work experience deleted",
        description: "Your work experience entry has been deleted.",
      });
    } catch (error: any) {
      toast({
        title: "Error deleting work experience",
        description: error.message,
        variant: "destructive",
      });
    }
  };

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle>Work Experience</CardTitle>
          <Button onClick={() => setIsAdding(true)} size="sm" disabled={isAdding}>
            <Plus className="w-4 h-4 mr-2" />
            Add Experience
          </Button>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        {workExperience.map((work) => (
          <div key={work.id} className="border rounded-lg p-4 space-y-2">
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <h4 className="font-semibold">{work.position}</h4>
                <p className="text-muted-foreground">{work.company}</p>
                {work.description && (
                  <p className="text-sm mt-2">{work.description}</p>
                )}
                {(work.start_year || work.end_year) && (
                  <p className="text-sm text-muted-foreground mt-1">
                    {work.start_year || 'Present'} - {work.end_year || 'Present'}
                  </p>
                )}
              </div>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => deleteWorkExperience(work.id)}
                className="text-destructive hover:text-destructive"
              >
                <Trash2 className="w-4 h-4" />
              </Button>
            </div>
          </div>
        ))}

        {isAdding && (
          <div className="border rounded-lg p-4 space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="company">Company *</Label>
                <Input
                  id="company"
                  value={newWork.company}
                  onChange={(e) => setNewWork({ ...newWork, company: e.target.value })}
                  placeholder="Company Name"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="position">Position *</Label>
                <Input
                  id="position"
                  value={newWork.position}
                  onChange={(e) => setNewWork({ ...newWork, position: e.target.value })}
                  placeholder="Software Engineer"
                />
              </div>
              <div className="grid grid-cols-2 gap-2">
                <div className="space-y-2">
                  <Label htmlFor="work_start_year">Start Year</Label>
                  <Input
                    id="work_start_year"
                    type="number"
                    value={newWork.start_year}
                    onChange={(e) => setNewWork({ ...newWork, start_year: e.target.value })}
                    placeholder="2020"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="work_end_year">End Year</Label>
                  <Input
                    id="work_end_year"
                    type="number"
                    value={newWork.end_year}
                    onChange={(e) => setNewWork({ ...newWork, end_year: e.target.value })}
                    placeholder="2024"
                  />
                </div>
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="work_description">Description</Label>
              <Textarea
                id="work_description"
                rows={3}
                value={newWork.description}
                onChange={(e) => setNewWork({ ...newWork, description: e.target.value })}
                placeholder="Describe your role and responsibilities..."
              />
            </div>
            <div className="flex gap-2">
              <Button onClick={addWorkExperience} disabled={!newWork.company.trim() || !newWork.position.trim()}>
                <Save className="w-4 h-4 mr-2" />
                Save
              </Button>
              <Button variant="outline" onClick={() => {
                setIsAdding(false);
                setNewWork({ company: '', position: '', description: '', start_year: '', end_year: '' });
              }}>
                <X className="w-4 h-4 mr-2" />
                Cancel
              </Button>
            </div>
          </div>
        )}

        {workExperience.length === 0 && !isAdding && (
          <p className="text-muted-foreground text-center py-4">No work experience entries yet.</p>
        )}
      </CardContent>
    </Card>
  );
};

export default WorkExperienceSection;