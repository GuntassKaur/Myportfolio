import { motion } from "framer-motion";
import { Link } from "react-scroll";
import { Github, Linkedin, Mail, Download, Rocket, Code2 } from "lucide-react";
import { BRAND_CONTENT, HERO_CONTENT } from "../constants";
import profilePic from "../assets/profile.jpeg";
import { useEffect, useState } from "react";

const Hero = () => {
    const [typedText, setTypedText] = useState("");
    const fullText = HERO_CONTENT.subheading;
    
    useEffect(() => {
        let i = 0;
        const timer = setInterval(() => {
            setTypedText(fullText.slice(0, i));
            i++;
            if (i > fullText.length) clearInterval(timer);
        }, 50);
        return () => clearInterval(timer);
    }, [fullText]);

    return (
        <section id="home" className="relative min-h-screen flex items-center pt-20 pb-16 overflow-hidden">
            {/* Premium Background Elements */}
            <div className="absolute inset-0 animated-grid opacity-20 z-0" />
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-neon-purple/20 rounded-full blur-[120px] animate-blob z-0" />
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-neon-cyan/20 rounded-full blur-[120px] animate-blob animation-delay-2000 z-0" />

            <div className="container relative z-10 mx-auto px-6">
                <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-24">
                    {/* Left: Text Content */}
                    <div className="flex-1 text-center lg:text-left">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                            className="inline-block px-4 py-1.5 rounded-full bg-white/5 border border-white/10 mb-6"
                        >
                            <span className="text-xs font-bold tracking-[0.2em] text-neon-cyan uppercase flex items-center gap-2">
                                <span className="w-2 h-2 rounded-full bg-neon-cyan animate-pulse" />
                                Available for opportunities
                            </span>
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            className="text-6xl md:text-8xl font-black mb-6 leading-tight"
                        >
                            <span className="text-white">HI, I'M</span> <br />
                            <span className="gradient-text">{BRAND_CONTENT.firstName.toUpperCase()}</span>
                        </motion.h1>

                        <div className="min-h-[60px] mb-8">
                            <p className="text-xl md:text-2xl text-text-muted font-medium">
                                {typedText}
                                <span className="animate-pulse inline-block ml-1 w-1 h-6 bg-neon-cyan" />
                            </p>
                        </div>

                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 1, duration: 1 }}
                            className="text-lg text-text-dim mb-10 max-w-xl"
                        >
                            {HERO_CONTENT.powerLine}
                        </motion.p>

                        <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4">
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

