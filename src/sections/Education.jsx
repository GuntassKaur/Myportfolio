import { motion } from "framer-motion";
import { GraduationCap, MapPin, Calendar, Award } from "lucide-react";
import { EDUCATION } from "../constants";

const Education = () => {
    return (
        <section id="education" className="section-padding relative overflow-hidden bg-grid">
            <div className="container relative z-10">
                <div className="text-center mb-24">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-800/50 border border-white/5 mb-6"
                    >
                        <GraduationCap size={16} className="text-indigo-400" />
                        <span className="text-[10px] font-bold text-slate-300 uppercase tracking-[0.2em]">Academic Background</span>
                    </motion.div>
                    <h2 className="section-title">EDUCATION</h2>
                </div>

                <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
                    {EDUCATION.map((edu, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="glass-card p-12 group hover:border-indigo-500/30 transition-all"
                        >
                            <div className="flex items-center justify-between mb-8">
                                <div className="p-4 rounded-2xl bg-indigo-600/10 text-indigo-400 group-hover:bg-indigo-600 group-hover:text-white transition-all">
                                    <GraduationCap size={32} />
                                </div>
                                <div className="flex flex-col items-end">
                                    <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-1">Year</span>
                                    <span className="text-sm font-bold text-white">{edu.period}</span>
                                </div>
                            </div>
                            
                            <h3 className="text-xl font-black text-white mb-2 uppercase tracking-tight group-hover:text-indigo-400 transition-colors">
                                {edu.degree}
                            </h3>
                            <p className="text-sm font-bold text-slate-400 mb-8 uppercase tracking-widest">{edu.institution}</p>

                            <ul className="space-y-3">
                                {edu.highlights.map((h, i) => (
                                    <li key={i} className="flex items-center gap-3 text-sm text-slate-500 font-bold uppercase tracking-tighter">
                                        <Award size={14} className="text-indigo-500" />
                                        {h}
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Education;
