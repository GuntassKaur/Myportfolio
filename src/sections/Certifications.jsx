import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ShieldCheck, Brain, Cloud, Code2, Award, X, Calendar, BadgeCheck } from "lucide-react";
import { CERTIFICATIONS } from "../constants";

// Lock body scroll when modal is open
const useBodyScrollLock = (isLocked) => {
  useEffect(() => {
    if (isLocked) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [isLocked]);
};

const issuerColors = {
  Google: "bg-blue-500/20 border-blue-500/40 text-blue-400",
  Oracle: "bg-red-500/20 border-red-500/40 text-red-400",
  Udemy: "bg-purple-500/20 border-purple-500/40 text-purple-400",
  Forage: "bg-green-500/20 border-green-500/40 text-green-400",
};

const issuerBadge = {
  Google: "bg-blue-500",
  Oracle: "bg-red-500",
  Udemy: "bg-purple-500",
  Forage: "bg-emerald-500",
};

const CertificationModal = ({ cert, isOpen, onClose }) => {
  useBodyScrollLock(isOpen);

  if (!isOpen || !cert) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[300] flex items-center justify-center p-4 md:p-8"
      >
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="absolute inset-0 bg-black/80 backdrop-blur-2xl"
          onClick={onClose}
        />
        
        <motion.div
          initial={{ opacity: 0, scale: 0.92, y: 24 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.92, y: 24 }}
          transition={{ type: "spring", damping: 25, stiffness: 300 }}
          className="relative glass-card max-w-3xl w-full max-h-[90vh] overflow-y-auto overflow-x-hidden border-royal-500/30 shadow-[0_0_80px_rgba(124,58,237,0.25)]"
        >
          {/* Close Button */}
          <button 
            onClick={onClose}
            className="absolute top-5 right-5 w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:bg-royal-500 hover:text-white hover:border-royal-500 transition-all z-20"
            aria-label="Close modal"
          >
            <X size={18} />
          </button>

          <div className="p-8 md:p-12">
            {/* Header */}
            <div className="flex items-start gap-5 mb-8">
              <div className={`w-14 h-14 rounded-2xl border flex items-center justify-center shrink-0 ${issuerColors[cert.issuer] || 'bg-royal-500/20 border-royal-500/40 text-royal-500'}`}>
                <Award size={26} />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-3 mb-2 flex-wrap">
                  <span className={`px-3 py-1 rounded-full text-[9px] font-black uppercase tracking-widest text-white ${issuerBadge[cert.issuer] || 'bg-royal-500'}`}>
                    {cert.issuer}
                  </span>
                  <span className="text-[9px] font-bold text-slate-500 uppercase tracking-widest">{cert.year}</span>
                </div>
                <h3 className="text-2xl md:text-3xl font-black text-white leading-tight">
                  {cert.name}
                </h3>
              </div>
            </div>

            {/* Description */}
            <p className="text-slate-300 text-base leading-relaxed mb-8 font-medium">
              {cert.desc}
            </p>

            {/* Credential Details */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8 p-6 rounded-2xl bg-white/3 border border-white/8">
              <div>
                <p className="text-[9px] font-black text-slate-500 uppercase tracking-widest mb-2 flex items-center gap-2">
                  <Calendar size={11} /> Issue Date
                </p>
                <p className="text-lg font-bold text-white">{cert.year}</p>
              </div>
              <div>
                <p className="text-[9px] font-black text-slate-500 uppercase tracking-widest mb-2 flex items-center gap-2">
                  <BadgeCheck size={11} /> Credential ID
                </p>
                <p className="text-sm font-mono font-bold text-neon-cyan break-all">{cert.credentialId}</p>
              </div>
            </div>

            {/* Issuer */}
            <div className="mb-8">
              <p className="text-[9px] font-black text-slate-500 uppercase tracking-widest mb-2 flex items-center gap-2">
                <ShieldCheck size={11} className="text-royal-500" /> Issuing Organization
              </p>
              <p className="text-base font-bold text-white">{cert.issuer}</p>
            </div>

            {/* Skills */}
            <div>
              <p className="text-[9px] font-black text-slate-500 uppercase tracking-widest mb-3">Validated Skills</p>
              <div className="flex flex-wrap gap-2">
                {cert.skills.map((skill, i) => (
                  <span key={i} className="px-4 py-2 bg-royal-500/10 border border-royal-500/30 rounded-xl text-[10px] font-black text-royal-400 uppercase tracking-widest">
                    {skill}
                  </span>
                ))}
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
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.08 }}
      onClick={() => onOpen(cert)}
      className="glass-card group overflow-hidden cursor-pointer hover:border-royal-500/50 hover:shadow-[0_0_40px_rgba(124,58,237,0.15)] transition-all duration-500 flex flex-col"
      role="button"
      tabIndex={0}
      onKeyDown={(e) => e.key === "Enter" && onOpen(cert)}
      aria-label={`View ${cert.name} certificate details`}
    >
      {/* Card Header with icon/color block */}
      <div className="relative h-36 overflow-hidden bg-gradient-to-br from-royal-500/10 via-bg-dark to-neon-cyan/5 flex items-center justify-center">
        <div className={`w-16 h-16 rounded-2xl border flex items-center justify-center text-white ${issuerBadge[cert.issuer] || 'bg-royal-500'} bg-opacity-80 shadow-lg`}>
          <Icon size={28} />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-bg-dark/80 to-transparent" />
        
        {/* Click hint overlay */}
        <div className="absolute inset-0 bg-royal-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <div className="px-3 py-1.5 rounded-full bg-royal-500/90 text-[8px] font-black uppercase tracking-widest text-white backdrop-blur-sm translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
            View Details
          </div>
        </div>
      </div>

      <div className="p-6 flex-1 flex flex-col">
        <div className="flex justify-between items-start mb-3">
          <span className={`text-[9px] font-black uppercase tracking-widest px-2.5 py-1 rounded-lg ${issuerColors[cert.issuer] || 'bg-royal-500/20 border border-royal-500/40 text-royal-400'} border`}>
            {cert.issuer}
          </span>
          <span className="text-[9px] font-bold text-slate-500 uppercase tracking-widest mt-0.5">
            {cert.year}
          </span>
        </div>
        
        <h3 className="text-base font-black text-white mb-3 leading-tight group-hover:text-royal-400 transition-colors duration-300 flex-1">
          {cert.name}
        </h3>

        <div className="flex flex-wrap gap-1.5 mt-auto">
          {cert.skills.slice(0, 3).map((skill, i) => (
            <span key={i} className="px-2 py-0.5 bg-white/5 border border-white/8 rounded text-[8px] font-bold text-slate-500 uppercase tracking-widest">
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
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 mb-6"
          >
            <ShieldCheck size={13} className="text-neon-cyan" />
            <span className="text-[10px] font-black text-slate-300 uppercase tracking-[0.3em]">Validation Stack</span>
          </motion.div>
          <h2 className="text-5xl md:text-6xl font-black text-white tracking-tighter">
            CERTIFIED <span className="gradient-text">SKILLS.</span>
          </h2>
          <p className="text-slate-500 text-sm mt-4 font-medium">Click any certificate to view full details</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {CERTIFICATIONS.map((cert, index) => (
            <CertificationCard 
              key={cert.id} 
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
