import { motion } from "framer-motion";
import { ShieldCheck, ExternalLink, Brain, Cloud, Code2, Award } from "lucide-react";
import { CERTIFICATIONS } from "../constants";

const CertificationCard = ({ cert, index }) => {
  const iconMap = {
    AI: Brain,
    Cloud: Cloud,
    Code: Code2,
  };
  const Icon = iconMap[cert.type] || Award;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="glass-card group overflow-hidden"
    >
      <div className="relative h-48 overflow-hidden">
        <img 
          src={cert.image} 
          alt={cert.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-bg-dark to-transparent" />
        <div className="absolute bottom-4 left-6">
          <div className="w-10 h-10 rounded-xl bg-royal-500 flex items-center justify-center text-white shadow-lg">
            <Icon size={20} />
          </div>
        </div>
      </div>

      <div className="p-8">
        <div className="flex justify-between items-start mb-4">
          <span className="text-[10px] font-black text-royal-500 uppercase tracking-widest">
            {cert.issuer}
          </span>
          <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">
            {cert.year}
          </span>
        </div>
        
        <h3 className="text-xl font-black text-white mb-4 leading-tight group-hover:gradient-text transition-all duration-300">
          {cert.name}
        </h3>

        <div className="flex flex-wrap gap-2 mb-8">
          {cert.skills.map((skill, i) => (
            <span key={i} className="px-2 py-0.5 bg-white/5 border border-white/10 rounded text-[8px] font-bold text-slate-400 uppercase tracking-widest">
              {skill}
            </span>
          ))}
        </div>

        <button className="w-full py-3 rounded-xl bg-white/5 border border-white/10 text-[10px] font-black uppercase tracking-widest text-slate-300 hover:bg-royal-500 hover:text-white hover:border-royal-500 transition-all duration-300 flex items-center justify-center gap-2">
          View Details <ExternalLink size={14} />
        </button>
      </div>
    </motion.div>
  );
};

const Certifications = () => {
  return (
    <section id="certifications" className="section-padding relative">
      <div className="container-custom relative z-10">
        <div className="text-center mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 mb-6"
          >
            <ShieldCheck size={14} className="text-neon-cyan" />
            <span className="text-[10px] font-black text-slate-300 uppercase tracking-[0.3em]">Validation Stack</span>
          </motion.div>
          <h2 className="text-5xl md:text-6xl font-black text-white tracking-tighter">
            CERTIFIED <span className="gradient-text">SKILLS.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {CERTIFICATIONS.map((cert, index) => (
            <CertificationCard key={index} cert={cert} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;

