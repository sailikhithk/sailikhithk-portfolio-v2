const socialLinks = [
  { href: "https://www.linkedin.com/in/sailikhithk", icon: "fa-linkedin", label: "LinkedIn",  color: "#0e76a7" },
  { href: "https://github.com/sailikhithk",          icon: "fa-github",   label: "GitHub",    color: "var(--text)" },
  { href: "https://twitter.com/codewithsai",          icon: "fa-twitter",  label: "Twitter",   color: "#00ACEE" },
  { href: "mailto:sailikhithcse@gmail.com",           icon: "fa-envelope", label: "Email",     color: "red" },
];

export default function Footer() {
  return (
    <footer style={{ width: "100%", backgroundColor: "var(--bg)", color: "var(--text)", textAlign: "center" }}>
      <div style={{ width: "100%", padding: "3rem 5rem" }}>
        <h3 style={{ fontFamily: "var(--font-montserrat), sans-serif", fontSize: "1.5rem", marginBottom: "2rem", textTransform: "uppercase" }}>
          Let&apos;s Work Together
        </h3>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "2rem" }}>
          <div>
            <h3 style={{ fontFamily: "var(--font-montserrat), sans-serif", fontSize: "1rem", marginBottom: "0.5rem", textTransform: "uppercase" }}>Location</h3>
            <p style={{ color: "var(--muted)", fontSize: "0.875rem", margin: 0 }}>San Francisco, CA</p>
          </div>

          <div>
            <h3 style={{ fontFamily: "var(--font-montserrat), sans-serif", fontSize: "1rem", marginBottom: "0.75rem", textTransform: "uppercase" }}>Connect</h3>
            <div style={{ display: "flex", justifyContent: "center", gap: "1rem" }}>
              {socialLinks.map(({ href, icon, label, color }) => (
                <a key={label} href={href} target={href.startsWith("mailto") ? undefined : "_blank"} rel="noopener noreferrer" aria-label={label}>
                  <i className={`fa ${icon}`} style={{ color, fontSize: "2rem" }} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 style={{ fontFamily: "var(--font-montserrat), sans-serif", fontSize: "1rem", marginBottom: "0.5rem", textTransform: "uppercase" }}>Email</h3>
            <p style={{ color: "var(--muted)", fontSize: "0.875rem", margin: 0 }}>sailikhithcse@gmail.com</p>
          </div>
        </div>

        <p style={{ marginTop: "2.5rem", color: "#555", fontSize: "0.75rem" }}>
          © {new Date().getFullYear()} Sai Likhith Kanuparthi. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
