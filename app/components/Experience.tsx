"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import SectionHeading from "@/app/components/ui/SectionHeading";
import { jobs } from "@/app/data";

export default function Experience() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="experience" className="section-wrapper">
      <div className="section-inner">
        <SectionHeading title="Work Experience" />

        <div ref={ref} className="section-body" style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
          {jobs.map((job, i) => (
            <motion.div
              key={job.company}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.45, delay: i * 0.1 }}
              className="card-glass"
              style={{ display: "flex", gap: "1.5rem", alignItems: "flex-start" }}
            >
              {/* Logo */}
              <div style={{ width: "90px", flexShrink: 0, display: "flex", alignItems: "center", justifyContent: "center", paddingTop: "4px" }}>
                {job.logo ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img src={job.logo} alt={job.company} style={{ maxWidth: "80px", maxHeight: "44px", objectFit: "contain" }} />
                ) : (
                  <i className="fa fa-database fa-3x" style={{ color: "#f80000" }} />
                )}
              </div>

              {/* Text */}
              <div style={{ flex: 1 }}>
                <h3 style={{ fontFamily: "var(--font-montserrat), sans-serif", color: "var(--text)", fontSize: "1rem", margin: "0 0 4px", textTransform: "uppercase" }}>
                  {job.company}{" "}
                  <span style={{ color: "var(--teal)", fontWeight: 400, fontSize: "0.8rem", textTransform: "none" }}>
                    {job.period}
                  </span>
                </h3>
                <p style={{ color: "var(--teal)", fontWeight: 600, fontSize: "0.82rem", margin: "0 0 8px" }}>{job.role}</p>
                <p style={{ color: "var(--muted)", fontSize: "0.88rem", lineHeight: "1.65", margin: "0 0 6px" }}>{job.desc}</p>
                <p style={{ color: "#888", fontSize: "0.82rem", fontStyle: "italic", margin: 0 }}>{job.stack}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
