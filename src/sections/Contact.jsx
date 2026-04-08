import { motion } from "framer-motion";
import { Mail, Send, ArrowUpRight, MessageSquare, Globe, MapPin } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { BRAND_CONTENT } from "../constants";

const Contact = () => {
    return (
        <section id="contact" className="section-padding relative overflow-hidden bg-grid">
            <div className="container relative z-10">
                <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
                    
                    {/* Left: Contact Info */}
                    <div className="flex-1">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-800/50 border border-white/5 mb-8">
                                <MessageSquare size={16} className="text-indigo-400" />
                                <span className="text-[10px] font-bold text-slate-300 uppercase tracking-[0.2em]">Contact Uplink</span>
                            </div>
                            
                            <h2 className="section-title mb-8">LET'S BUILD THE FUTURE</h2>
                            <p className="text-lg text-slate-400 font-medium leading-relaxed mb-12 max-w-md">
                                Open for internships, research collaborations, and high-impact engineering opportunities.
                            </p>

                            <div className="space-y-6">
                                <a 
                                    href={`mailto:${BRAND_CONTENT.email}`}
                                    className="flex items-center gap-6 p-6 glass-card border-white/5 hover:border-indigo-500/30 group transition-all"
                                >
                                    <div className="w-14 h-14 rounded-2xl bg-indigo-600/10 flex items-center justify-center text-indigo-400 group-hover:bg-indigo-600 group-hover:text-white transition-all">
                                        <Mail size={24} />
                                    </div>
                                    <div className="flex-1">
                                        <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-1">Email</p>
                                        <p className="text-sm font-bold text-white transition-colors">{BRAND_CONTENT.email}</p>
                                    </div>
                                    <ArrowUpRight size={20} className="text-slate-600 group-hover:text-indigo-400 transition-colors" />
                                </a>

                                <a 
                                    href={BRAND_CONTENT.linkedin}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="flex items-center gap-6 p-6 glass-card border-white/5 hover:border-sky-500/30 group transition-all"
                                >
                                    <div className="w-14 h-14 rounded-2xl bg-sky-600/10 flex items-center justify-center text-sky-400 group-hover:bg-sky-600 group-hover:text-white transition-all">
                                        <FaLinkedin size={24} />
                                    </div>
                                    <div className="flex-1">
                                        <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-1">LinkedIn</p>
                                        <p className="text-sm font-bold text-white transition-colors">Connect professionally</p>
                                    </div>
                                    <ArrowUpRight size={20} className="text-slate-600 group-hover:text-sky-400 transition-colors" />
                                </a>

                                <a 
                                    href={BRAND_CONTENT.github}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="flex items-center gap-6 p-6 glass-card border-white/5 hover:border-slate-400/30 group transition-all"
                                >
                                    <div className="w-14 h-14 rounded-2xl bg-slate-600/10 flex items-center justify-center text-slate-400 group-hover:bg-slate-600 group-hover:text-white transition-all">
                                        <FaGithub size={24} />
                                    </div>
                                    <div className="flex-1">
                                        <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-1">GitHub</p>
                                        <p className="text-sm font-bold text-white transition-colors">Explore technical repos</p>
                                    </div>
                                    <ArrowUpRight size={20} className="text-slate-600 group-hover:text-slate-400 transition-colors" />
                                </a>
                            </div>
                        </motion.div>
                    </div>

                    {/* Right: Modern Form Placeholder/CTA */}
                    <div className="flex-1">
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="glass-card p-12 h-full flex flex-col justify-center"
                        >
                            <h3 className="text-2xl font-black text-white mb-6 uppercase tracking-tight">Direct Message</h3>
                            <p className="text-slate-400 font-medium mb-10">
                                Interested in working together? Drop a message or reach out via socials.
                            </p>
                            
                            <div className="space-y-6 mb-12">
                                <div className="flex items-center gap-4 text-slate-400">
                                    <MapPin size={18} className="text-indigo-400" />
                                    <span className="text-sm font-bold">IIT Delhi / Chandigarh Region</span>
                                </div>
                                <div className="flex items-center gap-4 text-slate-400">
                                    <Globe size={18} className="text-indigo-400" />
                                    <span className="text-sm font-bold">Open to Remote Opportunities</span>
                                </div>
                            </div>

                            <a href={`mailto:${BRAND_CONTENT.email}`} className="pill-button justify-center py-5">
                                Send Transmission <Send size={18} />
                            </a>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
