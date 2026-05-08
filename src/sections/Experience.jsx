import { motion } from "framer-motion";
import { Briefcase, Calendar, Star, Terminal } from "lucide-react";
import { EXPERIENCE } from "../constants";

const Experience = () => {
  return (
    <section id="experience" className="section-padding relative">
      <div className="container-custom relative z-10">
        <div className="text-center mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 mb-6"
          >
            <Briefcase size={14} className="text-royal-500" />
            <span className="text-[10px] font-black text-slate-300 uppercase tracking-[0.3em]">Career Trajectory</span>
          </motion.div>
          <h2 className="text-5xl md:text-6xl font-black text-white tracking-tighter">
            PROFESSIONAL <span className="gradient-text">PATH.</span>
          </h2>
        </div>

        <div className="max-w-4xl mx-auto relative">
          {/* Vertical Timeline Line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-royal-500 via-neon-cyan to-transparent hidden md:block" />

          <div className="space-y-20">
            {EXPERIENCE.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className={`relative flex flex-col md:flex-row items-center justify-between w-full ${
                  index % 2 === 0 ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Timeline Node */}
                <div className="absolute left-0 md:left-1/2 top-0 md:top-1/2 -translate-x-[5px] md:-translate-x-1/2 md:-translate-y-1/2 z-20">
                  <div className="w-3 h-3 rounded-full bg-royal-500 shadow-[0_0_15px_rgba(124,58,237,0.8)] animate-pulse" />
                </div>

                {/* Content Card */}
                <div className="w-full md:w-[45%] ml-8 md:ml-0">
                  <div className="glass-card p-10 group hover:border-royal-500/30 transition-all duration-500">
                    <div className="flex items-center justify-between mb-6">
                      <span className="text-[10px] font-black text-royal-500 uppercase tracking-[0.3em]">
                        {exp.period}
                      </span>
                      <div className="flex gap-2">
                        {exp.tech.slice(0, 2).map((t, i) => (
                          <span key={i} className="px-2 py-0.5 bg-white/5 border border-white/10 rounded text-[8px] font-bold text-slate-400 uppercase tracking-widest">
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>

                    <h3 className="text-2xl font-black text-white mb-2 uppercase tracking-tight group-hover:gradient-text transition-all duration-300">
                      {exp.role}
                    </h3>
                    <p className="text-sm font-bold text-neon-cyan mb-8 flex items-center gap-2">
                      <Star size={14} /> {exp.company}
                    </p>

                    <ul className="space-y-4">
                      {exp.highlights.map((highlight, i) => (
                        <li key={i} className="flex gap-3 text-sm text-slate-400 leading-relaxed">
                          <Terminal size={14} className="mt-1 shrink-0 text-royal-500/50" />
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Spacer for Desktop Grid */}
                <div className="hidden md:block w-[45%]" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;

