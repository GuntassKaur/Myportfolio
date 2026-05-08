import { BRAND_CONTENT } from "../constants";
import { Mail, Github, Linkedin, Cpu } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-20 relative overflow-hidden border-t border-white/5 bg-bg-dark">
      <div className="container-custom relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          
          {/* Left: Branding */}
          <div className="flex flex-col items-center md:items-start gap-3">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-royal-500 flex items-center justify-center font-black text-white text-sm shadow-[0_0_20px_rgba(124,58,237,0.3)]">
                G
              </div>
              <span className="text-xl font-black tracking-tighter text-white uppercase">
                {BRAND_CONTENT.firstName}<span className="text-royal-500">.</span>{BRAND_CONTENT.lastName}
              </span>
            </div>
            <p className="text-[10px] font-bold uppercase tracking-[0.4em] text-slate-500">
              Engineering Scalable Intelligence
            </p>
          </div>

          {/* Middle: Tech Stack */}
          <div className="flex flex-col items-center gap-2">
            <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.3em] text-slate-500">
              Powered by <Cpu size={12} className="text-neon-cyan" /> Systems Architecture
            </div>
            <p className="text-[9px] font-bold text-slate-600 uppercase tracking-widest">
              &copy; {new Date().getFullYear()} Guntass Kaur. All Rights Reserved.
            </p>
          </div>

          {/* Right: Social Uplinks */}
          <div className="flex items-center gap-6">
            <a 
              href={BRAND_CONTENT.github} 
              target="_blank" 
              rel="noreferrer" 
              className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-slate-500 hover:text-white hover:bg-white/10 transition-all duration-300"
            >
              <Github size={18} />
            </a>
            <a 
              href={BRAND_CONTENT.linkedin} 
              target="_blank" 
              rel="noreferrer" 
              className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-slate-500 hover:text-white hover:bg-white/10 transition-all duration-300"
            >
              <Linkedin size={18} />
            </a>
            <a 
              href={`mailto:${BRAND_CONTENT.email}`} 
              className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-slate-500 hover:text-white hover:bg-white/10 transition-all duration-300"
            >
              <Mail size={18} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

