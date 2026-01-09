import { motion } from "motion/react";
import { ArrowRight, MapPin, Globe, Compass } from "lucide-react";

export function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Animated background */}
      <div className="absolute inset-0 z-0">
        <motion.div
          className="absolute inset-0"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1766808983825-4e073acc4c80?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHxsdXh1cnklMjB0cmF2ZWwlMjBkZXN0aW5hdGlvbnxlbnwxfHx8fDE3NjY4Mzg0MTF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          animate={{ scale: [1, 1.1, 1] }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0f]/80 via-[#0a0a0f]/60 to-[#0a0a0f]" />
      </div>

      {/* Floating icons */}
      <div className="absolute inset-0 z-10">
        {[
          { Icon: MapPin, delay: 0, x: "20%", y: "20%" },
          { Icon: Globe, delay: 0.5, x: "80%", y: "30%" },
          { Icon: Compass, delay: 1, x: "70%", y: "70%" },
        ].map(({ Icon, delay, x, y }, i) => (
          <motion.div
            key={i}
            className="absolute opacity-20"
            style={{ left: x, top: y }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.1, 0.3, 0.1],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              delay,
              ease: "easeInOut",
            }}
          >
            <Icon size={64} className="text-[#00d4ff]" />
          </motion.div>
        ))}
      </div>

      {/* Content */}
      <div className="relative z-20 container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          {/* NAME INTRO */}
          <motion.p
            className="mb-4 tracking-widest text-[#00ffc8]/80"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            style={{ fontSize: "clamp(1.1rem, 2.8vw, 1.4rem)" }}
          >
            Hi, I’m <span className="text-white font-semibold">Laxit Jangid</span>
          </motion.p>

          {/* MAIN HEADING */}
          <motion.h1
            className="mb-6 tracking-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 1 }}
            style={{
              fontSize: "clamp(3rem, 10vw, 8rem)",
              fontWeight: 700,
              lineHeight: 1.1,
              background:
                "linear-gradient(135deg, #ffffff 0%, #ffffff 50%, #00d4ff 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Crafting Experiences
            <br />
            <span
              style={{
                background:
                  "linear-gradient(135deg, #00d4ff 0%, #00ffc8 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Beyond Boundaries
            </span>
          </motion.h1>

          {/* SUBTITLE */}
          <motion.p
            className="mb-12 text-white/70 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            style={{ fontSize: "clamp(1rem, 2.5vw, 1.25rem)" }}
          >
            Where creativity meets technology. Transforming ideas into immersive
            digital experiences that inspire, engage, and leave a lasting
            impact.
          </motion.p>

          {/* CTA BUTTONS */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
          >
            <motion.button
              className="group relative px-8 py-4 overflow-hidden rounded-full"
              style={{
                background: "linear-gradient(135deg, #00d4ff 0%, #00ffc8 100%)",
              }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                document
                  .getElementById("projects")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              <span className="relative z-10 flex items-center gap-2 text-[#0a0a0f]">
                Explore Portfolio
                <ArrowRight
                  size={20}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </span>
            </motion.button>

            <motion.button
              className="group glass px-8 py-4 rounded-full text-white hover:glow-blue transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                document
                  .getElementById("contact")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              <span className="flex items-center gap-2">
                Get In Touch
                <ArrowRight
                  size={20}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </span>
            </motion.button>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-12 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2">
            <motion.div
              className="w-1 h-2 bg-white/50 rounded-full"
              animate={{ y: [0, 12, 0] }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
