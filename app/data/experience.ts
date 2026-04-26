import type { Job } from "@/app/types";

export const jobs: Job[] = [
  {
    company: "Airbnb",
    logo: "https://upload.wikimedia.org/wikipedia/commons/6/69/Airbnb_Logo_B%C3%A9lo.svg",
    role: "Sr. Software Engineer — ML Infrastructure",
    period: "Jun 2025 – Present",
    desc: "Built BPI Virtual Analyst — a 5-step LLM wizard integrating 30+ models (GPT-4o, Claude, Gemini, Llama) used by ~55 analysts. Scaled from 600 → 10,000 rows/run. Built Presidio PII pipeline (30% faster). Led Redpen label export upgrade targeting 80% runtime reduction.",
    stack:
      "Python · Streamlit · Flask · Celery · Airflow · Labelbox · Presidio · AWS · OTEL",
  },
  {
    company: "Eli Lilly",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/Eli_Lilly_and_Company.svg/250px-Eli_Lilly_and_Company.svg.png",
    role: "Sr. Software Engineer (via ThriveOn Solutions)",
    period: "Sept 2024 – Jun 2025",
    desc: "Built and maintained the Dose Management System (DMS) — full-stack healthcare portal for medication management. Java/Spring Boot backend, React frontend, deployed on OpenShift OCP across dev/QA/prod environments.",
    stack:
      "Java · Spring Boot · React · OpenShift · PostgreSQL · GitHub Actions",
  },
  {
    company: "Southwest Airlines",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c4/Southwest_Airlines_logo_2014.svg/250px-Southwest_Airlines_logo_2014.svg.png",
    role: "Sr. Software Engineer (via ThriveOn Solutions)",
    period: "Jan 2023 – Aug 2024",
    desc: "Architected deployment and testing automation pipelines. Containerized services with Docker + Kubernetes. Secure data management with Datadog monitoring. Statistical analysis and regression models on large datasets.",
    stack: "Python · Docker · Kubernetes · AWS · Datadog · Flask",
  },
  {
    company: "Shell PLC",
    logo: "https://upload.wikimedia.org/wikipedia/en/e/e8/Shell_logo.svg",
    role: "Sr. Python Developer (via ThriveOn Solutions)",
    period: "Jan 2021 – Nov 2022",
    desc: "Built API service handling 17M pageviews/month at 94% cache efficiency. Cleared 200+ bottlenecks; app 5× faster after refactor. Improved NLP accuracy 86% → 94%. Deployed ML models on AWS SageMaker. Published at SPE ATCE Conference.",
    stack:
      "Python · PySpark · Azure Databricks · AWS SageMaker · MLFlow · Flask · Docker · Jenkins",
  },
  {
    company: "Oracle India",
    logo: null,
    role: "Data Engineer",
    period: "Sept 2017 – Jul 2019",
    desc: "Built ERP analytics dashboard across 13 business units; boosted client activity by 20%. Automated PIP process — saved 600+ monthly work hours. Built real-time fraud detection pipeline using Kafka. Best Performer Q3 2018.",
    stack:
      "Python · Java · Oracle Cloud HCM · Kafka · ELK Stack · AWS · Flask · PostgreSQL",
  },
];
