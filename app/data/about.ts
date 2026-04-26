import type { AboutCard, CareerStat, Skill } from "@/app/types";

export const cards: AboutCard[] = [
  {
    icon: "fa-code",
    title: "ML Infrastructure & GenAI",
    desc: "Building LLM-powered tools at Airbnb — 30+ model integrations, PII pipelines, data labeling platforms serving ML teams org-wide.",
  },
  {
    icon: "fa-cloud",
    title: "Cloud & Platform Engineering",
    desc: "AWS, GCP, Docker, Kubernetes, Airflow, OpenShift — production systems at Airbnb, Shell, Southwest Airlines, and Eli Lilly.",
  },
  {
    icon: "fa-trophy",
    title: "Certifications & Recognition",
    desc: "AWS Solutions Architect, AWS Developer, GCP Data Engineer, Oracle Java & Database certified. Multiple Airbnb peer appreciations (2026).",
  },
];

export const stats: CareerStat[] = [
  { value: "8+",  label: "Years Experience" },
  { value: "10K", label: "Rows/Run at Airbnb" },
  { value: "30+", label: "LLM Models Integrated" },
  { value: "17M", label: "Pageviews/Month (Shell)" },
];

export const SKILLS: Record<string, Skill> = {
  js:       { name: "js",       label: "JavaScript",       color: "#f0db4f", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",                         shortDescription: "Core scripting — Flask APIs, Streamlit callbacks, frontend logic at Airbnb and Shell." },
  ts:       { name: "ts",       label: "TypeScript",       color: "#007acc", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",                         shortDescription: "Typed React frontends and Next.js apps — DMS frontend at Eli Lilly, this portfolio." },
  react:    { name: "react",    label: "React",            color: "#61dafb", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",                                   shortDescription: "React 18 SPAs — DMS frontend at Eli Lilly, hooks, React Query, component libraries." },
  nextjs:   { name: "nextjs",   label: "Next.js",          color: "#ffffff", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",                                 shortDescription: "App Router, Server Components — this portfolio is Next.js 16." },
  tailwind: { name: "tailwind", label: "Tailwind CSS",     color: "#38bdf8", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg",                          shortDescription: "Utility-first CSS used across React frontends for rapid UI development." },
  nodejs:   { name: "nodejs",   label: "Node.js",          color: "#6cc24a", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",                                 shortDescription: "Backend APIs and tooling — paired with Express for REST service layers." },
  express:  { name: "express",  label: "Express",          color: "#dddddd", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",                               shortDescription: "REST microservices and middleware layers — API backends at Shell and Oracle." },
  postgres: { name: "postgres", label: "PostgreSQL",       color: "#336791", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",                         shortDescription: "Postgres 16 at Eli Lilly DMS — schema design, Flyway migrations, audit triggers." },
  mongodb:  { name: "mongodb",  label: "MongoDB",          color: "#4ea94b", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",                               shortDescription: "NoSQL document storage for flexible schema use cases in rapid prototyping." },
  git:      { name: "git",      label: "Git",              color: "#f1502f", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",                                       shortDescription: "Version control across every project — branching strategies, cherry-picks, PR workflows." },
  github:   { name: "github",   label: "GitHub",           color: "#eeeeee", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",                                 shortDescription: "GitHub Actions CI/CD pipelines at Eli Lilly DMS and Southwest Airlines." },
  prettier: { name: "prettier", label: "Kubernetes / OCP", color: "#326ce5", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg",                            shortDescription: "OCP OpenShift at Eli Lilly DMS — production deployments across dev/QA/prod." },
  npm:      { name: "npm",      label: "NPM",              color: "#cc3534", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original-wordmark.svg",                              shortDescription: "Package management for Node/React projects — dependency auditing, scripts." },
  firebase: { name: "firebase", label: "Firebase",         color: "#ffca28", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg",                                shortDescription: "Realtime database and auth for rapid prototyping and side projects." },
  wordpress:{ name: "wordpress",label: "WordPress",        color: "#21759b", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-plain.svg",                              shortDescription: "CMS-based client sites and content platforms during freelance engagements." },
  linux:    { name: "linux",    label: "Linux",            color: "#f5c518", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg",                                   shortDescription: "Ubuntu/CentOS servers — shell scripting, service management, cron jobs." },
  docker:   { name: "docker",   label: "Docker",           color: "#2496ed", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",                                 shortDescription: "Containerized every major service at Southwest, Eli Lilly, Shell, and Airbnb." },
  nginx:    { name: "nginx",    label: "Nginx",            color: "#009900", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nginx/nginx-original.svg",                                   shortDescription: "Reverse proxy and load balancing — API gateway configuration at Shell PLC." },
  aws:      { name: "aws",      label: "AWS",              color: "#ff9900", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg",     shortDescription: "SageMaker, S3, SNS, SES, EC2 — certified Solutions Architect & Developer." },
  gcp:      { name: "gcp",      label: "Google Cloud",     color: "#4285f4", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg",                       shortDescription: "Certified GCP Professional Data Engineer — BigQuery, Dataflow, Cloud Storage." },
  vim:      { name: "vim",      label: "Python",           color: "#3572A5", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",                                 shortDescription: "Primary language at Airbnb — LLM pipelines, PySpark, Flask APIs, Presidio PII." },
  vercel:   { name: "vercel",   label: "Vercel",           color: "#eeeeee", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vercel/vercel-original.svg",                                 shortDescription: "Zero-config deployments for Next.js apps — this portfolio deploys here." },
  vue:      { name: "vue",      label: "Java / Spring Boot",color: "#6db33f",icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg",                                shortDescription: "Spring Boot 3.2 at Eli Lilly DMS — REST APIs, JPA, Flyway migrations." },
  html:     { name: "html",     label: "HTML5",            color: "#e34c26", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",                                   shortDescription: "Semantic HTML — accessible, SEO-optimised markup across all frontend projects." },
  css:      { name: "css",      label: "CSS3",             color: "#264de4", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",                                     shortDescription: "Vanilla CSS and animations — this portfolio uses inline styles for full control." },
};
