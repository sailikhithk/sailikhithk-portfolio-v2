export type ProjectTag = { name: string; color: string };

export interface Project {
  name: string;
  description: string;
  tags: ProjectTag[];
  image: string;
  github?: string;
  deploy?: string;
}

export const projects: Project[] = [
  {
    name: "Claude Code Ecosystem & AI DevTools",
    description:
      "Suite of ~30 AI devtools and autonomous agent experiments (OpenClaw, MythosForge, Interview System Designer). Built custom Claude Code skills and integrations.",
    tags: [
      { name: "ai-agents", color: "#18BC9C" },
      { name: "claude", color: "#aaa" },
      { name: "python", color: "#18BC9C" },
      { name: "typescript", color: "#aaa" },
    ],
    image: "/img/claude-ecosystem.png",
  },
  {
    name: "AI Interview Copilots",
    description:
      "Collection of AI-powered interview copilot systems and study clones (Open-Cluely, AuraScribe). Features native assistants and real-time interview webbing apps.",
    tags: [
      { name: "llm", color: "#18BC9C" },
      { name: "react", color: "#aaa" },
      { name: "python", color: "#18BC9C" },
      { name: "webrtc", color: "#aaa" },
    ],
    image: "/img/ai-copilots.png",
  },
  {
    name: "Redpen (Airbnb)",
    description:
      "Large-scale internal tooling using Flask, Celery, Labelbox, and Redis. Engineered robust data pipelines with SQLAlchemy and Alembic for model evaluation workflows.",
    tags: [
      { name: "flask", color: "#18BC9C" },
      { name: "celery", color: "#aaa" },
      { name: "labelbox", color: "#18BC9C" },
      { name: "redis", color: "#aaa" },
      { name: "sqlalchemy", color: "#18BC9C" },
    ],
    image: "/img/airbnb.png",
  },
  {
    name: "BPI Virtual Analyst (Airbnb)",
    description:
      "GenAI 5-step LLM wizard integrating 30+ models. Scaled to 10,000 rows/run for ~55 analysts. Presidio PII pipeline, AI clustering, Insight Miner.",
    tags: [
      { name: "python", color: "#18BC9C" },
      { name: "streamlit", color: "#18BC9C" },
      { name: "celery", color: "#aaa" },
      { name: "llm", color: "#18BC9C" },
      { name: "presidio", color: "#aaa" },
    ],
    image: "/img/Plagiarism.jpg",
  },
  {
    name: "Dose Management System (Eli Lilly)",
    description:
      "Full-stack healthcare portal for medication management. Java/Spring Boot backend, React frontend, deployed on OpenShift OCP across clinical environments.",
    tags: [
      { name: "java", color: "#18BC9C" },
      { name: "spring-boot", color: "#18BC9C" },
      { name: "react", color: "#aaa" },
      { name: "openshift", color: "#aaa" },
      { name: "postgresql", color: "#18BC9C" },
    ],
    image: "/img/Lilly.jpg",
  },
  {
    name: "RomeoAI",
    description:
      "AI chat companion powered by Gemma inference. Fluid conversational UI with dark/light mode and instant responses.",
    tags: [
      { name: "react", color: "#18BC9C" },
      { name: "gemma", color: "#aaa" },
      { name: "ai", color: "#18BC9C" },
    ],
    image: "/img/Hacknyu.png",
    github: "https://github.com/sailikhithk",
  },
  {
    name: "ML Subsurface Pipeline (Shell PLC)",
    description:
      "ML reusable framework for subsurface applications. Refactored Jupyter → Python package (5× faster). Deployed on AWS SageMaker. Published at SPE ATCE Conference.",
    tags: [
      { name: "python", color: "#18BC9C" },
      { name: "pyspark", color: "#aaa" },
      { name: "aws-sagemaker", color: "#18BC9C" },
      { name: "mlflow", color: "#aaa" },
    ],
    image: "/img/images.jpg",
  },
  {
    name: "COVID-19 Analytics Dashboard",
    description:
      "Real-time global COVID-19 statistics and analytics dashboard.",
    tags: [
      { name: "python", color: "#18BC9C" },
      { name: "plotly", color: "#aaa" },
      { name: "flask", color: "#18BC9C" },
    ],
    image: "/img/covid19.png",
    github: "https://github.com/sailikhithk/covid19-by-sailikhithk",
  },
  {
    name: "ERP Analytics Dashboard (Oracle)",
    description:
      "Real-time ERP dashboard across 13 business units. Saved 600+ monthly work hours. Boosted quarterly client activity by 20%.",
    tags: [
      { name: "python", color: "#18BC9C" },
      { name: "kafka", color: "#aaa" },
      { name: "elk-stack", color: "#18BC9C" },
      { name: "oracle", color: "#aaa" },
    ],
    image: "/img/nyc.jpg",
  },
];
