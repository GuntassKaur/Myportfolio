import { motion } from "framer-motion";
import { Trophy, FileText, Rocket, Users, Award, Star, Zap, Cpu } from "lucide-react";
import { ACHIEVEMENTS } from "../constants";

const Achievements = () => {
    const iconMap = {
        Trophy, FileText, Rocket, Users, Award, Star, Zap, Cpu
    };

    return (
        <section id="achievements" className="py-24 relative overflow-hidden">
            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-neon-cyan/10 border border-neon-cyan/20 mb-6"
                    >
                        <Trophy size={16} className="text-neon-cyan" />
                        <span className="text-[10px] font-black uppercase tracking-[0.2em] text-neon-cyan">Milestones</span>
                    </motion.div>
                    <h2 className="section-title">AWARDS & ACHIEVEMENTS</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
                    {ACHIEVEMENTS.map((achievement, index) => {
                        const IconComponent = iconMap[achievement.icon] || Award;
                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="group relative"
                            >
                                <div className="glass-card p-8 rounded-3xl h-full border-white/5 hover:border-white/20 transition-all">
                                    <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center text-neon-cyan mb-6 group-hover:scale-110 group-hover:bg-neon-cyan/10 transition-transform">
                                        <IconComponent size={24} />
                                    </div>
                                    <h3 className="text-xl font-black text-white mb-4 leading-tight group-hover:text-neon-cyan transition-colors">
                                        {achievement.title}
                                    </h3>
                                    <p className="text-sm text-text-muted italic leading-relaxed">
                                        "{achievement.desc}"
                                    </p>
                                    
                                    {/* Hover Glow */}
                                    <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-neon-purple via-neon-cyan to-neon-pink opacity-0 group-hover:opacity-100 transition-opacity rounded-full" />
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
            
            {/* Background elements */}
            <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-neon-purple/5 blur-[120px] rounded-full pointer-events-none" />
        </section>
    );
};

export default Achievements;

