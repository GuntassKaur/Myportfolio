import { motion } from "framer-motion";
import { ExternalLink, Github, ArrowRight, Play, Cpu, Zap, Globe, MessageSquare, Terminal } from "lucide-react";
import { PROJECTS } from "../constants";

const Projects = () => {
    return (
        <section id="projects" className="py-24 relative overflow-hidden">
            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center mb-20">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-neon-cyan/10 border border-neon-cyan/20 mb-6"
                    >
                        <Cpu size={16} className="text-neon-cyan" />
                        <span className="text-[10px] font-black uppercase tracking-[0.2em] text-neon-cyan">Engineering Portfolio</span>
                    </motion.div>
                    <h2 className="section-title">FEATURED SYSTEMS</h2>
                    <p className="text-xl text-text-muted max-w-2xl mx-auto italic">
                        "High-performance solutions designed for scalability and impact."
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {PROJECTS.map((project, index) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="group relative"
                        >
                            <div className="glass-card h-full rounded-[2.5rem] overflow-hidden flex flex-col hover:-translate-y-4 transition-all duration-500 border-white/5">
                                {/* Project Image with Overlay */}
                                <div className="relative h-64 overflow-hidden">
                                    <img 
                                        src={project.image} 
                                        alt={project.title}
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale-[20%] group-hover:grayscale-0"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-bg-dark via-bg-dark/20 to-transparent opacity-80" />
                                    
                                    {/* Tech Pills Overlay */}
                                    <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                                        {project.tech.slice(0, 2).map((tech) => (
                                            <span key={tech} className="px-3 py-1 rounded-lg bg-bg-dark/80 backdrop-blur-md border border-white/10 text-[10px] font-bold text-white uppercase tracking-tighter">
                                                {tech}
                                            </span>
                                        ))}
                                    </div>

                                    {/* Hover Icons */}
                                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                        <div className="flex gap-4 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                                            <a 
                                                href={project.links.github} 
                                                target="_blank" 
                                                rel="noreferrer"
                                                className="w-12 h-12 rounded-full bg-white text-bg-dark flex items-center justify-center hover:bg-neon-cyan transition-colors"
                                            >
                                                <Github size={20} />
                                            </a>
                                            {project.links.demo !== "#" && (
                                                <a 
                                                    href={project.links.demo} 
                                                    target="_blank" 
                                                    rel="noreferrer"
                                                    className="w-12 h-12 rounded-full bg-neon-purple text-white flex items-center justify-center hover:bg-neon-pink transition-colors"
                                                >
                                                    <ExternalLink size={20} />
                                                </a>
                                            )}
                                        </div>
                                    </div>
                                </div>

                                {/* Project Info */}
                                <div className="p-8 flex-1 flex flex-col">
                                    <div className="flex items-center gap-2 mb-4">
                                        <Terminal size={14} className="text-neon-cyan" />
                                        <span className="text-[10px] font-black text-text-dim uppercase tracking-[0.2em]">{project.subtitle}</span>
                                    </div>
                                    
                                    <h3 className="text-2xl font-black text-white mb-4 group-hover:text-neon-cyan transition-colors">
                                        {project.title}
                                    </h3>

                                    <p className="text-text-muted text-sm leading-relaxed mb-6 line-clamp-3">
                                        {project.solution}
                                    </p>

                                    <div className="mt-auto pt-6 border-t border-white/5 flex items-center justify-between">
                                        <div className="flex -space-x-2">
                                            {project.tech.map((t, i) => (
                                                <div key={i} className="w-8 h-8 rounded-full bg-bg-dark border border-white/10 flex items-center justify-center text-[10px] text-white font-bold uppercase">
                                                    {t[0]}
                                                </div>
                                            ))}
                                        </div>
                                        <div className="flex items-center gap-2 text-neon-cyan text-[10px] font-black uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-all">
                                            Case Study <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            {/* Background Glow */}
                            <div className="absolute -inset-2 bg-gradient-to-r from-neon-purple to-neon-cyan rounded-[3rem] blur-2xl opacity-0 group-hover:opacity-10 transition-opacity duration-500 -z-10" />
                        </motion.div>
                    ))}
                </div>

                <div className="mt-24 text-center">
                    <a 
                        href="https://github.com/GuntassKaur" 
                        target="_blank" 
                        rel="noreferrer"
                        className="pill-button-outline inline-flex"
                    >
                        View More Systems <ArrowRight size={18} className="ml-2" />
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Projects;
s;
