import { motion } from "framer-motion";
import * as LucideIcons from "lucide-react";
import { SKILLS } from "../constants";

const SkillCard = ({ category, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="glass-card p-8 group relative overflow-hidden h-full"
    >
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-royal-500/5 blur-[50px] -mr-10 -mt-10 group-hover:bg-royal-500/10 transition-all duration-500" />
      
      <div className="relative z-10">
        <div className="flex items-center justify-between mb-8">
          <h3 className="text-sm font-black text-white uppercase tracking-[0.3em]">
            {category.category}
          </h3>
          <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-royal-500 group-hover:text-neon-cyan transition-colors">
            <LucideIcons.Layout size={18} />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          {category.items.map((skill, i) => {
            const Icon = LucideIcons[skill.icon] || LucideIcons.Code;
            return (
              <motion.div
                key={i}
                whileHover={{ scale: 1.05 }}
                className="p-4 rounded-2xl bg-white/5 border border-white/5 hover:border-royal-500/30 hover:bg-white/10 transition-all duration-300 flex flex-col items-center gap-3 group/skill"
              >
                <div className="w-8 h-8 rounded-lg bg-black/20 flex items-center justify-center text-slate-500 group-hover/skill:text-neon-cyan transition-colors">
                  <Icon size={16} />
                </div>
                <span className="text-[9px] font-bold text-slate-400 uppercase tracking-widest text-center group-hover/skill:text-white transition-colors">
                  {skill.name}
                </span>
              </motion.div>
            );
          })}
        </div>
      </div>
    </motion.div>
  );
};

const Skills = () => {
  return (
    <section id="skills" className="section-padding relative">
      <div className="container-custom relative z-10">
        <div className="text-center mb-24">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 mb-6"
          >
            <LucideIcons.Zap size={14} className="text-neon-cyan" />
            <span className="text-[10px] font-black text-slate-300 uppercase tracking-[0.3em]">Technical Arsenal</span>
          </motion.div>
          <h2 className="text-5xl md:text-6xl font-black text-white tracking-tighter">
            MASTERED <span className="gradient-text">STACKS.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SKILLS.map((category, index) => (
            <SkillCard key={index} category={category} index={index} />
          ))}
        </div>

        {/* Floating Skill Highlights */}
        <div className="mt-24 flex flex-wrap justify-center gap-12 opacity-30 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-700">
          {["Distributed Systems", "Artificial Intelligence", "Tactical Networking", "Embedded Systems"].map((tag, i) => (
            <div key={i} className="flex items-center gap-3">
              <LucideIcons.Terminal size={14} />
              <span className="text-xs font-black uppercase tracking-[0.5em]">{tag}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;

