"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import SectionHeading from "@/app/components/ui/SectionHeading";

type FieldErrors = Partial<Record<"fullName" | "email" | "message", string>>;

const inputStyle: React.CSSProperties = {
  width: "100%",
  padding: "0.75rem 1rem",
  background: "rgba(255,255,255,0.05)",
  border: "1px solid rgba(255,255,255,0.12)",
  borderRadius: "8px",
  color: "var(--text)",
  fontSize: "0.95rem",
  outline: "none",
  fontFamily: "inherit",
  transition: "border-color 0.2s",
};

const labelStyle: React.CSSProperties = {
  display: "block",
  color: "var(--muted)",
  fontSize: "0.82rem",
  fontWeight: 600,
  textTransform: "uppercase",
  letterSpacing: "0.06em",
  marginBottom: "0.4rem",
};

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

export default function Contact() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<FieldErrors>({});
  const [sent, setSent] = useState(false);
  const [serverError, setServerError] = useState("");

  const validate = (): boolean => {
    const e: FieldErrors = {};
    if (fullName.trim().length < 2)
      e.fullName = "Full name must be at least 2 characters";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
      e.email = "Please enter a valid email";
    if (message.trim().length < 10)
      e.message = "Message must be at least 10 characters";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setServerError("");
    if (!validate()) return;
    setLoading(true);
    try {
      const res = await fetch("/api/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ fullName, email, message }),
      });
      if (!res.ok) {
        const d = await res.json();
        throw new Error(d.error || `Error ${res.status}`);
      }
      setSent(true);
      setFullName("");
      setEmail("");
      setMessage("");
    } catch (err: unknown) {
      setServerError(
        err instanceof Error
          ? err.message
          : "Something went wrong. Please try again.",
      );
    }
    setLoading(false);
  };

  return (
    <section id="contact" className="section-wrapper">
      <div className="section-inner">
        <SectionHeading title="Get In Touch" subtitle="Contact" />

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1.4fr",
            gap: "4rem",
            alignItems: "start",
          }}
        >
          {/* LEFT — Info */}
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
              LET&apos;S WORK
              <br />
              TOGETHER
            </h2>
            <p
              style={{
                color: "var(--muted)",
                fontSize: "1rem",
                lineHeight: "1.75",
                margin: "0 0 2rem",
              }}
            >
              I&apos;m currently open to new opportunities. Whether you have a
              question, a project idea, or just want to say hi — my inbox is
              always open.
            </p>

            <div style={{ marginBottom: "2rem" }}>
              <p style={{ ...labelStyle, marginBottom: "0.5rem" }}>
                Email directly
              </p>
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
              <p style={{ ...labelStyle, marginBottom: "0.5rem" }}>Location</p>
              <p style={{ color: "var(--muted)", margin: 0 }}>
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
                    fontSize: "1.5rem",
                    transition: "opacity 0.2s",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.7")}
                  onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
                >
                  <i className={`fa ${icon}`} />
                </a>
              ))}
            </div>
          </motion.div>

          {/* RIGHT — Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="card-glass"
            style={{ padding: "2.5rem" }}
          >
            {sent ? (
              <div style={{ textAlign: "center", padding: "3rem 0" }}>
                <i
                  className="fa fa-check-circle"
                  style={{
                    color: "var(--teal)",
                    fontSize: "3rem",
                    display: "block",
                    marginBottom: "1rem",
                  }}
                />
                <h3
                  style={{
                    color: "var(--text)",
                    fontFamily: "var(--font-montserrat), sans-serif",
                    margin: "0 0 0.5rem",
                  }}
                >
                  Message Sent!
                </h3>
                <p style={{ color: "var(--muted)", margin: 0 }}>
                  I&apos;ll get back to you as soon as possible.
                </p>
                <button
                  onClick={() => setSent(false)}
                  style={{
                    marginTop: "1.5rem",
                    color: "var(--teal)",
                    background: "none",
                    border: "none",
                    cursor: "pointer",
                    fontSize: "0.9rem",
                    textDecoration: "underline",
                  }}
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate>
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr",
                    gap: "1rem",
                    marginBottom: "1.25rem",
                  }}
                >
                  <div>
                    <label htmlFor="fullName" style={labelStyle}>
                      Full Name
                    </label>
                    <input
                      id="fullName"
                      type="text"
                      placeholder="Sai Likhith"
                      value={fullName}
                      style={{
                        ...inputStyle,
                        borderColor: errors.fullName
                          ? "#e05c5c"
                          : "rgba(255,255,255,0.12)",
                      }}
                      onChange={(e) => {
                        setFullName(e.target.value);
                        setErrors((p) => ({ ...p, fullName: undefined }));
                      }}
                      onFocus={(e) =>
                        (e.target.style.borderColor = "var(--teal)")
                      }
                      onBlur={(e) =>
                        (e.target.style.borderColor = errors.fullName
                          ? "#e05c5c"
                          : "rgba(255,255,255,0.12)")
                      }
                    />
                    {errors.fullName && (
                      <p
                        style={{
                          color: "#e05c5c",
                          fontSize: "0.78rem",
                          marginTop: "0.3rem",
                        }}
                      >
                        {errors.fullName}
                      </p>
                    )}
                  </div>
                  <div>
                    <label htmlFor="email" style={labelStyle}>
                      Email Address
                    </label>
                    <input
                      id="email"
                      type="email"
                      placeholder="you@example.com"
                      value={email}
                      style={{
                        ...inputStyle,
                        borderColor: errors.email
                          ? "#e05c5c"
                          : "rgba(255,255,255,0.12)",
                      }}
                      onChange={(e) => {
                        setEmail(e.target.value);
                        setErrors((p) => ({ ...p, email: undefined }));
                      }}
                      onFocus={(e) =>
                        (e.target.style.borderColor = "var(--teal)")
                      }
                      onBlur={(e) =>
                        (e.target.style.borderColor = errors.email
                          ? "#e05c5c"
                          : "rgba(255,255,255,0.12)")
                      }
                    />
                    {errors.email && (
                      <p
                        style={{
                          color: "#e05c5c",
                          fontSize: "0.78rem",
                          marginTop: "0.3rem",
                        }}
                      >
                        {errors.email}
                      </p>
                    )}
                  </div>
                </div>

                <div style={{ marginBottom: "1.5rem" }}>
                  <label htmlFor="message" style={labelStyle}>
                    Message
                  </label>
                  <textarea
                    id="message"
                    placeholder="Tell me about your project or just say hi..."
                    value={message}
                    rows={5}
                    style={{
                      ...inputStyle,
                      resize: "vertical",
                      borderColor: errors.message
                        ? "#e05c5c"
                        : "rgba(255,255,255,0.12)",
                    }}
                    onChange={(e) => {
                      setMessage(e.target.value);
                      setErrors((p) => ({ ...p, message: undefined }));
                    }}
                    onFocus={(e) =>
                      (e.target.style.borderColor = "var(--teal)")
                    }
                    onBlur={(e) =>
                      (e.target.style.borderColor = errors.message
                        ? "#e05c5c"
                        : "rgba(255,255,255,0.12)")
                    }
                  />
                  {errors.message && (
                    <p
                      style={{
                        color: "#e05c5c",
                        fontSize: "0.78rem",
                        marginTop: "0.3rem",
                      }}
                    >
                      {errors.message}
                    </p>
                  )}
                  <p
                    style={{
                      color: "#666",
                      fontSize: "0.78rem",
                      marginTop: "0.4rem",
                    }}
                  >
                    I&apos;ll never share your data with anyone. Pinky promise!
                  </p>
                </div>

                {serverError && (
                  <p
                    style={{
                      color: "#e05c5c",
                      fontSize: "0.85rem",
                      marginBottom: "1rem",
                      padding: "0.6rem 1rem",
                      background: "rgba(224,92,92,0.1)",
                      borderRadius: "6px",
                    }}
                  >
                    {serverError}
                  </p>
                )}

                <button
                  type="submit"
                  disabled={loading}
                  style={{
                    width: "100%",
                    padding: "0.85rem",
                    borderRadius: "8px",
                    background: loading
                      ? "rgba(24,188,156,0.4)"
                      : "var(--teal)",
                    color: "#000",
                    fontWeight: 700,
                    fontSize: "0.95rem",
                    border: "none",
                    cursor: loading ? "not-allowed" : "pointer",
                    fontFamily: "var(--font-montserrat), sans-serif",
                    textTransform: "uppercase",
                    letterSpacing: "0.08em",
                    transition: "opacity 0.2s, background 0.2s",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "0.5rem",
                  }}
                  onMouseEnter={(e) => {
                    if (!loading) e.currentTarget.style.opacity = "0.85";
                  }}
                  onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
                >
                  {loading ? (
                    <>
                      <i className="fa fa-spinner fa-spin" /> Sending…
                    </>
                  ) : (
                    <>
                      Send Message <i className="fa fa-paper-plane" />
                    </>
                  )}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
