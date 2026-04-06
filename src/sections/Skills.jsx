import { motion } from "framer-motion";
import { SKILLS } from "../constants";
import { FaCode, FaServer, FaTerminal, FaMicrochip, FaBolt, FaGears, FaCloud, FaShield } from "react-icons/fa6";

const Icons = [FaTerminal, FaCode, FaServer, FaMicrochip];

const Skills = () => {
    return (
        <section id="skills" className="py-40 relative overflow-hidden bg-[#0A0F1F]">
            <div className="container relative z-10 px-6">
                
                {/* Immersive Header */}
                <div className="flex flex-col items-center text-center mb-32 font-heading">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        className="inline-flex items-center gap-2 px-6 py-2 rounded-full glass border border-cyan-500/30 text-cyan-400 text-[10px] font-black uppercase tracking-[0.4em] mb-10 shadow-[0_0_20px_rgba(60,215,255,0.2)]"
                    >
                        <FaBolt className="animate-pulse" /> Arsenal Intelligence
                    </motion.div>
                    <motion.h2 
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="text-6xl md:text-8xl font-black mb-10 text-white tracking-tighter"
                    >
                        Tech <span className="text-magenta-500">Nexus.</span>
                    </motion.h2>
                    <p className="text-[#A0AEC0] text-xl font-light max-w-3xl leading-relaxed italic border-x border-white/5 px-20">
                        Synthesizing high-concurrency systems and intelligent automation through state-of-the-art engineering modules.
                    </p>
                </div>

                {/* Cyber-Grid Layout */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                    {SKILLS.map((skillGroup, index) => {
                        const IconComponent = Icons[index] || FaCode;
                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8, delay: index * 0.1 }}
                                className="group p-12 glass-card border-white/10 hover:border-purple-500/40 transition-all duration-700 rounded-[56px] relative overflow-hidden bg-gradient-to-br from-white/5 to-transparent flex flex-col items-start"
                            >
                                {/* Immersive Ambient Glow */}
                                <div className="absolute top-[-20%] right-[-20%] w-40 h-40 bg-purple-600/5 blur-[80px] group-hover:bg-purple-600/10 transition-opacity" />
                                
                                <div className="w-16 h-16 bg-white/5 rounded-3xl flex items-center justify-center text-cyan-400 mb-12 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 border border-white/10 group-hover:border-purple-500/60 group-hover:shadow-[0_0_40px_rgba(108,93,211,0.5)]">
                                    <IconComponent size={32} />
                                </div>

                                <h3 className="text-2xl font-black text-white mb-12 uppercase tracking-widest">{skillGroup.category}</h3>
                                
                                <div className="space-y-10 w-full">
                                    {skillGroup.items.map((skill, i) => (
                                        <div key={i} className="space-y-4">
                                            <div className="flex justify-between items-center px-2">
                                                <span className="text-white/60 text-[10px] font-black uppercase tracking-[0.2em] group-hover:text-white transition-colors">{skill.name}</span>
                                                <span className="text-magenta-500 text-[10px] font-black shadow-[0_0_10px_rgba(255,58,205,0.3)]">{skill.proficiency}%</span>
                                            </div>
                                            <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden border border-white/5">
                                                <motion.div 
                                                    initial={{ width: 0 }}
                                                    whileInView={{ width: `${skill.proficiency}%` }}
                                                    transition={{ duration: 1.5, ease: "easeOut", delay: 0.5 }}
                                                    className="h-full bg-gradient-to-r from-purple-500 via-magenta-500 to-cyan-400 rounded-full shadow-[0_0_20px_#FF3ACD]"
                                                />
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default Skills;
