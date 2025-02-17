import { SkillCategory, SkillWeight, SkillRequirement } from '../../skills/types/SkillTypes';

export type SkillLevel = 'beginner' | 'intermediate' | 'advanced' | 'unspecified';
export type SkillGoalStatus = 'required' | 'preferred' | 'not_interested' | 'unknown' | 'skill_goal';

export interface EmployeeSkillState {
  level: SkillLevel;
  requirement: SkillGoalStatus;
  lastUpdated: string;
}

export interface EmployeeSkill {
  id: string;
  employeeId: string;
  title: string;
  subcategory: string;
  level: SkillLevel;
  goalStatus: SkillGoalStatus;
  lastUpdated: string;
  category: SkillCategory;
  weight: SkillWeight;
  businessCategory: string;
  growth: string;
  salary: string;
  confidence: 'low' | 'medium' | 'high';
  requirement?: SkillRequirement;
  benchmarks: {
    B: boolean;
    R: boolean;
    M: boolean;
    O: boolean;
  };
}

export interface EmployeeSkillsData {
  employeeId: string;
  skills: EmployeeSkill[];
  states: Record<string, EmployeeSkillState>;
}