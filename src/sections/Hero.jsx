import { motion } from "framer-motion";
import { ArrowRight, Download, Bot, Terminal, Code, Mail } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { BRAND_CONTENT, HERO_CONTENT } from "../constants";

const Hero = () => {
    return (
        <section id="home" className="min-h-screen flex items-center relative overflow-hidden bg-grid pt-20">
            {/* Background Orbs */}
            <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-indigo-600/10 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-sky-600/10 rounded-full blur-[120px] pointer-events-none" />

            <div className="container relative z-10">
                <div className="flex flex-col lg:flex-row items-center justify-between gap-16 lg:gap-24">
                    
                    {/* Left: Text Content */}
                    <div className="flex-1 text-center lg:text-left">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-800/50 border border-white/5 mb-8"
                        >
                            <span className="w-2 h-2 rounded-full bg-indigo-400 animate-pulse" />
                            <span className="text-[10px] font-bold text-slate-300 uppercase tracking-[0.2em]">Available for Internships</span>
                        </motion.div>

                        <motion.h1 
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-5xl md:text-7xl font-black mb-8 leading-[1.1] tracking-tighter text-white"
                        >
                            {HERO_CONTENT.headline.split(' ').slice(0, -1).join(' ')} <br/>
                            <span className="gradient-text">{HERO_CONTENT.headline.split(' ').slice(-1)}</span>
                        </motion.h1>

                        <motion.p 
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="text-lg md:text-xl text-slate-400 font-medium mb-12 max-w-xl mx-auto lg:mx-0 leading-relaxed"
                        >
                            {HERO_CONTENT.subheading}
                        </motion.p>
                        
                        <motion.div 
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4"
                        >
                            <a href="#projects" className="pill-button w-full sm:w-auto">
                                View Projects <ArrowRight size={18} />
                            </a>
                            <a href={BRAND_CONTENT.resumeUrl} className="pill-button-outline w-full sm:w-auto">
                                Download Resume <Download size={18} />
                            </a>
                        </motion.div>

                        {/* Quick Stats/Links */}
                        <motion.div 
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.4 }}
                            className="mt-16 flex items-center justify-center lg:justify-start gap-8"
                        >
                             <div className="flex flex-col items-center lg:items-start">
                                <span className="text-2xl font-black text-white">9.15</span>
                                <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">CGPA</span>
                             </div>
                             <div className="w-px h-10 bg-slate-800 hidden sm:block" />
                             <div className="flex flex-col items-center lg:items-start">
                                <span className="text-2xl font-black text-white">20+</span>
                                <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Repos</span>
                             </div>
                             <div className="w-px h-10 bg-slate-800 hidden sm:block" />
                             <div className="flex items-center gap-4">
                                <a href={BRAND_CONTENT.github} target="_blank" rel="noreferrer" className="text-slate-400 hover:text-white transition-colors">
                                    <FaGithub size={24} />
                                </a>
                                <a href={BRAND_CONTENT.linkedin} target="_blank" rel="noreferrer" className="text-slate-400 hover:text-white transition-colors">
                                    <FaLinkedin size={24} />
                                </a>
                                <a href={`mailto:${BRAND_CONTENT.email}`} className="text-slate-400 hover:text-white transition-colors">
                                    <Mail size={24} />
                                </a>
                             </div>
                        </motion.div>
                    </div>

                    {/* Right: Visual Element */}
                    <div className="flex-1 relative order-first lg:order-last">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 1, ease: "easeOut" }}
                            className="relative w-72 h-72 md:w-[450px] md:h-[450px] mx-auto"
                        >
                            {/* Profile Container */}
                            <div className="absolute inset-0 rounded-[4rem] bg-indigo-600/20 animate-pulse blur-3xl" />
                            
                            <div className="relative w-full h-full rounded-[4rem] overflow-hidden border border-white/10 glass-card">
                                <img 
                                    src="https://media.licdn.com/dms/image/v2/D5603AQFWhT_rR6u7oA/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1718222956976?e=1744848000&v=beta&t=M8-9vDNRidM7-vL9wRiz3A15N9sP74_4Wk9-x5ZtI2E" 
                                    alt={BRAND_CONTENT.fullName}
                                    className="w-full h-full object-cover scale-110 hover:scale-100 transition-transform duration-1000 grayscale-[20%] hover:grayscale-0"
                                />
                                
                                <div className="absolute bottom-8 left-8 right-8">
                                    <div className="p-6 glass-card !rounded-3xl border-white/20">
                                        <div className="flex items-center gap-3 mb-2">
                                            <div className="w-2 h-2 rounded-full bg-emerald-400" />
                                            <span className="text-[10px] font-bold text-emerald-400 uppercase tracking-[0.3em]">System.Active()</span>
                                        </div>
                                        <div className="flex items-center justify-between">
                                            <span className="text-sm font-bold text-white uppercase tracking-wider">{BRAND_CONTENT.fullName}</span>
                                            <Code size={14} className="text-slate-500" />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Floating Icons */}
                            <motion.div 
                                animate={{ y: [0, -20, 0] }}
                                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                                className="absolute -top-10 -right-10 w-24 h-24 glass-card flex items-center justify-center p-4 !rounded-[2rem]"
                            >
                                <Bot className="text-indigo-400" size={32} />
                            </motion.div>

                            <motion.div 
                                animate={{ y: [0, 20, 0] }}
                                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                                className="absolute -bottom-10 -left-10 w-24 h-24 glass-card flex items-center justify-center p-4 !rounded-[2rem]"
                            >
                                <Terminal className="text-sky-400" size={32} />
                            </motion.div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
