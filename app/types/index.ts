export interface Job {
  company: string;
  logo: string | null;
  role: string;
  period: string;
  desc: string;
  stack: string;
}

export interface Project {
  name: string;
  desc: string;
  tags: string[];
  image: string;
  sourceCode?: string;
  liveDemo?: string;
}

export interface Recognition {
  name: string;
  title: string;
  avatar?: string;
  quote: string;
}

export interface Skill {
  name: string;
  label: string;
  color: string;
  icon: string;
  shortDescription: string;
}

export interface AboutCard {
  icon: string;
  title: string;
  desc: string;
}

export interface CareerStat {
  value: string;
  label: string;
}
