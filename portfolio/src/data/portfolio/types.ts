export type LinkItem = {
  label: string;
  href: string;
};

export type WorkProject = {
  id: string;
  title: string;
  period: string;
  client?: string;
  summary: string;
  highlights: string[];
  tech: string[];
  contribution?: string;
  roleTag?: string;
};

export type CompanyExperience = {
  id: string;
  company: string;
  team?: string;
  title: string;
  period: string;
  reason?: string;
  overviewBullets: string[];
  projects: WorkProject[];
};

export type Troubleshoot = {
  title: string;
  problem: string;
  solution: string;
  result?: string;
};

export type ProjectLinks = {
  live?: string;
  github?: string;
  demo?: {
    id: string;
    password: string;
    note?: string;
  };
};

export type PersonalProject = {
  slug: string;
  name: string;
  subtitle: string;
  role: string;
  stack: string[];
  planned?: string[];
  highlights: string[];
  roadmap?: string[];
  troubleshoots: Troubleshoot[];
  links: ProjectLinks;
};

export type SkillGroup = {
  title: string;
  items: string[];
};

export type PortfolioData = {
  profile: {
    name: string;
    title: string;
    tagline: string;
    links: {
      github: string;
      email: string;
    };
  };
  education: {
    school1: string;
    school2: string;
  };
  about: string[];
  growth: string[];
  experience: CompanyExperience[];
  personalProjects: PersonalProject[];
  skills: SkillGroup[];
};
