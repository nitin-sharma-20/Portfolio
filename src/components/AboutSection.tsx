"use client";

import { motion, useInView, Variants } from "framer-motion";
import { useRef } from "react";

const skillsCategories = [
  {
    title: "Frontend",
    skills: ["JavaScript (ES6+)", "HTML5", "CSS3", "Bootstrap", "Jinja2"]
  },
  {
    title: "Backend",
    skills: ["Python", "Java", "SQL", "Flask"]
  },
  {
    title: "Cloud & Tools",
    skills: ["AWS", "Git", "GitHub", "VS Code"]
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

export default function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="relative py-32 px-8" ref={ref}>
      {/* Top border */}
      <div className="absolute top-0 left-8 right-8 h-px bg-neutral-200" />

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row relative">
        {/* Left side: Sticky Header */}
        <div className="w-full md:w-1/2 md:sticky md:top-0 md:h-screen flex flex-col justify-center pr-8 py-16 md:py-0">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <span
              className="text-[13px] font-bold tracking-[0.2em] uppercase block mb-5 font-body"
              style={{ color: "var(--accent-warm)" }}
            >
              About Me
            </span>
            <h2 className="font-heading text-5xl sm:text-6xl lg:text-7xl text-neutral-900 leading-tight mb-8">
              Passion for{" "}
              <span className="italic" style={{ color: "var(--accent-copper)" }}>
                Problem Solving
              </span>
            </h2>
            <p className="text-lg sm:text-xl text-neutral-500 leading-relaxed font-body">
              A dedicated B.Tech CSE student with a strong foundation in data
              structures, algorithms, and cloud computing. I love building
              scalable, production-ready applications that solve real-world
              problems.
            </p>
          </motion.div>
        </div>

        {/* Right side: Scrolling Content */}
        <div className="w-full md:w-1/2 flex flex-col justify-center py-16 md:py-32">
          {/* Stats */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="flex flex-col gap-px bg-neutral-200 mb-20 border border-neutral-200"
          >
            <motion.div
              variants={itemVariants}
              className="bg-cream-50 p-10 sm:p-14 hover:bg-cream-100 transition-colors duration-500"
            >
              <span
                className="font-heading text-6xl sm:text-7xl lg:text-8xl block mb-3"
                style={{ color: "var(--accent-warm)" }}
              >
                200<span className="text-neutral-300">+</span>
              </span>
              <p className="text-sm font-bold tracking-[0.15em] uppercase text-neutral-500 font-body">
                DSA Problems Solved
              </p>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="bg-cream-50 p-10 sm:p-14 hover:bg-cream-100 transition-colors duration-500"
            >
              <span
                className="font-heading text-6xl sm:text-7xl lg:text-8xl block mb-3"
                style={{ color: "var(--accent-copper)" }}
              >
                1436
              </span>
              <p className="text-sm font-bold tracking-[0.15em] uppercase text-neutral-500 font-body">
                LeetCode Rating
              </p>
            </motion.div>
          </motion.div>

          {/* Skills Layout */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            <div className="mb-12">
              <h3 className="font-heading text-4xl sm:text-5xl text-neutral-900 mb-6">
                Technical <span className="italic" style={{ color: "var(--accent-copper)" }}>Skills</span>
              </h3>
              <div className="w-16 h-px bg-neutral-300" />
            </div>

            <div className="flex flex-col gap-12">
              {skillsCategories.map((category) => (
                <div key={category.title}>
                  <p
                    className="text-[14px] font-bold tracking-[0.25em] uppercase mb-6 font-body"
                    style={{ color: "var(--accent-warm)" }}
                  >
                    {category.title}
                  </p>
                  <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    className="flex flex-wrap gap-4"
                  >
                    {category.skills.map((skill) => (
                      <motion.div
                        key={skill}
                        variants={itemVariants}
                        whileHover={{ y: -3, borderColor: "var(--accent-warm)" }}
                        className="flex items-center px-6 py-3.5 rounded-full border border-neutral-200 bg-white text-neutral-700 text-sm font-semibold hover:bg-cream-100 transition-all duration-300 cursor-default font-body shadow-sm hover:shadow"
                      >
                        {skill}
                      </motion.div>
                    ))}
                  </motion.div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
