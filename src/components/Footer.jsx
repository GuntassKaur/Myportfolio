import { BRAND_CONTENT } from "../constants";
import { Mail, Heart, ArrowUpRight } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="py-20 relative overflow-hidden border-t border-white/5 bg-grid">
            <div className="container relative z-10">
                <div className="flex flex-col md:flex-row items-center justify-between gap-12">
                    
                    {/* Left: Branding & Tagline */}
                    <div className="flex flex-col items-center md:items-start gap-4">
                        <div className="flex items-center gap-3">
                            <div className="w-8 h-8 rounded-lg bg-indigo-600 flex items-center justify-center font-black text-white text-xs shadow-lg">
                                G
                            </div>
                            <span className="text-lg font-black tracking-tighter text-white uppercase">
                                {BRAND_CONTENT.firstName}/{BRAND_CONTENT.lastName}
                            </span>
                        </div>
                        <p className="text-[10px] font-bold uppercase tracking-[0.4em] text-slate-500">
                            Engineering Scalable Intelligence
                        </p>
                    </div>

                    {/* Middle: Credits */}
                    <div className="flex flex-col items-center gap-2">
                        <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-slate-400">
                            Built with precision <Heart size={10} className="text-rose-500 animate-pulse" /> by Guntass Kaur
                        </div>
                        <p className="text-[9px] font-bold text-slate-600 uppercase tracking-widest">
                            &copy; 2026 Code & Systems Portfolio
                        </p>
                    </div>

                    {/* Right: Quick Links */}
                    <div className="flex items-center gap-8">
                        <a href={BRAND_CONTENT.github} target="_blank" rel="noreferrer" className="text-slate-500 hover:text-white transition-all transform hover:scale-110">
                            <FaGithub size={20} />
                        </a>
                        <a href={BRAND_CONTENT.linkedin} target="_blank" rel="noreferrer" className="text-slate-500 hover:text-white transition-all transform hover:scale-110">
                            <FaLinkedin size={20} />
                        </a>
                        <a href={`mailto:${BRAND_CONTENT.email}`} className="text-slate-500 hover:text-white transition-all transform hover:scale-110">
                            <Mail size={20} />
                        </a>
                    </div>
                </div>
                
                {/* Modern subtle accent */}
                <div className="mt-16 w-full h-px bg-gradient-to-r from-transparent via-indigo-500/10 to-transparent" />
            </div>
        </footer>
    );
};

export default Footer;
