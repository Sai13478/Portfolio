export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  liveUrl: string;
  githubUrl?: string;
  technologies: string[];
  category: string;
  featured?: boolean;
}

export interface ProjectCardProps {
  project: Project;
}
