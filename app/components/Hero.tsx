"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const socialLinks = [
  {
    href: "https://www.linkedin.com/in/sailikhithk",
    icon: "fa-linkedin",
    label: "LinkedIn",
  },
  {
    href: "https://github.com/sailikhithk",
    icon: "fa-github",
    label: "GitHub",
  },
  {
    href: "mailto:sailikhithcse@gmail.com",
    icon: "fa-envelope",
    label: "Email",
  },
  {
    href: "https://twitter.com/codewithsai",
    icon: "fa-twitter",
    label: "Twitter",
  },
];

export default function Hero() {
  return (
    <header
      id="page-top"
      className="text-center text-white"
      style={{
        backgroundColor: "var(--bg)",
        paddingTop: "120px",
        paddingBottom: "60px",
        width: "100%",
        display: "block",
      }}
    >
      <div className="section-inner" style={{ textAlign: "center" }}>
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <Image
            src="/img/circle-cropped.png"
            alt="Sai Likhith Kanuparthi"
            width={235}
            height={240}
            className="mx-auto mb-5 rounded-full"
            style={{ height: "240px", width: "235px", objectFit: "cover" }}
            priority
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <span
            className="block uppercase font-bold"
            style={{
              fontFamily: "var(--font-montserrat), sans-serif",
              fontSize: "clamp(1.5rem, 4vw, 3rem)",
              letterSpacing: "0.05em",
            }}
          >
            Sai Likhith Kanuparthi
          </span>

          <hr className="star-divider star-light mx-auto mt-4" />

          <span
            className="block font-light"
            style={{ fontSize: "clamp(1rem, 2.5vw, 1.75rem)" }}
          >
            Sr. Software Engineer — ML Infrastructure &amp; AI Engineering ·
            Airbnb
          </span>

          <p
            className="mt-4 mx-auto max-w-2xl"
            style={{
              fontSize: "1rem",
              letterSpacing: "0.08em",
              lineHeight: "1.7",
              color: "#ddd",
            }}
          >
            Building GenAI platforms and data labeling infrastructure at Airbnb
            scale. 8+ years shipping production systems across LLM
            orchestration, backend APIs, cloud pipelines, and full-stack
            applications.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="flex items-center justify-center gap-6 mt-8"
        >
          {socialLinks.map(({ href, icon, label }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith("mailto") ? undefined : "_blank"}
              rel="noopener noreferrer"
              aria-label={label}
            >
              <i
                className={`fa ${icon}`}
                style={{ color: "var(--text)", fontSize: "32px" }}
              />
            </a>
          ))}
        </motion.div>
      </div>
    </header>
  );
}
