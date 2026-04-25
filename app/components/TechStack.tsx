"use client";
import React, { Suspense, useEffect, useRef, useState } from "react";
import { Application, SplineEvent } from "@splinetool/runtime";
import gsap from "gsap";
import { AnimatePresence, motion } from "framer-motion";

const Spline = React.lazy(() => import("@splinetool/react-spline"));

gsap.registerPlugin();

// ─── sleep helper ──────────────────────────────────────────────────────────────
const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));

// ─── Skill data ────────────────────────────────────────────────────────────────
type Skill = {
  name: string;
  label: string;
  shortDescription: string;
  color: string;
  icon: string;
};

const SKILLS: Record<string, Skill> = {
  js: { name: "js", label: "JavaScript", color: "#f0db4f", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg", shortDescription: "Core scripting — Flask APIs, Streamlit callbacks, frontend logic at Airbnb and Shell." },
  ts: { name: "ts", label: "TypeScript", color: "#007acc", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg", shortDescription: "Typed React frontends and Next.js apps — DMS frontend at Eli Lilly, this portfolio." },
  react: { name: "react", label: "React", color: "#61dafb", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", shortDescription: "React 18 SPAs — DMS frontend at Eli Lilly, hooks, React Query, component libraries." },
  nextjs: { name: "nextjs", label: "Next.js", color: "#ffffff", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg", shortDescription: "App Router, Server Components — this portfolio is Next.js 16." },
  tailwind: { name: "tailwind", label: "Tailwind CSS", color: "#38bdf8", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg", shortDescription: "Utility-first CSS used across React frontends for rapid UI development." },
  nodejs: { name: "nodejs", label: "Node.js", color: "#6cc24a", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg", shortDescription: "Backend APIs and tooling — paired with Express for REST service layers." },
  express: { name: "express", label: "Express", color: "#dddddd", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg", shortDescription: "REST microservices and middleware layers — API backends at Shell and Oracle." },
  postgres: { name: "postgres", label: "PostgreSQL", color: "#336791", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg", shortDescription: "Postgres 16 at Eli Lilly DMS — schema design, Flyway migrations, audit triggers." },
  mongodb: { name: "mongodb", label: "MongoDB", color: "#4ea94b", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg", shortDescription: "NoSQL document storage for flexible schema use cases in rapid prototyping." },
  git: { name: "git", label: "Git", color: "#f1502f", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg", shortDescription: "Version control across every project — branching strategies, cherry-picks, PR workflows." },
  github: { name: "github", label: "GitHub", color: "#eeeeee", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg", shortDescription: "GitHub Actions CI/CD pipelines at Eli Lilly DMS and Southwest Airlines." },
  prettier: { name: "prettier", label: "Kubernetes / OCP", color: "#326ce5", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg", shortDescription: "OCP OpenShift at Eli Lilly DMS — production deployments across dev/QA/prod." },
  npm: { name: "npm", label: "NPM", color: "#cc3534", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original-wordmark.svg", shortDescription: "Package management for Node/React projects — dependency auditing, scripts." },
  firebase: { name: "firebase", label: "Firebase", color: "#ffca28", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg", shortDescription: "Realtime database and auth for rapid prototyping and side projects." },
  wordpress: { name: "wordpress", label: "WordPress", color: "#21759b", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-plain.svg", shortDescription: "CMS-based client sites and content platforms during freelance engagements." },
  linux: { name: "linux", label: "Linux", color: "#f5c518", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg", shortDescription: "Ubuntu/CentOS servers — shell scripting, service management, cron jobs." },
  docker: { name: "docker", label: "Docker", color: "#2496ed", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg", shortDescription: "Containerized every major service at Southwest, Eli Lilly, Shell, and Airbnb." },
  nginx: { name: "nginx", label: "Nginx", color: "#009900", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nginx/nginx-original.svg", shortDescription: "Reverse proxy and load balancing — API gateway configuration at Shell PLC." },
  aws: { name: "aws", label: "AWS", color: "#ff9900", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg", shortDescription: "SageMaker, S3, SNS, SES, EC2 — certified Solutions Architect & Developer." },
  gcp: { name: "gcp", label: "Google Cloud", color: "#4285f4", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg", shortDescription: "Certified GCP Professional Data Engineer — BigQuery, Dataflow, Cloud Storage." },
  vim: { name: "vim", label: "Python", color: "#3572A5", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg", shortDescription: "Primary language at Airbnb — LLM pipelines, PySpark, Flask APIs, Presidio PII." },
  vercel: { name: "vercel", label: "Vercel", color: "#eeeeee", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vercel/vercel-original.svg", shortDescription: "Zero-config deployments for Next.js apps — this portfolio deploys here." },
  vue: { name: "vue", label: "Java / Spring Boot", color: "#6db33f", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg", shortDescription: "Spring Boot 3.2 at Eli Lilly DMS — REST APIs, JPA, Flyway migrations." },
  html: { name: "html", label: "HTML5", color: "#e34c26", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg", shortDescription: "Semantic HTML — accessible, SEO-optimised markup across all frontend projects." },
  css: { name: "css", label: "CSS3", color: "#264de4", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg", shortDescription: "Vanilla CSS and animations — this portfolio uses inline styles for full control." },
};

// ─── Sound helpers ──────────────────────────────────────────────────────────────
function useKeycapSounds() {
  const pressRef = useRef<HTMLAudioElement | null>(null);
  const releaseRef = useRef<HTMLAudioElement | null>(null);
  useEffect(() => {
    pressRef.current = new Audio("/assets/keycap-sounds/press.mp3");
    releaseRef.current = new Audio("/assets/keycap-sounds/release.mp3");
    if (pressRef.current) pressRef.current.volume = 0.4;
    if (releaseRef.current) releaseRef.current.volume = 0.3;
  }, []);
  const playPress = () => { try { if (pressRef.current) { pressRef.current.currentTime = 0; pressRef.current.play(); } } catch {} };
  const playRelease = () => { try { if (releaseRef.current) { releaseRef.current.currentTime = 0; releaseRef.current.play(); } } catch {} };
  return { playPress, playRelease };
}

// ─── Main ───────────────────────────────────────────────────────────────────────
export default function TechStack() {
  const [splineApp, setSplineApp] = useState<Application | undefined>();
  const [selectedSkill, setSelectedSkill] = useState<Skill | null>(null);
  const selectedSkillRef = useRef<Skill | null>(null);
  const { playPress, playRelease } = useKeycapSounds();

  // ── Reveal keycaps after Spline loads (exact pattern from reference) ──────────
  const revealKeycaps = async (app: Application) => {
    const kbd = app.findObjectByName("keyboard");
    if (!kbd) return;

    // Quick hide → show to trigger internal Spline reset
    kbd.visible = false;
    await sleep(400);
    kbd.visible = true;

    // Set skills-section transform
    const w = window.innerWidth;
    const scaleOffset = Math.min(Math.max(w / 1280, 0.5), 1.15);
    const s = 0.25 * scaleOffset;
    gsap.set(kbd.scale, { x: s, y: s, z: s });
    gsap.set(kbd.position, { x: 0, y: -40, z: 0 });
    gsap.set(kbd.rotation, { x: 0, y: Math.PI / 12, z: 0 });

    // Reveal keycap-desktop objects (staggered, like reference)
    await sleep(900);
    const allObjs = app.getAllObjects();
    const desktopCaps = allObjs.filter((o) => o.name === "keycap-desktop");
    desktopCaps.forEach(async (keycap, idx) => {
      await sleep(idx * 70);
      keycap.visible = true;
    });

    // Animate keycap objects bouncing in
    const keycaps = allObjs.filter((o) => o.name === "keycap");
    keycaps.forEach(async (keycap, idx) => {
      keycap.visible = false;
      await sleep(idx * 70);
      keycap.visible = true;
      gsap.fromTo(
        keycap.position,
        { y: 200 },
        { y: 50, duration: 0.5, delay: 0.1, ease: "bounce.out" }
      );
    });
  };

  // ── Wire hover / key events once Spline is ready ────────────────────────────
  useEffect(() => {
    if (!splineApp) return;

    const isInputFocused = () => {
      const el = document.activeElement;
      return el && (el.tagName === "INPUT" || el.tagName === "TEXTAREA" || (el as HTMLElement).isContentEditable);
    };

    const onHover = (e: SplineEvent) => {
      if (selectedSkillRef.current?.name === e.target.name) return;
      if (e.target.name === "body" || e.target.name === "platform") {
        if (selectedSkillRef.current) playRelease();
        setSelectedSkill(null);
        selectedSkillRef.current = null;
        splineApp.setVariable?.("heading", "");
        splineApp.setVariable?.("desc", "");
      } else {
        const skill = SKILLS[e.target.name];
        if (skill) {
          if (selectedSkillRef.current) playRelease();
          playPress();
          setSelectedSkill(skill);
          selectedSkillRef.current = skill;
        }
      }
    };

    const onKeyDown = (e: SplineEvent) => {
      if (isInputFocused()) return;
      const skill = SKILLS[e.target.name];
      if (skill) {
        playPress();
        setSelectedSkill(skill);
        selectedSkillRef.current = skill;
        splineApp.setVariable?.("heading", skill.label);
        splineApp.setVariable?.("desc", skill.shortDescription);
      }
    };

    const onKeyUp = () => {
      if (isInputFocused()) return;
      playRelease();
      splineApp.setVariable?.("heading", "");
      splineApp.setVariable?.("desc", "");
    };

    splineApp.addEventListener("mouseHover", onHover);
    splineApp.addEventListener("keyDown", onKeyDown);
    splineApp.addEventListener("keyUp", onKeyUp);
    return () => {
      splineApp.removeEventListener("mouseHover", onHover);
      splineApp.removeEventListener("keyDown", onKeyDown);
      splineApp.removeEventListener("keyUp", onKeyUp);
    };
  }, [splineApp]);

  // ── Update Spline text vars ───────────────────────────────────────────────────
  useEffect(() => {
    if (!splineApp || !selectedSkill) return;
    splineApp.setVariable?.("heading", selectedSkill.label);
    splineApp.setVariable?.("desc", selectedSkill.shortDescription);
  }, [selectedSkill, splineApp]);

  const handleLoad = (app: Application) => {
    setSplineApp(app);
    revealKeycaps(app);
  };

  return (
    <section
      id="techstack"
      style={{ width: "100%", position: "relative", backgroundColor: "#060b18", minHeight: "100vh", overflow: "hidden" }}
    >
      {/* Heading */}
      <div style={{ textAlign: "center", paddingTop: "5rem", position: "relative", zIndex: 10 }}>
        <p style={{ color: "#18BC9C", textTransform: "uppercase", letterSpacing: "0.15em", fontSize: "0.8rem", fontWeight: 700, marginBottom: "0.5rem" }}>
          hover or press a key
        </p>
        <h2 style={{ fontFamily: "var(--font-montserrat), sans-serif", color: "#ffffff", fontSize: "3rem", margin: 0, textTransform: "uppercase" }}>
          Tech Stack
        </h2>
        <div style={{ width: "60px", height: "3px", background: "#18BC9C", margin: "1.25rem auto 0" }} />
      </div>

      {/* Skill info panel */}
      <div style={{ display: "flex", justifyContent: "center", marginTop: "2rem", position: "relative", zIndex: 10, minHeight: "80px" }}>
        <AnimatePresence mode="wait">
          {selectedSkill && (
            <motion.div
              key={selectedSkill.name}
              initial={{ opacity: 0, y: -10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 8, scale: 0.95 }}
              transition={{ duration: 0.18 }}
              style={{
                background: "rgba(255,255,255,0.05)",
                backdropFilter: "blur(12px)",
                border: `1.5px solid ${selectedSkill.color}55`,
                borderRadius: "14px",
                padding: "1rem 1.75rem",
                display: "flex",
                alignItems: "center",
                gap: "1rem",
                maxWidth: "520px",
                width: "90%",
              }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={selectedSkill.icon} alt={selectedSkill.label} style={{ width: "44px", height: "44px", objectFit: "contain", flexShrink: 0 }} />
              <div>
                <h3 style={{ color: selectedSkill.color, fontFamily: "var(--font-montserrat), sans-serif", fontSize: "1rem", margin: "0 0 0.3rem", textTransform: "uppercase" }}>
                  {selectedSkill.label}
                </h3>
                <p style={{ color: "#bbb", fontSize: "0.875rem", lineHeight: "1.55", margin: 0 }}>
                  {selectedSkill.shortDescription}
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Spline canvas */}
      <div style={{ width: "100%", height: "70vh" }}>
        <Suspense fallback={
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", height: "100%", color: "#555" }}>
            Loading keyboard…
          </div>
        }>
          <Spline
            style={{ width: "100%", height: "100%" }}
            scene="/assets/skills-keyboard.spline"
            onLoad={handleLoad}
          />
        </Suspense>
      </div>
    </section>
  );
}
