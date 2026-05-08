import { motion } from "framer-motion";
import { Trophy, Star, FileText, Award, Users } from "lucide-react";
import { ACHIEVEMENTS } from "../constants";

const iconMap = {
  Trophy: Trophy,
  Star: Star,
  FileText: FileText,
  Award: Award,
  Users: Users
};

const Achievements = () => {
  return (
    <section id="achievements" className="section-padding relative">
      <div className="container-custom relative z-10">
        <div className="text-center mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 mb-6"
          >
            <Trophy size={14} className="text-gold-highlight" />
            <span className="text-[10px] font-black text-slate-300 uppercase tracking-[0.3em]">Honors & Recognition</span>
          </motion.div>
          <h2 className="text-5xl md:text-6xl font-black text-white tracking-tighter">
            PROUD <span className="gradient-text">MOMENTS.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {ACHIEVEMENTS.map((achievement, index) => {
            const Icon = iconMap[achievement.icon] || Award;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass-card p-10 group relative overflow-hidden"
              >
                <div className="absolute -right-4 -bottom-4 text-white/5 group-hover:text-royal-500/10 transition-colors duration-500">
                  <Icon size={120} strokeWidth={1} />
                </div>
                
                <div className="relative z-10">
                  <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center text-royal-500 group-hover:bg-royal-500 group-hover:text-white transition-all duration-500 mb-8 shadow-inner">
                    <Icon size={28} />
                  </div>
                  <h3 className="text-xl font-black text-white mb-4 uppercase tracking-tight group-hover:gradient-text transition-all duration-300">
                    {achievement.title}
                  </h3>
                  <p className="text-sm text-slate-400 font-medium leading-relaxed italic">
                    "{achievement.desc}"
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Achievements;

