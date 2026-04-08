import { motion } from "framer-motion";
import { ExternalLink, ArrowRight, AppWindow, Play, Cpu, Zap, Globe, Terminal, Award, Star } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { PROJECTS } from "../constants";

const Projects = () => {
    return (
        <section id="projects" className="section-padding relative overflow-hidden bg-grid">
            <div className="container relative z-10">
                <div className="text-center mb-24">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-800/50 border border-white/5 mb-6"
                    >
                        <AppWindow size={16} className="text-indigo-400" />
                        <span className="text-[10px] font-bold text-slate-300 uppercase tracking-[0.2em]">Featured Systems</span>
                    </motion.div>
                    <h2 className="section-title">ENGINEERED PROJECTS</h2>
                    <p className="text-lg text-slate-400 max-w-2xl mx-auto font-medium">
                        Building real-world systems at the intersection of AI, Full Stack, and System Design.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                    {PROJECTS.map((project, index) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className={`group relative ${project.isFeatured ? 'lg:col-span-2' : ''}`}
                        >
                            <div className={`glass-card h-full flex flex-col ${project.isFeatured ? 'lg:flex-row' : ''} overflow-hidden`}>
                                {/* Image Container */}
                                <div className={`${project.isFeatured ? 'lg:w-1/2' : 'h-64'} relative overflow-hidden`}>
                                    <img 
                                        src={project.image} 
                                        alt={project.title}
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#0A0F1F] via-transparent to-transparent opacity-60" />
                                    
                                    {/* Project Badges */}
                                    <div className="absolute top-6 left-6 flex flex-wrap gap-3">
                                        {project.isFeatured && (
                                            <span className="px-4 py-1.5 rounded-full bg-indigo-600 text-white text-[10px] font-black uppercase tracking-widest shadow-lg flex items-center gap-2">
                                                <Star size={12} /> Featured Project
                                            </span>
                                        )}
                                        {project.isRunnerUp && (
                                            <span className="px-4 py-1.5 rounded-full bg-emerald-600 text-white text-[10px] font-black uppercase tracking-widest shadow-lg flex items-center gap-2">
                                                <Award size={12} /> Runner-Up
                                            </span>
                                        )}
                                    </div>
                                </div>

                                {/* Content Container */}
                                <div className={`p-10 flex-1 flex flex-col ${project.isFeatured ? 'lg:p-12' : ''}`}>
                                    <div className="flex flex-wrap gap-2 mb-6">
                                        {project.tech.map((t, i) => (
                                            <span key={i} className="tech-badge">{t}</span>
                                        ))}
                                    </div>

                                    <h3 className={`font-black text-white mb-6 tracking-tight ${project.isFeatured ? 'text-4xl' : 'text-2xl'}`}>
                                        {project.title}
                                    </h3>

                                    <ul className="space-y-4 mb-10 flex-1">
                                        {project.bullets.map((bullet, i) => (
                                            <li key={i} className="flex gap-4 text-sm text-slate-400 font-medium leading-relaxed">
                                                <span className="mt-2 w-1.5 h-1.5 rounded-full bg-indigo-500 shrink-0" />
                                                {bullet}
                                            </li>
                                        ))}
                                    </ul>

                                    <div className="flex items-center gap-4 mt-auto">
                                        <a 
                                            href={project.links.github} 
                                            target="_blank" 
                                            rel="noreferrer"
                                            className="pill-button !py-3 !px-6"
                                        >
                                            <FaGithub size={16} /> GitHub
                                        </a>
                                        {project.links.demo !== "#" && (
                                            <a 
                                                href={project.links.demo} 
                                                target="_blank" 
                                                rel="noreferrer"
                                                className="pill-button-outline !py-3 !px-6"
                                            >
                                                <Globe size={16} /> Live Demo
                                            </a>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <div className="mt-24 text-center">
                    <p className="text-slate-500 text-sm font-bold uppercase tracking-[0.4em] mb-10">System Architecture & Code Excellence</p>
                    <a 
                        href="https://github.com/GuntassKaur" 
                        target="_blank" 
                        rel="noreferrer"
                        className="pill-button-outline inline-flex"
                    >
                        Explore More Repositories <ArrowRight size={18} />
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Projects;
