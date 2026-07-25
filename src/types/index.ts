export type ProjectCategory =
  | "react"
  | "laravel"
  | "php"
  | "javascript-typescript"
  | "astro"
  | "full-stack";

export type FeaturedProjectConfig = {
  repo: string;
  nameOverride?: string;
  featured: boolean;
  order: number;
  categories: ProjectCategory[];
  summaryOverride?: {
    es: string;
    en: string;
  };
  descriptionOverride?: {
    es: string;
    en: string;
  };
  demoUrl?: string;
  image?: string;
  technologies?: string[];
};

export type GitHubRepoMetadata = {
  name: string;
  fullName: string;
  description: string | null;
  htmlUrl: string;
  homepage: string | null;
  language: string | null;
  topics: string[];
  createdAt: string | null;
  updatedAt: string | null;
  readme: string | null;
};

export type PortfolioProject = {
  repo: string;
  name: string;
  description: string;
  technologies: string[];
  githubUrl: string;
  deployUrl: string | null;
  createdAt: string | null;
  updatedAt: string | null;
  summary: string;
  categories: ProjectCategory[];
  featured: boolean;
  featuredOrder: number | null;
  image: string | null;
};

export type Experience = {
  title: string;
  company: string;
  date: string;
  description: string;
};

export type Props = {
  title?: string;
  body?: string;
  href?: string;
  company?: string;
  description?: string;
  date?: string;
};

export type Skills = [
  frontend: {
    name: string;
    icon: (_props: Record<string, unknown>) => unknown;
  },
  backend: {
    name: string;
    icon: (_props: Record<string, unknown>) => unknown;
  },
  learning: {
    name: string;
    icon: (_props: Record<string, unknown>) => unknown;
  },
  tools: {
    name: string;
    icon: (_props: Record<string, unknown>) => unknown;
  }
];
