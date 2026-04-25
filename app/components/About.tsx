"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const cards = [
  {
    icon: "fa-code",
    title: "ML Infrastructure & GenAI",
    desc: "Building LLM-powered tools at Airbnb — 30+ model integrations, PII pipelines, data labeling platforms serving ML teams org-wide.",
  },
  {
    icon: "fa-cloud",
    title: "Cloud & Platform Engineering",
    desc: "AWS, GCP, Azure, Docker, Kubernetes, Airflow, OpenShift — production systems at Airbnb, Shell, Southwest Airlines, and Eli Lilly.",
  },
  {
    icon: "fa-trophy",
    title: "Certifications & Recognition",
    desc: "AWS Solutions Architect, AWS Developer, GCP Data Engineer, Oracle Java & Database certified. Multiple Airbnb peer appreciations (2026).",
  },
];

const stats = [
  { value: "8+", label: "Years Experience" },
  { value: "10K", label: "Rows/Run at Airbnb" },
  { value: "30+", label: "LLM Models Integrated" },
  { value: "17M", label: "Pageviews/Month (Shell)" },
];

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" style={{ padding: "6rem 0", backgroundColor: "#fff", width: "100%", display: "block" }}>
      <div style={{ width: "100%", padding: "0 5rem" }}>
        <div style={{ textAlign: "center", marginBottom: "3rem" }}>
          <h2 style={{ fontFamily: "var(--font-montserrat)", color: "#2c3e50", fontSize: "3rem", margin: 0 }}>
            About Me
          </h2>
          <hr className="star-divider star-primary" />
        </div>

        <div
          ref={ref}
          style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "2rem", textAlign: "center" }}
        >
          {cards.map((card, i) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.15 }}
            >
              <i className={`fa ${card.icon} fa-4x`} style={{ color: "#18BC9C", marginBottom: "1rem", display: "block" }} />
              <p style={{ fontFamily: "var(--font-montserrat)", fontWeight: 700, fontSize: "1rem", marginBottom: "0.5rem" }}>
                {card.title}
              </p>
              <p style={{ color: "#666", fontSize: "0.9rem", lineHeight: "1.6" }}>{card.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Stats row */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "1.5rem", textAlign: "center", marginTop: "4rem" }}>
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.4, delay: 0.3 + i * 0.1 }}
            >
              <h3 style={{ color: "#18BC9C", fontSize: "2.5rem", fontWeight: 700, margin: 0 }}>
                {s.value}
              </h3>
              <p style={{ color: "#999", fontSize: "0.85rem", marginTop: "0.25rem" }}>{s.label}</p>
            </motion.div>
          ))}
        </div>

        {/* Contact icons */}
        <div style={{ textAlign: "center", marginTop: "4rem" }}>
          <h4 style={{ fontFamily: "var(--font-montserrat)", color: "#2c3e50", marginBottom: "1rem", textTransform: "uppercase" }}>
            Contact Me
          </h4>
          <div style={{ display: "flex", justifyContent: "center", gap: "1.5rem" }}>
            <a href="https://www.linkedin.com/in/sailikhithk" target="_blank" rel="noopener noreferrer">
              <i className="fa fa-linkedin" style={{ color: "#0e76a7", fontSize: "48px" }} />
            </a>
            <a href="https://github.com/sailikhithk" target="_blank" rel="noopener noreferrer">
              <i className="fa fa-github" style={{ color: "#333", fontSize: "48px" }} />
            </a>
            <a href="https://twitter.com/codewithsai" target="_blank" rel="noopener noreferrer">
              <i className="fa fa-twitter" style={{ color: "#00ACEE", fontSize: "48px" }} />
            </a>
            <a href="mailto:sailikhithcse@gmail.com">
              <i className="fa fa-envelope" style={{ color: "red", fontSize: "48px" }} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
