import { motion } from "framer-motion";
import { Trophy, Star, FileText, Award, Cpu, Zap, Rocket } from "lucide-react";
import { ACHIEVEMENTS } from "../constants";

const Achievements = () => {
    const iconMap = {
        Trophy, Star, FileText, Award, Cpu, Zap, Rocket
    };

    return (
        <section id="achievements" className="section-padding relative overflow-hidden bg-grid">
            <div className="container relative z-10">
                <div className="text-center mb-24">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-800/50 border border-white/5 mb-6"
                    >
                        <Trophy size={16} className="text-indigo-400" />
                        <span className="text-[10px] font-bold text-slate-300 uppercase tracking-[0.2em]">Key Milestones</span>
                    </motion.div>
                    <h2 className="section-title">AWARDS & ACHIEVEMENTS</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {ACHIEVEMENTS.map((achievement, index) => {
                        const IconComponent = iconMap[achievement.icon] || Award;
                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="glass-card p-10 group"
                            >
                                <div className="w-14 h-14 rounded-2xl bg-indigo-600/10 flex items-center justify-center text-indigo-400 group-hover:bg-indigo-600 group-hover:text-white transition-all mb-8">
                                    <IconComponent size={28} />
                                </div>
                                <h3 className="text-xl font-black text-white mb-4 uppercase tracking-tight group-hover:text-indigo-400 transition-colors">
                                    {achievement.title}
                                </h3>
                                <p className="text-sm text-slate-400 font-medium leading-relaxed italic">
                                    "{achievement.desc}"
                                </p>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default Achievements;
