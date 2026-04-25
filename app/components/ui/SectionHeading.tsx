interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  divider?: "primary" | "light";
  mb?: string;
}

export default function SectionHeading({
  title,
  subtitle,
  divider = "primary",
  mb = "3rem",
}: SectionHeadingProps) {
  return (
    <div style={{ textAlign: "center", marginBottom: mb }}>
      {subtitle && (
        <p
          style={{
            color: "var(--teal)",
            textTransform: "uppercase",
            letterSpacing: "0.1em",
            fontSize: "0.875rem",
            fontWeight: 600,
            marginBottom: "0.5rem",
          }}
        >
          {subtitle}
        </p>
      )}
      <h2
        style={{
          fontFamily: "var(--font-montserrat), sans-serif",
          color: "var(--text)",
          fontSize: "3rem",
          margin: 0,
          textTransform: "uppercase",
        }}
      >
        {title}
      </h2>
      <hr className={`star-divider star-${divider}`} />
    </div>
  );
}
