import { motion } from "framer-motion";
import { GraduationCap, Award, BookOpen } from "lucide-react";
import { EDUCATION } from "../constants";

const Education = () => {
  return (
    <section id="education" className="section-padding relative">
      <div className="container-custom relative z-10">
        <div className="text-center mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 mb-6"
          >
            <GraduationCap size={14} className="text-royal-500" />
            <span className="text-[10px] font-black text-slate-300 uppercase tracking-[0.3em]">Academic Records</span>
          </motion.div>
          <h2 className="text-5xl md:text-6xl font-black text-white tracking-tighter">
            SCHOLASTIC <span className="gradient-text">FOUNDATION.</span>
          </h2>
        </div>

        <div className="max-w-5xl mx-auto space-y-8">
          {EDUCATION.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass-card p-10 group relative overflow-hidden flex flex-col md:flex-row items-center gap-10"
            >
              <div className="w-20 h-20 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-royal-500 group-hover:bg-royal-500 group-hover:text-white transition-all duration-500 shadow-inner shrink-0">
                <BookOpen size={32} />
              </div>

              <div className="flex-1 text-center md:text-left">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
                  <h3 className="text-2xl font-black text-white uppercase tracking-tight group-hover:gradient-text transition-all duration-300">
                    {edu.degree}
                  </h3>
                  <span className="text-[10px] font-black text-neon-cyan uppercase tracking-[0.3em]">
                    {edu.period}
                  </span>
                </div>
                <p className="text-lg font-bold text-slate-400 mb-6 uppercase tracking-widest">
                  {edu.institution}
                </p>
                <div className="flex flex-wrap justify-center md:justify-start gap-4">
                  {edu.highlights.map((h, i) => (
                    <div key={i} className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 border border-white/5 text-[10px] font-black text-slate-300 uppercase tracking-widest">
                      <Award size={14} className="text-gold-highlight" />
                      {h}
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;

