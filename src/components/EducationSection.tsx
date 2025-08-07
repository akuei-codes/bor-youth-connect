import { useState } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';
import { Plus, Trash2, Edit, Save, X } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

interface Education {
  id: string;
  institution: string;
  degree: string;
  field_of_study: string | null;
  start_year: number | null;
  end_year: number | null;
}

interface EducationSectionProps {
  userId: string;
  education: Education[];
  onUpdate: (education: Education[]) => void;
}

const EducationSection = ({ userId, education, onUpdate }: EducationSectionProps) => {
  const [isAdding, setIsAdding] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [newEducation, setNewEducation] = useState({
    institution: '',
    degree: '',
    field_of_study: '',
    start_year: '',
    end_year: ''
  });
  const { toast } = useToast();

  const addEducation = async () => {
    if (!newEducation.institution.trim() || !newEducation.degree.trim()) return;

    try {
      const { data, error } = await supabase
        .from('education')
        .insert({
          user_id: userId,
          institution: newEducation.institution,
          degree: newEducation.degree,
          field_of_study: newEducation.field_of_study || null,
          start_year: newEducation.start_year ? parseInt(newEducation.start_year) : null,
          end_year: newEducation.end_year ? parseInt(newEducation.end_year) : null,
        })
        .select()
        .single();

      if (error) throw error;

      onUpdate([...education, data]);
      setNewEducation({ institution: '', degree: '', field_of_study: '', start_year: '', end_year: '' });
      setIsAdding(false);
      
      toast({
        title: "Education added",
        description: "Your education entry has been added successfully.",
      });
    } catch (error: any) {
      toast({
        title: "Error adding education",
        description: error.message,
        variant: "destructive",
      });
    }
  };

  const deleteEducation = async (id: string) => {
    try {
      const { error } = await supabase
        .from('education')
        .delete()
        .eq('id', id);

      if (error) throw error;

      onUpdate(education.filter(edu => edu.id !== id));
      
      toast({
        title: "Education deleted",
        description: "Your education entry has been deleted.",
      });
    } catch (error: any) {
      toast({
        title: "Error deleting education",
        description: error.message,
        variant: "destructive",
      });
    }
  };

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle>Education</CardTitle>
          <Button onClick={() => setIsAdding(true)} size="sm" disabled={isAdding}>
            <Plus className="w-4 h-4 mr-2" />
            Add Education
          </Button>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        {education.map((edu) => (
          <div key={edu.id} className="border rounded-lg p-4 space-y-2">
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <h4 className="font-semibold">{edu.degree}</h4>
                <p className="text-muted-foreground">{edu.institution}</p>
                {edu.field_of_study && (
                  <Badge variant="secondary" className="mt-1">{edu.field_of_study}</Badge>
                )}
                {(edu.start_year || edu.end_year) && (
                  <p className="text-sm text-muted-foreground mt-1">
                    {edu.start_year || 'Present'} - {edu.end_year || 'Present'}
                  </p>
                )}
              </div>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => deleteEducation(edu.id)}
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
                <Label htmlFor="institution">Institution *</Label>
                <Input
                  id="institution"
                  value={newEducation.institution}
                  onChange={(e) => setNewEducation({ ...newEducation, institution: e.target.value })}
                  placeholder="University of Example"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="degree">Degree *</Label>
                <Input
                  id="degree"
                  value={newEducation.degree}
                  onChange={(e) => setNewEducation({ ...newEducation, degree: e.target.value })}
                  placeholder="Bachelor's, Master's, etc."
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="field_of_study">Field of Study</Label>
                <Input
                  id="field_of_study"
                  value={newEducation.field_of_study}
                  onChange={(e) => setNewEducation({ ...newEducation, field_of_study: e.target.value })}
                  placeholder="Computer Science"
                />
              </div>
              <div className="grid grid-cols-2 gap-2">
                <div className="space-y-2">
                  <Label htmlFor="start_year">Start Year</Label>
                  <Input
                    id="start_year"
                    type="number"
                    value={newEducation.start_year}
                    onChange={(e) => setNewEducation({ ...newEducation, start_year: e.target.value })}
                    placeholder="2020"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="end_year">End Year</Label>
                  <Input
                    id="end_year"
                    type="number"
                    value={newEducation.end_year}
                    onChange={(e) => setNewEducation({ ...newEducation, end_year: e.target.value })}
                    placeholder="2024"
                  />
                </div>
              </div>
            </div>
            <div className="flex gap-2">
              <Button onClick={addEducation} disabled={!newEducation.institution.trim() || !newEducation.degree.trim()}>
                <Save className="w-4 h-4 mr-2" />
                Save
              </Button>
              <Button variant="outline" onClick={() => {
                setIsAdding(false);
                setNewEducation({ institution: '', degree: '', field_of_study: '', start_year: '', end_year: '' });
              }}>
                <X className="w-4 h-4 mr-2" />
                Cancel
              </Button>
            </div>
          </div>
        )}

        {education.length === 0 && !isAdding && (
          <p className="text-muted-foreground text-center py-4">No education entries yet.</p>
        )}
      </CardContent>
    </Card>
  );
};

export default EducationSection;