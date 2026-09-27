"use client";

import { useState } from "react";
import { ArrowUpRight } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Work", href: "#work" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-40 bg-[#0a0a0a]/80 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Logo / Wordmark */}
        <a href="#home" className="flex items-center gap-2 group">
          <span className="text-xl font-extrabold tracking-wider text-gradient">
            ZJ
          </span>
          <span className="hidden sm:inline-block text-xs uppercase tracking-widest text-[#9a9a9a] group-hover:text-white transition-colors">
            Zuha Junaid
          </span>
        </a>

        {/* Status Badge */}
        <div className="hidden lg:flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-[#CFFA1D]/30 text-xs text-[#f5f5f5]">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#CFFA1D] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#CFFA1D]"></span>
          </span>
          <span className="tracking-wide">Open to Work</span>
        </div>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-[#9a9a9a] hover:text-[#f5f5f5] transition-colors"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Contact CTA Button */}
        <div className="hidden md:flex items-center">
          <a
            href="mailto:zuhawork0@gmail.com"
            className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#CFFA1D] text-black font-semibold text-sm hover:scale-105 transition-transform"
          >
            <span>Let's Talk</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>

        {/* Mobile Menu Toggle Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-[#f5f5f5] focus:outline-none"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-[#0a0a0a] border-b border-white/10 px-6 py-6 flex flex-col gap-4">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-lg font-medium text-[#9a9a9a] hover:text-[#f5f5f5]"
            >
              {link.name}
            </a>
          ))}
          <a
            href="mailto:zuhawork0@gmail.com"
            className="mt-2 flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-[#CFFA1D] text-black font-semibold text-sm"
          >
            <span>Let's Talk</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>
      )}
    </header>
  );
}