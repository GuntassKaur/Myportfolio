import { motion } from "framer-motion";
import { EDUCATION } from "../constants";
import { FaGraduationCap, FaPaperclip, FaBookOpen, FaAddressCard } from "react-icons/fa6";

const Education = () => {
    return (
        <section id="education" className="py-40 relative overflow-hidden bg-[#0A0F1F]">
            <div className="container relative z-10 px-6">
                
                {/* Header Section */}
                <div className="flex flex-col items-center text-center mb-32 font-heading">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        className="inline-flex items-center gap-3 px-8 py-3 rounded-full glass border border-purple-500/40 text-purple-400 text-[10px] font-black uppercase tracking-[0.4em] mb-12 shadow-[0_0_25px_rgba(108,93,211,0.2)]"
                    >
                        Academic Logs: Sequence Validated
                    </motion.div>
                    <motion.h2 
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="text-6xl md:text-8xl font-black mb-12 leading-[0.9] text-white tracking-tighter"
                    >
                        Intellectual <span className="text-purple-500">Core.</span>
                    </motion.h2>
                    <p className="text-[#A0AEC0] text-xl font-light italic max-w-3xl leading-relaxed py-10 border-x border-white/5 px-20">
                        "Architecting a multi-disciplinary technical foundation with consistent academic excellence."
                    </p>
                </div>

                {/* Cyber-Grid Core Layout */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16 px-10">
                    {EDUCATION.map((edu, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1.2, delay: index * 0.15 }}
                            className="group p-16 glass-card border-white/10 hover:border-purple-500/40 rounded-[64px] transition-all duration-700 flex flex-col items-start relative overflow-hidden bg-gradient-to-br from-white/5 to-transparent shadow-2xl"
                        >
                            {/* Academic Performance Aura */}
                            <div className="absolute top-0 right-0 w-40 h-40 bg-purple-600/5 blur-[100px] opacity-0 group-hover:opacity-100 transition-opacity" />
                            
                            <div className="w-16 h-16 rounded-3xl bg-white/5 border border-white/10 flex items-center justify-center text-purple-400 mb-12 group-hover:bg-purple-500 group-hover:text-white transition-all duration-700 shadow-[0_0_30px_#6C5DD344] group-hover:rotate-12">
                                <FaGraduationCap size={32} />
                            </div>
                            
                            <span className="text-[10px] font-black uppercase tracking-[0.4em] text-cyan-400 mb-8 border-b border-cyan-400/20 pb-2 group-hover:translate-x-4 transition-transform duration-700">PERIOD: {edu.year}</span>
                            
                            <div className="space-y-6 flex-grow">
                                <h3 className="text-3xl font-black text-white leading-[0.9] uppercase tracking-tighter group-hover:text-purple-400 transition-colors">
                                    {edu.degree}
                                </h3>
                                
                                <p className="text-white/40 text-[10px] font-black uppercase tracking-widest italic group-hover:text-white/60 transition-colors flex items-center gap-3">
                                    <FaBookOpen size={12} className="text-purple-500" />
                                    {edu.institution}
                                </p>
                            </div>
                            
                            <div className="mt-16 pt-10 border-t border-white/10 w-full flex justify-between items-center bg-gradient-to-r from-transparent via-white/5 to-transparent">
                                <span className="text-[12px] font-black uppercase tracking-[0.3em] text-magenta-500 group-hover:text-white transition-colors flex items-center gap-4">
                                    <FaAddressCard size={14} className="animate-pulse" />
                                    SCORE: {edu.score}
                                </span>
                                <FaPaperclip size={18} className="text-white/10 group-hover:text-magenta-500 transition-colors duration-700 hover:rotate-45" />
                            </div>
                        </motion.div>
                    ))}
                </div>

                <div className="mt-40 flex justify-center opacity-10 blur-[1px]">
                     <FaBookOpen size={60} className="text-white" />
                </div>
            </div>
        </section>
    );
};

export default Education;
