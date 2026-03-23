"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, ArrowUp } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative py-12 px-8">
      <div className="absolute top-0 left-8 right-8 h-px bg-neutral-200" />

      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col items-center gap-6 text-center">
          {/* Logo */}
          <div className="w-8 h-8 rounded-full bg-neutral-900 flex items-center justify-center">
            <span className="text-white text-xs font-bold font-body">NS</span>
          </div>

          {/* Built with */}
          <p className="text-[11px] tracking-[0.15em] uppercase text-neutral-400 font-body">
            Designed &amp; Built with care
          </p>

          {/* Social + top */}
          <div className="flex items-center gap-2">
            {[
              { icon: Github, href: "https://github.com/nitin-sharma-20", label: "GitHub" },
              { icon: Linkedin, href: "https://www.linkedin.com/in/nitin-sharma-9a7424299/", label: "LinkedIn" },
            ].map(({ icon: Icon, href, label }) => (
              <motion.a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="p-2.5 rounded-full text-neutral-400 hover:text-neutral-700 hover:bg-cream-200 transition-all duration-300"
              >
                <Icon size={16} />
              </motion.a>
            ))}

            <div className="w-px h-5 bg-neutral-200 mx-2" />

            <motion.button
              onClick={scrollToTop}
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.9 }}
              className="p-2.5 rounded-full text-neutral-400 hover:text-neutral-700 hover:bg-cream-200 transition-all duration-300"
              aria-label="Scroll to top"
            >
              <ArrowUp size={16} />
            </motion.button>
          </div>

          {/* Copyright */}
          <p className="text-xs text-neutral-300 font-body">
            © {new Date().getFullYear()} Nitin Sharma. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
