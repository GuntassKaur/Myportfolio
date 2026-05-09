import { motion } from "framer-motion";
import { ArrowRight, Download, Code, Sparkles } from "lucide-react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa6";
import { Typewriter } from "react-simple-typewriter";
import { useCallback } from "react";
import { loadSlim } from "tsparticles-slim";
import Particles from "react-tsparticles";
import { BRAND_CONTENT, HERO_CONTENT } from "../constants";
import profilePic from "../assets/profile.jpeg";

const Hero = () => {
  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-bg-dark">
      {/* Particle Background */}
      <div className="absolute inset-0 z-0">
        <Particles
          id="tsparticles"
          init={particlesInit}
          options={{
            background: { opacity: 0 },
            fpsLimit: 120,
            interactivity: {
              events: { onHover: { enable: true, mode: "grab" } },
              modes: { grab: { distance: 140, links: { opacity: 0.5 } } },
            },
            particles: {
              color: { value: "#7C3AED" },
              links: { color: "#06B6D4", distance: 150, enable: true, opacity: 0.2, width: 1 },
              move: { enable: true, speed: 1 },
              number: { density: { enable: true, area: 800 }, value: 80 },
              opacity: { value: 0.3 },
              shape: { type: "circle" },
              size: { value: { min: 1, max: 3 } },
            },
            detectRetina: true,
          }}
        />
      </div>

      {/* Decorative Blobs */}
      <div className="glow-blob w-[400px] h-[400px] bg-royal-500/20 top-[-10%] right-[-5%] animate-float" />
      <div className="glow-blob w-[300px] h-[300px] bg-neon-cyan/10 bottom-[10%] left-[-5%] animate-float [animation-delay:2s]" />

      <div className="container-custom relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-16">
          
          {/* Left: Text Content */}
          <div className="flex-1 text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 mb-8"
            >
              <Sparkles className="text-gold-highlight" size={14} />
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-300">
                Engineering Excellence
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-5xl md:text-7xl lg:text-8xl font-black mb-6 tracking-tighter"
            >
              {HERO_CONTENT.headline.split(',')[0]},<br />
              <span className="gradient-text">{HERO_CONTENT.headline.split(',')[1]}</span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl md:text-2xl font-medium text-slate-300 mb-6 min-h-[1.5em]"
            >
              <Typewriter
                words={[HERO_CONTENT.subheading]}
                loop={1}
                cursor
                cursorStyle="_"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1000}
              />
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-lg text-slate-400 max-w-xl mb-12 leading-relaxed"
            >
              {HERO_CONTENT.powerStatement}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-4"
            >
              <a href="#projects" className="premium-button group">
                View Projects
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a href={BRAND_CONTENT.resumeUrl} className="premium-button-outline">
                <Download size={18} />
                Resume
              </a>
              <div className="flex items-center gap-3 ml-2 lg:ml-4 border-l border-white/10 pl-6">
                <a href={BRAND_CONTENT.linkedin} target="_blank" rel="noreferrer" className="text-slate-400 hover:text-white transition-all hover:scale-110">
                  <FaLinkedinIn size={20} />
                </a>
                <a href={BRAND_CONTENT.github} target="_blank" rel="noreferrer" className="text-slate-400 hover:text-white transition-all hover:scale-110">
                  <FaGithub size={20} />
                </a>
              </div>
            </motion.div>
          </div>

          {/* Right: Profile Image */}
          <div className="flex-1 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="relative w-72 h-72 md:w-[450px] md:h-[450px] mx-auto"
            >
              {/* Spinning Ring */}
              <div className="absolute inset-0 rounded-[3rem] border-2 border-dashed border-royal-500/30 animate-[spin_20s_linear_infinite]" />
              
              {/* Outer Glow */}
              <div className="absolute inset-0 rounded-[3rem] bg-royal-500/10 blur-[60px] animate-pulse" />

              <div className="relative w-full h-full rounded-[3rem] overflow-hidden border border-white/10 glass-card p-1.5 group">
                <div className="w-full h-full rounded-[2.8rem] overflow-hidden bg-slate-800">
                  <img
                    src={profilePic}
                    alt={BRAND_CONTENT.fullName}
                    className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                  />
                </div>
                
                {/* ID Card Label */}
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="p-4 glass-card !rounded-2xl border-white/20 bg-black/40 backdrop-blur-md">
                    <div className="flex items-center justify-between">
                      <div className="flex flex-col">
                        <span className="text-[8px] font-bold text-royal-500 uppercase tracking-widest mb-0.5">Software Engineer</span>
                        <span className="text-sm font-bold text-white tracking-wide uppercase">{BRAND_CONTENT.fullName}</span>
                      </div>
                      <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center text-neon-cyan">
                        <Code size={16} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Tech Badges */}
              <motion.div
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-4 -right-4 w-16 h-16 glass-card flex items-center justify-center !rounded-2xl shadow-xl border-royal-500/20"
              >
                <div className="w-8 h-8 bg-royal-500/20 rounded-full flex items-center justify-center">
                  <div className="w-2 h-2 bg-royal-500 rounded-full animate-ping" />
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

