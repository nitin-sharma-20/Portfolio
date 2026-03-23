"use client";

import { motion, useInView, Variants } from "framer-motion";
import { useRef } from "react";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";

const projects = [
  {
    title: "Suvaron",
    subtitle: "Full-Stack Expense Tracker | Dec 2025",
    description:
      "Designed PostgreSQL schema for efficient user expense tracking, implemented real-time data visualization using Chart.js, and built secure authentication using Flask-Login. Deployed and hosted on Render.",
    tech: ["Python", "Flask", "PostgreSQL", "JavaScript", "Render"],
    number: "01",
    features: ["Real-time Charts", "Secure Auth", "Financial Analytics"],
    accent: "var(--accent-warm)",
    screenshot: "/suvaron.png", // Added image link
    link: "https://suvaron.onrender.com/"
  },
  {
    title: "TravelGo",
    subtitle: "Travel Booking Platform | Feb 2026",
    description:
      "Developed ticket booking system supporting multiple transport modes and deployed a scalable backend using AWS EC2 and DynamoDB.",
    tech: ["Python", "Flask", "AWS EC2", "DynamoDB"],
    number: "02",
    features: ["Ticket Booking", "Scalable Backend", "Multi-transport"],
    accent: "var(--accent-copper)",
    screenshot: "/travelgo.png", // Added image link
    link: "https://github.com/nitin-sharma-20/TravelGO.git"
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.25 },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

export default function ProjectsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="relative py-32 px-8" ref={ref}>
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
              Featured Work
            </span>
            <h2 className="font-heading text-5xl sm:text-6xl lg:text-7xl text-neutral-900 leading-tight mb-8">
              Latest{" "}
              <span className="italic" style={{ color: "var(--accent-copper)" }}>
                Works
              </span>
            </h2>
            <p className="text-lg sm:text-xl text-neutral-500 leading-relaxed max-w-sm font-body">
              Production-grade applications demonstrating full-stack development
              and cloud deployment expertise.
            </p>
          </motion.div>
        </div>

        {/* Right side: Scrolling Content */}
        <div className="w-full lg:w-7/12 flex flex-col justify-center py-16 lg:py-32">
          {/* Projects — stacked cards */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="space-y-8"
          >
          {projects.map((project) => (
            <motion.div
              key={project.title}
              variants={cardVariants}
              whileHover={{ y: -4 }}
              className="group border border-neutral-200 bg-white hover:bg-cream-50 transition-all duration-500 overflow-hidden"
            >
              {/* Accent top bar */}
              <div
                className="h-1"
                style={{ background: project.accent }}
              />

              <div className="p-10 sm:p-14 text-center">
                {/* Number — with accent color */}
                <span
                  className="font-heading text-8xl block mb-6 select-none"
                  style={{ color: project.accent, opacity: 0.2 }}
                >
                  {project.number}
                </span>

                {/* Screenshot Placeholder */}
                {project.screenshot ? (
                  <div className="relative w-full aspect-video bg-neutral-100 mb-8 rounded-lg overflow-hidden border border-neutral-200">
                    <Image src={project.screenshot} alt={project.title} fill className="object-cover" />
                  </div>
                ) : (
                  <div className="w-full aspect-video bg-neutral-50 mb-8 rounded-lg border-2 border-dashed border-neutral-300 flex items-center justify-center text-neutral-400 font-body text-sm font-medium transition-colors group-hover:border-neutral-400">
                    [Screenshot Placeholder]
                  </div>
                )}

                {/* Title — larger */}
                <h3
                  className="font-heading text-4xl sm:text-5xl transition-colors mb-3"
                  style={{ color: "var(--accent-charcoal)" }}
                >
                  {project.title}
                </h3>
                <p
                  className="text-base font-semibold mb-8 font-body"
                  style={{ color: project.accent }}
                >
                  {project.subtitle}
                </p>

                {/* Description */}
                <p className="text-neutral-500 leading-relaxed mb-10 max-w-lg mx-auto text-base sm:text-lg font-body">
                  {project.description}
                </p>

                {/* Features — with accent border */}
                <div className="flex flex-wrap justify-center gap-3 mb-10">
                  {project.features.map((feature) => (
                    <span
                      key={feature}
                      className="px-4 py-2 text-[12px] font-bold tracking-wider uppercase rounded-full font-body border"
                      style={{
                        color: project.accent,
                        borderColor: project.accent,
                        backgroundColor: `color-mix(in srgb, ${project.accent} 8%, transparent)`,
                      }}
                    >
                      {feature}
                    </span>
                  ))}
                </div>

                {/* Divider */}
                <div className="w-full h-px bg-neutral-100 mb-8" />

                {/* Tech stack */}
                <div className="flex items-center justify-center gap-4 flex-wrap">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="text-[12px] font-mono text-neutral-500 uppercase tracking-widest font-bold"
                    >
                      {t}
                    </span>
                  ))}
                  <motion.a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.15, rotate: -10 }}
                    className="p-3 rounded-full border-2 cursor-pointer transition-all duration-300 ml-2 block"
                    style={{
                      borderColor: project.accent,
                      color: project.accent,
                    }}
                  >
                    <ArrowUpRight size={18} />
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
        </div>
      </div>
    </section>
  );
}
