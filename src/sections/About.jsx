import { motion } from "framer-motion";
import { ABOUT_CONTENT } from "../constants";
import { FaGraduationCap, FaChartLine, FaLightbulb, FaUserAstronaut } from "react-icons/fa6";

const About = () => {
    return (
        <section id="about" className="py-40 relative overflow-hidden bg-[#0A0F1F]">
            <div className="container relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center px-6 lg:px-0">
                    
                    {/* Immersive Visual Perspective */}
                    <motion.div
                        initial={{ opacity: 0, x: -100 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1 }}
                        className="relative"
                    >
                        {/* Background Aura */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-purple-600/10 blur-[130px] rounded-full" />
                        
                        <div className="grid grid-cols-2 gap-8 relative z-10 perspective-1000">
                            {ABOUT_CONTENT.academicHighlights.map((stat, i) => (
                                <motion.div
                                    key={i}
                                    whileHover={{ 
                                        y: -20, 
                                        rotateX: 10, 
                                        rotateY: -10, 
                                        scale: 1.05,
                                        boxShadow: "0 25px 50px -12px rgba(108, 93, 211, 0.4)"
                                    }}
                                    className={`p-10 glass-card border-white/10 rounded-[48px] group transition-all duration-500 bg-gradient-to-br from-white/5 to-transparent ${i === 0 ? 'col-span-2' : ''}`}
                                >
                                    <div className="text-[10px] font-black text-cyan-400 uppercase tracking-[0.3em] mb-6 opacity-60 flex items-center gap-3">
                                        <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
                                        {stat.label}
                                    </div>
                                    <div className="text-5xl font-black text-white group-hover:text-magenta-500 transition-colors leading-[1.1]">{stat.value}</div>
                                    <div className="mt-8 w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />
                                </motion.div>
                            ))}
                            
                            <motion.div
                                whileHover={{ y: -20, scale: 1.05 }}
                                className="p-10 glass-card border-none bg-gradient-to-br from-[#6C5DD3] to-[#FF3ACD] rounded-[48px] flex flex-col justify-center shadow-[0_30px_60px_rgba(108,93,211,0.4)]"
                            >
                                <span className="text-[10px] font-black uppercase tracking-[0.3em] text-white/70 mb-4">Core Identity</span>
                                <p className="text-white font-black text-2xl uppercase tracking-tighter">AI Engineer</p>
                            </motion.div>
                        </div>
                    </motion.div>

                    {/* High-Impact Content */}
                    <div className="flex flex-col items-start gap-12">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            className="flex items-center gap-4 px-6 py-2 rounded-full glass border border-purple-500/30 shadow-[0_0_20px_rgba(108,93,211,0.2)]"
                        >
                            <FaUserAstronaut className="text-purple-400 animate-bounce" />
                            <span className="text-white text-xs font-black uppercase tracking-[0.3em]">Module: Foundation</span>
                        </motion.div>

                        <div className="space-y-10">
                            <motion.h2 
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                className="text-5xl md:text-7xl font-black leading-[0.9] text-white tracking-tighter"
                            >
                                Synthesis of <br />
                                <span className="gradient-text">Future Logic.</span>
                            </motion.h2>

                            <motion.p
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2 }}
                                className="text-[#A0AEC0] text-xl leading-relaxed font-light italic max-w-2xl border-l-2 border-magenta-500 pl-10 py-6 bg-gradient-to-r from-magenta-500/5 to-transparent rounded-r-3xl"
                            >
                                "{ABOUT_CONTENT.text}"
                            </motion.p>
                        </div>
                        
                        <div className="flex flex-wrap gap-6 pt-10">
                            {["Intelligent Systems", "Java Architectures", "IoT Neural Nets", "Full Stack Dev"].map((tag, i) => (
                                <motion.span 
                                    key={i} 
                                    whileHover={{ scale: 1.1, backgroundColor: 'rgba(255, 58, 205, 0.2)' }}
                                    className="px-8 py-4 rounded-3xl bg-white/5 border border-white/10 text-xs font-black text-cyan-300 uppercase tracking-widest hover:border-magenta-500 transition-all cursor-crosshair"
                                >
                                    {tag}
                                </motion.span>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default About;
