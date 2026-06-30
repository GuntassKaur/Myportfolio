import { motion } from "framer-motion";
import { Mail, Send, MessageSquare, MapPin, AlertCircle, CheckCircle } from "lucide-react";
import { FaLinkedinIn, FaGithub } from "react-icons/fa6";
import { useState, useRef } from "react";
import { BRAND_CONTENT } from "../constants";

const Contact = () => {
  const formRef = useRef();
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(null); // null | "opening" | "error"
  const [errors, setErrors] = useState({});

  const validate = (data) => {
    const errs = {};
    if (!data.user_name || data.user_name.trim().length < 2) {
      errs.user_name = "Please enter your full name (min 2 characters).";
    }
    if (!data.user_email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.user_email)) {
      errs.user_email = "Please enter a valid email address.";
    }
    if (!data.message || data.message.trim().length < 10) {
      errs.message = "Message must be at least 10 characters.";
    }
    return errs;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus(null);

    const formData = new FormData(formRef.current);
    const data = {
      user_name: formData.get("user_name"),
      user_email: formData.get("user_email"),
      subject: formData.get("subject") || "Portfolio Inquiry",
      message: formData.get("message"),
    };

    const validationErrors = validate(data);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setErrors({});
    setLoading(true);

    const body = `Hi Guntass,\n\nName: ${data.user_name}\nEmail: ${data.user_email}\n\n${data.message}\n\n— Sent via Portfolio`;
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(BRAND_CONTENT.email)}&su=${encodeURIComponent(data.subject)}&body=${encodeURIComponent(body)}`;

    setTimeout(() => {
      setLoading(false);
      try {
        window.open(gmailUrl, "_blank", "noopener,noreferrer");
        setStatus("opening");
        formRef.current.reset();
        setTimeout(() => setStatus(null), 6000);
      } catch {
        setStatus("error");
      }
    }, 800);
  };

  const inputClass = (field) =>
    `w-full px-5 py-3.5 rounded-2xl bg-white/5 border ${
      errors[field] ? "border-red-500/60 focus:border-red-400" : "border-white/10 focus:border-neon-cyan"
    } focus:outline-none focus:ring-1 ${
      errors[field] ? "focus:ring-red-500/20" : "focus:ring-neon-cyan/20"
    } text-white transition-all placeholder:text-slate-600 text-sm`;

  return (
    <section id="contact" className="section-padding relative">
      <div className="container-custom relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 xl:gap-24">
          
          {/* Left Side: Info */}
          <div className="lg:w-[40%] flex-shrink-0">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 mb-7">
                <MessageSquare size={13} className="text-neon-cyan" />
                <span className="text-[10px] font-bold text-slate-300 uppercase tracking-[0.2em]">Get In Touch</span>
              </div>
              
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6 tracking-tighter">
                LET'S <span className="gradient-text">CONNECT.</span>
              </h2>
              
              <p className="text-base text-slate-400 font-medium leading-relaxed mb-10 max-w-md">
                I'm currently open for software engineering roles, internships, and high-impact technical collaborations. Feel free to reach out.
              </p>

              <div className="space-y-6">
                <a href={`mailto:${BRAND_CONTENT.email}`} className="flex items-center gap-5 group">
                  <div className="w-11 h-11 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-royal-500 group-hover:bg-royal-500 group-hover:text-white transition-all duration-400 shadow-inner shrink-0">
                    <Mail size={18} />
                  </div>
                  <div>
                    <p className="text-[9px] font-black text-slate-500 uppercase tracking-widest mb-0.5">Direct Email</p>
                    <p className="text-sm font-bold text-white hover:text-neon-cyan transition-colors break-all">
                      {BRAND_CONTENT.email}
                    </p>
                  </div>
                </a>

                <a href={BRAND_CONTENT.linkedin} target="_blank" rel="noreferrer" className="flex items-center gap-5 group">
                  <div className="w-11 h-11 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-royal-500 group-hover:bg-royal-500 group-hover:text-white transition-all duration-400 shadow-inner shrink-0">
                    <FaLinkedinIn size={18} />
                  </div>
                  <div>
                    <p className="text-[9px] font-black text-slate-500 uppercase tracking-widest mb-0.5">LinkedIn</p>
                    <p className="text-sm font-bold text-white hover:text-neon-cyan transition-colors">
                      linkedin.com/in/guntass-kaur
                    </p>
                  </div>
                </a>

                <a href={BRAND_CONTENT.github} target="_blank" rel="noreferrer" className="flex items-center gap-5 group">
                  <div className="w-11 h-11 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-royal-500 group-hover:bg-royal-500 group-hover:text-white transition-all duration-400 shadow-inner shrink-0">
                    <FaGithub size={18} />
                  </div>
                  <div>
                    <p className="text-[9px] font-black text-slate-500 uppercase tracking-widest mb-0.5">GitHub</p>
                    <p className="text-sm font-bold text-white hover:text-neon-cyan transition-colors">
                      github.com/GuntassKaur
                    </p>
                  </div>
                </a>

                <div className="flex items-center gap-5 group">
                  <div className="w-11 h-11 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-royal-500 shrink-0">
                    <MapPin size={18} />
                  </div>
                  <div>
                    <p className="text-[9px] font-black text-slate-500 uppercase tracking-widest mb-0.5">Location</p>
                    <p className="text-sm font-bold text-white">Punjab, India — Open to Relocation</p>
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
              className="glass-card p-8 md:p-10 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-40 h-40 bg-royal-500/5 rounded-full blur-3xl pointer-events-none" />

              <form ref={formRef} onSubmit={handleSubmit} noValidate className="relative z-10 space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="space-y-1.5">
                    <label className="text-[9px] font-black text-slate-500 uppercase tracking-[0.2em] ml-1">Full Name *</label>
                    <input 
                      type="text" 
                      name="user_name"
                      placeholder="Your full name"
                      className={inputClass("user_name")}
                      onChange={() => errors.user_name && setErrors(p => ({ ...p, user_name: "" }))}
                    />
                    {errors.user_name && (
                      <p className="text-[10px] text-red-400 flex items-center gap-1 ml-1">
                        <AlertCircle size={10} /> {errors.user_name}
                      </p>
                    )}
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-[9px] font-black text-slate-500 uppercase tracking-[0.2em] ml-1">Email Address *</label>
                    <input 
                      type="email" 
                      name="user_email"
                      placeholder="your@email.com"
                      className={inputClass("user_email")}
                      onChange={() => errors.user_email && setErrors(p => ({ ...p, user_email: "" }))}
                    />
                    {errors.user_email && (
                      <p className="text-[10px] text-red-400 flex items-center gap-1 ml-1">
                        <AlertCircle size={10} /> {errors.user_email}
                      </p>
                    )}
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-[9px] font-black text-slate-500 uppercase tracking-[0.2em] ml-1">Subject</label>
                  <input 
                    type="text" 
                    name="subject"
                    placeholder="e.g. Software Engineering Collaboration"
                    className="w-full px-5 py-3.5 rounded-2xl bg-white/5 border border-white/10 focus:border-neon-cyan focus:outline-none focus:ring-1 focus:ring-neon-cyan/20 text-white transition-all placeholder:text-slate-600 text-sm"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-[9px] font-black text-slate-500 uppercase tracking-[0.2em] ml-1">Message *</label>
                  <textarea 
                    name="message"
                    placeholder="Tell me about your project or opportunity..."
                    rows="5"
                    className={`${inputClass("message")} resize-none`}
                    onChange={() => errors.message && setErrors(p => ({ ...p, message: "" }))}
                  />
                  {errors.message && (
                    <p className="text-[10px] text-red-400 flex items-center gap-1 ml-1">
                      <AlertCircle size={10} /> {errors.message}
                    </p>
                  )}
                </div>

                <button 
                  type="submit"
                  disabled={loading}
                  id="contact-submit-btn"
                  className="premium-button w-full justify-center group disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {loading ? (
                    <>
                      <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Opening Gmail...
                    </>
                  ) : (
                    <>
                      Send Message
                      <Send size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </>
                  )}
                </button>

                {/* Status Messages */}
                {status === "opening" && (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-start gap-3 p-4 rounded-xl bg-green-500/10 border border-green-500/30 text-sm"
                  >
                    <CheckCircle size={16} className="text-green-400 mt-0.5 shrink-0" />
                    <div>
                      <p className="font-bold text-green-400 text-xs mb-0.5">Gmail Compose Opened!</p>
                      <p className="text-slate-400 text-xs">Your message has been pre-filled in Gmail. Please review and hit Send in Gmail to deliver it.</p>
                    </div>
                  </motion.div>
                )}
                {status === "error" && (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-start gap-3 p-4 rounded-xl bg-red-500/10 border border-red-500/30 text-sm"
                  >
                    <AlertCircle size={16} className="text-red-400 mt-0.5 shrink-0" />
                    <div>
                      <p className="font-bold text-red-400 text-xs mb-0.5">Couldn't open Gmail</p>
                      <p className="text-slate-400 text-xs">Please email directly at <a href={`mailto:${BRAND_CONTENT.email}`} className="text-neon-cyan underline">{BRAND_CONTENT.email}</a></p>
                    </div>
                  </motion.div>
                )}

                <p className="text-[9px] text-slate-600 text-center leading-relaxed">
                  Your message is pre-filled in Gmail compose — nothing is sent without your confirmation.
                </p>
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
