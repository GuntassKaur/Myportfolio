import { motion } from "framer-motion";
import { User, GraduationCap, BookOpen, Award, Trophy, Target, Sparkles } from "lucide-react";
import { ABOUT_CONTENT } from "../constants";

const iconMap = {
  GraduationCap: GraduationCap,
  BookOpen: BookOpen,
  Award: Award,
  Trophy: Trophy
};

const About = () => {
  return (
    <section id="about" className="section-padding relative overflow-hidden">
      <div className="container-custom relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-20">
          
          {/* Left: Stats Grid */}
          <div className="flex-1 w-full order-2 lg:order-1">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {ABOUT_CONTENT.academicHighlights.map((stat, i) => {
                const Icon = iconMap[stat.icon] || Award;
                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="glass-card p-8 group relative overflow-hidden"
                  >
                    <div className="absolute top-0 right-0 w-24 h-24 bg-royal-500/5 blur-2xl group-hover:bg-royal-500/10 transition-colors" />
                    
                    <div className="flex flex-col gap-4">
                      <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center text-royal-500 group-hover:scale-110 group-hover:text-neon-cyan transition-all duration-500">
                        <Icon size={24} />
                      </div>
                      <div>
                        <p className="text-[10px] font-bold text-slate-500 uppercase tracking-[0.2em] mb-1">
                          {stat.label.split('(')[0]}
                        </p>
                        <p className="text-3xl font-black text-white tracking-tight group-hover:gradient-text transition-all duration-300">
                          {stat.value}
                        </p>
                        {stat.label.includes('(') && (
                          <p className="text-[10px] font-medium text-slate-400 mt-1 uppercase tracking-widest">
                            {stat.label.split('(')[1].replace(')', '')}
                          </p>
                        )}
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Right: Content & Why Me? */}
          <div className="flex-1 order-1 lg:order-2">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 mb-8">
                <User size={14} className="text-neon-cyan" />
                <span className="text-[10px] font-bold text-slate-300 uppercase tracking-[0.2em]">Engineering Persona</span>
              </div>
              
              <h2 className="text-4xl md:text-5xl font-black mb-8 leading-tight">
                Architecting <span className="gradient-text">Systems</span> <br />
                With Impact.
              </h2>
              
              <p className="text-xl text-slate-400 font-medium leading-relaxed mb-12">
                {ABOUT_CONTENT.text}
              </p>

              {/* Why Me Block */}
              <div className="glass-card p-10 border-l-4 border-l-royal-500 relative overflow-hidden">
                <div className="absolute top-4 right-4 text-white/5">
                  <Target size={80} strokeWidth={1} />
                </div>
                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-4 text-gold-highlight">
                    <Sparkles size={20} />
                    <h4 className="text-sm font-black uppercase tracking-widest">Why Me?</h4>
                  </div>
                  <p className="text-xl font-bold text-white leading-relaxed">
                    "I focus on building systems that combine intelligence, usability, and real-world impact."
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

