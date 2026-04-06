import { motion } from "framer-motion";
import { PROJECTS } from "../constants";
import { FaGithub, FaArrowUpRightFromSquare, FaPlay, FaCode, FaRocket, FaTerminal } from "react-icons/fa6";

const Projects = () => {
    return (
        <section id="projects" className="py-40 relative overflow-hidden bg-[#0A0F1F]">
            <div className="container relative z-10 px-6">
                
                {/* Immersive Header */}
                <div className="flex flex-col items-center text-center mb-32 font-heading">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        className="inline-flex items-center gap-2 px-6 py-2 rounded-full glass border border-magenta-500/30 text-magenta-500 text-[10px] font-black uppercase tracking-[0.4em] mb-10 shadow-[0_0_20px_rgba(255,58,205,0.1)]"
                    >
                        Active Operations
                    </motion.div>
                    <motion.h2 
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="text-6xl md:text-8xl font-black mb-10 text-white tracking-tighter"
                    >
                        Project <span className="text-purple-500">Holograms.</span>
                    </motion.h2>
                </div>

                {/* Cyber-Grid Flip Card Layout */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-24 px-10">
                    {PROJECTS.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 100 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, delay: index * 0.1 }}
                            className="group relative h-[500px] md:h-[600px] perspective-1000"
                        >
                            <div className="relative w-full h-full transition-all duration-1000 preserve-3d group-hover:rotate-y-180">
                                {/* Front Interface */}
                                <div className="absolute inset-0 backface-hidden glass-card border-white/10 p-16 flex flex-col justify-between overflow-hidden rounded-[72px] bg-gradient-to-br from-white/10 to-transparent">
                                     <div className="absolute top-0 right-0 w-60 h-60 bg-magenta-600/5 rounded-full blur-[100px] group-hover:bg-magenta-600/15 transition-all" />
                                     
                                     <div>
                                         <div className="flex justify-between items-start mb-12">
                                            <span className="px-6 py-2 rounded-3xl bg-white/5 border border-white/10 text-[10px] font-black text-cyan-400 uppercase tracking-widest shadow-[0_0_15px_rgba(60,215,255,0.1)]">
                                                {project.badge}
                                            </span>
                                            <div className="w-14 h-14 rounded-full border border-white/10 flex items-center justify-center text-white/20 group-hover:text-magenta-500 group-hover:border-magenta-500 transition-colors shadow-inner">
                                                <FaArrowUpRightFromSquare size={18} />
                                            </div>
                                         </div>
                                         <h3 className="text-5xl md:text-6xl font-black text-white mb-8 leading-[0.8] tracking-tighter group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-purple-500 transition-all duration-700">
                                             {project.title}
                                         </h3>
                                         <p className="text-[#A0AEC0] text-2xl font-light leading-relaxed mb-8 opacity-60">
                                             {project.subtitle}
                                         </p>
                                     </div>

                                     <div className="flex flex-wrap gap-8 pt-10 border-t border-white/10">
                                         {project.tech.slice(0, 3).map((t, i) => (
                                             <span key={i} className="text-[10px] font-black text-white/30 uppercase tracking-[0.3em]">{t}</span>
                                         ))}
                                         <div className="ml-auto w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                                     </div>
                                </div>

                                {/* Back Interface (System Specs) */}
                                <div className="absolute inset-0 backface-hidden rotate-y-180 glass-card bg-gradient-to-br from-purple-900/60 to-magenta-900/60 border-purple-500/30 p-16 flex flex-col justify-between rounded-[72px] shadow-2xl">
                                     <div>
                                         <div className="flex items-center gap-4 mb-10">
                                             <FaTerminal size={20} className="text-cyan-400" />
                                             <h4 className="text-white text-xs font-black uppercase tracking-[0.4em] opacity-60">System Specifications</h4>
                                         </div>
                                         <p className="text-white text-xl leading-relaxed mb-12 font-light italic border-l-2 border-magenta-500/50 pl-10 py-4 rounded-r-3xl bg-white/5">
                                             "{project.description}"
                                         </p>
                                         <div className="flex flex-wrap gap-4">
                                             {project.tech.map((t, i) => (
                                                 <span key={i} className="px-6 py-3 rounded-2xl bg-white/5 border border-white/10 text-[10px] font-black text-white/60 uppercase tracking-widest hover:border-cyan-400/50 transition-colors cursor-crosshair">
                                                     {t}
                                                 </span>
                                             ))}
                                         </div>
                                     </div>

                                     <div className="flex gap-6">
                                         {project.links.demo && (
                                             <a href={project.links.demo} target="_blank" className="flex-1 bg-white text-[#0A0F1F] text-[10px] uppercase font-black py-6 rounded-[32px] hover:scale-110 active:scale-95 transition-all text-center shadow-xl">
                                                 Direct Stream
                                             </a>
                                         )}
                                         {project.links.video && (
                                             <a href={project.links.video} target="_blank" className="flex-1 bg-cyan-500 text-white text-[10px] uppercase font-black py-6 rounded-[32px] hover:scale-110 active:scale-95 transition-all text-center shadow-[0_0_30px_#3CD7FF66]">
                                                 Simulation
                                             </a>
                                         )}
                                         <a href={project.links.source} target="_blank" className="flex-1 bg-transparent border border-white/20 text-white text-[10px] uppercase font-black py-6 rounded-[32px] hover:bg-white/10 transition-all text-center hover:border-magenta-500">
                                             Source-Code
                                         </a>
                                     </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <div className="mt-40 flex justify-center opacity-20">
                     <FaRocket size={40} className="animate-bounce" />
                </div>
            </div>
        </section>
    );
};

export default Projects;
