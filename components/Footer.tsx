"use client";

import { Mail, Globe, ArrowUpRight } from "lucide-react";

export default function Footer() {
  const contactLinks = [
    {
      name: "Email",
      value: "zuhawork0@gmail.com",
      href: "mailto:zuhawork0@gmail.com",
      icon: <Mail className="w-6 h-6" />
    },
    {
      name: "GitHub",
      value: "github.com/Zuha-Junaid",
      href: "https://github.com/Zuha-Junaid",
      icon: <Globe className="w-6 h-6" />
    },
    {
      name: "LinkedIn",
      value: "linkedin.com/in/zuha-junaid",
      href: "https://www.linkedin.com/in/zuha-junaid",
      icon: <Globe className="w-6 h-6" />
    }
  ];

  return (
    <footer id="contact" className="relative bg-[#0a0a0a] border-t border-white/10 overflow-hidden pt-32 pb-12">
      
      {/* Decorative Dotted Map Graphic Background */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
        style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)',
          backgroundSize: '32px 32px'
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="mb-16">
          <span className="text-xs uppercase tracking-widest text-[#9a9a9a] block mb-2">04 / Contact</span>
          <h2 className="text-5xl md:text-7xl font-black tracking-tight text-gradient">
            GET IN <span className="italic font-normal text-[#9a9a9a]">TOUCH</span>
          </h2>
        </div>

        {/* Contact Links Rows */}
        <div className="flex flex-col border-t border-white/10 mb-32">
          {contactLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              target={link.name !== "Email" ? "_blank" : undefined}
              rel={link.name !== "Email" ? "noopener noreferrer" : undefined}
              className="group flex flex-col md:flex-row md:items-center justify-between py-8 border-b border-white/10 hover:bg-white/[0.02] transition-colors"
            >
              <div className="flex items-center gap-6 mb-4 md:mb-0">
                <div className="w-14 h-14 rounded-full border border-white/20 flex items-center justify-center text-[#f5f5f5] group-hover:border-[#CFFA1D] group-hover:text-[#CFFA1D] transition-colors">
                  {link.icon}
                </div>
                <div>
                  <span className="text-xs uppercase tracking-widest text-[#9a9a9a] block mb-1">
                    {link.name}
                  </span>
                  <span className="text-xl md:text-2xl font-semibold text-white group-hover:text-[#CFFA1D] transition-colors">
                    {link.value}
                  </span>
                </div>
              </div>
              <div className="hidden md:flex items-center text-[#9a9a9a] group-hover:text-[#CFFA1D] transition-colors">
                <ArrowUpRight className="w-6 h-6 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </div>
            </a>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-white/10 text-sm text-[#9a9a9a]">
          <p>© Zuha Junaid. All rights reserved.</p>
          <p className="mt-4 md:mt-0 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#CFFA1D] animate-pulse" />
            Open to work & volunteer opportunities worldwide
          </p>
        </div>

      </div>
    </footer>
  );
}