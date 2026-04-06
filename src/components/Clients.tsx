import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";

const clients = [
  {
    name: "Rohit Jangid",
    project: "Data Cleaning Website",
    testimonial:
      "“Laxit did an excellent job developing my website. He understood my requirements clearly, suggested great improvements, and delivered a fast, responsive website. Communication was smooth throughout the project. Highly recommended for web development.” --Rohit Jangid",
    rating: 5,
  },
  {
    name: "Yashraj singh Jodha",
    project: "Data Cleaning Website",
    testimonial:
      "Great experience working with Laxit. He understood my requirements, suggested valuable improvements, and delivered a fast, responsive website. Highly recommended.”--Yashraj singh Jodha",
    rating: 5,
  },
  
];

export function Clients() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="clients" className="relative py-32 overflow-hidden bg-[#0a0a0f]">
      
      {/* Background glow */}
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
          <p className="text-[#ffa726] mb-4 tracking-widest">
            TRUSTED BY CLIENTS
          </p>

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
            Client Testimonials
          </h2>

          <p
            className="text-white/70 max-w-3xl mx-auto"
            style={{ fontSize: "clamp(1rem, 2vw, 1.125rem)" }}
          >
            Feedback from clients I’ve worked with on web development projects.
            Their satisfaction and success are my biggest achievements.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {clients.map((client, index) => (
            <motion.div
              key={index}
              className="glass p-8 rounded-2xl hover:glow-gold transition-all"
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.03, y: -5 }}
            >
              
              {/* Client Info */}
              <div className="flex items-center gap-4 mb-4">
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center"
                  style={{
                    background:
                      "linear-gradient(135deg, rgba(255,167,38,0.2) 0%, rgba(0,212,255,0.2) 100%)",
                    border: "2px solid rgba(255,255,255,0.1)",
                  }}
                >
                  <span
                    style={{
                      fontWeight: 700,
                      background:
                        "linear-gradient(135deg, #ffa726 0%, #00d4ff 100%)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                    }}
                  >
                    {client.name.charAt(0)}
                  </span>
                </div>

                <div>
                  <p className="text-white">{client.name}</p>
                  <p className="text-white/50 text-sm">{client.project}</p>
                </div>
              </div>

              {/* Star Rating */}
              <div className="flex mb-4">
                {Array.from({ length: client.rating }).map((_, i) => (
                  <span key={i} className="text-[#ffa726] text-lg">
                    ★
                  </span>
                ))}
              </div>

              {/* Testimonial Text */}
              <p className="text-white/70 italic">
                "{client.testimonial}"
              </p>
            </motion.div>
          ))}
        </div>

        {/* Bottom badges */}
        <motion.div
          className="mt-20 flex flex-wrap justify-center gap-8 items-center"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          {["10+ Projects Completed", "2 Happy Clients", "100% Satisfaction"].map(
            (badge, index) => (
              <div key={index} className="flex items-center gap-2 text-white/50">
                <div className="w-2 h-2 rounded-full bg-[#ffa726]" />
                <span>{badge}</span>
              </div>
            )
          )}
        </motion.div>

      </div>
    </section>
  );
}