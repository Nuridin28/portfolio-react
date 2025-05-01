export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  year: string;
  techs: string[];
  categories: string[];
  githubUrl: string | null;
  liveUrl: string | null;
}

export interface Skill {
  name: string;
  icon: string;
  proficiency: number;
  experience: string;
}