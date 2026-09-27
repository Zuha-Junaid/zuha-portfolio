"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export default function Services() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const services = [
    {
      num: "01",
      title: "AI & Machine Learning Development",
      desc: "Building, training, and deploying ML/DL models for real-world prediction and classification tasks.",
      details: "Specialized in building predictive analytics models, computer vision systems, and deep neural networks using Python, TensorFlow, and PyTorch."
    },
    {
      num: "02",
      title: "Full-Stack Web Development",
      desc: "End-to-end applications with React/Next.js frontends and FastAPI/Node.js backends.",
      details: "Crafting performant, scalable, and responsive web apps with immaculate UI/UX, robust state management, and seamless database integration."
    },
    {
      num: "03",
      title: "Backend & API Development",
      desc: "Designing REST APIs, databases, and scalable server architecture.",
      details: "Building secure, high-throughput backend services, managing relational/NoSQL databases (PostgreSQL, MongoDB), and optimizing server performance."
    },
    {
      num: "04",
      title: "AI Agents & Automation",
      desc: "Building multi-agent systems and LLM-powered automation workflows.",
      details: "Developing autonomous agent frameworks that orchestrate multi-step business logic, tool usage, and real-time data processing."
    },
    {
      num: "05",
      title: "LLM Integration & Prompt Engineering",
      desc: "Integrating and evaluating large language models (LangChain, Google Gemini, MCP).",
      details: "Leveraging cutting-edge LLMs to build context-aware retrieval systems, smart chatbots, and advanced prompt engineering pipelines."
    },
    {
      num: "06",
      title: "DevOps & Tooling",
      desc: "Docker, CI/CD pipelines, Git workflows, and clean deployment practices.",
      details: "Containerizing services, streamlining deployment workflows via CI/CD, and ensuring production reliability across modern cloud environments."
    }
  ];

  return (
    <section id="skills" className="py-24 bg-[#0a0a0a] border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="mb-16">
          <span className="text-xs uppercase tracking-widest text-[#9a9a9a] block mb-2">02 / Expertise</span>
          <h2 className="text-4xl md:text-6xl font-black tracking-tight text-gradient">
            WHAT I <span className="italic font-normal text-[#9a9a9a]">CAN DO</span>
          </h2>
        </div>

        {/* Accordion List */}
        <div className="flex flex-col border-t border-white/10">
          {services.map((service, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={service.num}
                onClick={() => setOpenIndex(isOpen ? null : index)}
                className={`group border-b border-white/10 transition-colors duration-300 cursor-pointer overflow-hidden ${
                  isOpen ? "bg-[#CFFA1D] text-black" : "bg-transparent text-[#f5f5f5] hover:bg-white/[0.02]"
                }`}
              >
                <div className="py-8 px-6 md:px-10 flex items-center justify-between">
                  <div className="flex items-center gap-6 md:gap-12">
                    <span className={`text-sm md:text-base font-mono font-bold ${isOpen ? "text-black/60" : "text-[#9a9a9a]"}`}>
                      {service.num}
                    </span>
                    <h3 className="text-xl md:text-3xl font-extrabold tracking-tight">
                      {service.title}
                    </h3>
                  </div>

                  <div className={`w-10 h-10 rounded-full flex items-center justify-center border transition-transform duration-300 ${
                    isOpen ? "border-black bg-black text-[#CFFA1D] rotate-45" : "border-white/20 text-[#f5f5f5] group-hover:border-white"
                  }`}>
                    <ArrowUpRight className="w-5 h-5" />
                  </div>
                </div>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <div className="px-6 md:px-10 pb-8 pt-2 max-w-3xl">
                        <p className="text-lg md:text-xl font-medium mb-3 opacity-90">
                          {service.desc}
                        </p>
                        <p className="text-sm md:text-base opacity-75">
                          {service.details}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}