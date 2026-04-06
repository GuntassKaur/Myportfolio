import { motion } from "framer-motion";
import { EXPERIENCE } from "../constants";
import { FaBriefcase, FaBolt, FaGears, FaCompass } from "react-icons/fa6";

const Experience = () => {
    return (
        <section id="experience" className="py-40 relative overflow-hidden bg-[#0A0F1F]">
            <div className="container relative z-10 px-6">
                
                {/* Header Section */}
                <div className="max-w-4xl mx-auto text-center mb-40 font-heading">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        className="inline-flex items-center gap-3 px-8 py-3 rounded-full glass border border-purple-500/40 text-purple-400 text-[10px] font-black uppercase tracking-[0.4em] mb-12 shadow-[0_0_20px_rgba(108,93,211,0.2)]"
                    >
                        Timeline Sequence: Verified
                    </motion.div>
                    <motion.h2 
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="text-6xl md:text-8xl font-black mb-12 leading-[0.9] text-white tracking-tighter"
                    >
                        Career <span className="text-cyan-400">Shift.</span>
                    </motion.h2>
                </div>

                {/* Vertical Timeline Structure */}
                <div className="max-w-7xl mx-auto relative px-10">
                    {/* Immersive Glowing Vertical Beam */}
                    <div className="absolute left-[47px] md:left-1/2 top-0 bottom-0 w-[4px] bg-gradient-to-b from-purple-500 via-magenta-500 to-cyan-400 opacity-30 shadow-[0_0_30px_#6C5DD3]"></div>
                    
                    <div className="space-y-40">
                        {EXPERIENCE.map((exp, index) => (
                            <motion.div 
                                key={index}
                                initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 1, delay: index * 0.1 }}
                                className={`flex flex-col md:flex-row items-center gap-16 md:gap-32 ${index % 2 === 0 ? "md:flex-row-reverse" : "md:flex-row"}`}
                            >
                                {/* card content interface */}
                                <div className={`w-full md:w-1/2 flex ${index % 2 === 0 ? "justify-start" : "justify-end"}`}>
                                    <div 
                                        className="w-full max-w-2xl glass-card p-16 md:p-20 border-white/10 hover:border-magenta-500/50 rounded-[64px] transition-all duration-700 group relative overflow-hidden bg-gradient-to-br from-white/5 to-transparent"
                                    >
                                        <div className="absolute top-0 left-0 w-3 h-full bg-gradient-to-b from-purple-500 to-magenta-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                                        
                                        <div className="flex items-center justify-between mb-16">
                                            <span className="px-8 py-3 bg-white/5 border border-white/10 rounded-2xl text-[10px] font-black text-cyan-400 uppercase tracking-[0.3em] shadow-inner">
                                                {exp.period}
                                            </span>
                                            <FaBriefcase className="text-white/10 group-hover:text-magenta-500 transition-all duration-700 hover:rotate-12" size={30} />
                                        </div>

                                        <div className="space-y-8">
                                            <h3 className="text-4xl font-black text-white leading-tight uppercase tracking-tight group-hover:text-purple-400 transition-colors">{exp.role}</h3>
                                            <div className="flex items-center gap-4 text-sm font-black text-white/30 uppercase tracking-[0.2em] border-b border-white/5 pb-8">
                                                <FaCompass size={14} className="text-cyan-400/50" />
                                                {exp.company}
                                            </div>
                                            <p className="text-[#A0AEC0] text-xl leading-relaxed font-light italic opacity-80">
                                                "{exp.description}"
                                            </p>
                                        </div>

                                        <div className="absolute bottom-[-20%] right-[-10%] opacity-5 group-hover:opacity-10 transition-opacity">
                                            <FaGears size={150} className="animate-spin-slow" />
                                        </div>
                                    </div>
                                </div>

                                {/* Immersive Pulsing Timeline Node */}
                                <div className="absolute left-[48px] md:left-1/2 -translate-x-1/2 w-16 h-16 rounded-3xl bg-[#0A0F1F] border-4 border-magenta-500 flex items-center justify-center z-10 shadow-[0_0_30px_#FF3ACD] group-hover:scale-125 transition-transform duration-500 bg-gradient-to-br from-[#0A0F1F] to-magenta-900/40">
                                    <FaBolt className="text-magenta-500 animate-pulse text-xl" />
                                </div>

                                {/* Empty Side for Spacing Harmony */}
                                <div className="hidden md:block md:w-1/2"></div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                <div className="mt-40 flex justify-center opacity-30">
                    <div className="w-[1px] h-32 bg-gradient-to-b from-cyan-400 to-transparent" />
                </div>
            </div>
        </section>
    );
};

export default Experience;
