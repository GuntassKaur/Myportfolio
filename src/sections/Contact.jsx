import { motion } from "framer-motion";
import { BRAND_CONTENT } from "../constants";
import { FaGithub, FaLinkedin, FaEnvelope, FaPaperPlane, FaShieldHalved, FaLock, FaTerminal } from "react-icons/fa6";
import { useState, useEffect } from "react";

const Contact = () => {
    const [formData, setFormData] = useState({ name: "", email: "", message: "" });
    const [status, setStatus] = useState("");
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 100);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        setStatus("BROADCASTING...");
        setTimeout(() => {
            setStatus("SIGNAL SENT");
            setFormData({ name: "", email: "", message: "" });
            setTimeout(() => setStatus(""), 3000);
        }, 2000);
    };

    return (
        <section id="contact" className="py-40 relative overflow-hidden bg-[#0A0F1F]">
            {/* Immersive Cyber Background Accent */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-purple-600/5 rounded-full blur-[150px] pointer-events-none animate-blob" />
            
            <div className="container relative z-10 px-6 lg:px-0">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-32 items-center">
                    
                    {/* Immersive Left: Data Entry Interface */}
                    <div className="flex flex-col items-start text-left px-10">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            className="inline-flex items-center gap-3 px-8 py-3 rounded-full glass border border-magenta-500/40 text-magenta-500 text-[10px] font-black uppercase tracking-[0.4em] mb-12 shadow-[0_0_25px_rgba(255,58,205,0.2)]"
                        >
                            <FaShieldHalved className="animate-pulse" /> Encryption Layer: Active
                        </motion.div>
                        <motion.h2 
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            className="text-6xl md:text-8xl font-black mb-12 leading-[0.9] text-white tracking-tighter"
                        >
                            Establish <br />
                            <span className="text-magenta-500">Uplink.</span>
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="text-[#A0AEC0] text-xl font-light leading-relaxed mb-20 max-w-lg italic border-l-2 border-white/5 pl-12 py-6 rounded-r-3xl bg-white/5"
                        >
                            "Establishing secure communication protocols for future-ready collaborations and AI research inquiries."
                        </motion.p>

                        <div className="flex gap-10">
                            {[
                                { icon: FaEnvelope, href: `mailto:${BRAND_CONTENT.email}`, color: "#6C5DD3" },
                                { icon: FaLinkedin, href: BRAND_CONTENT.linkedin, color: "#3CD7FF" },
                                { icon: FaGithub, href: BRAND_CONTENT.github, color: "#FF3ACD" }
                            ].map((social, i) => (
                                <motion.a
                                    key={i}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    whileHover={{ y: -15, scale: 1.15, rotate: 5 }}
                                    className="w-16 h-16 rounded-[24px] bg-white/5 border border-white/10 flex items-center justify-center text-white/30 hover:text-white transition-all duration-500 hover:shadow-[0_20px_40px_rgba(255,255,255,0.1)] group relative overflow-hidden"
                                >
                                    <div className="absolute inset-0 bg-gradient-to-br transition-all duration-500 opacity-0 group-hover:opacity-10" style={{ backgroundColor: social.color }} />
                                    <social.icon size={24} className="group-hover:text-white group-hover:drop-shadow-[0_0_15px_white] transition-all" />
                                </motion.a>
                            ))}
                        </div>
                    </div>

                    {/* Immersive Right: Terminal Input Matrix */}
                    <motion.div
                        initial={{ opacity: 0, rotateY: 30 }}
                        whileInView={{ opacity: 1, rotateY: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.2 }}
                        className="glass-card p-16 md:p-24 border-white/10 hover:border-magenta-500/50 rounded-[80px] transition-all duration-1000 perspective-1000 bg-gradient-to-br from-white/5 to-transparent shadow-2xl relative overflow-hidden"
                    >
                        <div className="absolute top-0 right-0 p-10 opacity-10">
                             <FaLock size={40} className="text-magenta-500" />
                        </div>

                        <form onSubmit={handleSubmit} className="flex flex-col gap-12 relative z-10">
                            <div className="space-y-6">
                                <label className="text-[10px] font-black uppercase tracking-[0.4em] text-cyan-400 ml-6 flex items-center gap-3">
                                    <FaTerminal size={10} /> Entity Identification
                                </label>
                                <input 
                                    type="text" 
                                    placeholder="Entity Name"
                                    required
                                    value={formData.name}
                                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                    className="w-full bg-white/5 border border-white/10 rounded-[32px] px-10 py-6 text-white font-medium outline-none transition-all focus:border-magenta-500/60 focus:bg-white/[0.08] focus:shadow-[0_0_30px_rgba(255,58,205,0.2)]"
                                />
                            </div>
                            <div className="space-y-6">
                                <label className="text-[10px] font-black uppercase tracking-[0.4em] text-cyan-400 ml-6 flex items-center gap-3">
                                    <FaTerminal size={10} /> Signal Link
                                </label>
                                <input 
                                    type="email" 
                                    placeholder="Electronic Encryption Code"
                                    required
                                    value={formData.email}
                                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                    className="w-full bg-white/5 border border-white/10 rounded-[32px] px-10 py-6 text-white font-medium outline-none transition-all focus:border-magenta-500/60 focus:bg-white/[0.08] focus:shadow-[0_0_30px_rgba(255,58,205,0.2)]"
                                />
                            </div>
                            <div className="space-y-6">
                                <label className="text-[10px] font-black uppercase tracking-[0.4em] text-cyan-400 ml-6 flex items-center gap-3">
                                    <FaTerminal size={10} /> Message Payload
                                </label>
                                <textarea 
                                    rows="5" 
                                    placeholder="Data Buffer Content..."
                                    required
                                    value={formData.message}
                                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                    className="w-full bg-white/5 border border-white/10 rounded-[32px] px-10 py-6 text-white font-medium outline-none transition-all focus:border-magenta-500/60 focus:bg-white/[0.08] focus:shadow-[0_0_30px_rgba(255,58,205,0.2)] resize-none"
                                ></textarea>
                            </div>
                            <button 
                                type="submit" 
                                disabled={status}
                                className={`group relative w-full py-8 bg-[#6C5DD3] text-white font-black uppercase tracking-[0.4em] text-[10px] rounded-[32px] transition-all flex items-center justify-center gap-6 overflow-hidden active:scale-95 ${status ? "opacity-70 pointer-events-none" : "hover:bg-magenta-500 hover:shadow-[0_0_50px_#FF3ACD88]"}`}
                            >
                                <div className="absolute inset-0 bg-white/10 transition-transform duration-700 -translate-x-full group-hover:translate-x-0" />
                                {status || "Broadcast Uplink Signal"} <FaPaperPlane size={16} className={status ? "animate-ping" : "group-hover:translate-x-4 transition-transform duration-700"} />
                            </button>
                        </form>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default Contact;
