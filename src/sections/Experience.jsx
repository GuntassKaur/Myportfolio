import { motion } from "framer-motion";
import { Briefcase, Calendar, CheckCircle2, Cpu, Rocket, Code2, Layers } from "lucide-react";
import { EXPERIENCE } from "../constants";

const Experience = () => {
    return (
        <section id="experience" className="py-24 relative overflow-hidden">
            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center mb-20">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-neon-purple/10 border border-neon-purple/20 mb-6"
                    >
                        <Briefcase size={16} className="text-neon-purple" />
                        <span className="text-[10px] font-black uppercase tracking-[0.2em] text-neon-purple">Professional Journey</span>
                    </motion.div>
                    <h2 className="section-title">THE EXPERIENCE</h2>
                </div>

                <div className="relative max-w-4xl mx-auto">
                    {/* Vertical Timeline Line */}
                    <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-neon-purple via-neon-cyan to-transparent hidden md:block" />
                    
                    <div className="space-y-16">
                        {EXPERIENCE.map((exp, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.8 }}
                                className={`relative flex flex-col md:flex-row items-center gap-8 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
                            >
                                {/* Timeline Dot */}
                                <div className="absolute left-4 md:left-1/2 top-0 -translate-x-1/2 w-4 h-4 rounded-full bg-bg-dark border-4 border-neon-cyan shadow-[0_0_15px_rgba(60,215,255,1)] z-20 hidden md:block" />
                                
                                {/* Content Card */}
                                <div className="md:w-[45%] w-full">
                                    <div className="glass-card p-8 rounded-3xl border-white/5 hover:border-neon-cyan/30 transition-all group">
                                        <div className="flex flex-col mb-6">
                                            <div className="flex items-center gap-2 mb-2">
                                                <Calendar size={14} className="text-neon-cyan" />
                                                <span className="text-[10px] font-black text-neon-cyan uppercase tracking-widest">{exp.period}</span>
                                            </div>
                                            <h3 className="text-2xl font-black text-white group-hover:text-neon-cyan transition-colors">{exp.role}</h3>
                                            <p className="text-neon-purple font-bold tracking-wider text-sm uppercase">{exp.company}</p>
                                        </div>

                                        <ul className="space-y-4 mb-8">
                                            {exp.highlights.map((highlight, hIdx) => (
                                                <li key={hIdx} className="flex gap-4 text-sm text-text-muted italic leading-relaxed">
                                                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-neon-cyan shrink-0" />
                                                    {highlight}
                                                </li>
                                            ))}
                                        </ul>

                                        <div className="flex flex-wrap gap-2">
                                            {exp.tech.map((tech) => (
                                                <span key={tech} className="px-3 py-1 rounded-lg bg-white/5 border border-white/5 text-[10px] font-bold text-text-dim uppercase tracking-tighter">
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                                
                                {/* Spacer for Timeline symmetry */}
                                <div className="md:w-[45%] hidden md:block" />
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Experience;

