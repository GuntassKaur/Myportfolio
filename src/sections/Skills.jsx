import { motion } from "framer-motion";
import * as Icons from "lucide-react";
import { SKILLS } from "../constants";

const Skills = () => {
    return (
        <section id="skills" className="section-padding relative overflow-hidden bg-grid">
            <div className="container relative z-10">
                <div className="text-center mb-24">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-800/50 border border-white/5 mb-6"
                    >
                        <Icons.Cpu size={16} className="text-indigo-400" />
                        <span className="text-[10px] font-bold text-slate-300 uppercase tracking-[0.2em]">Capability Stack</span>
                    </motion.div>
                    <h2 className="section-title">TECHNICAL MASTERY</h2>
                    <p className="text-lg text-slate-400 max-w-2xl mx-auto font-medium">
                        A comprehensive toolkit for architecting intelligent systems and scalable platforms.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {SKILLS.map((category, idx) => (
                        <motion.div
                            key={category.category}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className="glass-card p-10"
                        >
                            <h3 className="text-sm font-black text-white mb-8 uppercase tracking-[0.3em] flex items-center gap-4">
                                <span className="w-12 h-px bg-indigo-500" />
                                {category.category}
                            </h3>

                            <div className="grid grid-cols-2 gap-4">
                                {category.items.map((skill) => {
                                    const IconComponent = Icons[skill.icon] || Icons.Code;
                                    return (
                                        <div 
                                            key={skill.name}
                                            className="group flex flex-col items-center justify-center p-6 rounded-3xl bg-slate-900/50 border border-white/5 hover:border-indigo-500/50 transition-all duration-300"
                                        >
                                            <IconComponent size={24} className="text-slate-500 group-hover:text-indigo-400 transition-colors mb-4" />
                                            <span className="text-[9px] font-black text-slate-400 uppercase tracking-[0.2em] text-center group-hover:text-white transition-colors">
                                                {skill.name}
                                            </span>
                                        </div>
                                    );
                                })}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
