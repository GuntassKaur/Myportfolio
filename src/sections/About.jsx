import { motion } from "framer-motion";
import { User, Quote, GraduationCap, Target, Cpu, Code2 } from "lucide-react";
import { ABOUT_CONTENT } from "../constants";

const About = () => {
    return (
        <section id="about" className="section-padding relative overflow-hidden bg-grid">
            <div className="container relative z-10">
                <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
                    
                    {/* Left: Branding/Image placeholder */}
                    <div className="flex-1 w-full lg:max-w-md">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="relative"
                        >
                            <div className="glass-card p-10 relative z-10">
                                <Quote className="text-indigo-500 mb-6" size={40} />
                                <h3 className="text-2xl font-black text-white mb-6 leading-tight">
                                    "I believe in building real-world systems, not just projects."
                                </h3>
                                <p className="text-slate-400 font-medium leading-relaxed">
                                    Focusing on the intersection of AI, Scalability, and System Design to solve complex global challenges.
                                </p>
                                
                                <div className="mt-10 pt-10 border-t border-white/5 flex items-center gap-4">
                                    <div className="w-12 h-12 rounded-full bg-indigo-600/20 flex items-center justify-center text-indigo-400">
                                        <GraduationCap size={24} />
                                    </div>
                                    <div>
                                        <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Education</p>
                                        <p className="text-sm font-bold text-white uppercase tracking-tight">B.Tech Computer Science</p>
                                    </div>
                                </div>
                            </div>

                            {/* Decorative background element */}
                            <div className="absolute -top-10 -left-10 w-full h-full bg-indigo-600/5 rounded-[3rem] -z-10" />
                        </motion.div>
                    </div>

                    {/* Right: Detailed Content */}
                    <div className="flex-1">
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-800/50 border border-white/5 mb-8">
                                <User size={16} className="text-indigo-400" />
                                <span className="text-[10px] font-bold text-slate-300 uppercase tracking-[0.2em]">The Engineering Profile</span>
                            </div>
                            
                            <h2 className="section-title mb-8">ARCHITECTING INTELLIGENCE</h2>
                            
                            <p className="text-lg md:text-xl text-slate-400 font-medium leading-relaxed mb-12">
                                {ABOUT_CONTENT.text}
                            </p>

                            {/* Academic Highlights Grid */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                {ABOUT_CONTENT.academicHighlights.map((stat, i) => (
                                    <div 
                                        key={i} 
                                        className="p-8 glass-card border-white/5 hover:border-indigo-500/30 group"
                                    >
                                        <div className="flex items-center justify-between mb-2">
                                            <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest">{stat.label}</span>
                                            <span className="text-[10px] font-bold text-indigo-400 uppercase tracking-tighter">{stat.period || stat.institution}</span>
                                        </div>
                                        <p className="text-3xl font-black text-white tracking-tighter group-hover:text-indigo-400 transition-colors">
                                            {stat.value}
                                        </p>
                                    </div>
                                ))}
                            </div>

                            {/* Core Focus Area */}
                            <div className="mt-12 flex flex-wrap gap-4">
                                <div className="flex items-center gap-3 px-6 py-3 rounded-2xl bg-slate-800/30 border border-white/5">
                                    <Target className="text-indigo-400" size={18} />
                                    <span className="text-xs font-bold text-slate-300 uppercase tracking-widest">Distributed Systems</span>
                                </div>
                                <div className="flex items-center gap-3 px-6 py-3 rounded-2xl bg-slate-800/30 border border-white/5">
                                    <Code2 className="text-sky-400" size={18} />
                                    <span className="text-xs font-bold text-slate-300 uppercase tracking-widest">Full Stack AI</span>
                                </div>
                                <div className="flex items-center gap-3 px-6 py-3 rounded-2xl bg-slate-800/30 border border-white/5">
                                    <Cpu className="text-emerald-400" size={18} />
                                    <span className="text-xs font-bold text-slate-300 uppercase tracking-widest">Edge Computing</span>
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
