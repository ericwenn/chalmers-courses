
export interface CompulsoryRequirement {

}
export interface CompulsoryElectiveRequirement {
  choose: number;
}


export interface Program {
  name: string;
}

export interface StudyYear {
  name: string;
  year: number;
}

export interface StudyPeriod {
  name: string;
  courses: string[];
}

export interface Course {
  institution: string;
  code: string;
  block: '' | 'A' | 'B' | 'C' | 'D' | 'A+' | 'B+' | 'C+' | 'D+';
  name: string;
  points: number;
}

export interface Requirement {
  type: string;
  courses: string[];
  choose?: number;
}

