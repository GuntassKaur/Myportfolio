import { motion } from "framer-motion";
import { Link } from "react-scroll";
import { BRAND_CONTENT, NAV_LINKS } from "../constants";
import { FaGithub, FaLinkedin, FaBars, FaXmark } from "react-icons/fa6";
import { useState, useEffect } from "react";

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState("home");

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
            
            // Auto-track active section scroll position
            const sections = NAV_LINKS.map(link => link.href.replace('#', ''));
            const scrollPos = window.scrollY + 100;
            
            for (const section of sections) {
                const element = document.getElementById(section);
                if (element && scrollPos >= element.offsetTop && scrollPos < element.offsetTop + element.offsetHeight) {
                    setActiveSection(section);
                }
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav 
            className={`fixed top-0 left-0 w-full z-[100] transition-all duration-500 py-6 ${
                scrolled 
                ? "bg-[#0A0F1F]/80 backdrop-blur-2xl border-b border-white/5 py-4 shadow-2xl" 
                : "bg-transparent"
            }`}
        >
            <div className="container flex items-center justify-between px-6">
                
                {/* Brand Identity */}
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="flex items-center gap-3 group cursor-pointer"
                    onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                >
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-500 to-magenta-500 flex items-center justify-center font-black text-xl text-white transition-transform duration-500 group-hover:scale-110 shadow-[0_0_20px_rgba(108,93,211,0.5)]">
                        {BRAND_CONTENT.firstName[0]}
                    </div>
                    <span className="text-xl font-black tracking-tighter text-white uppercase hidden sm:block">
                        {BRAND_CONTENT.firstName} <span className="text-cyan-400">{BRAND_CONTENT.lastName}</span>
                    </span>
                </motion.div>

                {/* Primary Site Navigation */}
                <div className="hidden lg:flex items-center gap-12">
                    <ul className="flex items-center gap-10">
                        {NAV_LINKS.map((link, index) => (
                            <motion.li
                                key={index}
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.05 }}
                            >
                                <Link
                                    to={link.href.replace('#', '')}
                                    smooth={true}
                                    spy={true}
                                    offset={-100}
                                    onSetActive={() => setActiveSection(link.href.replace('#', ''))}
                                    className={`relative text-[10px] font-black uppercase tracking-[0.25em] transition-all cursor-pointer hover:text-white ${
                                        activeSection === link.href.replace('#', '') ? "text-white" : "text-white/40"
                                    }`}
                                >
                                    {link.name}
                                    {activeSection === link.href.replace('#', '') && (
                                        <motion.div
                                            layoutId="nav-active"
                                            className="absolute -bottom-2 left-0 w-full h-[2.5px] bg-cyan-400 shadow-[0_0_15px_#3CD7FF]"
                                        />
                                    )}
                                </Link>
                            </motion.li>
                        ))}
                    </ul>

                    <div className="w-[1px] h-6 bg-white/10 mx-2" />

                    <div className="flex items-center gap-6">
                        <a 
                            href={BRAND_CONTENT.github} 
                            target="_blank" 
                            className="text-white/40 hover:text-white transition-all hover:scale-110 hover:shadow-[0_0_20px_white]"
                        >
                            <FaGithub size={20} />
                        </a>
                        <a 
                            href={BRAND_CONTENT.linkedin} 
                            target="_blank" 
                            className="text-white/40 hover:text-cyan-400 transition-all hover:scale-110 hover:shadow-[0_0_20px_#3CD7FF]"
                        >
                            <FaLinkedin size={20} />
                        </a>
                    </div>
                </div>

                {/* Mobile Interface Controls */}
                <motion.button 
                    whileTap={{ scale: 0.9 }}
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    className="lg:hidden p-3 bg-white/5 border border-white/10 rounded-xl text-white backdrop-blur-md relative z-[102]"
                >
                    {mobileMenuOpen ? <FaXmark size={24} /> : <FaBars size={24} />}
                </motion.button>
            </div>

            {/* Immersive Mobile Overlay */}
            <motion.div 
                initial={false}
                animate={mobileMenuOpen ? "open" : "closed"}
                variants={{
                    open: { opacity: 1, y: 0, pointerEvents: "all" },
                    closed: { opacity: 0, y: -20, pointerEvents: "none" }
                }}
                className="fixed inset-0 bg-[#0A0F1F]/98 z-[99] lg:hidden flex flex-col items-center justify-center gap-10 backdrop-blur-3xl"
            >
                {NAV_LINKS.map((link, i) => (
                    <Link 
                        key={i}
                        to={link.href.replace('#', '')} 
                        smooth={true} 
                        duration={1000} 
                        offset={-80}
                        onClick={() => setMobileMenuOpen(false)}
                        className="text-4xl font-black uppercase tracking-tight text-white/40 hover:text-white transition-all"
                    >
                        {link.name}
                    </Link>
                ))}
            </motion.div>
        </nav>
    );
};

export default Navbar;
