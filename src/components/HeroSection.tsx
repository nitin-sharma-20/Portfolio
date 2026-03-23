"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowDown } from "lucide-react";
import dynamic from "next/dynamic";
import Image from "next/image";

const Cubes = dynamic(() => import("./Cubes"), {
  ssr: false,
  loading: () => (
    <div className="absolute inset-0 flex items-center justify-center">
      <div className="w-10 h-10 border-2 border-neutral-300 border-t-neutral-700 rounded-full animate-spin" />
    </div>
  ),
});

export default function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Track scroll progress within the Hero section (which is 200vh tall to allow scrolling)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  // Webflow-style Splitscreen Scroll Animation:
  // Left side moves UP, Right side moves DOWN (or stays fixed), and both fade out slightly
  const yLeft = useTransform(scrollYProgress, [0, 1], ["0vh", "-100vh"]);
  const yRight = useTransform(scrollYProgress, [0, 1], ["0vh", "100vh"]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  return (
    <section ref={containerRef} id="home" className="relative h-[200vh]">
      {/* Sticky container holds the interface while user scrolls the 200vh parent */}
      <div className="sticky top-0 h-screen w-full overflow-hidden" style={{ background: "var(--background)" }}>
        
        {/* 3D Canvas — interactive cubes, fades on scroll */}
        <motion.div style={{ opacity: contentOpacity }} className="absolute inset-0 z-0 pointer-events-auto">
          <Cubes
            gridSize={16}
            maxAngle={45}
            radius={4}
            cellGap={4}
            borderStyle="1px solid #d4c4b0"
            faceColor="#faf8f5"
            rippleColor="#b08968"
            rippleSpeed={1.5}
            autoAnimate
            rippleOnClick
          />
        </motion.div>

        {/* Global Right Photo Area: Splitscreen effect moving DOWN */}
        <motion.div 
          style={{ y: yRight }} 
          className="absolute inset-0 z-0 pointer-events-none overflow-hidden"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 1, ease: "easeOut" }}
            className="absolute bottom-0 right-0 w-full md:w-[55vw] max-w-[850px] h-[75vh]"
          >
            {/* Profile Image with masking and proper alignment */}
            <div className="relative w-full h-full" style={{
              maskImage: "radial-gradient(ellipse 80% 90% at 50% 50%, black 50%, transparent 100%)",
              WebkitMaskImage: "radial-gradient(ellipse 80% 90% at 50% 50%, black 50%, transparent 100%)"
            }}>
              <Image
                src="/profile.png"
                alt="Nitin Sharma portrait"
                fill
                priority
                style={{ objectFit: "cover", objectPosition: "center 20%" }}
                className="pointer-events-auto filter drop-shadow-2xl mix-blend-multiply"
                onError={(e) => {
                  (e.target as HTMLImageElement).style.opacity = '0';
                }}
              />
            </div>
          </motion.div>
        </motion.div>

        {/* Main Grid Layout / Text: Splitscreen effect moving UP */}
        <motion.div 
          style={{ y: yLeft }}
          className="relative z-10 w-full max-w-[1400px] mx-auto px-8 lg:px-16 h-screen max-h-[1000px] flex flex-col md:flex-row items-center justify-between pointer-events-none"
        >
          {/* Vertical text on the left */}
          <div className="absolute left-4 top-1/2 -translate-y-[40%] -rotate-90 hidden 2xl:flex items-center gap-6 text-[10px] sm:text-[12px] font-bold tracking-[0.2em] uppercase text-neutral-400 font-body origin-center select-none whitespace-nowrap">
            <span>Software Engineer</span>
            <span className="w-8 h-px bg-neutral-300" />
            <span>2026</span>
          </div>

          {/* Left Column: Typography & Content */}
          <div className="w-full md:w-[55%] flex flex-col justify-center h-full pt-40 pb-24 md:pt-20">
            {/* Massive Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="font-heading text-8xl sm:text-9xl md:text-[120px] lg:text-[160px] xl:text-[200px] font-normal leading-none tracking-tight text-neutral-900 mb-6 md:mb-8 whitespace-nowrap -ml-2"
            >
              Hello
            </motion.h1>

            {/* Subtitle */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="flex items-center gap-4 hidden sm:flex"
            >
              <div className="w-8 h-px bg-neutral-900" />
              <p className="text-base sm:text-lg lg:text-xl font-medium tracking-wide text-neutral-700 font-body">
                It&apos;s <span className="font-bold text-lg sm:text-xl lg:text-2xl text-neutral-900 font-heading tracking-tight">Nitin Sharma</span> a software engineer
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="flex items-center gap-3 sm:hidden"
            >
              <div className="w-6 h-px bg-neutral-900" />
              <p className="text-sm font-medium tracking-wide text-neutral-700 font-body">
                I&apos;m <span className="font-bold text-base text-neutral-900 font-heading tracking-tight">Nitin Sharma</span> a software engineer
              </p>
            </motion.div>
          </div>
        </motion.div>

        {/* Scroll indicator - Fades out entirely on scroll */}
        <motion.a
          style={{ opacity: contentOpacity }}
          href="#about"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="absolute bottom-10 left-8 lg:left-24 flex items-center gap-3 text-neutral-600 hover:text-neutral-900 transition-colors group z-20 pointer-events-auto"
        >
          <span className="text-[11px] sm:text-[13px] font-bold tracking-[0.15em] uppercase font-body">
            Scroll down
          </span>
          <motion.div
            animate={{ y: [0, 5, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          >
            <ArrowDown size={14} strokeWidth={2.5} />
          </motion.div>
        </motion.a>
      </div>
    </section>
  );
}
