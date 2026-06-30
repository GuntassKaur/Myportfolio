import { motion } from "framer-motion";
import { ArrowRight, Code, Sparkles, Mail } from "lucide-react";
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
    <section id="home" className="relative min-h-screen flex items-center pt-20 pb-10 overflow-hidden bg-bg-dark">
      {/* Particle Background */}
      <div className="absolute inset-0 z-0">
        <Particles
          id="tsparticles"
          init={particlesInit}
          options={{
            background: { opacity: 0 },
            fpsLimit: 60,
            interactivity: {
              events: { onHover: { enable: true, mode: "grab" } },
              modes: { grab: { distance: 140, links: { opacity: 0.4 } } },
            },
            particles: {
              color: { value: "#7C3AED" },
              links: { color: "#06B6D4", distance: 150, enable: true, opacity: 0.15, width: 1 },
              move: { enable: true, speed: 0.8 },
              number: { density: { enable: true, area: 900 }, value: 60 },
              opacity: { value: 0.25 },
              shape: { type: "circle" },
              size: { value: { min: 1, max: 2.5 } },
            },
            detectRetina: true,
          }}
        />
      </div>

      {/* Decorative Blobs */}
      <div className="glow-blob w-[350px] h-[350px] bg-royal-500/15 top-[-8%] right-[-3%] animate-float" />
      <div className="glow-blob w-[250px] h-[250px] bg-neon-cyan/8 bottom-[15%] left-[-3%] animate-float [animation-delay:2s]" />

      <div className="container-custom relative z-10 w-full">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16">
          
          {/* Left: Text Content */}
          <div className="flex-1 text-center lg:text-left max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 mb-6"
            >
              <Sparkles className="text-gold-highlight" size={13} />
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-300">
                Engineering Excellence
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-5xl md:text-6xl lg:text-7xl font-black mb-4 tracking-tighter leading-[1.05]"
            >
              {HERO_CONTENT.headline.split(',')[0]},<br />
              <span className="gradient-text">{HERO_CONTENT.headline.split(',')[1]}</span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-lg md:text-xl font-medium text-slate-300 mb-4 min-h-[1.5em]"
            >
              <Typewriter
                words={[HERO_CONTENT.subheading]}
                loop={1}
                cursor
                cursorStyle="_"
                typeSpeed={60}
                deleteSpeed={50}
                delaySpeed={1000}
              />
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-base text-slate-400 max-w-xl mb-10 leading-relaxed"
            >
              {HERO_CONTENT.powerStatement}
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-4"
            >
              <a href="#projects" className="premium-button group">
                View Projects
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href="#contact"
                className="premium-button-outline group"
              >
                <Mail size={16} />
                Contact
              </a>

              <div className="flex items-center gap-5 border-l border-white/10 pl-5 h-10 ml-1">
                <a
                  href={BRAND_CONTENT.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  title="LinkedIn"
                  className="text-slate-400 hover:text-white transition-all duration-300 hover:scale-125 hover:text-[#0A66C2]"
                >
                  <FaLinkedinIn size={20} />
                </a>
                <a
                  href={BRAND_CONTENT.github}
                  target="_blank"
                  rel="noreferrer"
                  title="GitHub"
                  className="text-slate-400 hover:text-white transition-all duration-300 hover:scale-125"
                >
                  <FaGithub size={20} />
                </a>
              </div>
            </motion.div>

            {/* Availability Badge */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="mt-8 inline-flex items-center gap-2 text-xs font-bold text-slate-500 uppercase tracking-widest"
            >
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse inline-block" />
              Open to Software Engineering Roles & Internships
            </motion.div>
          </div>

          {/* Right: Profile Image */}
          <div className="flex-shrink-0 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.9, ease: "easeOut" }}
              className="relative w-64 h-64 md:w-[360px] md:h-[360px] lg:w-[400px] lg:h-[400px] mx-auto"
            >
              {/* Spinning Ring */}
              <div className="absolute inset-0 rounded-[3rem] border-2 border-dashed border-royal-500/30 animate-[spin_20s_linear_infinite]" />
              
              {/* Outer Glow */}
              <div className="absolute inset-0 rounded-[3rem] bg-royal-500/8 blur-[50px] animate-pulse" />

              <div className="relative w-full h-full rounded-[3rem] overflow-hidden border border-white/10 glass-card p-1.5 group">
                <div className="w-full h-full rounded-[2.8rem] overflow-hidden bg-slate-800">
                  <img
                    src={profilePic}
                    alt={BRAND_CONTENT.fullName}
                    className="w-full h-full object-cover grayscale-[15%] group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                  />
                </div>
                
                {/* ID Card Label */}
                <div className="absolute bottom-5 left-5 right-5">
                  <div className="p-3.5 glass-card !rounded-xl border-white/20 bg-black/50 backdrop-blur-md">
                    <div className="flex items-center justify-between">
                      <div className="flex flex-col">
                        <span className="text-[8px] font-bold text-royal-500 uppercase tracking-widest mb-0.5">Software Engineer</span>
                        <span className="text-sm font-bold text-white tracking-wide uppercase">{BRAND_CONTENT.fullName}</span>
                      </div>
                      <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center text-neon-cyan">
                        <Code size={15} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Badge */}
              <motion.div
                animate={{ y: [0, -12, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-3 -right-3 w-14 h-14 glass-card flex items-center justify-center !rounded-2xl shadow-xl border-royal-500/20"
              >
                <div className="w-7 h-7 bg-royal-500/20 rounded-full flex items-center justify-center">
                  <div className="w-2 h-2 bg-royal-500 rounded-full animate-ping" />
                </div>
              </motion.div>

              {/* Stats Badge */}
              <motion.div
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute -bottom-3 -left-3 glass-card !rounded-2xl px-4 py-2.5 border-neon-cyan/20 shadow-xl"
              >
                <p className="text-[8px] font-bold text-slate-500 uppercase tracking-widest">CGPA</p>
                <p className="text-base font-black text-neon-cyan leading-tight">9.15</p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
