import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { SkillsMatrixHeader } from "./SkillsMatrixHeader";
import { SkillsMatrixFilters } from "./SkillsMatrixFilters";
import { SkillsMatrixTable } from "./SkillsMatrixTable";
import { AddEmployeeSkillDialog } from "./dialog/AddEmployeeSkillDialog";

interface SkillsMatrixViewProps {
  selectedLevel: string;
  setSelectedLevel: (level: string) => void;
  selectedInterest: string;
  setSelectedInterest: (interest: string) => void;
  selectedCategory: string;
  setSelectedCategory: (category: string) => void;
  selectedWeight: string;
  setSelectedWeight: (weight: string) => void;
  filteredSkills: any[];
  hasChanges: boolean;
  onSave: () => void;
  onCancel: () => void;
  isRoleBenchmark: boolean;
}

export const SkillsMatrixView = ({
  selectedLevel,
  setSelectedLevel,
  selectedInterest,
  setSelectedInterest,
  selectedCategory,
  setSelectedCategory,
  selectedWeight,
  setSelectedWeight,
  filteredSkills,
  hasChanges,
  onSave,
  onCancel,
  isRoleBenchmark
}: SkillsMatrixViewProps) => {
  return (
    <Card className="p-6 space-y-6 animate-fade-in bg-white">
      <SkillsMatrixHeader 
        hasChanges={hasChanges}
        onSave={onSave}
        onCancel={onCancel}
      />
      
      <Separator className="mb-6" />
      
      <SkillsMatrixFilters 
        selectedLevel={selectedLevel}
        setSelectedLevel={setSelectedLevel}
        selectedInterest={selectedInterest}
        setSelectedInterest={setSelectedInterest}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
        selectedWeight={selectedWeight}
        setSelectedWeight={setSelectedWeight}
        addSkillButton={<AddEmployeeSkillDialog />}
      />

      <SkillsMatrixTable 
        filteredSkills={filteredSkills}
        isRoleBenchmark={isRoleBenchmark}
      />
    </Card>
  );
};