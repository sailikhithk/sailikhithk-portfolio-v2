"use client";
import { useEffect, useState } from "react";

const navLinks = [
  { id: "about", label: "About" },
  { id: "techstack", label: "Tech Stack" },
  { id: "recognition", label: "Recognition" },
  { id: "experience", label: "Experience" },
  { id: "education", label: "Education" },
  { id: "portfolio", label: "Projects" },
];

const linkStyle: React.CSSProperties = {
  color: "#ffffff",
  textDecoration: "none",
  textTransform: "uppercase",
  letterSpacing: "0.1em",
  fontSize: "0.8rem",
  fontWeight: 700,
};

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        width: "100%",
        zIndex: 50,
        backgroundColor: "#000000",
        padding: scrolled ? "10px 0" : "25px 0",
        fontFamily: "var(--font-montserrat), sans-serif",
        transition: "padding 0.3s",
      }}
    >
      <div style={{ width: "100%", padding: "0 2rem", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        {/* Brand */}
        <a
          href="#page-top"
          style={{
            color: "#ffffff",
            fontWeight: 700,
            textTransform: "uppercase",
            letterSpacing: "0.05em",
            textDecoration: "none",
            fontSize: scrolled ? "1.4rem" : "1.8rem",
            transition: "font-size 0.3s",
          }}
        >
          Sai Likhith Kanuparthi
        </a>

        {/* Desktop nav */}
        <ul style={{ display: "flex", gap: "1.5rem", listStyle: "none", margin: 0, padding: 0, alignItems: "center" }}>
          {navLinks.map((link) => (
            <li key={link.id}>
              <a href={`#${link.id}`} style={linkStyle}
                onMouseEnter={e => (e.currentTarget.style.color = "#18BC9C")}
                onMouseLeave={e => (e.currentTarget.style.color = "#ffffff")}
              >
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="https://medium.com/sailikhithkanuparthi"
              target="_blank"
              rel="noopener noreferrer"
              style={linkStyle}
              onMouseEnter={e => (e.currentTarget.style.color = "#18BC9C")}
              onMouseLeave={e => (e.currentTarget.style.color = "#ffffff")}
            >
              Medium
            </a>
          </li>
        </ul>

        {/* Mobile hamburger */}
        <button
          onClick={() => setOpen(!open)}
          style={{ background: "none", border: "none", color: "#ffffff", fontSize: "1.5rem", cursor: "pointer", display: "none" }}
          aria-label="Toggle menu"
        >
          ☰
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div style={{ backgroundColor: "#000000", padding: "0 1.5rem 1rem" }}>
          {[...navLinks, { id: "medium", label: "Medium" }].map((link) => (
            <a
              key={link.id}
              href={link.id === "medium" ? "https://medium.com/sailikhithkanuparthi" : `#${link.id}`}
              target={link.id === "medium" ? "_blank" : undefined}
              rel={link.id === "medium" ? "noopener noreferrer" : undefined}
              style={{ ...linkStyle, display: "block", padding: "0.5rem 0" }}
              onClick={() => setOpen(false)}
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
