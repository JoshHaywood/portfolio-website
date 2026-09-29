export type ProjectId =
  | 'energy-data-platform'
  | 'sales-administration-platform'
  | 'customer-portal'
  | 'sales-crm'
  | 'prospecting-tool'
  | 'auction-platform';

export interface Project {
  id: ProjectId;
  heading: string;
  tagline: string;
  summary: string;
  technologies: string[];
  projectImage: string;
  overview: string;
  structure: string[];
  role: string;
  deployLink?: string;
  repoLink?: string;
}

