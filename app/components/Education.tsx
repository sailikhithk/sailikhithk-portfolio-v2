import Image from "next/image";
import SectionHeading from "@/app/components/ui/SectionHeading";

const degrees = [
  {
    logo: "/img/nyu.png",
    alt: "NYU Logo",
    width: 300,
    height: 100,
    imgHeight: "100px",
    degree: "MS in Computer Science",
    detail: "GPA 3.69 · May 2021",
    institution: "New York University, Tandon School of Engineering, New York, NY",
    courses: "Courses: Data Structures, Big Data, Distributed Systems, Cloud Computing",
  },
  {
    logo: "/img/jntua.png",
    alt: "JNTUA Logo",
    width: 200,
    height: 200,
    imgHeight: "140px",
    degree: "B.Tech in Electronics & Communication Engineering",
    detail: "GPA 4.0 · May 2013",
    institution: "Jawaharlal Nehru Technological University, Andhra Pradesh, India",
    courses: "Awarded \"Best Academic Project\" for gesture-controlled Arduino robots coded in C",
  },
];

export default function Education() {
  return (
    <section id="education" className="section-wrapper" style={{ color: "var(--text)" }}>
      <div className="section-inner" style={{ textAlign: "center" }}>
        <SectionHeading title="Education" divider="light" />

        {degrees.map((d, i) => (
          <div key={d.alt}>
            <div style={{ marginBottom: i < degrees.length - 1 ? "2rem" : 0 }}>
              <Image
                src={d.logo}
                alt={d.alt}
                width={d.width}
                height={d.height}
                style={{ objectFit: "contain", height: d.imgHeight, width: "auto", margin: "0 auto 1.25rem", display: "block" }}
              />
              <p style={{ fontSize: "1rem", lineHeight: "1.75", margin: 0 }}>
                <strong>{d.degree}</strong> — {d.detail}<br />
                {d.institution}<br />
                <span style={{ color: "#ccc", fontSize: "0.875rem" }}>{d.courses}</span>
              </p>
            </div>
            {i < degrees.length - 1 && (
              <p style={{ color: "var(--muted)", fontSize: "1.5rem", margin: "0 0 2rem" }}>|</p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
