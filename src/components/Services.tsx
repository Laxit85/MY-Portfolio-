import { motion, useInView } from "motion/react";
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
    features: ["HTML & CSS", "React.js", "Responsive Design"],
  },
  {
    icon: Layers,
    title: "Full-Stack Development",
    description:
      "Creating complete end-to-end solutions with secure APIs, databases, and seamless client-server communication.",
    features: ["Node.js", "Express.js", "MySQL"],
  },
  {
    icon: Brain,
    title: "AI & Machine Learning Solutions",
    description:
      "Developing intelligent systems that analyze data and deliver accurate, real-time predictions.",
    features: ["Python", "Decision Tree", "Random Forest"],
  },
  {
    icon: Cloud,
    title: "Cloud Deployment (AWS)",
    description:
      "Deploying scalable and secure applications on cloud infrastructure for reliable real-world performance.",
    features: ["EC2", "S3", "Lambda"],
  },
  {
    icon: Zap,
    title: "Automation & API Integration",
    description:
      "Streamlining workflows by integrating APIs and automation to reduce manual effort and improve efficiency.",
    features: ["REST APIs", "Workflow Automation", "Reporting"],
  },
  {
    icon: Lightbulb,
    title: "Technical Consulting",
    description:
      "Providing practical guidance on technology selection, application architecture, and scalability planning.",
    features: ["System Design", "Tech Stack Guidance", "Scalability"],
  },
];

/* ================= PROCESS STEPS ================= */

const processSteps = [
  {
    title: "Discover",
    desc: "Understand functional and technical requirements, create a prototype and project plan.",
    icon: "💡",
    color: "#f39c12",
    bg: "#f39c12",
    left: 0,
    top: 40,
  },
  {
    title: "Design",
    desc: "Finalize the tech stack and system architecture.",
    icon: "📐",
    color: "#6ab04c",
    bg: "#6ab04c",
    left: 240,
    top: 260,
  },
  {
    title: "Development",
    desc: "Agile development with QA, testing and feedback.",
    icon: "💻",
    color: "#f6c453",
    bg: "#f6c453",
    left: 480,
    top: 40,
    textColor: "#000",
  },
  {
    title: "Deployment",
    desc: "Deployment on QA/UAT with CI/CD practices.",
    icon: "🚀",
    color: "#4b6cb7",
    bg: "#4b6cb7",
    left: 720,
    top: 260,
  },
  {
    title: "Delivery",
    desc: "Final delivery, documentation and support handover.",
    icon: "📦",
    color: "#f39c12",
    bg: "#f39c12",
    left: 960,
    top: 40,
  },
];

export function Services() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-120px" });

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
        {/* ================= HEADER ================= */}
        <motion.div
          className="text-center mb-28"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <p className="text-[#00ffc8] tracking-[0.3em] mb-4">
            WHAT I DO
          </p>

          <h2
            className="mb-6 font-bold"
            style={{
              fontSize: "clamp(3rem, 7vw, 4.5rem)",
              background:
                "linear-gradient(135deg, #ffffff 0%, #00d4ff 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            My Services
          </h2>

          <p className="text-white/70 max-w-3xl mx-auto text-lg leading-relaxed">
           
          </p>
        </motion.div>

        {/* ================= SERVICES GRID ================= */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-56">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="group glass p-8 rounded-3xl hover:glow-blue transition-all cursor-pointer"
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
            >
              <motion.div
                className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6 relative overflow-hidden"
                whileHover={{ scale: 1.1, rotate: 5 }}
              >
                <motion.div
                  className="absolute inset-0 opacity-20"
                  style={{
                    background:
                      "linear-gradient(135deg, #00d4ff 0%, #00ffc8 100%)",
                  }}
                  animate={{ rotate: [0, 180, 360] }}
                  transition={{ duration: 6, repeat: Infinity }}
                />
                <service.icon
                  size={32}
                  className="relative z-10 text-[#00d4ff]"
                />
              </motion.div>

              <h3 className="mb-4 text-xl font-semibold">
                {service.title}
              </h3>

              <p className="text-white/70 mb-6">
                {service.description}
              </p>

              <div className="space-y-2">
                {service.features.map((f, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-[#00d4ff] to-[#00ffc8]" />
                    <span className="text-sm text-white/60">
                      {f}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* ================= WORKING PROCESS ================= */}
        <div className="pb-32">
          <h3
            className="text-center font-bold text-white"
            style={{
              fontSize: "clamp(2.4rem, 4vw, 3.2rem)",
              marginBottom: "80px",
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
              marginTop: "-20px",
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
                <h4
                  style={{
                    color: s.color,
                    fontSize: 20,
                    marginBottom: 10,
                  }}
                >
                  {s.title}
                </h4>

                <p className="text-sm text-white/70 leading-relaxed">
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
