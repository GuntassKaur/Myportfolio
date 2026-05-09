import { motion } from "framer-motion";
import { Mail, Send, MessageSquare, MapPin, Sparkles } from "lucide-react";
import { FaLinkedinIn } from "react-icons/fa6";
import { useState, useRef } from "react";
import { BRAND_CONTENT } from "../constants";

const Contact = () => {
  const formRef = useRef();
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(formRef.current);
    const name = formData.get('user_name');
    const email = formData.get('user_email');
    const subject = formData.get('subject');
    const message = formData.get('message');

    // Simulate a secure handshake/loading for UX
    setTimeout(() => {
      setLoading(false);
      setSuccess(true);
      
      const mailtoUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${BRAND_CONTENT.email}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`)}`;
      
      // Open Gmail in a new tab securely
      window.open(mailtoUrl, '_blank', 'noopener,noreferrer');

      setTimeout(() => {
        setSuccess(false);
        formRef.current.reset();
      }, 3000);
    }, 1500);
  };

  return (
    <section id="contact" className="section-padding relative">
      <div className="container-custom relative z-10">
        <div className="flex flex-col lg:flex-row gap-20">
          
          {/* Left Side: Info */}
          <div className="flex-1">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 mb-8">
                <MessageSquare size={14} className="text-neon-cyan" />
                <span className="text-[10px] font-bold text-slate-300 uppercase tracking-[0.2em]">Contact Uplink</span>
              </div>
              
              <h2 className="text-5xl md:text-6xl font-black text-white mb-8 tracking-tighter">
                LET'S <span className="gradient-text">CONNECT.</span>
              </h2>
              
              <p className="text-xl text-slate-400 font-medium leading-relaxed mb-12 max-w-md">
                I'm currently open for software engineering roles, internships, and high-impact technical collaborations.
              </p>

              <div className="space-y-8">
                <div className="flex items-center gap-6 group">
                  <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-royal-500 group-hover:bg-royal-500 group-hover:text-white transition-all duration-500 shadow-inner">
                    <Mail size={20} />
                  </div>
                  <div>
                    <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-1">Direct Email</p>
                    <a href={`mailto:${BRAND_CONTENT.email}`} className="text-lg font-bold text-white hover:text-neon-cyan transition-colors">
                      {BRAND_CONTENT.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-6 group">
                  <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-royal-500 group-hover:bg-royal-500 group-hover:text-white transition-all duration-500 shadow-inner">
                    <FaLinkedinIn size={20} />
                  </div>
                  <div>
                    <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-1">Professional Network</p>
                    <a href={BRAND_CONTENT.linkedin} target="_blank" rel="noreferrer" className="text-lg font-bold text-white hover:text-neon-cyan transition-colors">
                      linkedin.com/in/guntass-kaur
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-6 group">
                  <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-royal-500 group-hover:bg-royal-500 group-hover:text-white transition-all duration-500 shadow-inner">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-1">Location</p>
                    <p className="text-lg font-bold text-white">Punjab, India (Open to Relocation)</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Side: Form */}
          <div className="flex-1">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="glass-card p-10 md:p-12 relative overflow-hidden"
            >
              <form ref={formRef} onSubmit={handleSubmit} className="relative z-10 space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[10px] font-black text-slate-500 uppercase tracking-[0.2em] ml-1">Full Name</label>
                    <input 
                      type="text" 
                      name="user_name"
                      required
                      placeholder="John Doe"
                      className="w-full px-6 py-4 rounded-2xl bg-white/5 border border-white/10 focus:border-neon-cyan focus:outline-none focus:ring-1 focus:ring-neon-cyan/30 text-white transition-all placeholder:text-slate-600"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-black text-slate-500 uppercase tracking-[0.2em] ml-1">Email Address</label>
                    <input 
                      type="email" 
                      name="user_email"
                      required
                      placeholder="john@example.com"
                      className="w-full px-6 py-4 rounded-2xl bg-white/5 border border-white/10 focus:border-neon-cyan focus:outline-none focus:ring-1 focus:ring-neon-cyan/30 text-white transition-all placeholder:text-slate-600"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] font-black text-slate-500 uppercase tracking-[0.2em] ml-1">Message Subject</label>
                  <input 
                    type="text" 
                    name="subject"
                    required
                    placeholder="Engineering Collaboration"
                    className="w-full px-6 py-4 rounded-2xl bg-white/5 border border-white/10 focus:border-neon-cyan focus:outline-none focus:ring-1 focus:ring-neon-cyan/30 text-white transition-all placeholder:text-slate-600"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] font-black text-slate-500 uppercase tracking-[0.2em] ml-1">Message Content</label>
                  <textarea 
                    name="message"
                    required
                    placeholder="Tell me about your project..."
                    rows="5"
                    className="w-full px-6 py-4 rounded-2xl bg-white/5 border border-white/10 focus:border-neon-cyan focus:outline-none focus:ring-1 focus:ring-neon-cyan/30 text-white transition-all placeholder:text-slate-600 resize-none"
                  ></textarea>
                </div>

                <button 
                  type="submit"
                  disabled={loading}
                  className="premium-button w-full justify-center group disabled:opacity-50"
                >
                  {loading ? "Transmitting..." : success ? "Transmission Received!" : "Send Transmission"}
                  <Send size={18} className={`transition-transform ${success ? 'scale-0' : 'group-hover:translate-x-1 group-hover:-translate-y-1'}`} />
                </button>

                {success && (
                  <motion.p 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center text-xs font-bold text-neon-cyan flex items-center justify-center gap-2"
                  >
                    <Sparkles size={14} /> Your message has been sent successfully.
                  </motion.p>
                )}
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

