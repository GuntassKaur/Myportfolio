import { useState, useRef } from "react";
import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";
import { ExternalLink, Trophy, Cpu, Code, Shield, Check, AlertCircle, Sparkles } from "lucide-react";
import { FaGithub } from "react-icons/fa6";
import { PROJECTS } from "../constants";

const CardTilt = ({ children, className, glowColor }) => {
  const ref = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 150, damping: 15 });
  const mouseYSpring = useSpring(y, { stiffness: 150, damping: 15 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["7deg", "-7deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-7deg", "7deg"]);

  const handleMouseMove = (e) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left - width / 2;
    const mouseY = e.clientY - rect.top - height / 2;
    x.set(mouseX / width);
    y.set(mouseY / height);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      className={`relative transition-all duration-300 ${className}`}
    >
      {/* Dynamic Glow Behind Card */}
      <div 
        className="absolute inset-0 -z-10 rounded-[2.5rem] opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-[40px] pointer-events-none"
        style={{
          background: `radial-gradient(circle, ${glowColor} 0%, transparent 70%)`
        }}
      />
      {children}
    </motion.div>
  );
};

const ProjectCaseStudy = ({ project, index }) => {
  const isAlt = index % 2 !== 0;
  const style = project.visualStyle;

  return (
    <motion.div
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="w-full"
    >
      <CardTilt 
        glowColor={style.glowColor} 
        className="group relative rounded-[2.5rem] p-[1.5px] bg-gradient-to-br from-white/10 via-white/5 to-transparent hover:from-white/20 hover:via-white/10 hover:to-white/5 transition-all duration-500"
      >
        {/* Inner Card Container */}
        <div className="relative rounded-[2.45rem] bg-[#0c1226]/90 backdrop-blur-2xl p-8 md:p-12 lg:p-14 overflow-hidden border border-white/5 shadow-2xl">
          
          {/* Subtle Ambient Accent Glow inside card */}
          <div className={`absolute top-0 right-0 w-80 h-80 bg-gradient-to-br ${style.accentGrad} opacity-[0.03] blur-[80px] pointer-events-none rounded-full`} />
          
          {/* Main Layout Grid */}
          <div className={`flex flex-col ${isAlt ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-12 lg:gap-16 items-stretch`}>
            
            {/* Project Image Panel (Mockup screen style) */}
            <div className="w-full lg:w-[48%] flex flex-col justify-center">
              <div 
                className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/10 aspect-[16/10] group-hover:border-white/20 transition-all duration-500"
                style={{ transform: "translateZ(30px)" }}
              >
                {/* Visual Glass Header Bar (SaaS Browser/App Mockup feel) */}
                <div className="absolute top-0 left-0 right-0 h-8 bg-white/5 border-b border-white/10 flex items-center px-4 gap-1.5 z-10">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-500/60" />
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/60" />
                  <div className="w-2.5 h-2.5 rounded-full bg-green-500/60" />
                  <div className="ml-4 text-[9px] text-slate-500 font-mono tracking-wider truncate max-w-[70%]">
                    {project.links.demo || "localhost:8080"}
                  </div>
                </div>

                {/* Actual Image */}
                <img 
                  src={project.image} 
                  alt={project.title}
                  loading="lazy"
                  className="w-full h-full object-cover pt-8 transition-transform duration-1000 group-hover:scale-105"
                />

                {/* Hover gradient tint */}
                <div className="absolute inset-0 bg-gradient-to-t from-bg-dark/60 via-transparent to-transparent pointer-events-none pt-8" />
              </div>

              {/* Tag Pill Grid */}
              <div className="flex flex-wrap gap-2 mt-6" style={{ transform: "translateZ(15px)" }}>
                {project.tech.map((techName, idx) => (
                  <span 
                    key={idx} 
                    className="px-3.5 py-1.5 rounded-xl bg-white/[0.03] hover:bg-white/[0.06] border border-white/[0.08] hover:border-white/[0.15] text-[9px] font-black text-slate-400 hover:text-white uppercase tracking-widest transition-all duration-300"
                  >
                    {techName}
                  </span>
                ))}
              </div>
            </div>

            {/* Project Copy Panel */}
            <div className="flex-1 flex flex-col justify-between" style={{ transform: "translateZ(20px)" }}>
              <div>
                
                {/* Meta Header */}
                <div className="flex flex-wrap items-center gap-3 mb-5">
                  <span className={`px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest border bg-white/5 border-white/10 ${style.textColor}`}>
                    {project.category}
                  </span>
                  
                  {project.badge && (
                    <span className="flex items-center gap-1.5 px-4 py-1.5 rounded-full text-[9px] font-black uppercase tracking-widest bg-amber-500/10 border border-amber-500/20 text-amber-400 shadow-sm animate-pulse">
                      <Trophy size={11} /> {project.badge}
                    </span>
                  )}
                </div>

                {/* Title */}
                <h3 className="text-3xl md:text-4xl lg:text-5xl font-black text-white mb-2 tracking-tighter">
                  {project.title}
                </h3>
                <p className="text-sm font-bold text-slate-400 mb-8 italic tracking-wide">
                  "{project.subtitle}"
                </p>

                {/* Structured Engineering Case Study */}
                <div className="space-y-6 border-l-2 border-white/5 pl-6 py-1 mb-8">
                  {/* Problem */}
                  <div>
                    <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-red-400/90 mb-1.5 flex items-center gap-2">
                      <AlertCircle size={12} /> The Challenge
                    </h4>
                    <p className="text-sm text-slate-400 leading-relaxed font-medium">
                      {project.problem}
                    </p>
                  </div>

                  {/* Solution */}
                  <div>
                    <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-cyan-400/90 mb-1.5 flex items-center gap-2">
                      <Cpu size={12} /> Engineering Solution
                    </h4>
                    <p className="text-sm text-slate-300 leading-relaxed font-semibold">
                      {project.solution}
                    </p>
                  </div>

                  {/* Impact */}
                  <div>
                    <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-emerald-400/90 mb-1.5 flex items-center gap-2">
                      <Shield size={12} /> Proven Impact
                    </h4>
                    <p className="text-sm text-slate-400 leading-relaxed font-medium">
                      {project.impact}
                    </p>
                  </div>
                </div>

                {/* Core Features list */}
                <div className="mb-8">
                  <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-white/60 mb-3 flex items-center gap-2">
                    <Sparkles size={11} className="text-amber-400" /> Key Architectures
                  </h4>
                  <div className="grid grid-cols-2 gap-3">
                    {project.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2.5 text-xs text-slate-400 font-medium">
                        <span className="w-4 h-4 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-cyan-400 shrink-0">
                          <Check size={9} />
                        </span>
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

              </div>

              {/* Call To Actions */}
              <div className="flex flex-wrap items-center gap-4 pt-6 border-t border-white/5">
                {project.links.demo && (
                  <a 
                    href={project.links.demo} 
                    target="_blank" 
                    rel="noreferrer"
                    className={`px-7 py-3.5 rounded-full font-bold text-xs uppercase tracking-widest text-white shadow-lg transition-all duration-300 flex items-center gap-2.5 hover:-translate-y-0.5 active:scale-95 ${style.buttonColor}`}
                  >
                    Launch Experience <ExternalLink size={13} />
                  </a>
                )}
                
                <a 
                  href={project.links.github} 
                  target="_blank" 
                  rel="noreferrer"
                  className="px-7 py-3.5 rounded-full font-bold text-xs uppercase tracking-widest border border-white/10 text-slate-300 bg-white/[0.02] hover:bg-white/[0.07] hover:border-white/20 transition-all duration-300 flex items-center gap-2.5 hover:-translate-y-0.5 active:scale-95"
                >
                  <FaGithub size={15} /> Source Protocol
                </a>
              </div>

            </div>

          </div>

        </div>
      </CardTilt>
    </motion.div>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="section-padding relative overflow-hidden bg-bg-dark">
      
      {/* Background decoration elements */}
      <div className="absolute top-[20%] left-[-10%] w-[35%] h-[35%] bg-purple-500/5 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute bottom-[30%] right-[-10%] w-[35%] h-[35%] bg-cyan-500/5 rounded-full blur-[130px] pointer-events-none" />
      
      <div className="container-custom relative z-10">
        
        {/* Section Header */}
        <div className="mb-24 text-center max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 mb-6"
          >
            <Cpu size={14} className="text-royal-500" />
            <span className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-300">Production Systems</span>
          </motion.div>
          
          <h2 className="text-5xl md:text-7xl font-black text-white tracking-tighter mb-6 leading-tight">
            ENGINEERED <span className="gradient-text">PRODUCTS.</span>
          </h2>
          
          <p className="text-slate-400 text-base md:text-lg font-medium leading-relaxed">
            A comprehensive catalog of autonomous software agents, SaaS dashboards, and real-time distributed platforms built for scale, performance, and real-world utility.
          </p>
        </div>

        {/* Project Case Studies Stack */}
        <div className="space-y-20 lg:space-y-32">
          {PROJECTS.map((project, index) => (
            <ProjectCaseStudy key={project.id} project={project} index={index} />
          ))}
        </div>

        {/* Engineering Ethos Panel */}
        <div className="mt-32 p-12 md:p-16 glass-card text-center relative overflow-hidden border border-white/5 group">
          <div className="absolute inset-0 bg-grid-premium opacity-[0.08] group-hover:opacity-[0.15] transition-opacity duration-700 pointer-events-none" />
          <div className="absolute inset-0 bg-gradient-to-b from-royal-500/5 to-transparent pointer-events-none" />
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative z-10 max-w-4xl mx-auto"
          >
            <div className="w-16 h-16 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center mx-auto mb-8">
              <Code className="text-neon-cyan" size={28} />
            </div>
            
            <h3 className="text-2xl md:text-4xl font-black text-white mb-6 tracking-tight leading-tight">
              "Building systems that translate architectural design into clean, <span className="gradient-text">high-performance code.</span>"
            </h3>
            
            <a 
              href="https://github.com/GuntassKaur" 
              target="_blank" 
              rel="noreferrer"
              className="px-8 py-3.5 inline-flex items-center gap-2.5 rounded-full font-bold text-xs uppercase tracking-widest border border-white/10 text-slate-300 bg-white/[0.02] hover:bg-white/[0.08] hover:border-neon-cyan/50 hover:text-white hover:shadow-[0_0_25px_rgba(6,182,212,0.15)] transition-all duration-300"
            >
              Explore Complete Repository <ExternalLink size={13} />
            </a>
          </motion.div>
        </div>

      </div>
    </section>
  );
};

export default Projects;
