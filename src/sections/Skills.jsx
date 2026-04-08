import { motion } from "framer-motion";
import * as Icons from "lucide-react";
import { SKILLS } from "../constants";

const SkillCard = ({ category, delay }) => (
    <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay }}
        className="glass-card p-8 rounded-[2rem] border-white/5 hover:border-white/10"
    >
        <h3 className="text-xl font-black text-white mb-8 flex items-center gap-3 text-left">
            <span className="w-1.5 h-6 bg-gradient-to-b from-neon-purple to-neon-cyan rounded-full" />
            {category.category}
        </h3>
        
        <div className="grid grid-cols-2 gap-4">
            {category.items.map((skill, sIdx) => {
                const IconComponent = Icons[skill.icon] || Icons.Code2;
                return (
                    <motion.div
                        key={sIdx}
                        whileHover={{ scale: 1.05, rotate: 2 }}
                        className="group relative p-4 rounded-2xl bg-white/5 border border-white/5 flex flex-col items-center gap-3 hover:bg-white/10 transition-all duration-300"
                    >
                        <div className="text-text-muted group-hover:text-neon-cyan transition-colors">
                            <IconComponent size={24} />
                        </div>
                        <span className="text-[10px] font-bold text-text-dim group-hover:text-white uppercase tracking-wider text-center">
                            {skill.name}
                        </span>
                        
                        {/* Skill Glow */}
                        <div className="absolute inset-0 bg-neon-cyan/5 blur-xl opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl pointer-events-none" />
                    </motion.div>
                );
            })}
        </div>
    </motion.div>
);

const Skills = () => {
    return (
        <section id="skills" className="py-24 relative overflow-hidden">
            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-neon-pink/10 border border-neon-pink/20 mb-6"
                    >
                        <Icons.Zap size={16} className="text-neon-pink" />
                        <span className="text-[10px] font-black uppercase tracking-[0.2em] text-neon-pink">Technical Stack</span>
                    </motion.div>
                    <h2 className="section-title">CORE CAPABILITIES</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {SKILLS.map((category, idx) => (
                        <SkillCard key={idx} category={category} delay={idx * 0.1} />
                    ))}
                </div>
            </div>
            
            {/* Background decorative elements */}
            <div className="absolute top-1/2 left-0 -translate-y-1/2 w-64 h-64 bg-neon-pink/10 blur-[100px] rounded-full pointer-events-none" />
        </section>
    );
};

export default Skills;

