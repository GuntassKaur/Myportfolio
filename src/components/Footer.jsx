import { motion } from "framer-motion";
import { BRAND_CONTENT, NAV_LINKS } from "../constants";
import { Link } from "react-scroll";
import { FaGithub, FaLinkedin, FaEnvelope, FaArrowUp, FaTerminal, FaCode, FaPowerOff } from "react-icons/fa6";

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="py-32 relative overflow-hidden bg-[#0A0F1F] border-t border-white/5">
            {/* Immersive Deep Grid Overlays */}
            <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-5 pointer-events-none" />
            <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-purple-500/50 to-transparent shadow-[0_0_15px_rgba(108,93,211,0.5)]" />

            <div className="container relative z-10 px-6">
                
                {/* High-Impact Upper Infrastructure */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-24 mb-32 items-start">
                    
                    {/* Brand Meta Data */}
                    <div className="lg:col-span-2 flex flex-col items-start px-10">
                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            className="cursor-pointer group flex items-center gap-6 mb-12"
                            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                        >
                            <div className="w-16 h-16 rounded-[24px] bg-gradient-to-br from-[#6C5DD3] to-[#FF3ACD] flex items-center justify-center font-black text-3xl text-white transition-all duration-700 group-hover:scale-110 group-hover:rotate-12 shadow-[0_25px_50px_rgba(108,93,211,0.4)]">
                                {BRAND_CONTENT.firstName[0]}
                            </div>
                            <span className="text-5xl font-black tracking-tighter text-white uppercase group-hover:text-cyan-400 transition-colors">
                                {BRAND_CONTENT.firstName} <span className="text-white/10 italic">Nexus.</span>
                            </span>
                        </motion.div>
                        <p className="text-[#A0AEC0] text-xl font-light leading-relaxed mb-12 max-w-sm italic opacity-80 border-l-2 border-magenta-500/30 pl-10">
                            "Synthesizing high-concurrency systems and premium digital architectures for the next epoch."
                        </p>
                        <div className="flex gap-10">
                            {[
                                { icon: FaEnvelope, href: `mailto:${BRAND_CONTENT.email}`, color: "#6C5DD3" },
                                { icon: FaLinkedin, href: BRAND_CONTENT.linkedin, color: "#3CD7FF" },
                                { icon: FaGithub, href: BRAND_CONTENT.github, color: "#FF3ACD" }
                            ].map((social, i) => (
                                <motion.a
                                    key={i}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    whileHover={{ scale: 1.3, color: social.color, rotate: 10 }}
                                    className="text-white/20 hover:text-white transition-all duration-500 hover:drop-shadow-[0_0_15px_white]"
                                >
                                    <social.icon size={26} />
                                </motion.a>
                            ))}
                        </div>
                    </div>

                    {/* Uplink Navigation Protocol */}
                    <div className="flex flex-col items-start gap-10 px-6 border-l border-white/5">
                        <h4 className="text-[11px] font-black uppercase tracking-[0.4em] text-magenta-500 mb-2 shadow-[0_0_10px_rgba(255,58,205,0.2)]">Internal Linkage</h4>
                        <div className="flex flex-col gap-6">
                            {NAV_LINKS.map((link) => (
                                <Link 
                                    key={link.name}
                                    to={link.href.replace('#', '')} 
                                    smooth={true} 
                                    duration={1000} 
                                    className="text-white/30 hover:text-white transition-all text-[11px] font-black uppercase tracking-[0.3em] cursor-pointer group flex items-center gap-4 hover:translate-x-4 duration-500"
                                >
                                    <span className="w-2 h-2 rounded-full bg-cyan-400 opacity-0 group-hover:opacity-100 transition-all shadow-[0_0_15px_#3CD7FF] animate-pulse"></span>
                                    {link.name}
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* Operational System Logs */}
                    <div className="flex flex-col items-start gap-10 p-12 glass-card border-white/10 rounded-[56px] w-full bg-gradient-to-br from-white/5 to-transparent shadow-2xl relative overflow-hidden group">
                         <div className="absolute top-[-20%] right-[-20%] w-32 h-32 bg-cyan-400/5 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity" />
                        
                        <div className="flex items-center gap-4 mb-4">
                            <FaTerminal size={16} className="text-cyan-400 animate-pulse" />
                            <span className="text-[11px] font-black uppercase tracking-[0.4em] text-white/60">System Summary</span>
                        </div>
                        <div className="text-white/30 text-[10px] leading-[2.2] font-black font-mono tracking-widest uppercase">
                            {'>'} Build: Stable <br />
                            {'>'} Logic: Evaluated <br />
                            {'>'} UI-X: Premium <br />
                            {'>'} Protocol: Optimized <br />
                            {'>'} Status: Operational
                        </div>
                    </div>

                </div>

                {/* Final Infrastructure Segment */}
                <div className="flex flex-col md:flex-row justify-between items-center py-20 border-t border-white/5 gap-16 text-center md:text-left mx-6">
                    <div className="flex flex-col gap-4">
                         <p className="text-white/20 text-[11px] font-black uppercase tracking-[0.3em] flex items-center gap-3">
                             <FaCode className="text-purple-500" />
                             Nexus Architecture © {currentYear} {BRAND_CONTENT.fullName}
                         </p>
                         <div className="flex items-center gap-3 justify-center md:justify-start">
                            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 shadow-[0_0_10px_#3CD7FF]"></span>
                            <p className="text-white/10 text-[9px] font-black uppercase tracking-[0.4em] italic leading-none">
                                Synchronized Interface Operational
                            </p>
                         </div>
                    </div>
                    
                    <Link to="home" smooth={true} duration={1000} className="w-20 h-20 rounded-[32px] glass border border-white/20 flex items-center justify-center text-white hover:border-magenta-500 transition-all group cursor-pointer shadow-[0_30px_60px_rgba(0,0,0,0.5)] bg-gradient-to-br from-white/5 to-[#FF3ACD11]">
                        <FaArrowUp size={24} className="group-hover:-translate-y-4 transition-all duration-700 hover:rotate-12" />
                    </Link>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
