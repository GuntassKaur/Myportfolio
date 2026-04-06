import { motion } from "framer-motion";
import { CERTIFICATIONS } from "../constants";
import { FaCertificate, FaArrowRight, FaShieldHalved, FaMedal } from "react-icons/fa6";

const Certifications = () => {
    return (
        <section id="certifications" className="py-40 relative overflow-hidden bg-[#0A0F1F]">
            {/* Ambient Background Glows */}
            <div className="absolute top-1/4 right-0 w-[400px] h-[400px] bg-cyan-600/5 rounded-full blur-[120px] pointer-events-none animate-pulse" />

            <div className="container relative z-10 px-6">
                
                {/* Header Section */}
                <div className="flex flex-col items-center text-center mb-32 font-heading">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        className="inline-flex items-center gap-3 px-8 py-3 rounded-full glass border border-cyan-500/40 text-cyan-400 text-[10px] font-black uppercase tracking-[0.4em] mb-12 shadow-[0_0_25px_rgba(60,215,255,0.2)]"
                    >
                        Credential Verification Layer
                    </motion.div>
                    <motion.h2 
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="text-6xl md:text-8xl font-black mb-12 leading-[0.9] text-white tracking-tighter"
                    >
                        Industry <span className="text-cyan-400">Vault.</span>
                    </motion.h2>
                    <p className="text-[#A0AEC0] text-xl font-light italic max-w-3xl leading-relaxed py-10 border-y border-white/5 px-20">
                        "Documenting professional validation within emerging technical domains: AI, Analytics, and Cloud."
                    </p>
                </div>

                {/* Cyber-Grid Cert Matrix */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-16 px-10">
                    {CERTIFICATIONS.map((cert, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1.2, delay: index * 0.15 }}
                            className="group p-12 glass-card border-white/10 hover:border-cyan-500/50 rounded-[56px] transition-all duration-700 flex items-center justify-between relative overflow-hidden bg-gradient-to-br from-white/5 to-transparent bg-clip-border shadow-[0_30px_60px_rgba(0,0,0,0.4)]"
                        >
                            {/* Validation Layer Glow */}
                            <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-600/5 blur-[80px] opacity-0 group-hover:opacity-100 transition-opacity" />
                            
                            <div className="flex items-center gap-8 relative z-10 w-full">
                                <div className="w-16 h-16 rounded-3xl bg-white/5 border border-white/10 flex items-center justify-center text-cyan-400 group-hover:rotate-12 group-hover:scale-110 group-hover:shadow-[0_0_30px_rgba(60,215,255,0.4)] transition-all duration-700 bg-gradient-to-br from-[#0A0F1F] to-cyan-900/10">
                                    <FaShieldHalved size={28} className="animate-pulse" />
                                </div>
                                <div className="flex flex-col gap-4 flex-grow">
                                    <h3 className="text-xl font-black text-white group-hover:text-cyan-400 transition-all uppercase tracking-tighter leading-[0.9]">
                                        {cert.name}
                                    </h3>
                                    <p className="text-[10px] font-black uppercase tracking-[0.3em] text-white/30 italic group-hover:text-white/60 transition-colors">
                                        <FaMedal size={10} className="inline mr-2 text-magenta-500" />
                                        {cert.issuer} • {cert.year}
                                    </p>
                                </div>
                                <div className="w-12 h-12 rounded-full border border-white/5 flex items-center justify-center text-white/10 group-hover:text-cyan-400 transition-colors shadow-inner">
                                    <FaArrowRight size={18} className="group-hover:translate-x-2 transition-transform duration-700" />
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <div className="mt-40 flex justify-center opacity-10 blur-[1px]">
                     <FaCertificate size={60} className="text-white" />
                </div>
            </div>
        </section>
    );
};

export default Certifications;
