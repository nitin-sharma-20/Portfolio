"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Mail, ArrowUpRight, MapPin, Clock } from "lucide-react";

export default function ContactSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" className="relative py-32 px-8" ref={ref}>
      {/* Top border */}
      <div className="absolute top-0 left-8 right-8 h-px bg-neutral-200" />

      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row relative">
        {/* Left side: Sticky Header */}
        <div className="w-full lg:w-5/12 lg:sticky lg:top-0 lg:h-screen flex flex-col justify-center pr-8 py-16 lg:py-0">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <span
              className="text-[13px] font-bold tracking-[0.2em] uppercase block mb-5 font-body"
              style={{ color: "var(--accent-warm)" }}
            >
              Get In Touch
            </span>
            <h2 className="font-heading text-5xl sm:text-6xl lg:text-7xl text-neutral-900 leading-tight mb-8">
              Let&apos;s{" "}
              <span className="italic" style={{ color: "var(--accent-copper)" }}>
                Connect
              </span>
            </h2>
            <p className="text-lg sm:text-xl text-neutral-500 leading-relaxed max-w-sm font-body">
              I&apos;m always open to discussing new opportunities, interesting
              projects, or just a conversation about technology.
            </p>
          </motion.div>
        </div>

        {/* Right side: Scrolling Content */}
        <div className="w-full lg:w-7/12 flex flex-col justify-center py-16 lg:py-32">
          <div className="bg-white border border-neutral-200 p-10 sm:p-16 text-center lg:text-left transition-all duration-500 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05)]">
            {/* CTA Button — warm accent */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="mb-16"
            >
              <motion.a
                href="mailto:nitinsharmaedm@gmail.com"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center gap-3 px-10 py-5 rounded-full text-white font-bold text-base tracking-wide transition-all duration-300 group font-body"
                style={{ background: "var(--accent-warm)" }}
              >
                <Mail size={20} />
                Say Hello
                <ArrowUpRight
                  size={18}
                  className="group-hover:rotate-45 transition-transform duration-300"
                />
              </motion.a>
            </motion.div>

            {/* Email */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="mb-14"
            >
              <a
                href="mailto:nitinsharmaedm@gmail.com"
                className="text-xl sm:text-2xl lg:text-3xl font-heading text-neutral-700 hover:text-neutral-900 transition-colors underline underline-offset-4 decoration-neutral-300 hover:decoration-neutral-700"
              >
                nitinsharmaedm@gmail.com
              </a>
            </motion.div>

            {/* Info row */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="flex items-center justify-center lg:justify-start gap-8 flex-wrap text-base text-neutral-500 font-body"
            >
              <span className="flex items-center gap-2 font-semibold">
                <MapPin size={16} style={{ color: "var(--accent-warm)" }} />
                India
              </span>
              <span className="w-px h-5 bg-neutral-300 hidden sm:block" />
              <span className="flex items-center gap-2 font-semibold">
                <span
                  className="w-2 h-2 rounded-full"
                  style={{ background: "var(--accent-olive)" }}
                />
                Open for Work
              </span>
              <span className="w-px h-5 bg-neutral-300 hidden sm:block" />
              <span className="flex items-center gap-2 font-semibold">
                <Clock size={16} style={{ color: "var(--accent-warm)" }} />
                Within 24 hours
              </span>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
