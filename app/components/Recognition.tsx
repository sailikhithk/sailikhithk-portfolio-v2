"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const recognitions = [
  {
    name: "Ameet Shinde",
    title: "Senior Manager, BPI · Airbnb",
    avatar: "/img/recognition/appreciation_ameet_shinde.png",
    quote:
      "Sai has been an outstanding partner in the deployment of the BPIVA tool, and I want to take a moment to recognize his incredible contributions. Thanks to Sai's efforts, the BPIVA tool has had a significant impact on reducing non-value-added work, enabling the BPI team to shift their focus to high-impact, actionable tasks exactly where their energy should be.\n\nWhat truly sets Sai apart is his deep understanding of technology combined with his ability to quickly grasp tool requirements and translate them into real solutions. He doesn't just deliver, he continuously looks for ways to enhance and upgrade the tool's capabilities, ensuring it evolves alongside our team's needs.\n\nNone of this would have been possible without Sai's dedication and expertise. He is a truly great partner who consistently goes above and beyond to deliver excellence. Thank you, Sai, for everything you do! 🙌",
  },
  {
    name: "Jeremy Chua",
    title: "Staff Data Scientist · Airbnb",
    avatar: "/img/recognition/appreciation_jeremy_chua.png",
    quote:
      "Sai is an incredibly thoughtful engineer who brings both technical depth and a genuine desire to help the team succeed. His work on the ML infrastructure side has been invaluable — he moves fast without sacrificing quality and is always thinking about how to make things better for the people using the tools he builds.",
  },
  {
    name: "Lori Barber",
    title: "Operations Lead · Airbnb",
    avatar: "/img/recognition/appreciation_lori_barber.png",
    quote:
      "I just wanted to call out Sai for his exceptional support on the BPI Virtual Analyst project. He has been incredibly responsive and proactive in addressing our requests, and his contributions have meaningfully improved the team's efficiency. He is a true team player and an asset to any cross-functional effort.",
  },
  {
    name: "Alejandro Virrueta",
    title: "Product Manager · Airbnb",
    avatar: "/img/recognition/appreciation_alejandro_virrueta.png",
    quote:
      "Sai has consistently demonstrated strong ownership and a solutions-first mindset throughout our collaboration. He takes feedback well, iterates quickly, and delivers results that genuinely move the needle. It's been a pleasure working with him — the kind of engineer you want on every project.",
  },
];

export default function Recognition() {
  const [index, setIndex] = useState(0);
  const prev = () => setIndex((i) => Math.max(i - 1, 0));
  const next = () => setIndex((i) => Math.min(i + 1, recognitions.length - 1));
  const item = recognitions[index];

  return (
    <section
      id="recognition"
      style={{ width: "100%", display: "block", padding: "6rem 0", backgroundColor: "#060b18", color: "#ffffff" }}
    >
      <div style={{ width: "100%", padding: "0 5rem" }}>

        {/* Heading */}
        <div style={{ textAlign: "center", marginBottom: "3rem" }}>
          <h2 style={{ fontFamily: "var(--font-montserrat), sans-serif", fontSize: "3rem", color: "#ffffff", margin: 0, textTransform: "uppercase" }}>
            Recognition
          </h2>
          <hr className="star-divider star-light" />
        </div>

        {/* Quote card */}
        <div style={{ position: "relative", display: "flex", alignItems: "center", gap: "2rem" }}>

          {/* Left arrow */}
          <button
            onClick={prev}
            disabled={index === 0}
            aria-label="Previous"
            style={{
              flexShrink: 0,
              width: "44px", height: "64px", borderRadius: "6px",
              background: "rgba(24,188,156,0.15)", border: "2px solid #18BC9C",
              color: "#18BC9C", fontSize: "1.2rem",
              cursor: index === 0 ? "not-allowed" : "pointer",
              opacity: index === 0 ? 0.3 : 1,
              display: "flex", alignItems: "center", justifyContent: "center",
            }}
          >◀</button>

          {/* Card */}
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -40 }}
              transition={{ duration: 0.3 }}
              style={{
                flex: 1,
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(24,188,156,0.3)",
                borderRadius: "12px",
                padding: "2.5rem 2.75rem",
                position: "relative",
                overflow: "hidden",
              }}
            >
              {/* Big decorative quote mark */}
              <span style={{
                position: "absolute", top: "1rem", left: "1.5rem",
                fontSize: "6rem", lineHeight: 1, color: "#18BC9C", opacity: 0.15,
                fontFamily: "Georgia, serif", pointerEvents: "none", userSelect: "none",
              }}>
                "
              </span>

              {/* Quote text */}
              <p style={{
                color: "#ddd",
                fontSize: "1rem",
                lineHeight: "1.85",
                margin: "0 0 2rem",
                whiteSpace: "pre-line",
                position: "relative",
              }}>
                "{item.quote}"
              </p>

              {/* Author row */}
              <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
                <div style={{
                  width: "48px", height: "48px", borderRadius: "50%",
                  background: "#18BC9C22", border: "2px solid #18BC9C",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  flexShrink: 0,
                }}>
                  <i className="fa fa-user" style={{ color: "#18BC9C", fontSize: "1.1rem" }} />
                </div>
                <div>
                  <p style={{ color: "#ffffff", fontWeight: 700, fontSize: "0.95rem", margin: 0, fontFamily: "var(--font-montserrat), sans-serif" }}>
                    {item.name}
                  </p>
                  <p style={{ color: "#18BC9C", fontSize: "0.8rem", margin: "0.15rem 0 0", letterSpacing: "0.03em" }}>
                    {item.title}
                  </p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Right arrow */}
          <button
            onClick={next}
            disabled={index === recognitions.length - 1}
            aria-label="Next"
            style={{
              flexShrink: 0,
              width: "44px", height: "64px", borderRadius: "6px",
              background: "rgba(24,188,156,0.15)", border: "2px solid #18BC9C",
              color: "#18BC9C", fontSize: "1.2rem",
              cursor: index === recognitions.length - 1 ? "not-allowed" : "pointer",
              opacity: index === recognitions.length - 1 ? 0.3 : 1,
              display: "flex", alignItems: "center", justifyContent: "center",
            }}
          >▶</button>
        </div>

        {/* Dot indicators */}
        <div style={{ display: "flex", justifyContent: "center", gap: "0.5rem", marginTop: "1.5rem" }}>
          {recognitions.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              aria-label={`Go to slide ${i + 1}`}
              style={{
                width: "10px", height: "10px", borderRadius: "50%",
                border: "none", padding: 0, cursor: "pointer",
                background: i === index ? "#18BC9C" : "rgba(255,255,255,0.3)",
                transition: "background 0.2s",
              }}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
