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
    name: "The Eye (HackNYU)",
    description:
      "Computer Vision and NLP application built to assist visually impaired individuals. Winner at HackNYU.",
    tags: [
      { name: "python", color: "#18BC9C" },
      { name: "computer-vision", color: "#aaa" },
      { name: "nlp", color: "#18BC9C" },
    ],
    image: "/img/the-eye.png",
    github: "https://github.com/sailikhithk/The-Eye-HackNYU-2020",
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
];
