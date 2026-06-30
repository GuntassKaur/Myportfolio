import { motion } from "framer-motion";
import { ShieldCheck, Brain, Cloud, Code2, Award } from "lucide-react";
import { CERTIFICATIONS } from "../constants";

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

const CertificationCard = ({ cert, index }) => {
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
      className="glass-card group overflow-hidden transition-all duration-500 flex flex-col hover:border-royal-500/30 hover:shadow-[0_0_30px_rgba(124,58,237,0.1)]"
    >
      {/* Card Header with icon/color block */}
      <div className="relative h-32 overflow-hidden bg-gradient-to-br from-royal-500/10 via-bg-dark to-neon-cyan/5 flex items-center justify-center">
        <div className={`w-14 h-14 rounded-2xl border flex items-center justify-center text-white ${issuerBadge[cert.issuer] || 'bg-royal-500'} bg-opacity-85 shadow-lg`}>
          <Icon size={24} />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-bg-dark/80 to-transparent pointer-events-none" />
      </div>

      <div className="p-6 flex-1 flex flex-col">
        {/* Organization / Year */}
        <div className="flex justify-between items-start mb-3">
          <span className={`text-[9px] font-black uppercase tracking-widest px-2.5 py-1 rounded-lg ${issuerColors[cert.issuer] || 'bg-royal-500/20 border border-royal-500/40 text-royal-400'} border`}>
            {cert.issuer}
          </span>
          <span className="text-[9px] font-bold text-slate-500 uppercase tracking-widest mt-0.5">
            {cert.year}
          </span>
        </div>
        
        {/* Name */}
        <h3 className="text-base font-black text-white mb-2 leading-tight flex-1">
          {cert.name}
        </h3>

        {/* Description */}
        <p className="text-xs text-slate-400 leading-relaxed mb-4">
          {cert.desc}
        </p>

        {/* Credential ID */}
        <div className="mb-4 text-[10px] font-mono text-slate-500 flex items-center gap-1.5">
          <span className="font-bold text-slate-600">ID:</span>
          <span className="break-all">{cert.credentialId}</span>
        </div>

        {/* Skills Tag Grid */}
        <div className="flex flex-wrap gap-1.5 mt-auto">
          {cert.skills.map((skill, i) => (
            <span key={i} className="px-2 py-0.5 bg-white/5 border border-white/8 rounded text-[8px] font-bold text-slate-400 uppercase tracking-widest">
              {skill}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

const Certifications = () => {
  return (
    <section id="certifications" className="section-padding relative">
      <div className="container-custom relative z-10">
        <div className="text-center mb-16">
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
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {CERTIFICATIONS.map((cert, index) => (
            <CertificationCard 
              key={cert.id} 
              cert={cert} 
              index={index} 
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
