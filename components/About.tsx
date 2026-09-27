"use client";

export default function About() {
  const row1 = ["JavaScript", "TypeScript", "React", "Next.js", "Tailwind CSS", "HTML5"];
  const row2 = ["Python", "FastAPI", "Node.js", "Express.js", "MongoDB", "PostgreSQL"];
  const row3 = ["Machine Learning", "Deep Learning", "LLMs", "LangChain", "Prompt Engineering", "Agentic AI"];
  const row4 = ["Git", "GitHub", "Docker", "CI/CD", "Postman", "VS Code"];

  return (
    <section id="about" className="py-24 bg-[#0a0a0a] border-t border-white/10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
          <div>
            <span className="text-xs uppercase tracking-widest text-[#9a9a9a] block mb-2">01 / Introduction</span>
            <h2 className="text-4xl md:text-6xl font-black tracking-tight text-gradient">
              ABOUT <span className="italic font-normal text-[#9a9a9a]">ZUHA</span>
            </h2>
          </div>
        </div>

        {/* Bio Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-20">
          <div className="lg:col-span-4 relative h-80 rounded-2xl overflow-hidden border border-white/10 bg-white/5">
            <img
              src="/zuha-about.jpg"
              alt="Zuha Junaid Headshot"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="lg:col-span-8">
            <p className="text-xl md:text-2xl leading-relaxed text-[#f5f5f5]">
              Hey, I'm <span className="text-[#CFFA1D] font-bold">Zuha</span>, an AI-focused full-stack developer who loves building intelligent, production-ready products. I enjoy turning ideas into scalable applications using <strong className="text-white font-semibold">React, FastAPI, Node.js</strong>, and modern <strong className="text-white font-semibold">AI/LLM</strong> technologies. I care about clean code, thoughtful UX, and shipping things that actually work.
            </p>
          </div>
        </div>
      </div>

      {/* Infinite Marquee Rows */}
      <div className="flex flex-col gap-4 py-4 select-none">
        <MarqueeRow items={row1} direction="left" />
        <MarqueeRow items={row2} direction="right" />
        <MarqueeRow items={row3} direction="left" />
        <MarqueeRow items={row4} direction="right" />
      </div>
    </section>
  );
}

function MarqueeRow({ items, direction }: { items: string[]; direction: "left" | "right" }) {
  const duplicatedItems = [...items, ...items, ...items, ...items];

  return (
    <div className="relative flex overflow-x-hidden group">
      <div
        className={`flex gap-4 whitespace-nowrap animate-marquee-${direction}`}
        style={{
          animation: `marquee 25s linear infinite`,
          animationDirection: direction === "right" ? "reverse" : "normal",
        }}
      >
        {duplicatedItems.map((item, index) => (
          <div
            key={index}
            className="flex items-center gap-3 px-6 py-3 rounded-full bg-white/5 border border-white/10 text-sm font-medium text-[#f5f5f5] hover:border-[#CFFA1D] transition-colors"
          >
            <span className="w-2 h-2 rounded-full bg-[#CFFA1D]" />
            <span>{item}</span>
          </div>
        ))}
      </div>

      <style jsx>{`
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee-left, .animate-marquee-right {
          display: flex;
          width: max-content;
        }
        .group:hover div {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
}