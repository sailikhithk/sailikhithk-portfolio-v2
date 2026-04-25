"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const jobs = [
  {
    company: "Airbnb",
    logo: "https://upload.wikimedia.org/wikipedia/commons/6/69/Airbnb_Logo_B%C3%A9lo.svg",
    role: "Sr. Software Engineer — ML Infrastructure",
    period: "Jun 2025 – Present",
    desc: "Built BPI Virtual Analyst — a 5-step LLM wizard integrating 30+ models (GPT-4o, Claude, Gemini, Llama) used by ~55 analysts. Scaled from 600 → 10,000 rows/run. Built Presidio PII pipeline (30% faster). Led Redpen label export upgrade targeting 80% runtime reduction.",
    stack: "Python · Streamlit · Flask · Celery · Airflow · Labelbox · Presidio · AWS · OTEL",
  },
  {
    company: "Eli Lilly",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/Eli_Lilly_and_Company.svg/250px-Eli_Lilly_and_Company.svg.png",
    role: "Sr. Software Engineer (via ThriveOn Solutions)",
    period: "Sept 2024 – Jun 2025",
    desc: "Built and maintained the Dose Management System (DMS) — full-stack healthcare portal for medication management. Java/Spring Boot backend, React frontend, deployed on OpenShift OCP across dev/QA/prod environments.",
    stack: "Java · Spring Boot · React · OpenShift · PostgreSQL · GitHub Actions",
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
    stack: "Python · PySpark · Azure Databricks · AWS SageMaker · MLFlow · Flask · Docker · Jenkins",
  },
  {
    company: "Oracle India",
    logo: null,
    role: "Data Engineer",
    period: "Sept 2017 – Jul 2019",
    desc: "Built ERP analytics dashboard across 13 business units; boosted client activity by 20%. Automated PIP process — saved 600+ monthly work hours. Built real-time fraud detection pipeline using Kafka. Best Performer Q3 2018.",
    stack: "Python · Java · Oracle Cloud HCM · Kafka · ELK Stack · AWS · Flask · PostgreSQL",
  },
];

export default function Experience() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="experience"
      style={{ width: "100%", display: "block", padding: "6rem 0", backgroundColor: "#ffffff" }}
    >
      {/* Centered container */}
      <div style={{ width: "100%", padding: "0 5rem" }}>

        {/* Section heading */}
        <div style={{ textAlign: "center", marginBottom: "3rem" }}>
          <h2
            style={{
              fontFamily: "var(--font-montserrat), sans-serif",
              color: "#2c3e50",
              fontSize: "3rem",
              margin: 0,
              textTransform: "uppercase",
            }}
          >
            Work Experience
          </h2>
          <hr className="star-divider star-primary" />
        </div>

        {/* Cards */}
        <div ref={ref} style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
          {jobs.map((job, i) => (
            <motion.div
              key={job.company}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.45, delay: i * 0.1 }}
              style={{
                display: "flex",
                gap: "1.5rem",
                alignItems: "flex-start",
                background: "#ffffff",
                borderRadius: "8px",
                padding: "1.5rem",
                boxShadow: "0 4px 16px rgba(0,0,0,0.09)",
              }}
            >
              {/* Logo column */}
              <div
                style={{
                  width: "90px",
                  flexShrink: 0,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  paddingTop: "4px",
                }}
              >
                {job.logo ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={job.logo}
                    alt={job.company}
                    style={{ maxWidth: "80px", maxHeight: "44px", objectFit: "contain" }}
                  />
                ) : (
                  <i className="fa fa-database fa-3x" style={{ color: "#f80000" }} />
                )}
              </div>

              {/* Text column */}
              <div style={{ flex: 1 }}>
                <h3
                  style={{
                    fontFamily: "var(--font-montserrat), sans-serif",
                    color: "#2c3e50",
                    fontSize: "1rem",
                    margin: "0 0 4px",
                    textTransform: "uppercase",
                  }}
                >
                  {job.company}{" "}
                  <span
                    style={{
                      color: "#18BC9C",
                      fontWeight: 400,
                      fontSize: "0.8rem",
                      textTransform: "none",
                    }}
                  >
                    {job.period}
                  </span>
                </h3>
                <p style={{ color: "#18BC9C", fontWeight: 600, fontSize: "0.82rem", margin: "0 0 8px" }}>
                  {job.role}
                </p>
                <p style={{ color: "#555", fontSize: "0.88rem", lineHeight: "1.65", margin: "0 0 6px" }}>
                  {job.desc}
                </p>
                <p style={{ color: "#aaa", fontSize: "0.82rem", fontStyle: "italic", margin: 0 }}>
                  {job.stack}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
