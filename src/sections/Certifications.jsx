import { motion } from "framer-motion";
import { Award, ShieldCheck, ExternalLink, Brain, Cloud, Code2 } from "lucide-react";
import { CERTIFICATIONS } from "../constants";

const Certifications = () => {
    const iconMap = {
        AI: Brain,
        Cloud: Cloud,
        Code: Code2,
    };

    return (
        <section id="certifications" className="section-padding relative overflow-hidden bg-grid">
            <div className="container relative z-10">
                <div className="text-center mb-24">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-800/50 border border-white/5 mb-6"
                    >
                        <ShieldCheck size={16} className="text-indigo-400" />
                        <span className="text-[10px] font-bold text-slate-300 uppercase tracking-[0.2em]">Validated Technical Learning</span>
                    </motion.div>
                    <h2 className="section-title">CERTIFICATIONS & TECHNICAL LEARNING</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
                    {CERTIFICATIONS.map((cert, index) => {
                        const IconComponent = iconMap[cert.type] || Award;
                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="glass-card group relative p-10 flex flex-col h-full transform transition-all duration-500 hover:-translate-y-2"
                            >
                                <div className="flex items-start justify-between mb-8">
                                    <div className="w-16 h-16 rounded-2xl bg-indigo-600/10 flex items-center justify-center text-indigo-400 group-hover:bg-indigo-600 group-hover:text-white transition-all shadow-inner">
                                        <IconComponent size={32} />
                                    </div>
                                    <div className="text-right">
                                        <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest block mb-1">Period</span>
                                        <span className="text-xs font-bold text-indigo-400 uppercase tracking-tight">{cert.year}</span>
                                    </div>
                                </div>

                                <div className="flex-1">
                                    <h3 className="text-2xl font-black text-white mb-3 uppercase tracking-tight leading-tight group-hover:text-indigo-400 transition-colors">
                                        {cert.name}
                                    </h3>
                                    <p className="text-sm font-bold text-slate-500 mb-6 uppercase tracking-widest">
                                        {cert.issuer}
                                    </p>
                                    <p className="text-sm text-slate-400 font-medium leading-relaxed mb-8">
                                        {cert.desc}
                                    </p>
                                </div>

                                {/* Hover Button Overlay */}
                                <div className="mt-auto opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
                                    <a 
                                        href={cert.link} 
                                        target="_blank" 
                                        rel="noreferrer"
                                        className="pill-button w-full justify-center py-4 bg-indigo-600/20 border-indigo-600/30 text-indigo-400 hover:bg-indigo-600 hover:text-white"
                                    >
                                        View Credential <ExternalLink size={16} />
                                    </a>
                                </div>

                                {/* Background Pattern */}
                                <div className="absolute top-0 right-0 p-8 opacity-0 group-hover:opacity-[0.03] transition-opacity pointer-events-none">
                                    <IconComponent size={120} />
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default Certifications;
