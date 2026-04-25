"use client";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
import { Tilt } from "react-tilt";

type Tag = { name: string; color: string };

type Project = {
  name: string;
  description: string;
  tags: Tag[];
  image: string;
  github?: string;
  deploy?: string;
};

const projects: Project[] = [
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
    image: "/img/hashcode.jpg",
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
    description: "Real-time global COVID-19 statistics and analytics dashboard.",
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

function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.15, ease: "easeOut" }}
    >
      <Tilt options={{ max: 15, scale: 1.02, speed: 450 }}>
        <div style={{ background: "#1d1836", borderRadius: "1rem", padding: "1.25rem", width: "360px" }}>
          {/* Image */}
          <div style={{ position: "relative", width: "100%", height: "230px", borderRadius: "0.75rem", overflow: "hidden" }}>
            <Image src={project.image} alt={project.name} fill style={{ objectFit: "cover" }} sizes="360px" />

            {/* Hover overlay */}
            <div
              style={{
                position: "absolute", inset: 0, background: "rgba(0,0,0,0)",
                display: "flex", justifyContent: "flex-end", alignItems: "flex-start",
                padding: "0.75rem", gap: "0.5rem",
                transition: "background 0.3s",
              }}
              onMouseEnter={e => (e.currentTarget.style.background = "rgba(0,0,0,0.45)")}
              onMouseLeave={e => (e.currentTarget.style.background = "rgba(0,0,0,0)")}
            >
              {project.github && (
                <a href={project.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub"
                  style={{ width: "40px", height: "40px", borderRadius: "50%", background: "#000", border: "1px solid #18BC9C", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <i className="fa fa-github" style={{ color: "#fff", fontSize: "16px" }} />
                </a>
              )}
              {project.deploy && (
                <a href={project.deploy} target="_blank" rel="noopener noreferrer" aria-label="Live demo"
                  style={{ width: "40px", height: "40px", borderRadius: "50%", background: "#000", border: "1px solid #18BC9C", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <i className="fa fa-external-link" style={{ color: "#18BC9C", fontSize: "16px" }} />
                </a>
              )}
            </div>
          </div>

          {/* Body */}
          <div style={{ marginTop: "1.25rem" }}>
            <h3 style={{ fontFamily: "var(--font-montserrat), sans-serif", color: "#fff", fontSize: "1.05rem", margin: "0 0 0.5rem", textTransform: "uppercase" }}>
              {project.name}
            </h3>
            <p style={{ color: "#aaa", fontSize: "0.875rem", lineHeight: "1.6", margin: 0 }}>
              {project.description}
            </p>
          </div>

          {/* Tags */}
          <div style={{ marginTop: "1rem", display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
            {project.tags.map((tag) => (
              <span key={tag.name} style={{ color: tag.color, fontSize: "0.75rem", fontWeight: 600 }}>
                #{tag.name}
              </span>
            ))}
          </div>
        </div>
      </Tilt>
    </motion.div>
  );
}

export default function Projects() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="portfolio" style={{ width: "100%", display: "block", padding: "6rem 0", backgroundColor: "#060b18" }}>
      <div style={{ width: "100%", padding: "0 5rem" }}>

        {/* Heading */}
        <div style={{ textAlign: "center", marginBottom: "3rem" }}>
          <p style={{ color: "#18BC9C", textTransform: "uppercase", letterSpacing: "0.1em", fontSize: "0.875rem", fontWeight: 600, marginBottom: "0.5rem" }}>
            My work
          </p>
          <h2 style={{ fontFamily: "var(--font-montserrat), sans-serif", color: "#ffffff", fontSize: "3rem", margin: 0, textTransform: "uppercase" }}>
            Projects
          </h2>
          <hr className="star-divider star-primary" />
          <p style={{ color: "#aaa", fontSize: "1rem", lineHeight: "1.7", marginTop: "1rem" }}>
            Real-world projects showcasing skills across GenAI, ML infrastructure,
            full-stack development, and cloud platforms.
          </p>
        </div>

        {/* Cards grid */}
        <div
          ref={ref}
          style={{ display: "flex", flexWrap: "wrap", gap: "1.75rem", justifyContent: "center", marginTop: "4rem" }}
        >
          {inView && projects.map((project, i) => (
            <ProjectCard key={project.name} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
