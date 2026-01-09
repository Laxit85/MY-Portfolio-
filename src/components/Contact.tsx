import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef, useState } from "react";
import { Mail, MapPin, Phone, Send, Instagram, Linkedin} from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
const socialLinks = [
  { icon: Instagram, label: "Instagram", href: "https://www.instagram.com/thewebcraft25/" },
  { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/laxit-jangid-8588a3257/" },
  { icon: FaWhatsapp, label: "WhatsApp", href: "https://wa.me/917878429752" },
];

const contactInfo = [
  { icon: Mail, label: "laxitjangid2k5@gmail.com.com" },
  { icon: Phone, label: "+91 7878429752" },
  { icon: MapPin, label: "Jodhpur, Raj., India" },
];

export function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setFormData({ name: "", email: "", message: "" });
      alert("Message sent! We'll get back to you soon.");
    }, 1500);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="relative py-32 overflow-hidden bg-[#0a0a0f]">
      {/* Background elements */}
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
          <p className="text-[#00ffc8] mb-4 tracking-widest">GET IN TOUCH</p>
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
            Let's Connect
          </h2>
          <p className="text-white/70 max-w-3xl mx-auto" style={{ fontSize: "clamp(1rem, 2vw, 1.125rem)" }}>
            Have a project in mind? We'd love to hear about it. Drop us a message
            and let's create something extraordinary together.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <form onSubmit={handleSubmit} className="glass-dark p-8 rounded-3xl">
              <div className="mb-6">
                <label htmlFor="name" className="block mb-2 text-white/80">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white focus:border-[#00d4ff] focus:outline-none focus:ring-2 focus:ring-[#00d4ff]/20 transition-all"
                  placeholder="Your name"
                />
              </div>

              <div className="mb-6">
                <label htmlFor="email" className="block mb-2 text-white/80">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white focus:border-[#00d4ff] focus:outline-none focus:ring-2 focus:ring-[#00d4ff]/20 transition-all"
                  placeholder="your@email.com"
                />
              </div>

              <div className="mb-6">
                <label htmlFor="message" className="block mb-2 text-white/80">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white focus:border-[#00d4ff] focus:outline-none focus:ring-2 focus:ring-[#00d4ff]/20 transition-all resize-none"
                  placeholder="Tell us about your project..."
                />
              </div>

              <motion.button
                type="submit"
                className="w-full py-4 rounded-xl flex items-center justify-center gap-2"
                style={{
                  background: isSubmitting
                    ? "rgba(255,255,255,0.1)"
                    : "linear-gradient(135deg, #00d4ff 0%, #00ffc8 100%)",
                }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                disabled={isSubmitting}
              >
                <span className="text-[#0a0a0f]">
                  {isSubmitting ? "Sending..." : "Send Message"}
                </span>
                {!isSubmitting && <Send size={18} className="text-[#0a0a0f]" />}
              </motion.button>
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col justify-between"
          >
            {/* Info Cards */}
            <div className="space-y-6 mb-12">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={index}
                  className="glass p-6 rounded-2xl flex items-center gap-4 group hover:glow-blue transition-all cursor-pointer"
                  initial={{ opacity: 0, x: 20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                  whileHover={{ x: 5 }}
                >
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-gradient-to-br from-[#00d4ff]/20 to-[#00ffc8]/20 group-hover:from-[#00d4ff]/40 group-hover:to-[#00ffc8]/40 transition-all">
                    <info.icon size={24} className="text-[#00d4ff]" />
                  </div>
                  <span className="text-white/80 group-hover:text-white transition-colors">
                    {info.label}
                  </span>
                </motion.div>
              ))}
            </div>

            {/* Social Links */}
            <div>
              <p className="text-white/70 mb-6">Follow our journey</p>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    className="w-12 h-12 rounded-full glass flex items-center justify-center group hover:glow-teal transition-all"
                    initial={{ opacity: 0, scale: 0 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.5, delay: 1 + index * 0.1 }}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <social.icon
                      size={20}
                      className="text-white/70 group-hover:text-[#00ffc8] transition-colors"
                    />
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Decorative element */}
            <motion.div
              className="mt-12 relative h-64 rounded-3xl overflow-hidden"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 1.2 }}
            >
              <img
                src="https://images.unsplash.com/photo-1716947375981-73b1b0886a71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaW5lbWF0aWMlMjBsYW5kc2NhcGUlMjBuaWdodHxlbnwxfHx8fDE3NjY5MTU0ODB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Contact visual"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0f] via-transparent to-transparent" />
              <div className="absolute inset-0 flex items-center justify-center">
                <p
                  className="text-center px-6"
                  style={{
                    fontSize: "clamp(1.25rem, 3vw, 1.75rem)",
                    fontWeight: 600,
                    textShadow: "0 2px 20px rgba(0,0,0,0.5)",
                  }}
                >
                  Let's Create Magic Together
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Footer */}
        <motion.div
          className="mt-24 pt-12 border-t border-white/10 text-center"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 1.4 }}
        >
          <p className="text-white/50 mb-4">
            © 2025 Voyager. All rights reserved.
          </p>
          <p className="text-white/30 text-sm">
            Crafted with passion for extraordinary experiences
          </p>
        </motion.div>
      </div>
    </section>
  );
}
