import { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Github, Linkedin, Send } from "lucide-react";
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
      <div className="container-custom flex items-center justify-between">
        
        {/* Logo */}
        <Link to="home" smooth={true} className="cursor-pointer group flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-royal-500 flex items-center justify-center font-black text-white text-lg shadow-[0_0_20px_rgba(124,58,237,0.3)] group-hover:scale-110 transition-all duration-500">
            G
          </div>
          <span className="text-xl font-black tracking-tighter text-white uppercase hidden sm:block">
            {BRAND_CONTENT.firstName}<span className="text-royal-500">.</span>{BRAND_CONTENT.lastName}
          </span>
        </Link>

        {/* Desktop Nav - Professional Glass Pill */}
        <nav className={`hidden lg:flex items-center gap-1 px-2 py-1.5 rounded-full border transition-all duration-500 ${
          isScrolled 
            ? "bg-bg-dark/80 backdrop-blur-xl border-white/10 shadow-2xl" 
            : "bg-transparent border-transparent"
        }`}>
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              to={link.href.replace("#", "")}
              smooth={true}
              offset={-80}
              spy={true}
              activeClass="!bg-royal-500 !text-white shadow-lg shadow-royal-500/20"
              className="px-6 py-2.5 rounded-full text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 hover:text-white transition-all cursor-pointer"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Right Actions */}
        <div className="hidden lg:flex items-center gap-6">
          <div className="flex items-center gap-4 border-r border-white/10 pr-6 mr-6">
            <a href={BRAND_CONTENT.github} target="_blank" rel="noreferrer" className="text-slate-400 hover:text-white transition-all">
              <Github size={18} />
            </a>
            <a href={BRAND_CONTENT.linkedin} target="_blank" rel="noreferrer" className="text-slate-400 hover:text-white transition-all">
              <Linkedin size={18} />
            </a>
          </div>
          <Link 
            to="contact" 
            smooth={true} 
            className="premium-button !py-2.5 !px-6 !text-[10px] shadow-[0_0_20px_rgba(124,58,237,0.2)]"
          >
            Transmission <Send size={14} className="ml-2" />
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="lg:hidden w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="lg:hidden fixed inset-x-4 top-24 bg-bg-dark/95 backdrop-blur-2xl rounded-[2rem] border border-white/10 p-10 z-[99] shadow-2xl"
          >
            <div className="flex flex-col items-center gap-8">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  to={link.href.replace("#", "")}
                  smooth={true}
                  offset={-80}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-xl font-black uppercase tracking-[0.3em] text-slate-400 hover:text-neon-cyan transition-colors"
                >
                  {link.name}
                </Link>
              ))}
              <div className="w-full h-px bg-white/5 my-4" />
              <div className="flex gap-8">
                <a href={BRAND_CONTENT.github} target="_blank" rel="noreferrer" className="text-slate-400"><Github size={24} /></a>
                <a href={BRAND_CONTENT.linkedin} target="_blank" rel="noreferrer" className="text-slate-400"><Linkedin size={24} /></a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;



