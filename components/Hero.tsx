"use client";

import { motion } from "framer-motion";
import { ArrowDown, ArrowUpRight } from "lucide-react";

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex flex-col justify-center items-center pt-28 pb-16 px-6 overflow-hidden bg-[#0a0a0a]">
      {/* Soft radial glow background */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[600px] h-[600px] rounded-full bg-white/[0.04] blur-[120px]" />
      </div>

      {/* Giant Background Headline */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden">
        <span className="text-[15vw] font-black tracking-tighter text-gradient opacity-40 uppercase">
          ZUHAJUNAID
        </span>
      </div>

      {/* Main Hero Container */}
      <div className="relative z-10 max-w-7xl w-full mx-auto flex flex-col items-center justify-between min-h-[70vh]">
        
        {/* Top Info / Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-col items-center gap-3 mb-8"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-[#CFFA1D]/30 text-xs text-[#f5f5f5]">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#CFFA1D] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#CFFA1D]"></span>
            </span>
            <span className="tracking-widest uppercase font-medium">Open to Work & Volunteer — Worldwide</span>
          </div>
        </motion.div>

        {/* Center Content: Cutout Image & Tagline */}
        <div className="relative w-full flex flex-col items-center justify-center my-auto">
          {/* Profile Image with Multiply Blend Mode to drop out the white background */}
          <motion.div
            initial={{ opacity: 0, y: 120, scale: 0.92 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
            className="relative z-20 w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 flex items-center justify-center"
          >
            <img
              src="/zuha-cutout.png"
              alt="Zuha Junaid"
              className="w-full h-full object-contain scale-125 filter contrast-125 mix-blend-multiply"
            />
          </motion.div>

          {/* Tagline positioned neatly */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-8 text-center"
          >
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-[#f5f5f5] flex items-center justify-center gap-3">
              <br></br>
              <br></br>
              <span>AI-Focused</span>
              <span className="italic font-normal text-[#9a9a9a]">Software Developer</span>
            </h1>
          </motion.div>
        </div>

        {/* Bottom Bar: Scroll Indicator & Quick CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="w-full flex items-center justify-between mt-12 pt-6 border-t border-white/10"
        >
          <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#9a9a9a]">
            <ArrowDown className="w-4 h-4 animate-bounce text-[#CFFA1D]" />
            <span>Scroll to explore</span>
          </div>

          <a
            href="mailto:zuhawork0@gmail.com"
            className="flex items-center gap-2 px-6 py-3 rounded-full bg-[#CFFA1D] text-black font-bold text-sm hover:scale-105 transition-transform"
          >
            <span>Get in Touch</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </motion.div>

      </div>
    </section>
  );
}