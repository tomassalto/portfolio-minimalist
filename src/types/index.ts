export type Experience = {
  title: string;
  company: string;
  date: string;
  description: string;
  link: string;
};

export type ProjectType = {
  image: string;
  imageAlt: string;
  title: string;
  description: string;
  tags: string[];
  link?: string;
  github?: string;
};

export type TagType = {
  name: string;
  class: string;
  icon: (_props: Record<string, any>) => any;
};

export type TagsType = {
  [key: string]: TagType;
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
    icon: (_props: Record<string, any>) => any;
  },
  backend: {
    name: string;
    icon: (_props: Record<string, any>) => any;
  },
  learning: {
    name: string;
    icon: (_props: Record<string, any>) => any;
  },
  tools: {
    name: string;
    icon: (_props: Record<string, any>) => any;
  }
];
