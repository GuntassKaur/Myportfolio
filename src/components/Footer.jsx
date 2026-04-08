import { motion } from "framer-motion";
import { BRAND_CONTENT } from "../constants";
import { Github, Linkedin, Mail, Heart, Hexagon } from "lucide-react";

const Footer = () => {
    return (
        <footer className="py-20 relative overflow-hidden border-t border-white/5">
            <div className="container mx-auto px-6 relative z-10">
                <div className="flex flex-col md:flex-row items-center justify-between gap-12">
                    
                    {/* Left: Logo & Copyright */}
                    <div className="flex flex-col items-center md:items-start gap-4">
                        <div className="flex items-center gap-2">
                            <div className="relative w-8 h-8 flex items-center justify-center">
                                <Hexagon className="absolute inset-0 text-neon-cyan fill-neon-cyan/5" size={32} />
                                <span className="relative z-10 font-black text-white text-sm">G</span>
                            </div>
                            <span className="text-lg font-black tracking-tighter text-white uppercase">
                                {BRAND_CONTENT.firstName}/{BRAND_CONTENT.lastName}
                            </span>
                        </div>
                        <p className="text-[10px] font-black uppercase tracking-[0.4em] text-text-dim">
                            &copy; 2026 Engineered for Excellence
                        </p>
                    </div>

                    {/* Middle: Credits */}
                    <div className="flex flex-col items-center gap-2">
                        <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-text-muted">
                            Architected with <Heart size={10} className="text-neon-pink animate-pulse" /> by Guntass Kaur
                        </div>
                    </div>

                    {/* Right: Socials */}
                    <div className="flex items-center gap-6">
                        <a href={BRAND_CONTENT.github} target="_blank" rel="noreferrer" className="text-text-muted hover:text-white transition-all transform hover:scale-125">
                            <Github size={20} />
                        </a>
                        <a href={BRAND_CONTENT.linkedin} target="_blank" rel="noreferrer" className="text-text-muted hover:text-white transition-all transform hover:scale-125">
                            <Linkedin size={20} />
                        </a>
                        <a href={`mailto:${BRAND_CONTENT.email}`} className="text-text-muted hover:text-white transition-all transform hover:scale-125">
                            <Mail size={20} />
                        </a>
                    </div>
                </div>
                
                {/* Visual accent */}
                <div className="mt-16 w-full h-[1px] bg-gradient-to-r from-transparent via-white/5 to-transparent shadow-[0_0_20px_rgba(255,255,255,0.05)]" />
            </div>

            {/* Ambient Background */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-neon-cyan/20 to-transparent" />
        </footer>
    );
};

export default Footer;

