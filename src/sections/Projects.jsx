import { motion } from "framer-motion";
import { ExternalLink, Github, ArrowRight, ShieldCheck, Zap, Layers, Cpu, Code } from "lucide-react";
import { PROJECTS } from "../constants";

const ProjectCard = ({ project, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className={`group relative ${project.isFeatured ? 'lg:col-span-2' : ''}`}
    >
      <div className="glass-card h-full flex flex-col lg:flex-row overflow-hidden group/card border-white/5 hover:border-royal-500/30 transition-all duration-700">
        
        {/* Project Image Preview */}
        <div className={`relative ${project.isFeatured ? 'lg:w-1/2' : 'lg:w-2/5'} h-[300px] lg:h-auto overflow-hidden`}>
          <img 
            src={project.image} 
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-1000 group-hover/card:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-bg-dark/80 via-transparent to-transparent hidden lg:block" />
          <div className="absolute inset-0 bg-gradient-to-t from-bg-dark/80 to-transparent lg:hidden" />
          
          {/* Featured Badge */}
          {project.badge && (
            <div className="absolute top-6 left-6 px-4 py-2 bg-royal-500 rounded-full text-[10px] font-black uppercase tracking-[0.2em] shadow-[0_0_20px_rgba(124,58,237,0.5)] flex items-center gap-2">
              <ShieldCheck size={12} /> {project.badge}
            </div>
          )}
        </div>

        {/* Project Details */}
        <div className="p-8 lg:p-12 flex-1 flex flex-col justify-between">
          <div>
            <div className="flex flex-wrap gap-2 mb-6">
              {project.tech.map((t, i) => (
                <span key={i} className="px-3 py-1 bg-white/5 border border-white/10 rounded-lg text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                  {t}
                </span>
              ))}
            </div>

            <h3 className="text-3xl md:text-4xl font-black text-white mb-8 tracking-tight group-hover/card:gradient-text transition-all duration-300">
              {project.title}
            </h3>

            <div className="space-y-6 mb-10">
              <div>
                <h4 className="text-[10px] font-black text-royal-500 uppercase tracking-widest mb-2 flex items-center gap-2">
                  <Zap size={12} /> Problem
                </h4>
                <p className="text-sm text-slate-400 leading-relaxed">{project.problem}</p>
              </div>
              <div>
                <h4 className="text-[10px] font-black text-neon-cyan uppercase tracking-widest mb-2 flex items-center gap-2">
                  <Layers size={12} /> Solution
                </h4>
                <p className="text-sm text-slate-300 leading-relaxed">{project.solution}</p>
              </div>
              <div>
                <h4 className="text-[10px] font-black text-gold-highlight uppercase tracking-widest mb-2 flex items-center gap-2">
                  <ShieldCheck size={12} /> Impact
                </h4>
                <p className="text-sm text-slate-400 leading-relaxed italic">{project.impact}</p>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-4 pt-6 border-t border-white/10">
            {project.links.demo !== "#" && (
              <a 
                href={project.links.demo} 
                target="_blank" 
                rel="noreferrer"
                className="premium-button !py-2.5 !px-6 !text-[11px] group/btn"
              >
                Live Demo <ExternalLink size={14} className="group-hover/btn:translate-x-1 transition-transform" />
              </a>
            )}
            <a 
              href={project.links.github} 
              target="_blank" 
              rel="noreferrer"
              className="premium-button-outline !py-2.5 !px-6 !text-[11px] group/btn"
            >
              GitHub Repo <Github size={14} />
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
        <div className="mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-3 text-royal-500 mb-4"
          >
            <Cpu size={24} />
            <span className="text-[10px] font-black uppercase tracking-[0.4em]">Portfolio Showcase</span>
          </motion.div>
          <h2 className="text-5xl md:text-7xl font-black text-white tracking-tighter">
            PROVEN <span className="gradient-text">SYSTEMS.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-12 lg:gap-16">
          {PROJECTS.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        {/* Engineering Philosophy Footer */}
        <div className="mt-32 p-12 glass-card text-center relative overflow-hidden border-royal-500/10">
          <div className="absolute inset-0 bg-grid-premium opacity-20" />
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative z-10"
          >
            <Code className="text-royal-500 mx-auto mb-6" size={40} />
            <p className="text-2xl md:text-3xl font-bold text-white mb-8 max-w-3xl mx-auto">
              "I build with precision, logic, and a deep focus on system architecture."
            </p>
            <a 
              href="https://github.com/GuntassKaur" 
              target="_blank" 
              rel="noreferrer"
              className="premium-button-outline inline-flex gap-3 group"
            >
              Deep Dive into Codebase <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Projects;

