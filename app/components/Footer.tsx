export default function Footer() {
  return (
    <footer style={{ width: "100%", backgroundColor: "#060b18", color: "#fff", textAlign: "center" }}>
      <div style={{ width: "100%", padding: "3rem 5rem" }}>
        <h3 style={{ fontFamily: "var(--font-montserrat), sans-serif", fontSize: "1.5rem", marginBottom: "2rem", textTransform: "uppercase" }}>
          Let&apos;s Work Together
        </h3>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "2rem" }}>
          <div>
            <h3 style={{ fontFamily: "var(--font-montserrat), sans-serif", fontSize: "1rem", marginBottom: "0.5rem", textTransform: "uppercase" }}>
              Location
            </h3>
            <p style={{ color: "#aaa", fontSize: "0.875rem", margin: 0 }}>San Francisco, CA</p>
          </div>

          <div>
            <h3 style={{ fontFamily: "var(--font-montserrat), sans-serif", fontSize: "1rem", marginBottom: "0.75rem", textTransform: "uppercase" }}>
              Connect
            </h3>
            <div style={{ display: "flex", justifyContent: "center", gap: "1rem" }}>
              <a href="https://www.linkedin.com/in/sailikhithk" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <i className="fa fa-linkedin" style={{ color: "#0e76a7", fontSize: "2rem" }} />
              </a>
              <a href="https://github.com/sailikhithk" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <i className="fa fa-github" style={{ color: "#fff", fontSize: "2rem" }} />
              </a>
              <a href="https://twitter.com/codewithsai" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                <i className="fa fa-twitter" style={{ color: "#00ACEE", fontSize: "2rem" }} />
              </a>
              <a href="mailto:sailikhithcse@gmail.com" aria-label="Email">
                <i className="fa fa-envelope" style={{ color: "red", fontSize: "2rem" }} />
              </a>
            </div>
          </div>

          <div>
            <h3 style={{ fontFamily: "var(--font-montserrat), sans-serif", fontSize: "1rem", marginBottom: "0.5rem", textTransform: "uppercase" }}>
              Email
            </h3>
            <p style={{ color: "#aaa", fontSize: "0.875rem", margin: 0 }}>sailikhithcse@gmail.com</p>
          </div>
        </div>

        <p style={{ marginTop: "2.5rem", color: "#555", fontSize: "0.75rem" }}>
          © {new Date().getFullYear()} Sai Likhith Kanuparthi. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
