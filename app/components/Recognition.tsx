"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionHeading from "@/app/components/ui/SectionHeading";
import { recognitions } from "@/app/data";

export default function Recognition() {
  const [index, setIndex] = useState(0);
  const prev = () => setIndex((i) => Math.max(i - 1, 0));
  const next = () => setIndex((i) => Math.min(i + 1, recognitions.length - 1));
  const item = recognitions[index];

  const btnStyle = (disabled: boolean): React.CSSProperties => ({
    flexShrink: 0,
    width: "44px",
    height: "64px",
    borderRadius: "6px",
    background: "rgba(24,188,156,0.15)",
    border: "2px solid var(--teal)",
    color: "var(--teal)",
    fontSize: "1.2rem",
    cursor: disabled ? "not-allowed" : "pointer",
    opacity: disabled ? 0.3 : 1,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  });

  return (
    <section id="recognition" className="section-wrapper">
      <div className="section-inner">
        <SectionHeading title="Recognition" divider="light" />

        <div style={{ position: "relative" }}>
          {/* Left arrow — sits outside section-inner in the gutter */}
          <button
            onClick={prev}
            disabled={index === 0}
            aria-label="Previous"
            style={{
              ...btnStyle(index === 0),
              position: "absolute",
              left: "-68px",
              top: "50%",
              transform: "translateY(-50%)",
            }}
          >
            ◀
          </button>

          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -40 }}
              transition={{ duration: 0.3 }}
              style={{
                background: "var(--card-bg)",
                border: "1px solid rgba(24,188,156,0.3)",
                borderRadius: "12px",
                padding: "2.5rem 2.75rem",
                position: "relative",
                overflow: "hidden",
              }}
            >
              {/* Decorative quote mark */}
              <span
                style={{
                  position: "absolute",
                  top: "1rem",
                  left: "1.5rem",
                  fontSize: "6rem",
                  lineHeight: 1,
                  color: "var(--teal)",
                  opacity: 0.15,
                  fontFamily: "Georgia, serif",
                  pointerEvents: "none",
                  userSelect: "none",
                }}
              >
                "
              </span>

              <p
                style={{
                  color: "#ddd",
                  fontSize: "1rem",
                  lineHeight: "1.85",
                  margin: "0 0 2rem",
                  whiteSpace: "pre-line",
                  position: "relative",
                }}
              >
                "{item.quote}"
              </p>

              <div
                style={{ display: "flex", alignItems: "center", gap: "1rem" }}
              >
                <div
                  style={{
                    width: "48px",
                    height: "48px",
                    borderRadius: "50%",
                    background: "rgba(24,188,156,0.13)",
                    border: "2px solid var(--teal)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}
                >
                  <i
                    className="fa fa-user"
                    style={{ color: "var(--teal)", fontSize: "1.1rem" }}
                  />
                </div>
                <div>
                  <p
                    style={{
                      color: "var(--text)",
                      fontWeight: 700,
                      fontSize: "0.95rem",
                      margin: 0,
                      fontFamily: "var(--font-montserrat), sans-serif",
                    }}
                  >
                    {item.name}
                  </p>
                  <p
                    style={{
                      color: "var(--teal)",
                      fontSize: "0.8rem",
                      margin: "0.15rem 0 0",
                      letterSpacing: "0.03em",
                    }}
                  >
                    {item.title}
                  </p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Right arrow — sits in the gutter */}
          <button
            onClick={next}
            disabled={index === recognitions.length - 1}
            aria-label="Next"
            style={{
              ...btnStyle(index === recognitions.length - 1),
              position: "absolute",
              right: "-68px",
              top: "50%",
              transform: "translateY(-50%)",
            }}
          >
            ▶
          </button>
        </div>

        {/* Dots */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "0.5rem",
            marginTop: "1.5rem",
          }}
        >
          {recognitions.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              aria-label={`Slide ${i + 1}`}
              style={{
                width: "10px",
                height: "10px",
                borderRadius: "50%",
                border: "none",
                padding: 0,
                cursor: "pointer",
                background:
                  i === index ? "var(--teal)" : "rgba(255,255,255,0.3)",
                transition: "background 0.2s",
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
