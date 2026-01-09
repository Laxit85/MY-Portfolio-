import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";

/*
const clients = [
  { name: "Wanderlust Hotels", abbr: "WH" },
  { name: "Azure Airways", abbr: "AA" },
  { name: "Expedition Co.", abbr: "EC" },
  { name: "Summit Resorts", abbr: "SR" },
  { name: "Voyage Magazine", abbr: "VM" },
  { name: "Terra Luxury", abbr: "TL" },
  { name: "Horizon Travel", abbr: "HT" },
  { name: "Nomad Experiences", abbr: "NE" },
];
*/

export function Clients() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="clients" className="relative py-32 overflow-hidden bg-[#0a0a0f]">
      {/* Background elements */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#ffa726]/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#00d4ff]/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10" ref={ref}>
        {/* Section Header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <p className="text-[#ffa726] mb-4 tracking-widest">TRUSTED BY THE BEST</p>
          <h2
            className="mb-6"
            style={{
              fontSize: "clamp(2.5rem, 6vw, 4rem)",
              fontWeight: 700,
              background: "linear-gradient(135deg, #ffffff 0%, #ffa726 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            My Clients
          </h2>
          <p className="text-white/70 max-w-3xl mx-auto" style={{ fontSize: "clamp(1rem, 2vw, 1.125rem)" }}>
            I’m honored to collaborate with visionary brands that share my commitment to excellence and innovation in the luxury travel space.
          </p>
        </motion.div>

        {/*
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {clients.map((client, index) => (
            <motion.div
              key={index}
              className="group glass p-8 rounded-2xl flex flex-col items-center justify-center aspect-square hover:glow-gold transition-all cursor-pointer"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
            >
              <div className="relative">
                <motion.div
                  className="w-20 h-20 rounded-full flex items-center justify-center mb-4"
                  style={{
                    background: "linear-gradient(135deg, rgba(255,167,38,0.2) 0%, rgba(0,212,255,0.2) 100%)",
                    border: "2px solid rgba(255,255,255,0.1)",
                  }}
                  whileHover={{
                    background: "linear-gradient(135deg, rgba(255,167,38,0.4) 0%, rgba(0,212,255,0.4) 100%)",
                  }}
                >
                  <span
                    className="group-hover:scale-110 transition-transform"
                    style={{
                      fontSize: "1.5rem",
                      fontWeight: 700,
                      background: "linear-gradient(135deg, #ffa726 0%, #00d4ff 100%)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                    }}
                  >
                    {client.abbr}
                  </span>
                </motion.div>

                <motion.div
                  className="absolute inset-0 rounded-full"
                  style={{
                    border: "2px solid rgba(255,167,38,0.3)",
                  }}
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
              </div>

              <p className="text-white/80 text-center group-hover:text-white transition-colors">
                {client.name}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-24 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <div className="glass-dark p-12 rounded-3xl relative">
            <div
              className="absolute top-8 left-8 opacity-20"
              style={{
                fontSize: "6rem",
                lineHeight: 1,
                color: "#00d4ff",
              }}
            >
              "
            </div>

            <p
              className="relative z-10 text-center mb-8 italic"
              style={{
                fontSize: "clamp(1.125rem, 2.5vw, 1.5rem)",
                color: "rgba(255,255,255,0.9)",
              }}
            >
              Working with this team transformed our brand vision into a breathtaking
              reality. Their attention to detail and creative storytelling is unmatched
              in the luxury travel industry.
            </p>

            <div className="text-center">
              <p className="mb-1" style={{ color: "#00ffc8" }}>
                Sarah Chen
              </p>
              <p className="text-white/60">CEO, Wanderlust Hotels</p>
            </div>

            <div className="absolute bottom-8 right-8 w-24 h-1 bg-gradient-to-r from-transparent via-[#ffa726] to-transparent rounded-full" />
          </div>
        </motion.div>

        <motion.div
          className="mt-16 flex flex-wrap justify-center gap-8 items-center"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
        >
          {["Award Winner 2024", "Top Rated Agency", "Certified Excellence"].map(
            (badge, index) => (
              <div
                key={index}
                className="flex items-center gap-2 text-white/50"
              >
                <div className="w-2 h-2 rounded-full bg-[#ffa726]" />
                <span>{badge}</span>
              </div>
            )
          )}
        </motion.div>
        */}
      </div>
    </section>
  );
}
