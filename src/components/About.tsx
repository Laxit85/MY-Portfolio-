import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { Award, Users, Briefcase, Target } from "lucide-react";

const stats = [
  /*{ icon: Briefcase, value: "15", label: "Projects Completed" },*/
  /*{ icon: Users, value: "", label: "Happy Clients" },*/
  /*{ icon: Award, value: "25+", label: "Awards Won" },*/
  /*{ icon: Target, value: "12+", label: "Years Experience" },*/
];

export function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="relative py-32 overflow-hidden bg-[#0a0a0f]">
      {/* Background gradient orbs */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#00d4ff]/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#00ffc8]/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10" ref={ref}>
        {/* Section Header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <p className="text-[#00ffc8] mb-4 tracking-widest">WHO I AM</p>

          {/* ✅ SEO-friendly H2 */}
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
            I’m Laxit Jangid
          </h2>

          {/* ✅ SEO-enhanced paragraph (natural, no design change) */}
          <p
            className="text-white/70 max-w-3xl mx-auto"
            style={{ fontSize: "clamp(1rem, 2vw, 1.125rem)" }}
          >
            A React and frontend developer, storyteller, and
            designer driven by a passion for creating extraordinary digital
            experiences that go beyond traditional boundaries.
          </p>
        </motion.div>

        {/* Split Layout */}
        <div className="grid lg:grid-cols-2 gap-16 mb-32">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="glass p-8 rounded-3xl h-full">
              <h3
                className="mb-6"
                style={{ fontSize: "clamp(1.5rem, 4vw, 2rem)" }}
              >
                My Philosophy
              </h3>

              {/* ✅ Name added naturally for SEO */}
              <p className="text-white/70 mb-6">
                Every destination has a soul. Every brand has a story. I believe,
                as Laxit Jangid, in the power of immersive design to bridge the
                gap between aspiration and experience.
              </p>

              <p className="text-white/70 mb-6">
                Through cinematic visuals, thoughtful narratives, and
                cutting-edge technology, I craft digital experiences that don't
                just showcase — they transport.
              </p>

              <div className="h-1 w-24 bg-gradient-to-r from-[#00d4ff] to-[#00ffc8] rounded-full" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative rounded-3xl overflow-hidden"
          >
            <img
              src="https://images.unsplash.com/photo-1763191213523-1489179a1088?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmVhdGl2ZSUyMHdvcmtzcGFjZSUyMGRlc2lnbnxlbnwxfHx8fDE3NjY4MzAzNTJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Laxit Jangid creative workspace and design environment"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0f] via-transparent to-transparent" />
          </motion.div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-32">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="glass p-8 rounded-2xl text-center group hover:glow-blue transition-all"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
              whileHover={{ scale: 1.05 }}
            >
              <stat.icon
                size={40}
                className="mx-auto mb-4 text-[#00d4ff] group-hover:text-[#00ffc8] transition-colors"
              />
              <div
                className="mb-2"
                style={{
                  fontSize: "clamp(2rem, 4vw, 3rem)",
                  fontWeight: 700,
                  background:
                    "linear-gradient(135deg, #00d4ff 0%, #00ffc8 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                {stat.value}
              </div>
              <p className="text-white/70">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
