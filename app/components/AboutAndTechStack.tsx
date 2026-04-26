"use client";
import React, { Suspense, useEffect, useRef, useState } from "react";
import { Application, SplineEvent } from "@splinetool/runtime";
import gsap from "gsap";
import { AnimatePresence, motion, useInView } from "framer-motion";
import { cards, stats, SKILLS } from "@/app/data";
import type { Skill } from "@/app/types";

const Spline = React.lazy(() => import("@splinetool/react-spline"));

const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));

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
  const playPress   = () => { if (!interacted.current || !pressRef.current)   return; pressRef.current.currentTime   = 0; pressRef.current.play().catch(()=>{}); };
  const playRelease = () => { if (!interacted.current || !releaseRef.current) return; releaseRef.current.currentTime = 0; releaseRef.current.play().catch(()=>{}); };
  return { playPress, playRelease };
}

export default function AboutAndTechStack() {
  const [splineApp, setSplineApp]         = useState<Application | undefined>();
  const [selectedSkill, setSelectedSkill] = useState<Skill | null>(null);
  const selectedSkillRef = useRef<Skill | null>(null);
  const { playPress, playRelease } = useKeycapSounds();
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
  }, [splineApp, playPress, playRelease]);

  useEffect(() => {
    if (!splineApp || !selectedSkill) return;
    splineApp.setVariable?.("heading", selectedSkill.label);
    splineApp.setVariable?.("desc",    selectedSkill.shortDescription);
  }, [selectedSkill, splineApp]);

  const handleLoad = (app: Application) => { setSplineApp(app); revealKeycaps(app); };

  return (
    <section id="about" className="section-wrapper" style={{ padding: "2.5rem 0 1.5rem" }}>
      <div className="section-inner">

        {/* Heading */}
        <div style={{ textAlign: "center", marginBottom: "1.25rem" }}>
          <h2 style={{ fontFamily: "var(--font-montserrat), sans-serif", color: "var(--text)", fontSize: "3rem", margin: 0, textTransform: "uppercase" }}>
            About &amp; Skills
          </h2>
          <div style={{ width: "60px", height: "3px", background: "var(--teal)", margin: "1rem auto 0" }} />
        </div>

        {/* 3-column grid */}
        <div ref={ref} style={{ display: "grid", gridTemplateColumns: "1fr 2fr 1fr", gap: "1rem", alignItems: "center" }}>

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
                <i className={`fa ${card.icon} fa-3x`} style={{ color: "var(--teal)", marginBottom: "0.75rem", display: "block" }} />
                <p style={{ fontFamily: "var(--font-montserrat), sans-serif", fontWeight: 700, fontSize: "0.9rem", color: "var(--text)", marginBottom: "0.4rem", textTransform: "uppercase" }}>
                  {card.title}
                </p>
                <p style={{ color: "var(--muted)", fontSize: "0.8rem", lineHeight: "1.6", margin: 0 }}>{card.desc}</p>
              </motion.div>
            ))}
          </div>

          {/* CENTER — Keyboard */}
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "0.25rem" }}>
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
                      background: "var(--card-bg)",
                      backdropFilter: "blur(12px)",
                      border: `1.5px solid ${selectedSkill.color}55`,
                      borderRadius: "12px",
                      padding: "0.75rem 1.25rem",
                      display: "flex", alignItems: "center", gap: "0.75rem",
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

            {/* Label + keyboard */}
            <div style={{ width: "100%", display: "flex", flexDirection: "column", alignItems: "center", gap: 0 }}>
              <p style={{ color: "var(--teal)", textTransform: "uppercase", letterSpacing: "0.15em", fontSize: "0.7rem", fontWeight: 700, margin: 0, lineHeight: 1.2 }}>
                hover or press a key
              </p>
              <h3 style={{ fontFamily: "var(--font-montserrat), sans-serif", color: "var(--text)", fontSize: "1.4rem", margin: "0.15rem 0 0", textTransform: "uppercase", lineHeight: 1 }}>
                Tech Stack
              </h3>
              <div style={{ width: "100%", height: "44vh", marginTop: "-1rem" }}>
                <Suspense fallback={<div style={{ color: "#555", textAlign: "center", paddingTop: "4rem" }}>Loading keyboard…</div>}>
                  <Spline style={{ width: "100%", height: "100%" }} scene="/assets/skills-keyboard.spline" onLoad={handleLoad} />
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
                <h3 style={{ color: "var(--teal)", fontSize: "2.8rem", fontWeight: 700, margin: 0, fontFamily: "var(--font-montserrat), sans-serif" }}>
                  {s.value}
                </h3>
                <p style={{ color: "var(--muted)", fontSize: "0.85rem", marginTop: "0.25rem", textTransform: "uppercase", letterSpacing: "0.05em" }}>
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
