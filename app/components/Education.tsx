"use client";
import Image from "next/image";

export default function Education() {
  return (
    <section
      id="education"
      style={{ width: "100%", display: "block", padding: "6rem 0", backgroundColor: "#555454", color: "#ffffff" }}
    >
      {/* Centered container */}
      <div style={{ width: "100%", padding: "0 5rem", textAlign: "center" }}>

        <h2
          style={{
            fontFamily: "var(--font-montserrat), sans-serif",
            fontSize: "3rem",
            color: "#ffffff",
            margin: 0,
            textTransform: "uppercase",
          }}
        >
          Education
        </h2>
        <hr className="star-divider star-light" />

        {/* NYU */}
        <div style={{ marginBottom: "2rem" }}>
          <Image
            src="/img/nyu.png"
            alt="NYU Logo"
            width={300}
            height={100}
            style={{ objectFit: "contain", height: "100px", width: "auto", margin: "0 auto 1.25rem", display: "block" }}
          />
          <p style={{ fontSize: "1rem", lineHeight: "1.75", margin: 0 }}>
            <strong>MS in Computer Science</strong> — GPA 3.69 · May 2021<br />
            New York University, Tandon School of Engineering, New York, NY<br />
            <span style={{ color: "#ccc", fontSize: "0.875rem" }}>
              Courses: Data Structures, Big Data, Distributed Systems, Cloud Computing
            </span>
          </p>
        </div>

        <p style={{ color: "#aaa", fontSize: "1.5rem", margin: "0 0 2rem" }}>|</p>

        {/* JNTUA */}
        <div>
          <Image
            src="/img/jntua.png"
            alt="JNTUA Logo"
            width={200}
            height={200}
            style={{ objectFit: "contain", height: "140px", width: "auto", margin: "0 auto 1.25rem", display: "block" }}
          />
          <p style={{ fontSize: "1rem", lineHeight: "1.75", margin: 0 }}>
            <strong>B.Tech in Electronics &amp; Communication Engineering</strong> — GPA 4.0 · May 2013<br />
            Jawaharlal Nehru Technological University, Andhra Pradesh, India<br />
            <span style={{ color: "#ccc", fontSize: "0.875rem" }}>
              Awarded &quot;Best Academic Project&quot; for gesture-controlled Arduino robots coded in C
            </span>
          </p>
        </div>

      </div>
    </section>
  );
}
