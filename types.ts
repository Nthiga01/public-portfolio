
export interface ExperienceItem {
  role: string;
  company: string;
  location: string;
  period: string;
  bullets: string[];
  achievements?: string[];
  keyStats?: string;
}

export interface Skill {
  name: string;
  icon?: string;
  isSoft?: boolean;
}

export interface Project {
  title: string;
  description: string;
  metric?: string;
  icon: string;
}

export interface Certification {
  name: string;
  url: string;
  icon: string;
}

export interface Reference {
  name: string;
  title: string;
  phone: string;
  email: string;
}
