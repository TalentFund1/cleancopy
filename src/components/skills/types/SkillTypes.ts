export type SkillWeight = 'critical' | 'technical' | 'necessary';
export type SkillCategory = 'specialized' | 'common' | 'certification';
export type SkillRequirement = 'required' | 'preferred' | 'not_interested' | 'unknown' | 'skill_goal';

export interface DetailedSkill {
  name: string;
  level: string;
  isSkillGoal: boolean;
}

export interface Skill {
  id: string;
  title: string;
  subcategory: string;
  category: SkillCategory;
  businessCategory: string;
  weight: SkillWeight;
  level: string;
  growth: string;
  salary: string;
  confidence: 'low' | 'medium' | 'high';
  benchmarks: {
    B: boolean;
    R: boolean;
    M: boolean;
    O: boolean;
  };
}

export interface UnifiedSkill extends Skill {
  goalStatus?: SkillRequirement;
  roleLevel?: string;
  isCompanySkill?: boolean;
}

export interface RoleSkillData {
  title: string;
  soc?: string;
  function?: string;
  mappedTitle?: string;
  occupation?: string;
  description?: string;
  roleTrack?: "Professional" | "Managerial";
  specialized: UnifiedSkill[];
  common: UnifiedSkill[];
  certifications: UnifiedSkill[];
  skills: UnifiedSkill[];
}

export interface SimpleSkill {
  title: string;
  subcategory: string;
  category?: SkillCategory;
  businessCategory?: string;
  level: string;
  growth: string;
}