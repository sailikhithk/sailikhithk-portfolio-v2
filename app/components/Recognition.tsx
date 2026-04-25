"use client";
import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const images = [
  { src: "/img/recognition/appreciation_ameet_shinde.png", alt: "Appreciation from Ameet Shinde · Airbnb" },
  { src: "/img/recognition/appreciation_jeremy_chua.png", alt: "Appreciation from Jeremy Chua · Airbnb" },
  { src: "/img/recognition/appreciation_lori_barber.png", alt: "Appreciation from Lori Barber · Airbnb" },
  { src: "/img/recognition/appreciation_alejandro_virrueta.png", alt: "Appreciation from Alejandro Virrueta · Airbnb" },
  { src: "/img/recognition/award.jpg", alt: "Award at STEM-Away" },
  { src: "/img/recognition/hanuman.png", alt: "Certificate" },
];

export default function Recognition() {
  const [index, setIndex] = useState(0);
  const prev = () => setIndex((i) => Math.max(i - 1, 0));
  const next = () => setIndex((i) => Math.min(i + 1, images.length - 1));

  return (
    <section
      id="recognition"
      style={{
        width: "100%",
        display: "block",
        padding: "6rem 0",
        backgroundColor: "#555454",
        color: "#ffffff",
      }}
    >
      {/* Full-width inner — no maxWidth so carousel stretches edge-to-edge with padding */}
      <div style={{ width: "100%", padding: "0 5rem" }}>

        {/* Heading */}
        <div style={{ textAlign: "center", marginBottom: "2.5rem" }}>
          <h2
            style={{
              fontFamily: "var(--font-montserrat), sans-serif",
              fontSize: "3rem",
              color: "#ffffff",
              margin: 0,
              textTransform: "uppercase",
            }}
          >
            Recognition
          </h2>
          <hr className="star-divider star-light" />
        </div>

        {/* Carousel row */}
        <div style={{ position: "relative", display: "flex", alignItems: "center" }}>

          {/* Left arrow */}
          <button
            onClick={prev}
            disabled={index === 0}
            aria-label="Previous"
            style={{
              position: "absolute",
              left: "-3.5rem",
              zIndex: 10,
              width: "44px",
              height: "64px",
              borderRadius: "6px",
              background: "rgba(24,188,156,0.15)",
              border: "2px solid #18BC9C",
              color: "#18BC9C",
              fontSize: "1.2rem",
              cursor: index === 0 ? "not-allowed" : "pointer",
              opacity: index === 0 ? 0.3 : 1,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            ◀
          </button>

          {/* Image frame */}
          <div
            style={{
              width: "100%",
              overflow: "hidden",
              borderRadius: "8px",
              border: "2px solid #18BC9C",
            }}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -40 }}
                transition={{ duration: 0.3 }}
              >
                <Image
                  src={images[index].src}
                  alt={images[index].alt}
                  width={1600}
                  height={504}
                  style={{
                    width: "100%",
                    height: "504px",
                    objectFit: "fill",
                    display: "block",
                    borderRadius: "6px",
                  }}
                  priority={index === 0}
                />
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Right arrow */}
          <button
            onClick={next}
            disabled={index === images.length - 1}
            aria-label="Next"
            style={{
              position: "absolute",
              right: "-3.5rem",
              zIndex: 10,
              width: "44px",
              height: "64px",
              borderRadius: "6px",
              background: "rgba(24,188,156,0.15)",
              border: "2px solid #18BC9C",
              color: "#18BC9C",
              fontSize: "1.2rem",
              cursor: index === images.length - 1 ? "not-allowed" : "pointer",
              opacity: index === images.length - 1 ? 0.3 : 1,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            ▶
          </button>
        </div>

        {/* Dot indicators */}
        <div style={{ display: "flex", justifyContent: "center", gap: "0.5rem", marginTop: "1.5rem" }}>
          {images.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              aria-label={`Go to slide ${i + 1}`}
              style={{
                width: "10px",
                height: "10px",
                borderRadius: "50%",
                border: "none",
                padding: 0,
                cursor: "pointer",
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
