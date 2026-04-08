import { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Github, Linkedin, Mail, Hexagon } from "lucide-react";
import { BRAND_CONTENT, NAV_LINKS } from "../constants";

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 50);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header className="fixed top-0 left-0 right-0 z-[100] px-6 py-6 md:py-8 pointer-events-none">
            <div className="container mx-auto flex items-center justify-between">
                {/* Logo - Always visible */}
                <Link to="home" smooth={true} className="cursor-pointer group flex items-center gap-2 pointer-events-auto">
                    <div className="relative w-10 h-10 flex items-center justify-center">
                        <Hexagon className="absolute inset-0 text-neon-cyan fill-neon-cyan/10 group-hover:rotate-90 transition-transform duration-500" size={40} />
                        <span className="relative z-10 font-black text-white text-lg">G</span>
                    </div>
                </Link>

                {/* Floating Glass Pill - Desktop */}
                <div className={`hidden lg:flex items-center gap-2 px-2 py-2 rounded-full border border-white/5 backdrop-blur-xl bg-bg-dark/40 transition-all duration-500 pointer-events-auto ${isScrolled ? "translate-y-0 opacity-100" : "translate-y-0 opacity-100"}`}>
                    {NAV_LINKS.map((link) => (
                        <Link
                            key={link.href}
                            to={link.href.replace("#", "")}
                            smooth={true}
                            offset={-80}
                            activeClass="!bg-white/10 !text-white"
                            spy={true}
                            className="px-6 py-2.5 rounded-full text-[10px] font-black uppercase tracking-[0.2em] text-text-muted hover:text-white transition-all cursor-pointer"
                        >
                            {link.name}
                        </Link>
                    ))}
                </div>

                {/* Contact CTA / Social - Desktop */}
                <div className="hidden lg:flex items-center gap-4 pointer-events-auto">
                    <a href={BRAND_CONTENT.github} target="_blank" rel="noreferrer" className="p-3 rounded-full text-text-muted hover:text-white transition-all">
                        <Github size={18} />
                    </a>
                    <Link to="contact" smooth={true} className="pill-button px-8 py-2.5 text-[10px]">
                        Establish Uplink
                    </Link>
                </div>

                {/* Mobile Toggle */}
                <button 
                    className="lg:hidden text-white p-3 rounded-full bg-bg-dark/80 backdrop-blur-md border border-white/10 pointer-events-auto"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
                </button>
            </div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        className="lg:hidden fixed inset-4 top-24 bg-bg-dark/95 backdrop-blur-2xl rounded-[3rem] border border-white/10 z-[99] flex flex-col items-center justify-center gap-8 pointer-events-auto"
                    >
                        {NAV_LINKS.map((link) => (
                            <Link
                                key={link.href}
                                to={link.href.replace("#", "")}
                                smooth={true}
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="text-2xl font-black uppercase tracking-widest text-text-muted hover:text-neon-cyan transition-colors"
                            >
                                {link.name}
                            </Link>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
};

export default Navbar;

