import { motion } from "framer-motion";
import { ExternalLink, ArrowRight, ShieldCheck, Zap, Layers, Cpu, Code, CheckCircle2, Activity } from "lucide-react";
import { FaGithub } from "react-icons/fa6";
import { PROJECTS } from "../constants";

const ProjectCard = ({ project, index }) => {
  const isAlt = index % 2 !== 0;
  
  // Custom theme colors/glows based on project visualStyle
  const themeStyles = {
    "robotic-ai": "group-hover/card:shadow-[0_0_50px_rgba(124,58,237,0.3)] border-royal-500/20",
    "saas-dashboard": "group-hover/card:shadow-[0_0_50px_rgba(6,182,212,0.3)] border-neon-cyan/20",
    "healthcare-medical": "group-hover/card:shadow-[0_0_50px_rgba(6,182,212,0.3)] border-neon-cyan/20",
    "enterprise-system": "group-hover/card:shadow-[0_0_50px_rgba(245,158,11,0.2)] border-gold-highlight/20",
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: index * 0.1 }}
      className="relative"
    >
      <div className={`glass-card h-full flex flex-col ${isAlt ? 'lg:flex-row-reverse' : 'lg:flex-row'} overflow-hidden group/card transition-all duration-700 ${themeStyles[project.visualStyle] || 'border-white/5'}`}>
        
        {/* Project Image Preview */}
        <div className="lg:w-1/2 relative h-[350px] lg:h-auto overflow-hidden">
          <img 
            src={project.image} 
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-1000 group-hover/card:scale-110"
          />
          {/* Theme Gradient Overlay */}
          <div className={`absolute inset-0 bg-gradient-to-t from-bg-dark via-bg-dark/40 to-transparent ${isAlt ? 'lg:bg-gradient-to-l' : 'lg:bg-gradient-to-r'}`} />
          
          {/* Project Badge */}
          {project.badge && (
            <div className="absolute top-8 left-8 px-5 py-2.5 bg-royal-500/90 backdrop-blur-md rounded-2xl text-[10px] font-black uppercase tracking-[0.2em] shadow-xl flex items-center gap-2 border border-white/20">
              <ShieldCheck size={14} className="text-white" /> {project.badge}
            </div>
          )}

          {/* Immersive Effects for Shifra */}
          {project.id === "shifra" && (
            <div className="absolute inset-0 pointer-events-none">
              <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-royal-500/20 blur-[80px] animate-pulse" />
            </div>
          )}
        </div>

        {/* Project Details */}
        <div className="p-10 lg:p-16 flex-1 flex flex-col justify-between">
          <div>
            <div className="flex flex-wrap gap-2 mb-8">
              {project.tech.map((t, i) => (
                <span key={i} className="px-3 py-1.5 bg-white/5 border border-white/10 rounded-xl text-[9px] font-black text-slate-400 uppercase tracking-widest">
                  {t}
                </span>
              ))}
            </div>

            <h3 className="text-4xl md:text-5xl font-black text-white mb-2 tracking-tighter group-hover/card:gradient-text transition-all duration-300">
              {project.title}
            </h3>
            {project.subtitle && (
              <p className="text-sm font-bold text-neon-cyan/80 uppercase tracking-[0.2em] mb-10 leading-snug">
                {project.subtitle}
              </p>
            )}

            <div className="space-y-8 mb-12">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-[10px] font-black text-royal-500 uppercase tracking-widest mb-3 flex items-center gap-2">
                    <Zap size={14} /> The Challenge
                  </h4>
                  <p className="text-sm text-slate-400 leading-relaxed font-medium">{project.problem}</p>
                </div>
                <div>
                  <h4 className="text-[10px] font-black text-neon-cyan uppercase tracking-widest mb-3 flex items-center gap-2">
                    <Activity size={14} /> The Result
                  </h4>
                  <p className="text-sm text-slate-400 leading-relaxed font-medium">{project.impact}</p>
                </div>
              </div>

              <div>
                <h4 className="text-[10px] font-black text-white uppercase tracking-widest mb-4 flex items-center gap-2">
                  <Layers size={14} className="text-gold-highlight" /> Engineering Solution
                </h4>
                <p className="text-base text-slate-300 leading-relaxed font-semibold mb-6">{project.solution}</p>
                
                {project.features && (
                  <div className="flex flex-wrap gap-x-6 gap-y-3">
                    {project.features.map((feature, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs font-bold text-slate-400">
                        <CheckCircle2 size={14} className="text-neon-cyan" /> {feature}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-6 pt-8 border-t border-white/5">
            {project.links.demo !== "#" && (
              <a 
                href={project.links.demo} 
                target="_blank" 
                rel="noreferrer"
                className="premium-button group/btn"
              >
                Launch Experience <ExternalLink size={16} className="group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
              </a>
            )}
            <a 
              href={project.links.github} 
              target="_blank" 
              rel="noreferrer"
              className="premium-button-outline group/btn"
            >
              Source Protocol <FaGithub size={16} />
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="section-padding relative">
      <div className="container-custom relative z-10">
        <div className="mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-3 text-royal-500 mb-6"
          >
            <Cpu size={28} />
            <span className="text-[10px] font-black uppercase tracking-[0.5em]">System Architecture Showcase</span>
          </motion.div>
          <h2 className="text-6xl md:text-8xl font-black text-white tracking-tighter mb-4">
            ENGINEERED <span className="gradient-text">IMPACT.</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl font-medium leading-relaxed">
            A curation of high-performance systems, focusing on intelligent infrastructure and real-world scalability.
          </p>
        </div>

        <div className="space-y-24 lg:space-y-32">
          {PROJECTS.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        {/* Engineering Philosophy Footer */}
        <div className="mt-40 p-16 glass-card text-center relative overflow-hidden border-royal-500/20 group">
          <div className="absolute inset-0 bg-grid-premium opacity-10 group-hover:opacity-20 transition-opacity" />
          <div className="absolute inset-0 bg-gradient-to-b from-royal-500/5 to-transparent" />
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative z-10"
          >
            <div className="w-20 h-20 bg-royal-500/10 rounded-3xl flex items-center justify-center mx-auto mb-10 border border-royal-500/20">
              <Code className="text-royal-500" size={40} />
            </div>
            <h3 className="text-3xl md:text-5xl font-black text-white mb-8 max-w-3xl mx-auto tracking-tight leading-tight">
              "I build with precision, logic, and a deep focus on <span className="gradient-text">system architecture.</span>"
            </h3>
            <a 
              href="https://github.com/GuntassKaur" 
              target="_blank" 
              rel="noreferrer"
              className="premium-button-outline inline-flex gap-4 px-10 group"
            >
              Deep Dive into Codebase <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Projects;

