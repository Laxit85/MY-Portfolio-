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

export function Services() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="services" className="relative py-32 bg-gradient-to-b from-[#050508] to-[#0a0a0f]">
      {/* Background gradient */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#00ffc8]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#00d4ff]/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10" ref={ref}>
        {/* Section Header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <p className="text-[#00ffc8] mb-4 tracking-widest">WHAT I DO</p>
          <h2
            className="mb-6"
            style={{
              fontSize: "clamp(2.5rem, 6vw, 4rem)",
              fontWeight: 700,
              background: "linear-gradient(135deg, #ffffff 0%, #00d4ff 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            My Services
          </h2>
          <p className="text-white/70 max-w-3xl mx-auto" style={{ fontSize: "clamp(1rem, 2vw, 1.125rem)" }}>
            Comprehensive solutions tailored to transform your vision into
            extraordinary experiences that inspire and engage.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="group glass p-8 rounded-3xl hover:glow-blue transition-all cursor-pointer"
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
            >
              {/* Icon */}
              <motion.div
                className="relative mb-6"
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ duration: 0.3 }}
              >
                <div className="w-16 h-16 rounded-2xl flex items-center justify-center relative overflow-hidden">
                  {/* Animated background */}
                  <motion.div
                    className="absolute inset-0 opacity-20"
                    style={{
                      background: "linear-gradient(135deg, #00d4ff 0%, #00ffc8 100%)",
                    }}
                    animate={{
                      scale: [1, 1.2, 1],
                      rotate: [0, 90, 0],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  />
                  <service.icon
                    size={32}
                    className="relative z-10 text-[#00d4ff] group-hover:text-[#00ffc8] transition-colors"
                  />
                </div>

                {/* Glow ring */}
                <motion.div
                  className="absolute inset-0 rounded-2xl border-2 border-[#00d4ff]/30"
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.3, 0, 0.3],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
              </motion.div>

              {/* Content */}
              <h3 className="mb-4" style={{ fontSize: "clamp(1.25rem, 3vw, 1.5rem)" }}>
                {service.title}
              </h3>

              <p className="text-white/70 mb-6">{service.description}</p>

              {/* Features */}
              <div className="space-y-2">
                {service.features.map((feature, i) => (
                  <motion.div
                    key={i}
                    className="flex items-center gap-2"
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.4, delay: index * 0.1 + i * 0.1 }}
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-[#00d4ff] to-[#00ffc8]" />
                    <span className="text-sm text-white/60">{feature}</span>
                  </motion.div>
                ))}
              </div>

              {/* Hover line */}
              <motion.div
                className="mt-6 h-1 bg-gradient-to-r from-[#00d4ff] to-[#00ffc8] rounded-full"
                initial={{ width: 0 }}
                whileHover={{ width: "100%" }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          className="mt-24 text-center glass-dark p-12 rounded-3xl max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <h3
            className="mb-4"
            style={{
              fontSize: "clamp(1.75rem, 4vw, 2.5rem)",
              fontWeight: 700,
            }}
          >
            Ready to Start Your Journey?
          </h3>
          <p className="text-white/70 mb-8 max-w-2xl mx-auto">
            Let's collaborate to create something extraordinary that captures
            the essence of your brand and resonates with your audience.
          </p>

          <motion.button
            className="group px-8 py-4 rounded-full"
            style={{
              background: "linear-gradient(135deg, #00d4ff 0%, #00ffc8 100%)",
            }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => {
              document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            <span className="text-[#0a0a0f] flex items-center gap-2">
              Let's Talk
              <motion.span
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                →
              </motion.span>
            </span>
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
