"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Award, ExternalLink, CheckCircle2, Calendar } from "lucide-react";

export default function CertificationsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="certifications" className="relative py-32 px-8" ref={ref}>
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
              Credentials
            </span>
            <h2 className="font-heading text-5xl sm:text-6xl lg:text-7xl text-neutral-900 leading-tight mb-8">
              Professional{" "}
              <span className="italic" style={{ color: "var(--accent-copper)" }}>
                Certifications
              </span>
            </h2>
            <p className="text-lg sm:text-xl text-neutral-500 leading-relaxed max-w-sm font-body">
              Industry-recognized certifications validating expertise in cloud
              computing and modern technologies.
            </p>
          </motion.div>
        </div>

        {/* Right side: Scrolling Content */}
        <div className="w-full lg:w-7/12 flex flex-col justify-center py-16 lg:py-32">
          {/* Certification Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.7 }}
            whileHover={{ y: -4 }}
            className="border border-neutral-200 bg-white hover:bg-cream-50 transition-all duration-500 overflow-hidden"
          >
          {/* Accent bar */}
          <div
            className="h-1"
            style={{ background: "linear-gradient(90deg, var(--accent-warm), var(--accent-copper))" }}
          />

          <div className="p-10 sm:p-16 text-center">
            {/* Badge */}
            <div
              className="w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-10 border-2"
              style={{
                borderColor: "var(--accent-warm)",
                backgroundColor: "color-mix(in srgb, var(--accent-warm) 10%, white)",
              }}
            >
              <Award size={40} style={{ color: "var(--accent-warm)" }} />
            </div>

            {/* Title */}
            <h3 className="font-heading text-3xl sm:text-4xl text-neutral-900 mb-3">
              AWS Certified Cloud Practitioner
            </h3>
            <p
              className="text-base font-semibold mb-8 font-body"
              style={{ color: "var(--accent-copper)" }}
            >
              Amazon Web Services
            </p>

            {/* Meta */}
            <div className="flex items-center justify-center gap-5 mb-10 text-base text-neutral-500 font-body">
              <span className="flex items-center gap-2">
                <Calendar size={16} style={{ color: "var(--accent-warm)" }} />
                <span className="font-bold">2025</span>
              </span>
              <span
                className="font-mono text-sm px-4 py-1.5 rounded-full font-bold"
                style={{
                  color: "var(--accent-copper)",
                  backgroundColor: "color-mix(in srgb, var(--accent-copper) 10%, transparent)",
                }}
              >
                CLF-C02
              </span>
              <motion.a
                href="https://www.credly.com/badges/07b0e92c-67b8-42bc-b569-44429b865d21/public_url"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.15 }}
                className="p-2.5 rounded-full border-2 transition-all"
                style={{
                  borderColor: "var(--accent-warm)",
                  color: "var(--accent-warm)",
                }}
                aria-label="Verify certification"
              >
                <ExternalLink size={16} />
              </motion.a>
            </div>

            {/* Divider */}
            <div className="w-full max-w-md mx-auto h-px bg-neutral-100 mb-10" />

            {/* Skills */}
            <p
              className="text-[13px] font-bold tracking-[0.2em] uppercase mb-6 font-body"
              style={{ color: "var(--accent-olive)" }}
            >
              Skills Validated
            </p>
            <div className="flex flex-wrap justify-center gap-x-10 gap-y-4">
              {[
                "Cloud Concepts",
                "AWS Services",
                "Security & Compliance",
                "Billing & Pricing",
              ].map((skill) => (
                <div
                  key={skill}
                  className="flex items-center gap-2.5 text-base font-semibold text-neutral-700 font-body"
                >
                  <CheckCircle2
                    size={18}
                    style={{ color: "var(--accent-warm)" }}
                  />
                  <span>{skill}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
        </div>
      </div>
    </section>
  );
}
