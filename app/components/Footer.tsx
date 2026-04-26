export default function Footer() {
  return (
    <footer
      style={{
        width: "100%",
        backgroundColor: "var(--bg)",
        borderTop: "1px solid rgba(255,255,255,0.06)",
        padding: "1.5rem 0",
        textAlign: "center",
      }}
    >
      <p style={{ color: "#555", fontSize: "0.8rem", margin: 0 }}>
        © {new Date().getFullYear()} Sai Likhith Kanuparthi. All rights
        reserved.
      </p>
    </footer>
  );
}
