import { motion } from "framer-motion";
import { Briefcase, Calendar, Cpu, Code2, Layers, Award } from "lucide-react";
import { EXPERIENCE } from "../constants";

const Experience = () => {
    return (
        <section id="experience" className="section-padding relative overflow-hidden bg-grid">
            <div className="container relative z-10">
                <div className="text-center mb-24">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-800/50 border border-white/5 mb-6"
                    >
                        <Briefcase size={16} className="text-indigo-400" />
                        <span className="text-[10px] font-bold text-slate-300 uppercase tracking-[0.2em]">Professional Path</span>
                    </motion.div>
                    <h2 className="section-title">ENGINEERING JOURNEY</h2>
                </div>

                <div className="max-w-4xl mx-auto space-y-12">
                    {EXPERIENCE.map((exp, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="glass-card p-12 relative group"
                        >
                            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-10">
                                <div>
                                    <h3 className="text-2xl font-black text-white mb-2 uppercase tracking-tight group-hover:text-indigo-400 transition-colors">
                                        {exp.role}
                                    </h3>
                                    <div className="flex items-center gap-4">
                                        <span className="text-sm font-bold text-indigo-500 uppercase tracking-widest">{exp.company}</span>
                                        <span className="w-1.5 h-1.5 rounded-full bg-slate-700" />
                                        <div className="flex items-center gap-2 text-slate-500">
                                            <Calendar size={14} />
                                            <span className="text-[10px] font-bold uppercase tracking-widest">{exp.period}</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex gap-2">
                                    {exp.tech.map((t, i) => (
                                        <span key={i} className="tech-badge">{t}</span>
                                    ))}
                                </div>
                            </div>

                            <ul className="space-y-4">
                                {exp.highlights.map((highlight, i) => (
                                    <li key={i} className="flex gap-4 text-sm text-slate-400 font-medium leading-relaxed">
                                        <span className="mt-2 w-1.5 h-1.5 rounded-full bg-indigo-500 shrink-0" />
                                        {highlight}
                                    </li>
                                ))}
                            </ul>

                            {/* Decorative element */}
                            <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
                                <Award size={80} />
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
