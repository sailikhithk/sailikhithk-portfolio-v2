"use client";
import React, { Suspense, useEffect, useRef, useState } from "react";
import { Application, SplineEvent } from "@splinetool/runtime";
import gsap from "gsap";
import { AnimatePresence, motion, useInView } from "framer-motion";

const Spline = React.lazy(() => import("@splinetool/react-spline"));

const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));

// ─── About content ─────────────────────────────────────────────────────────────
const cards = [
  { icon: "fa-code",   title: "ML Infrastructure & GenAI",       desc: "Building LLM-powered tools at Airbnb — 30+ model integrations, PII pipelines, data labeling platforms serving ML teams org-wide." },
  { icon: "fa-cloud",  title: "Cloud & Platform Engineering",    desc: "AWS, GCP, Docker, Kubernetes, Airflow, OpenShift — production systems at Airbnb, Shell, Southwest Airlines, and Eli Lilly." },
  { icon: "fa-trophy", title: "Certifications & Recognition",    desc: "AWS Solutions Architect, AWS Developer, GCP Data Engineer, Oracle Java & Database certified. Multiple Airbnb peer appreciations (2026)." },
];

const stats = [
  { value: "8+",  label: "Years Experience" },
  { value: "10K", label: "Rows/Run at Airbnb" },
  { value: "30+", label: "LLM Models Integrated" },
  { value: "17M", label: "Pageviews/Month (Shell)" },
];

// ─── Skill data ─────────────────────────────────────────────────────────────────
type Skill = { name: string; label: string; shortDescription: string; color: string; icon: string };
const SKILLS: Record<string, Skill> = {
  js:       { name: "js",       label: "JavaScript",      color: "#f0db4f", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",                          shortDescription: "Core scripting — Flask APIs, Streamlit callbacks, frontend logic at Airbnb and Shell." },
  ts:       { name: "ts",       label: "TypeScript",      color: "#007acc", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",                          shortDescription: "Typed React frontends and Next.js apps — DMS frontend at Eli Lilly, this portfolio." },
  react:    { name: "react",    label: "React",           color: "#61dafb", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",                                    shortDescription: "React 18 SPAs — DMS frontend at Eli Lilly, hooks, React Query, component libraries." },
  nextjs:   { name: "nextjs",   label: "Next.js",         color: "#ffffff", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",                                  shortDescription: "App Router, Server Components — this portfolio is Next.js 16." },
  tailwind: { name: "tailwind", label: "Tailwind CSS",    color: "#38bdf8", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg",                           shortDescription: "Utility-first CSS used across React frontends for rapid UI development." },
  nodejs:   { name: "nodejs",   label: "Node.js",         color: "#6cc24a", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",                                  shortDescription: "Backend APIs and tooling — paired with Express for REST service layers." },
  express:  { name: "express",  label: "Express",         color: "#dddddd", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",                                shortDescription: "REST microservices and middleware layers — API backends at Shell and Oracle." },
  postgres: { name: "postgres", label: "PostgreSQL",      color: "#336791", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",                          shortDescription: "Postgres 16 at Eli Lilly DMS — schema design, Flyway migrations, audit triggers." },
  mongodb:  { name: "mongodb",  label: "MongoDB",         color: "#4ea94b", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",                                shortDescription: "NoSQL document storage for flexible schema use cases in rapid prototyping." },
  git:      { name: "git",      label: "Git",             color: "#f1502f", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",                                        shortDescription: "Version control across every project — branching strategies, cherry-picks, PR workflows." },
  github:   { name: "github",   label: "GitHub",          color: "#eeeeee", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",                                  shortDescription: "GitHub Actions CI/CD pipelines at Eli Lilly DMS and Southwest Airlines." },
  prettier: { name: "prettier", label: "Kubernetes / OCP",color: "#326ce5", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg",                             shortDescription: "OCP OpenShift at Eli Lilly DMS — production deployments across dev/QA/prod." },
  npm:      { name: "npm",      label: "NPM",             color: "#cc3534", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original-wordmark.svg",                               shortDescription: "Package management for Node/React projects — dependency auditing, scripts." },
  firebase: { name: "firebase", label: "Firebase",        color: "#ffca28", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg",                                 shortDescription: "Realtime database and auth for rapid prototyping and side projects." },
  wordpress:{ name: "wordpress",label: "WordPress",       color: "#21759b", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-plain.svg",                               shortDescription: "CMS-based client sites and content platforms during freelance engagements." },
  linux:    { name: "linux",    label: "Linux",           color: "#f5c518", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg",                                    shortDescription: "Ubuntu/CentOS servers — shell scripting, service management, cron jobs." },
  docker:   { name: "docker",   label: "Docker",          color: "#2496ed", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",                                  shortDescription: "Containerized every major service at Southwest, Eli Lilly, Shell, and Airbnb." },
  nginx:    { name: "nginx",    label: "Nginx",           color: "#009900", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nginx/nginx-original.svg",                                    shortDescription: "Reverse proxy and load balancing — API gateway configuration at Shell PLC." },
  aws:      { name: "aws",      label: "AWS",             color: "#ff9900", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg",      shortDescription: "SageMaker, S3, SNS, SES, EC2 — certified Solutions Architect & Developer." },
  gcp:      { name: "gcp",      label: "Google Cloud",    color: "#4285f4", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg",                        shortDescription: "Certified GCP Professional Data Engineer — BigQuery, Dataflow, Cloud Storage." },
  vim:      { name: "vim",      label: "Python",          color: "#3572A5", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",                                  shortDescription: "Primary language at Airbnb — LLM pipelines, PySpark, Flask APIs, Presidio PII." },
  vercel:   { name: "vercel",   label: "Vercel",          color: "#eeeeee", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vercel/vercel-original.svg",                                  shortDescription: "Zero-config deployments for Next.js apps — this portfolio deploys here." },
  vue:      { name: "vue",      label: "Java / Spring Boot",color: "#6db33f",icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg",                                 shortDescription: "Spring Boot 3.2 at Eli Lilly DMS — REST APIs, JPA, Flyway migrations." },
  html:     { name: "html",     label: "HTML5",           color: "#e34c26", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",                                    shortDescription: "Semantic HTML — accessible, SEO-optimised markup across all frontend projects." },
  css:      { name: "css",      label: "CSS3",            color: "#264de4", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",                                      shortDescription: "Vanilla CSS and animations — this portfolio uses inline styles for full control." },
};

// ─── Sound hook ─────────────────────────────────────────────────────────────────
function useKeycapSounds() {
  const pressRef   = useRef<HTMLAudioElement | null>(null);
  const releaseRef = useRef<HTMLAudioElement | null>(null);
  const interacted = useRef(false);
  useEffect(() => {
    pressRef.current   = new Audio("/assets/keycap-sounds/press.mp3");
    releaseRef.current = new Audio("/assets/keycap-sounds/release.mp3");
    if (pressRef.current)   pressRef.current.volume   = 0.4;
    if (releaseRef.current) releaseRef.current.volume = 0.3;
    const unlock = () => { interacted.current = true; };
    window.addEventListener("click",      unlock, { once: true });
    window.addEventListener("keydown",    unlock, { once: true });
    window.addEventListener("touchstart", unlock, { once: true });
    return () => {
      window.removeEventListener("click",      unlock);
      window.removeEventListener("keydown",    unlock);
      window.removeEventListener("touchstart", unlock);
    };
  }, []);
  const playPress   = () => { if (!interacted.current || !pressRef.current)   return; pressRef.current.currentTime   = 0; pressRef.current.play().catch(()=>{});   };
  const playRelease = () => { if (!interacted.current || !releaseRef.current) return; releaseRef.current.currentTime = 0; releaseRef.current.play().catch(()=>{}); };
  return { playPress, playRelease };
}

// ─── Combined component ──────────────────────────────────────────────────────────
export default function AboutAndTechStack() {
  const [splineApp, setSplineApp]     = useState<Application | undefined>();
  const [selectedSkill, setSelectedSkill] = useState<Skill | null>(null);
  const selectedSkillRef = useRef<Skill | null>(null);
  const { playPress, playRelease }    = useKeycapSounds();
  const ref    = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  // ── Reveal keycaps ──────────────────────────────────────────────────────────
  const revealKeycaps = async (app: Application) => {
    const kbd = app.findObjectByName("keyboard");
    if (!kbd) return;
    kbd.visible = false;
    await sleep(400);
    kbd.visible = true;
    const w = window.innerWidth;
    const s = 0.25 * Math.min(Math.max(w / 1280, 0.5), 1.15);
    gsap.set(kbd.scale,    { x: s, y: s, z: s });
    gsap.set(kbd.position, { x: 0, y: -40, z: 0 });
    gsap.set(kbd.rotation, { x: 0, y: Math.PI / 12, z: 0 });
    await sleep(900);
    const allObjs = app.getAllObjects();
    allObjs.filter(o => o.name === "keycap-desktop").forEach(async (k, i) => { await sleep(i * 70); k.visible = true; });
    allObjs.filter(o => o.name === "keycap").forEach(async (k, i) => {
      k.visible = false;
      await sleep(i * 70);
      k.visible = true;
      gsap.fromTo(k.position, { y: 200 }, { y: 50, duration: 0.5, delay: 0.1, ease: "bounce.out" });
    });
  };

  // ── Spline events ────────────────────────────────────────────────────────────
  useEffect(() => {
    if (!splineApp) return;
    const isInput = () => { const el = document.activeElement; return el && (el.tagName === "INPUT" || el.tagName === "TEXTAREA" || (el as HTMLElement).isContentEditable); };
    const onHover = (e: SplineEvent) => {
      if (selectedSkillRef.current?.name === e.target.name) return;
      if (e.target.name === "body" || e.target.name === "platform") {
        if (selectedSkillRef.current) playRelease();
        setSelectedSkill(null); selectedSkillRef.current = null;
        splineApp.setVariable?.("heading", ""); splineApp.setVariable?.("desc", "");
      } else {
        const skill = SKILLS[e.target.name];
        if (skill) { if (selectedSkillRef.current) playRelease(); playPress(); setSelectedSkill(skill); selectedSkillRef.current = skill; }
      }
    };
    const onKeyDown = (e: SplineEvent) => {
      if (isInput()) return;
      const skill = SKILLS[e.target.name];
      if (skill) { playPress(); setSelectedSkill(skill); selectedSkillRef.current = skill; splineApp.setVariable?.("heading", skill.label); splineApp.setVariable?.("desc", skill.shortDescription); }
    };
    const onKeyUp = () => { if (isInput()) return; playRelease(); splineApp.setVariable?.("heading", ""); splineApp.setVariable?.("desc", ""); };
    splineApp.addEventListener("mouseHover", onHover);
    splineApp.addEventListener("keyDown",    onKeyDown);
    splineApp.addEventListener("keyUp",      onKeyUp);
    return () => { splineApp.removeEventListener("mouseHover", onHover); splineApp.removeEventListener("keyDown", onKeyDown); splineApp.removeEventListener("keyUp", onKeyUp); };
  }, [splineApp]);

  useEffect(() => {
    if (!splineApp || !selectedSkill) return;
    splineApp.setVariable?.("heading", selectedSkill.label);
    splineApp.setVariable?.("desc",    selectedSkill.shortDescription);
  }, [selectedSkill, splineApp]);

  const handleLoad = (app: Application) => { setSplineApp(app); revealKeycaps(app); };

  return (
    <section
      id="about"
      style={{ width: "100%", backgroundColor: "#060b18", padding: "2.5rem 0 1.5rem" }}
    >
      <div style={{ width: "100%", padding: "0 4rem" }}>

        {/* ── Top heading row ─────────────────────────────────────────────── */}
        <div style={{ textAlign: "center", marginBottom: "1.25rem" }}>
          <h2 style={{ fontFamily: "var(--font-montserrat), sans-serif", color: "#ffffff", fontSize: "3rem", margin: 0, textTransform: "uppercase" }}>
            About &amp; Skills
          </h2>
          <div style={{ width: "60px", height: "3px", background: "#18BC9C", margin: "1rem auto 0" }} />
        </div>

        {/* ── 3-column body ───────────────────────────────────────────────── */}
        <div
          ref={ref}
          style={{ display: "grid", gridTemplateColumns: "1fr 2fr 1fr", gap: "1rem", alignItems: "center" }}
        >
          {/* LEFT — About cards */}
          <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
            {cards.map((card, i) => (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, x: -30 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                style={{ textAlign: "center" }}
              >
                <i className={`fa ${card.icon} fa-3x`} style={{ color: "#18BC9C", marginBottom: "0.75rem", display: "block" }} />
                <p style={{ fontFamily: "var(--font-montserrat), sans-serif", fontWeight: 700, fontSize: "0.9rem", color: "#fff", marginBottom: "0.4rem", textTransform: "uppercase" }}>
                  {card.title}
                </p>
                <p style={{ color: "#aaa", fontSize: "0.8rem", lineHeight: "1.6", margin: 0 }}>{card.desc}</p>
              </motion.div>
            ))}
          </div>

          {/* CENTER — Keyboard */}
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "0.25rem" }}>
            {/* Skill card placeholder at top */}

            {/* Skill info card */}
            <div style={{ width: "100%", display: "flex", justifyContent: "center", minHeight: "72px", alignItems: "center" }}>
              <AnimatePresence mode="wait">
                {selectedSkill && (
                  <motion.div
                    key={selectedSkill.name}
                    initial={{ opacity: 0, y: -8, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 6, scale: 0.95 }}
                    transition={{ duration: 0.18 }}
                    style={{
                      background: "rgba(255,255,255,0.05)",
                      backdropFilter: "blur(12px)",
                      border: `1.5px solid ${selectedSkill.color}55`,
                      borderRadius: "12px",
                      padding: "0.75rem 1.25rem",
                      display: "flex",
                      alignItems: "center",
                      gap: "0.75rem",
                      width: "100%",
                    }}
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={selectedSkill.icon} alt={selectedSkill.label} style={{ width: "36px", height: "36px", objectFit: "contain", flexShrink: 0 }} />
                    <div>
                      <p style={{ color: selectedSkill.color, fontFamily: "var(--font-montserrat), sans-serif", fontSize: "0.85rem", margin: "0 0 0.2rem", textTransform: "uppercase", fontWeight: 700 }}>
                        {selectedSkill.label}
                      </p>
                      <p style={{ color: "#bbb", fontSize: "0.78rem", lineHeight: "1.5", margin: 0 }}>
                        {selectedSkill.shortDescription}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Hint + Tech Stack label + keyboard — all grouped flush */}
            <div style={{ width: "100%", display: "flex", flexDirection: "column", alignItems: "center", gap: 0 }}>
              <p style={{ color: "#18BC9C", textTransform: "uppercase", letterSpacing: "0.15em", fontSize: "0.7rem", fontWeight: 700, margin: 0, lineHeight: 1.2 }}>
                hover or press a key
              </p>
              <h3 style={{ fontFamily: "var(--font-montserrat), sans-serif", color: "#ffffff", fontSize: "1.4rem", margin: "0.15rem 0 0", textTransform: "uppercase", lineHeight: 1 }}>
                Tech Stack
              </h3>
              <div style={{ width: "100%", height: "44vh", marginTop: "-1rem" }}>
              <Suspense fallback={<div style={{ color: "#555", textAlign: "center", paddingTop: "4rem" }}>Loading keyboard…</div>}>
                <Spline
                  style={{ width: "100%", height: "100%" }}
                  scene="/assets/skills-keyboard.spline"
                  onLoad={handleLoad}
                />
              </Suspense>
              </div>
            </div>
          </div>

          {/* RIGHT — Stats */}
          <div style={{ display: "flex", flexDirection: "column", gap: "2.5rem" }}>
            {stats.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, x: 30 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 + i * 0.12 }}
                style={{ textAlign: "center" }}
              >
                <h3 style={{ color: "#18BC9C", fontSize: "2.8rem", fontWeight: 700, margin: 0, fontFamily: "var(--font-montserrat), sans-serif" }}>
                  {s.value}
                </h3>
                <p style={{ color: "#aaa", fontSize: "0.85rem", marginTop: "0.25rem", textTransform: "uppercase", letterSpacing: "0.05em" }}>
                  {s.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
