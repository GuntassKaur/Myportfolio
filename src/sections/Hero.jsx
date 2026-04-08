import { motion } from "framer-motion";
import { ArrowRight, Github, Linkedin, Mail, Code, Terminal, Cpu } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { BRAND_CONTENT, HERO_CONTENT } from "../constants";
import profilePic from "../assets/profile.jpeg";

const Hero = () => {
    return (
        <section id="home" className="min-h-screen flex items-center relative overflow-hidden bg-grid pt-20">
            {/* Background Orbs */}
            <div className="absolute top-1/4 left-1/4 w-[300px] h-[300px] bg-indigo-600/10 rounded-full blur-[100px] pointer-events-none" />
            <div className="absolute bottom-1/4 right-1/4 w-[300px] h-[300px] bg-sky-600/10 rounded-full blur-[100px] pointer-events-none" />

            <div className="container relative z-10 px-6">
                <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-20">
                    
                    {/* Left: Text Content */}
                    <div className="flex-1 text-center lg:text-left order-2 lg:order-1">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-800/50 border border-white/5 mb-6 md:mb-8"
                        >
                            <span className="w-2 h-2 rounded-full bg-indigo-400 animate-pulse" />
                            <span className="text-[10px] font-bold text-slate-300 uppercase tracking-[0.2em]">Available for Engineering Roles</span>
                        </motion.div>

                        <motion.h1 
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-4xl md:text-6xl lg:text-7xl font-black mb-6 md:mb-8 leading-[1.1] tracking-tighter text-white"
                        >
                            {HERO_CONTENT.headline.split(' ').slice(0, -1).join(' ')} <br/>
                            <span className="gradient-text">{HERO_CONTENT.headline.split(' ').slice(-1)}</span>
                        </motion.h1>

                        <motion.p 
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="text-base md:text-lg lg:text-xl text-slate-400 font-medium mb-8 md:mb-12 max-w-xl mx-auto lg:mx-0 leading-relaxed"
                        >
                            {HERO_CONTENT.subheading}
                        </motion.p>
                        
                        <motion.div 
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4"
                        >
                            <a href="#projects" className="pill-button w-full sm:w-auto text-center justify-center">
                                Explore My Work <ArrowRight size={18} />
                            </a>
                        </motion.div>

                        {/* Quick Stats/Links */}
                        <motion.div 
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.4 }}
                            className="mt-12 md:mt-16 flex items-center justify-center lg:justify-start gap-6 md:gap-8"
                        >
                             <div className="flex flex-col items-center lg:items-start">
                                <span className="text-xl md:text-2xl font-black text-white">9.15</span>
                                <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">GPA</span>
                             </div>
                             <div className="w-px h-10 bg-slate-800 hidden sm:block" />
                             <div className="flex flex-col items-center lg:items-start">
                                <span className="text-xl md:text-2xl font-black text-white">IIT/D</span>
                                <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Focused</span>
                             </div>
                             <div className="w-px h-10 bg-slate-800 hidden sm:block" />
                             <div className="flex items-center gap-4">
                                <a href={BRAND_CONTENT.github} target="_blank" rel="noreferrer" className="text-slate-400 hover:text-white transition-colors">
                                    <FaGithub size={22} />
                                </a>
                                <a href={BRAND_CONTENT.linkedin} target="_blank" rel="noreferrer" className="text-slate-400 hover:text-white transition-colors">
                                    <FaLinkedin size={22} />
                                </a>
                                <a href={`mailto:${BRAND_CONTENT.email}`} className="text-slate-400 hover:text-white transition-colors">
                                    <Mail size={22} />
                                </a>
                             </div>
                        </motion.div>
                    </div>

                    {/* Right: Profile Visual */}
                    <div className="flex-1 relative order-1 lg:order-2 mb-12 lg:mb-0">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 1, ease: "easeOut" }}
                            className="relative w-64 h-64 md:w-[400px] md:h-[400px] mx-auto"
                        >
                            {/* Modern Decorative Glow */}
                            <div className="absolute inset-0 rounded-[3rem] bg-indigo-600/15 animate-pulse blur-3xl" />
                            
                            <div className="relative w-full h-full rounded-[3rem] overflow-hidden border border-white/10 glass-card p-1 shadow-2xl">
                                <div className="w-full h-full rounded-[2.8rem] overflow-hidden">
                                    <img 
                                        src={profilePic} 
                                        alt={BRAND_CONTENT.fullName}
                                        className="w-full h-full object-cover grayscale-[10%] hover:grayscale-0 transition-all duration-700"
                                    />
                                </div>
                                
                                <div className="absolute bottom-6 left-6 right-6">
                                    <div className="p-4 glass-card-dark !rounded-2xl border-white/20">
                                        <div className="flex items-center justify-between">
                                            <div className="flex flex-col">
                                                <span className="text-[9px] font-black text-slate-500 uppercase tracking-[0.2em] mb-1">Identity</span>
                                                <span className="text-xs font-black text-white tracking-widest uppercase">{BRAND_CONTENT.fullName}</span>
                                            </div>
                                            <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center text-slate-400">
                                                <Code size={14} />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Floating Professional Elements (Removed Robots) */}
                            <motion.div 
                                animate={{ y: [0, -15, 0] }}
                                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                                className="absolute -top-6 -right-6 w-20 h-20 md:w-24 md:h-24 glass-card flex items-center justify-center p-4 !rounded-[2rem] shadow-xl"
                            >
                                <Terminal className="text-indigo-400" size={28} />
                            </motion.div>

                            <motion.div 
                                animate={{ y: [0, 15, 0] }}
                                transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                                className="absolute -bottom-6 -left-6 w-20 h-20 md:w-24 md:h-24 glass-card flex items-center justify-center p-4 !rounded-[2rem] shadow-xl"
                            >
                                <Cpu className="text-sky-400" size={28} />
                            </motion.div>
                        </motion.div>
                    </div>
                </div>
            </div>
            
            {/* Scroll Indicator (Laptop Only) */}
            <div className="hidden lg:flex absolute bottom-8 left-1/2 -translate-x-1/2 flex-col items-center gap-2 opacity-30">
                <span className="text-[8px] font-black uppercase tracking-[0.5em] text-white">Scroll</span>
                <div className="w-px h-12 bg-gradient-to-b from-white to-transparent" />
            </div>
        </section>
    );
};

export default Hero;
