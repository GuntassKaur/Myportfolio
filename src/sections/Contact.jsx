import { motion } from "framer-motion";
import { BRAND_CONTENT } from "../constants";
import { Mail, Linkedin, Github, Send, ShieldCheck, Terminal, User, MessageCircle } from "lucide-react";
import { useState, useRef } from "react";
import emailjs from '@emailjs/browser';

const Contact = () => {
    const [formData, setFormData] = useState({ name: "", email: "", message: "" });
    const [status, setStatus] = useState("");
    const form = useRef();

    const handleSubmit = (e) => {
        e.preventDefault();
        setStatus("SENDING...");

        emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_PUBLIC_KEY')
        .then(() => {
            setStatus("SENT SUCCESS");
            setFormData({ name: "", email: "", message: "" });
            setTimeout(() => setStatus(""), 3000);
        })
        .catch((error) => {
            console.error(error);
            setStatus("ERROR");
            setTimeout(() => setStatus(""), 3000);
        });
    };

    return (
        <section id="contact" className="py-24 relative overflow-hidden">
            <div className="container mx-auto px-6 relative z-10">
                <div className="flex flex-col lg:flex-row gap-20 items-center">
                    
                    {/* Left: Contact Info */}
                    <div className="flex-1">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-neon-cyan/10 border border-neon-cyan/20 mb-6">
                                <ShieldCheck size={16} className="text-neon-cyan" />
                                <span className="text-[10px] font-black uppercase tracking-[0.2em] text-neon-cyan">Secure Uplink</span>
                            </div>
                            
                            <h2 className="text-5xl md:text-7xl font-black mb-8 leading-tight">
                                <span className="text-white">GET IN</span> <br />
                                <span className="gradient-text">TOUCH.</span>
                            </h2>
                            
                            <p className="text-xl text-text-muted leading-relaxed mb-12 max-w-lg">
                                Have a project in mind or just want to chat about AI? Establish a connection and let's build something exceptional.
                            </p>

                            <div className="flex gap-4">
                                {[
                                    { icon: <Mail />, href: `mailto:${BRAND_CONTENT.email}`, label: "Email" },
                                    { icon: <Linkedin />, href: BRAND_CONTENT.linkedin, label: "LinkedIn" },
                                    { icon: <Github />, href: BRAND_CONTENT.github, label: "GitHub" }
                                ].map((social, i) => (
                                    <a
                                        key={i}
                                        href={social.href}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="p-4 rounded-2xl bg-white/5 border border-white/5 text-text-muted hover:text-white hover:border-neon-cyan/30 hover:bg-neon-cyan/5 transition-all duration-300"
                                        title={social.label}
                                    >
                                        {social.icon}
                                    </a>
                                ))}
                            </div>
                        </motion.div>
                    </div>

                    {/* Right: Glassmorphism Form */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="flex-1 w-full max-w-xl"
                    >
                        <form 
                            ref={form}
                            onSubmit={handleSubmit}
                            className="glass-card p-10 md:p-12 rounded-[3rem] border-white/5 relative"
                        >
                            <div className="absolute top-8 right-8 text-white/5">
                                <Terminal size={60} />
                            </div>

                            <div className="space-y-8">
                                <div className="space-y-3">
                                    <label className="text-[10px] font-black uppercase tracking-widest text-text-dim ml-4 flex items-center gap-2">
                                        <User size={12} className="text-neon-purple" /> Full Name
                                    </label>
                                    <input 
                                        type="text" 
                                        name="name"
                                        required
                                        value={formData.name}
                                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                        placeholder="John Doe"
                                        className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white placeholder:text-text-dim outline-none focus:border-neon-purple/50 focus:bg-white/10 transition-all"
                                    />
                                </div>

                                <div className="space-y-3">
                                    <label className="text-[10px] font-black uppercase tracking-widest text-text-dim ml-4 flex items-center gap-2">
                                        <Mail size={12} className="text-neon-cyan" /> Email Address
                                    </label>
                                    <input 
                                        type="email" 
                                        name="email"
                                        required
                                        value={formData.email}
                                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                        placeholder="john@example.com"
                                        className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white placeholder:text-text-dim outline-none focus:border-neon-cyan/50 focus:bg-white/10 transition-all"
                                    />
                                </div>

                                <div className="space-y-3">
                                    <label className="text-[10px] font-black uppercase tracking-widest text-text-dim ml-4 flex items-center gap-2">
                                        <MessageCircle size={12} className="text-neon-pink" /> Message
                                    </label>
                                    <textarea 
                                        name="message"
                                        required
                                        rows="4"
                                        value={formData.message}
                                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                        placeholder="Tell me about your project..."
                                        className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white placeholder:text-text-dim outline-none focus:border-neon-pink/50 focus:bg-white/10 transition-all resize-none"
                                    />
                                </div>

                                <button 
                                    type="submit"
                                    disabled={status}
                                    className="pill-button w-full justify-center group"
                                >
                                    {status || "Send Message"}
                                    <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                                </button>
                            </div>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
