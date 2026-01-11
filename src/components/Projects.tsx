import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "AI Doctor",
    category: "Frontend (AI UI)",
    image:
      "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=1080&q=80",
    description:
      "A frontend-focused healthcare interface that allows users to input symptoms and view AI-generated health insights through a clean, responsive, and user-friendly design.",
    link: "https://aidoctor-ca07f-517ab.web.app", // # PROJECT LINK
  },
  {
    id: 2,
    title: "Dynamic News Portal",
    category: "Full-Stack Web",
    image:
      "https://images.unsplash.com/photo-1504711434969-e33886168f5c?auto=format&fit=crop&w=1080&q=80",
    description:
      "A full-stack news platform with real-time updates, secure authentication, RESTful APIs, and a responsive user interface.",
    link: "https://your-live-site.com/news-portal", // # PROJECT LINK
  },
  {
    id: 3,
    title: "Disease Prediction System",
    category: "Machine Learning",
    image:
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1080&q=80",
    description:
      "A machine learning-based system that predicts potential diseases from user symptoms using Decision Tree and Random Forest models.",
    link: "https://github.com/your-username/disease-prediction", // # PROJECT LINK
  },
  {
    id: 4,
    title: "Temperature Prediction System",
    category: "Machine Learning",
    image:
      "https://images.unsplash.com/photo-1501630834273-4b5604d2ee31?auto=format&fit=crop&w=1080&q=80",
    description:
      "A machine learning system that predicts temperature trends using historical data for accurate and data-driven forecasting.",
    link: "https://github.com/your-username/temperature-prediction", // # PROJECT LINK
  },
  {
    id: 5,
    title: "AI-Based Code Review Assistant",
    category: "AI Tools",
    image:
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1080&q=80",
    description:
      "An AI-powered assistant that analyzes code quality, detects potential issues, and suggests improvements for better performance and readability.",
    link: "https://github.com/your-username/ai-code-review", // # PROJECT LINK
  },
  {
    id: 6,
    title: "Book Summarizer",
    category: "Python",
    image:
      "https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=1080&q=80",
    description:
      "A Python-based application that automatically summarizes books and long texts into concise and meaningful insights.",
    link: "https://github.com/your-username/book-summarizer", // # PROJECT LINK
  },
];

export function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="projects"
      className="relative py-32 bg-gradient-to-b from-[#0a0a0f] to-[#050508]"
    >
      <div className="container mx-auto px-6" ref={ref}>
        {/* Section Header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <p className="text-[#00ffc8] mb-4 tracking-widest">
            PORTFOLIO
          </p>
          <h2
            className="mb-6"
            style={{
              fontSize: "clamp(2.5rem, 6vw, 4rem)",
              fontWeight: 700,
              background:
                "linear-gradient(135deg, #ffffff 0%, #00d4ff 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Featured Work
          </h2>
          <p
            className="text-white/70 max-w-3xl mx-auto"
            style={{ fontSize: "clamp(1rem, 2vw, 1.125rem)" }}
          >
            A curated collection of our most impactful projects, where creativity
            meets purpose and design tells unforgettable stories.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <a
              key={project.id}
              href={project.link} // # PROJECT LINK
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              <motion.div
                className="group relative overflow-hidden rounded-3xl cursor-pointer"
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
              >
                {/* Image */}
                <div className="relative aspect-[4/5] overflow-hidden">
                  <motion.img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0f] via-[#0a0a0f]/50 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
                </div>

                {/* Content */}
                <div className="absolute inset-0 p-6 flex flex-col justify-end">
                  <motion.div
                    className="mb-3 inline-block px-4 py-1 rounded-full glass w-fit"
                    initial={{ opacity: 0, x: -20 }}
                    whileHover={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <span className="text-sm text-[#00ffc8]">
                      {project.category}
                    </span>
                  </motion.div>

                  <h3
                    className="mb-2"
                    style={{
                      fontSize: "clamp(1.25rem, 3vw, 1.5rem)",
                    }}
                  >
                    {project.title}
                  </h3>

                  <p className="text-white/70 mb-4 text-sm">
                    {project.description}
                  </p>

                  {/* Hover arrow */}
                  <motion.div
                    className="w-12 h-12 rounded-full glass flex items-center justify-center ml-auto opacity-0 group-hover:opacity-100 transition-opacity"
                    whileHover={{ scale: 1.1, rotate: 45 }}
                  >
                    <ArrowUpRight
                      size={20}
                      className="text-[#00d4ff]"
                    />
                  </motion.div>
                </div>

                {/* Glow effect on hover */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                  <div className="absolute inset-0 glow-blue rounded-3xl" />
                </div>
              </motion.div>
            </a>
          ))}
        </div>

        {/* View More Button */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <motion.button
            className="group glass px-8 py-4 rounded-full text-white hover:glow-teal transition-all inline-flex items-center gap-2"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View All Projects
            <ArrowUpRight
              size={20}
              className="group-hover:rotate-45 transition-transform"
            />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
