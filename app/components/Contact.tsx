"use client";
import { Suspense } from "react";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import SectionHeading from "@/app/components/ui/SectionHeading";

const Globe = dynamic(() => import("@/app/components/ui/Globe"), {
  ssr: false,
});

const socialLinks = [
  {
    href: "https://www.linkedin.com/in/sailikhithk",
    icon: "fa-linkedin",
    label: "LinkedIn",
    color: "#0e76a7",
  },
  {
    href: "https://github.com/sailikhithk",
    icon: "fa-github",
    label: "GitHub",
    color: "var(--text)",
  },
  {
    href: "https://twitter.com/codewithsai",
    icon: "fa-twitter",
    label: "Twitter",
    color: "#00ACEE",
  },
  {
    href: "mailto:sailikhithcse@gmail.com",
    icon: "fa-envelope",
    label: "Email",
    color: "#e05c5c",
  },
];

const labelStyle: React.CSSProperties = {
  display: "block",
  color: "var(--muted)",
  fontSize: "0.82rem",
  fontWeight: 600,
  textTransform: "uppercase",
  letterSpacing: "0.06em",
  marginBottom: "0.4rem",
};

export default function Contact() {
  return (
    <section id="contact" className="section-wrapper" style={{ paddingBottom: "2rem" }}>
      <div className="section-inner">
        <SectionHeading title="Get In Touch" subtitle="Contact" />

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "3rem",
            alignItems: "center",
          }}
        >
          {/* LEFT — My Details */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5 }}
          >
            <h2
              style={{
                fontFamily: "var(--font-montserrat), sans-serif",
                fontSize: "clamp(2rem, 4vw, 3rem)",
                color: "var(--text)",
                textTransform: "uppercase",
                lineHeight: 1.1,
                margin: "0 0 1.5rem",
              }}
            >
              HIRE ME
            </h2>

            <p
              style={{
                color: "var(--muted)",
                fontSize: "1rem",
                lineHeight: "1.75",
                margin: "0 0 2.5rem",
              }}
            >
              I&apos;m currently open to new opportunities. Whether you have a
              question, a project idea, or just want to say hi — my inbox is
              always open.
            </p>

            <div style={{ marginBottom: "1.75rem" }}>
              <p style={{ ...labelStyle }}>Email directly</p>
              <a
                href="mailto:sailikhithcse@gmail.com"
                style={{
                  color: "var(--teal)",
                  fontSize: "1rem",
                  textDecoration: "none",
                  fontWeight: 600,
                }}
              >
                sailikhithcse@gmail.com
              </a>
            </div>

            <div style={{ marginBottom: "2rem" }}>
              <p style={{ ...labelStyle }}>Location</p>
              <p style={{ color: "var(--muted)", margin: 0, fontSize: "1rem" }}>
                San Francisco, CA
              </p>
            </div>

            <div style={{ display: "flex", gap: "1.25rem" }}>
              {socialLinks.map(({ href, icon, label, color }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith("mailto") ? undefined : "_blank"}
                  rel="noopener noreferrer"
                  aria-label={label}
                  style={{
                    color,
                    fontSize: "1.75rem",
                    transition: "opacity 0.2s",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.65")}
                  onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
                >
                  <i className={`fa ${icon}`} />
                </a>
              ))}
            </div>
          </motion.div>

          {/* RIGHT — Spline Globe */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            style={{
              width: "100%",
              aspectRatio: "1",
              position: "relative",
              overflow: "hidden",
              borderRadius: "50%",
              transform: "translateZ(0)",
              WebkitMaskImage: "-webkit-radial-gradient(white, black)",
            }}
          >
            <Suspense
              fallback={
                <div
                  style={{
                    width: "100%",
                    height: "100%",
                    borderRadius: "50%",
                    background: "rgba(24,188,156,0.04)",
                    border: "1px solid rgba(24,188,156,0.15)",
                  }}
                />
              }
            >
              <Globe />
            </Suspense>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
