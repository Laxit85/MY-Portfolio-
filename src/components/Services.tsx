import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import {
  Code,
  Layers,
  Brain,
  Cloud,
  Zap,
  Lightbulb,
} from "lucide-react";

/* ================= SERVICES DATA ================= */

const services = [
  {
    icon: Code,
    title: "Web Development",
    description:
      "Building responsive and user-friendly web applications with modern technologies and smooth user interactions.",
  },
  {
    icon: Layers,
    title: "Full-Stack Development",
    description:
      "Creating complete end-to-end solutions with secure APIs, databases, and seamless client-server communication.",
  },
  {
    icon: Brain,
    title: "AI & Machine Learning",
    description:
      "Developing intelligent systems that analyze data and deliver accurate, real-time predictions.",
  },
  {
    icon: Cloud,
    title: "Cloud Deployment",
    description:
      "Deploying scalable and secure applications on cloud infrastructure for real-world performance.",
  },
  {
    icon: Zap,
    title: "Automation & APIs",
    description:
      "Streamlining workflows with APIs and automation to improve efficiency.",
  },
  {
    icon: Lightbulb,
    title: "Technical Consulting",
    description:
      "Guidance on system design, tech stack selection, and scalability.",
  },
];

/* ================= PROCESS STEPS ================= */

const processSteps = [
  {
    title: "Discover",
    desc: "Understand functional and technical requirements, create a prototype and project plan.",
    icon: "💡",
    bg: "#e67e22",
    color: "#e67e22",
    left: 0,
    top: 40,
  },
  {
    title: "Design",
    desc: "Finalize the tech stack and system architecture.",
    icon: "📐",
    bg: "#6ab04c",
    color: "#6ab04c",
    left: 240,
    top: 260,
  },
  {
    title: "Development",
    desc: "Agile development with QA, testing and feedback.",
    icon: "💻",
    bg: "#f6c453",
    color: "#f6c453",
    left: 480,
    top: 40,
    textColor: "#000",
  },
  {
    title: "Deployment",
    desc: "Deployment on QA/UAT with CI/CD practices.",
    icon: "🚀",
    bg: "#4b6cb7",
    color: "#4b6cb7",
    left: 720,
    top: 260,
  },
  {
    title: "Delivery",
    desc: "Final delivery, documentation and support handover.",
    icon: "📦",
    bg: "#e67e22",
    color: "#e67e22",
    left: 960,
    top: 40,
  },
];

export function Services() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="services"
      className="relative py-32 bg-gradient-to-b from-[#050508] to-[#0a0a0f]"
    >
      {/* Background glow */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#00ffc8]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#00d4ff]/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10" ref={ref}>
        {/* ================= HEADER (FIXED & CLEAN) ================= */}
        <motion.div
          className="text-center"
          style={{ marginBottom: "180px" }}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <p
            style={{
              color: "#00ffc8",
              letterSpacing: "0.25em",
              marginBottom: "24px",
            }}
          >
            WHAT I DO
          </p>

          <h2
            style={{
              fontSize: "clamp(3rem, 7vw, 4.5rem)",
              fontWeight: 700,
              color: "#9ff3ff",
              marginBottom: "28px",
            }}
          >
            My Services
          </h2>

          <p
            style={{
              color: "rgba(255,255,255,0.7)",
              maxWidth: "720px",
              margin: "0 auto",
              fontSize: "1.05rem",
              lineHeight: 1.8,
            }}
          >
            Comprehensive solutions tailored to transform your vision into
            extraordinary experiences that inspire and engage.
          </p>
        </motion.div>

        {/* ================= SERVICES GRID ================= */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-48">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="glass p-8 rounded-3xl"
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <service.icon size={32} className="text-[#00d4ff] mb-4" />
              <h3 className="text-xl font-semibold mb-2">
                {service.title}
              </h3>
              <p className="text-white/70 text-sm">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* ================= WORKING PROCESS ================= */}
        <div style={{ paddingBottom: "80px" }}>
          <h3
            style={{
              textAlign: "center",
              fontSize: 34,
              fontWeight: 700,
              marginBottom: 120,
              color: "#ffffff",
            }}
          >
            Our Working Process
          </h3>

          <div
            style={{
              position: "relative",
              width: 1200,
              margin: "0 auto",
              height: 420,
            }}
          >
            {/* CURVE */}
            <svg
              viewBox="0 0 1200 420"
              preserveAspectRatio="none"
              style={{
                position: "absolute",
                inset: 0,
                zIndex: 1,
                pointerEvents: "none",
              }}
            >
              <path
                d="
                  M 0   210
                  Q 120 320, 240 210
                  Q 360 100, 480 210
                  Q 600 320, 720 210
                  Q 840 100, 960 210
                  Q 1080 320, 1200 210
                "
                fill="none"
                stroke="#9aa0a6"
                strokeWidth="4"
              />
            </svg>

            {/* STEPS */}
            {processSteps.map((s, i) => (
              <div
                key={i}
                style={{
                  position: "absolute",
                  left: s.left,
                  top: s.top,
                  width: 220,
                  textAlign: "center",
                  zIndex: 2,
                }}
              >
                <h4 style={{ color: s.color, fontSize: 20, marginBottom: 10 }}>
                  {s.title}
                </h4>
                <p
                  style={{
                    fontSize: 14,
                    color: "#cbd5e1",
                    lineHeight: 1.6,
                  }}
                >
                  {s.desc}
                </p>
                <div
                  style={{
                    width: 90,
                    height: 90,
                    borderRadius: "50%",
                    background: s.bg,
                    margin: "18px auto 0",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: 32,
                    color: s.textColor || "#fff",
                  }}
                >
                  {s.icon}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
