export type StudentStatus = 'active' | 'paused' | 'archived';

export interface Student {
  id: string;
  firstName: string;
  lastName: string;
  email?: string;
  phone?: string;
  status: StudentStatus;
  primaryGoal?: string;
  createdAt: string;
}

export interface TrainingPlanSummary {
  id: string;
  studentId: string;
  name: string;
  daysPerWeek: number;
  published: boolean;
  updatedAt: string;
}
