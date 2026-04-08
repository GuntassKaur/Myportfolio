import { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ExternalLink } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { BRAND_CONTENT, NAV_LINKS } from "../constants";

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 20);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ${isScrolled ? "py-4" : "py-8"}`}>
            <div className="container flex items-center justify-between">
                {/* Logo */}
                <Link to="home" smooth={true} className="cursor-pointer group flex items-center gap-3">
                    <div className="w-10 h-10 rounded-2xl bg-indigo-600 flex items-center justify-center font-black text-white text-lg shadow-lg shadow-indigo-500/20 group-hover:scale-110 transition-all duration-500">
                        G
                    </div>
                    <span className="text-xl font-black tracking-tighter text-white uppercase hidden sm:block">
                        {BRAND_CONTENT.firstName}
                        <span className="text-indigo-400">/</span>
                        {BRAND_CONTENT.lastName}
                    </span>
                </Link>

                {/* Desktop Nav - Professional Glass Pill */}
                <nav className={`hidden lg:flex items-center gap-2 px-3 py-1.5 rounded-full border transition-all duration-500 ${isScrolled ? "bg-slate-900/80 backdrop-blur-xl border-white/5 shadow-2xl" : "bg-transparent border-transparent"}`}>
                    {NAV_LINKS.map((link) => (
                        <Link
                            key={link.href}
                            to={link.href.replace("#", "")}
                            smooth={true}
                            offset={-80}
                            spy={true}
                            activeClass="!bg-indigo-600 !text-white"
                            className="px-6 py-2.5 rounded-full text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 hover:text-white transition-all cursor-pointer"
                        >
                            {link.name}
                        </Link>
                    ))}
                </nav>

                {/* Right Actions */}
                <div className="hidden lg:flex items-center gap-6">
                    <a href={BRAND_CONTENT.github} target="_blank" rel="noreferrer" className="text-slate-400 hover:text-white transition-all hover:scale-110">
                        <FaGithub size={20} />
                    </a>
                    <Link to="contact" smooth={true} className="pill-button !py-2.5 !px-6 !text-[9px]">
                        Contact Me <ExternalLink size={14} />
                    </Link>
                </div>

                {/* Mobile Toggle */}
                <button 
                    className="lg:hidden text-white p-2 rounded-xl bg-slate-800/50 border border-white/5"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        className="lg:hidden fixed inset-x-6 top-24 bg-slate-900/95 backdrop-blur-2xl rounded-[2.5rem] border border-white/10 p-10 z-[99] flex flex-col items-center gap-8"
                    >
                        {NAV_LINKS.map((link) => (
                            <Link
                                key={link.href}
                                to={link.href.replace("#", "")}
                                smooth={true}
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="text-2xl font-black uppercase tracking-widest text-slate-400 hover:text-indigo-400"
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


