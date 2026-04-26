"use client";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
import { Tilt } from "react-tilt";
import SectionHeading from "@/app/components/ui/SectionHeading";
import { projects, type Project } from "@/app/data";

function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.15, ease: "easeOut" }}
    >
      <Tilt options={{ max: 15, scale: 1.02, speed: 450 }}>
        <div style={{ background: "#0d1526", borderRadius: "1rem", padding: "1.25rem", width: "360px", border: "1px solid var(--card-border)" }}>
          {/* Image */}
          <div style={{ position: "relative", width: "100%", height: "230px", borderRadius: "0.75rem", overflow: "hidden" }}>
            <Image src={project.image} alt={project.name} fill style={{ objectFit: "cover" }} sizes="360px" />

            {/* Hover overlay */}
            <div
              style={{ position: "absolute", inset: 0, background: "rgba(0,0,0,0)", display: "flex", justifyContent: "flex-end", alignItems: "flex-start", padding: "0.75rem", gap: "0.5rem", transition: "background 0.3s" }}
              onMouseEnter={e => (e.currentTarget.style.background = "rgba(0,0,0,0.45)")}
              onMouseLeave={e => (e.currentTarget.style.background = "rgba(0,0,0,0)")}
            >
              {project.github && (
                <a href={project.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub"
                  style={{ width: "40px", height: "40px", borderRadius: "50%", background: "#000", border: "1px solid var(--teal)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <i className="fa fa-github" style={{ color: "#fff", fontSize: "16px" }} />
                </a>
              )}
              {project.deploy && (
                <a href={project.deploy} target="_blank" rel="noopener noreferrer" aria-label="Live demo"
                  style={{ width: "40px", height: "40px", borderRadius: "50%", background: "#000", border: "1px solid var(--teal)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <i className="fa fa-external-link" style={{ color: "var(--teal)", fontSize: "16px" }} />
                </a>
              )}
            </div>
          </div>

          {/* Body */}
          <div style={{ marginTop: "1.25rem" }}>
            <h3 style={{ fontFamily: "var(--font-montserrat), sans-serif", color: "var(--text)", fontSize: "1.05rem", margin: "0 0 0.5rem", textTransform: "uppercase" }}>
              {project.name}
            </h3>
            <p style={{ color: "var(--muted)", fontSize: "0.875rem", lineHeight: "1.6", margin: 0 }}>
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
    <section id="portfolio" className="section-wrapper">
      <div className="section-inner">
        <SectionHeading
          title="Projects"
          subtitle="My work"
          mb="1rem"
        />
        <p style={{ color: "var(--muted)", fontSize: "1rem", lineHeight: "1.7", textAlign: "center", marginBottom: "3rem" }}>
          Real-world projects showcasing skills across GenAI, ML infrastructure, full-stack development, and cloud platforms.
        </p>

        <div ref={ref} className="section-body" style={{ display: "flex", flexWrap: "wrap", gap: "1.75rem", justifyContent: "center" }}>
          {inView && projects.map((project, i) => (
            <ProjectCard key={project.name} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
