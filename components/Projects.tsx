"use client";

import { Code, ArrowUpRight } from "lucide-react";

export default function Projects() {
  const projects = [
    {
      num: "01",
      title: "Recall",
      subtitle: "Memory Assistant",
      desc: "An AI-powered recall/memory or retrieval assistant application designed to streamline information retrieval.",
      github: "https://github.com/Zuha-Junaid/Recall",
      tech: ["Python", "AI/LLM", "React"]
    },
    {
      num: "02",
      title: "Facial Emotion",
      subtitle: "Recognition",
      desc: "A deep learning model that detects and classifies human facial emotions in real time using computer vision.",
      github: "https://github.com/Zuha-Junaid/Facial-Emotion-Recognition",
      tech: ["Python", "Deep Learning", "OpenCV"]
    },
    {
      num: "03",
      title: "Diabetes",
      subtitle: "Prediction",
      desc: "A machine learning model that predicts diabetes risk from patient health data with high clinical accuracy.",
      github: "https://github.com/Zuha-Junaid/Diabetes-Prediction",
      tech: ["Python", "Machine Learning", "Scikit-Learn"]
    },
    {
      num: "04",
      title: "Flow",
      subtitle: "Finance",
      desc: "A personal and business finance tracking and analytics web application built for modern money management.",
      github: "https://github.com/Zuha-Junaid/FlowFinance",
      tech: ["React", "Node.js", "Tailwind CSS"]
    },
    {
      num: "05",
      title: "AI Multi-Agent",
      subtitle: "Business Automation",
      desc: "A multi-agent LLM system that autonomously automates complex business workflows and routine tasks.",
      github: "https://github.com/Zuha-Junaid/AI-Multi-Agent-Business-Automation",
      tech: ["Python", "LangChain", "LLMs"]
    },
    {
      num: "06",
      title: "LLM Benchmarking",
      subtitle: "Dashboard",
      desc: "An interactive dashboard for comparing and benchmarking large language model performance metrics.",
      github: "https://github.com/Zuha-Junaid/LLM-Benchmarking-Dashboard",
      tech: ["React", "FastAPI", "Analytics"]
    }
  ];

  return (
    <section id="work" className="py-24 bg-[#0a0a0a] border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20">
          <div>
            <span className="text-xs uppercase tracking-widest text-[#9a9a9a] block mb-2">03 / Portfolio</span>
            <h2 className="text-4xl md:text-6xl font-black tracking-tight text-gradient">
              SELECTED <span className="italic font-normal text-[#9a9a9a]">WORK</span>
            </h2>
          </div>
          <p className="text-[#9a9a9a] text-sm mt-4 md:mt-0 max-w-xs">
            A selection of intelligent systems, full-stack applications, and machine learning models.
          </p>
        </div>

        {/* Projects Grid / List without Pictures */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div
              key={project.num}
              className="p-8 rounded-2xl bg-white/[0.02] border border-white/10 hover:border-[#CFFA1D]/50 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="text-sm font-mono text-[#CFFA1D] font-bold">{project.num}</span>
                  <span className="text-xs uppercase tracking-widest text-[#9a9a9a] font-mono">Verified Repository</span>
                </div>

                <h3 className="text-2xl md:text-3xl font-extrabold tracking-tight text-white mb-3 group-hover:text-[#CFFA1D] transition-colors">
                  {project.title} <span className="italic font-normal text-[#9a9a9a]">{project.subtitle}</span>
                </h3>

                <p className="text-[#9a9a9a] text-base mb-6 leading-relaxed">
                  {project.desc}
                </p>

                {/* Tech stack tags */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tech.map((t) => (
                    <span key={t} className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-[#f5f5f5]">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Links */}
              <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-[#CFFA1D] text-black font-bold text-sm hover:scale-105 transition-transform"
                >
                  <Code className="w-4 h-4" />
                  <span>GitHub Repo</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}