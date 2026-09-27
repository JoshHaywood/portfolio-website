export type ProjectId =
  | 'customer-portal'
  | 'sales-crm'
  | 'prospecting-tool'
  | 'auction-platform'
  | 'personal-portfolio'
  | 'ecommerce-website'
  | 'energy-data-platform'
  | 'sales-administration-platform';

export interface FeaturedProjectPresentation {
  image: string;
  alignment: 'left' | 'right';
}

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
  featured?: FeaturedProjectPresentation;
}

export interface FeaturedProject extends Project {
  featured: FeaturedProjectPresentation;
}
