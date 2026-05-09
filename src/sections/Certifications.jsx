import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ShieldCheck, Brain, Cloud, Code2, Award, X, Calendar, BadgeCheck, ExternalLink } from "lucide-react";
import { CERTIFICATIONS } from "../constants";

const CertificationModal = ({ cert, isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[200] flex items-center justify-center p-4 md:p-8"
      >
        <div className="absolute inset-0 bg-bg-dark/95 backdrop-blur-2xl" onClick={onClose} />
        
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          className="relative glass-card max-w-5xl w-full max-h-[90vh] overflow-y-auto overflow-x-hidden border-white/20 shadow-[0_0_50px_rgba(124,58,237,0.3)]"
        >
          {/* Close Button */}
          <button 
            onClick={onClose}
            className="absolute top-6 right-6 w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-royal-500 transition-all z-20"
          >
            <X size={24} />
          </button>

          <div className="flex flex-col lg:flex-row h-full">
            {/* Image Preview */}
            <div className="lg:w-3/5 relative bg-slate-900 min-h-[300px] lg:min-h-0">
              <img 
                src={cert.image} 
                alt={cert.name}
                className="w-full h-full object-contain p-8 lg:p-12"
              />
              <div className="absolute bottom-8 left-8 flex gap-4">
                <div className="px-4 py-2 rounded-full bg-royal-500/90 backdrop-blur-md text-[10px] font-black uppercase tracking-widest text-white border border-white/20">
                  Full Preview
                </div>
              </div>
            </div>

            {/* Info Side */}
            <div className="lg:w-2/5 p-10 lg:p-14 border-t lg:border-t-0 lg:border-l border-white/10 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-12 h-12 rounded-2xl bg-royal-500/20 border border-royal-500/40 flex items-center justify-center text-royal-500">
                    <Award size={24} />
                  </div>
                  <div>
                    <p className="text-[10px] font-black text-royal-500 uppercase tracking-widest">Official Certification</p>
                    <p className="text-xl font-bold text-white tracking-tight">{cert.issuer}</p>
                  </div>
                </div>

                <h3 className="text-3xl font-black text-white mb-6 leading-tight">
                  {cert.name}
                </h3>

                <p className="text-slate-400 text-lg leading-relaxed mb-10 font-medium">
                  {cert.desc}
                </p>

                <div className="grid grid-cols-2 gap-8 mb-10">
                  <div>
                    <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-2 flex items-center gap-2">
                      <Calendar size={12} /> Issued On
                    </p>
                    <p className="text-lg font-bold text-white">{cert.year}</p>
                  </div>
                  <div>
                    <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-2 flex items-center gap-2">
                      <BadgeCheck size={12} /> Credential ID
                    </p>
                    <p className="text-sm font-mono font-bold text-neon-cyan truncate">{cert.credentialId}</p>
                  </div>
                </div>

                <div className="space-y-4">
                  <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-2">Validated Competencies</p>
                  <div className="flex flex-wrap gap-2">
                    {cert.skills.map((skill, i) => (
                      <span key={i} className="px-4 py-2 bg-white/5 border border-white/10 rounded-xl text-[10px] font-black text-slate-300 uppercase tracking-widest">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-12 pt-10 border-t border-white/5">
                <a 
                  href={cert.link} 
                  target="_blank" 
                  rel="noreferrer"
                  className="premium-button w-full justify-center group"
                >
                  Verify Authenticity <ExternalLink size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

const CertificationCard = ({ cert, index, onOpen }) => {
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
      onClick={() => onOpen(cert)}
      className="glass-card group overflow-hidden cursor-pointer hover:border-royal-500/50 transition-all duration-500"
    >
      <div className="relative h-48 overflow-hidden">
        <img 
          src={cert.image} 
          alt={cert.name}
          className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-bg-dark to-transparent opacity-80" />
        <div className="absolute bottom-4 left-6">
          <div className="w-10 h-10 rounded-xl bg-royal-500 flex items-center justify-center text-white shadow-lg shadow-royal-500/20">
            <Icon size={20} />
          </div>
        </div>
        
        {/* Hover Overlay */}
        <div className="absolute inset-0 bg-royal-500/10 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
          <div className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-white scale-90 group-hover:scale-100 transition-transform">
            <ExternalLink size={20} />
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

        <div className="flex flex-wrap gap-2">
          {cert.skills.slice(0, 3).map((skill, i) => (
            <span key={i} className="px-2 py-0.5 bg-white/5 border border-white/10 rounded text-[8px] font-bold text-slate-500 uppercase tracking-widest">
              {skill}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

const Certifications = () => {
  const [selectedCert, setSelectedCert] = useState(null);

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
            <CertificationCard 
              key={index} 
              cert={cert} 
              index={index} 
              onOpen={setSelectedCert} 
            />
          ))}
        </div>
      </div>

      <CertificationModal 
        cert={selectedCert} 
        isOpen={!!selectedCert} 
        onClose={() => setSelectedCert(null)} 
      />
    </section>
  );
};

export default Certifications;

