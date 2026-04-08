import { motion } from "framer-motion";
import { ArrowRight, Github, Linkedin, Download, Bot, Terminal, Code } from "lucide-react";
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
                            className="text-5xl md:text-7xl font-black mb-8 leading-[1.1] tracking-tighter"
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
                            {BRAND_CONTENT.subtext}
                        </motion.p>
                            <Link to="projects" smooth={true} className="pill-button cursor-pointer">
                                <Rocket className="w-5 h-5" />
                                View My Work
                            </Link>

                            <a href="/resume.pdf" download className="pill-button-outline">
                                <Download className="w-5 h-5" />
                                Download CV
                            </a>
                        </div>

                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 1.5 }}
                            className="flex items-center gap-6 mt-12 justify-center lg:justify-start"
                        >
                            {[
                                { icon: <Github />, href: BRAND_CONTENT.github },
                                { icon: <Linkedin />, href: BRAND_CONTENT.linkedin },
                                { icon: <Mail />, href: `mailto:${BRAND_CONTENT.email}` }
                            ].map((social, i) => (
                                <a 
                                    key={i}
                                    href={social.href}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="p-3 rounded-xl bg-white/5 border border-white/10 text-text-muted hover:text-white hover:border-white/20 hover:scale-110 transition-all duration-300"
                                >
                                    {social.icon}
                                </a>
                            ))}
                        </motion.div>
                    </div>

                    {/* Right: Small Rounded Profile Image */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8, x: 50 }}
                        animate={{ opacity: 1, scale: 1, x: 0 }}
                        transition={{ duration: 1 }}
                        className="lg:w-[400px] flex justify-center items-center"
                    >
                        <div className="relative group">
                            {/* Animated Rings */}
                            <div className="absolute inset-0 rounded-3xl border-2 border-neon-purple/30 animate-[spin_10s_linear_infinite]" />
                            <div className="absolute inset-2 rounded-3xl border-2 border-neon-cyan/20 animate-[spin_15s_linear_infinite_reverse]" />
                            
                            {/* Glow */}
                            <div className="absolute inset-0 bg-neon-purple/20 blur-[60px] group-hover:bg-neon-cyan/30 transition-all duration-700" />
                            
                            {/* Profile Frame */}
                            <div className="relative w-64 h-80 md:w-80 md:h-96 rounded-3xl overflow-hidden glass-card p-1">
                                <div className="w-full h-full rounded-[1.4rem] overflow-hidden relative">
                                    <img 
                                        src={profilePic} 
                                        alt={BRAND_CONTENT.fullName}
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-bg-dark/80 via-transparent to-transparent opacity-60" />
                                    
                                    {/* Scanline */}
                                    <div className="absolute inset-0 w-full h-1 bg-neon-cyan/30 blur-sm animate-scan pointer-events-none" />
                                </div>
                            </div>

                            {/* Floating Tech Badge */}
                            <div className="absolute -bottom-6 -right-6 glass-card p-4 rounded-2xl flex items-center gap-3 shadow-2xl">
                                <div className="p-2 rounded-lg bg-neon-purple/20">
                                    <Code2 className="w-6 h-6 text-neon-cyan" />
                                </div>
                                <div className="flex flex-col">
                                    <span className="text-[10px] font-bold text-text-dim uppercase tracking-wider">Experience</span>
                                    <span className="text-sm font-black text-white">Senior AI Dev</span>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
            
            {/* Bottom Gradient Fade */}
            <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-bg-dark to-transparent" />
        </section>
    );
};

export default Hero;

