import { motion } from "framer-motion";
import { Award, ShieldCheck, ExternalLink, Zap } from "lucide-react";
import { CERTIFICATIONS } from "../constants";

const Certifications = () => {
    return (
        <section id="certifications" className="section-padding relative overflow-hidden bg-grid">
            <div className="container relative z-10">
                <div className="text-center mb-24">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-800/50 border border-white/5 mb-6"
                    >
                        <ShieldCheck size={16} className="text-indigo-400" />
                        <span className="text-[10px] font-bold text-slate-300 uppercase tracking-[0.2em]">Verified Credentials</span>
                    </motion.div>
                    <h2 className="section-title">INDUSTRIAL CERTIFICATIONS</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {CERTIFICATIONS.map((cert, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="glass-card p-10 group relative flex flex-col justify-between"
                        >
                            <div>
                                <div className="w-12 h-12 rounded-xl bg-indigo-600/10 flex items-center justify-center text-indigo-400 group-hover:bg-indigo-600 group-hover:text-white transition-all mb-8">
                                    <Award size={24} />
                                </div>
                                <h3 className="text-lg font-black text-white mb-2 uppercase tracking-tight group-hover:text-indigo-400 transition-colors">
                                    {cert.name}
                                </h3>
                                <p className="text-[10px] font-black text-slate-500 uppercase tracking-[0.3em] mb-10">
                                    {cert.issuer} • {cert.year}
                                </p>
                            </div>
                            <div className="flex items-center gap-2 text-[9px] font-black text-slate-600 uppercase tracking-widest group-hover:text-white transition-colors">
                                Verify Link <ExternalLink size={12} />
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Certifications;
