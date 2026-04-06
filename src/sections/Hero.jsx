import { motion } from "framer-motion";
import { Link } from "react-scroll";
// Icons removed for cleaner aesthetic
import { BRAND_CONTENT, HERO_CONTENT } from "../constants";
import profilePic from "../assets/profile.jpeg";

const Hero = () => {

    return (
        <section id="home" className="relative min-h-[100svh] flex items-center justify-center overflow-hidden bg-[#0A0F1F] py-20">
            {/* Optimized Background Gradients */}
            <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
                <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-purple-600/20 rounded-full blur-[120px] animate-pulse" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-cyan-600/20 rounded-full blur-[120px] animate-pulse" />
            </div>

            <div className="container relative z-10 px-6">
                <div className="flex flex-col lg:flex-row items-center justify-between gap-16 lg:gap-24">
                    
                    {/* Left: Text Content */}
                    <div className="flex-1 text-center lg:text-left order-2 lg:order-1">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            className="mb-8 inline-flex items-center gap-3 px-4 py-1.5 rounded-full glass border border-white/10"
                        >
                            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse shadow-[0_0_10px_#3CD7FF]" />
                            <span className="text-white/60 text-[10px] font-black uppercase tracking-[0.3em]">System: Operational</span>
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="text-5xl md:text-7xl lg:text-8xl font-black mb-8 leading-[0.9] tracking-tighter"
                        >
                            <span className="gradient-text">{BRAND_CONTENT.firstName}</span> <br />
                            <span className="text-white outline-text">{BRAND_CONTENT.lastName}</span>
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                            className="text-lg md:text-xl text-[#A0AEC0] font-light max-w-xl leading-relaxed mb-10 italic"
                        >
                            "{HERO_CONTENT.tagline}"
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.6 }}
                            className="flex flex-wrap items-center justify-center lg:justify-start gap-6"
                        >
                            <Link
                                to="projects"
                                smooth={true}
                                offset={-80}
                                className="px-10 py-4 bg-[#6C5DD3] text-white rounded-2xl font-black uppercase tracking-widest text-[10px] hover:bg-[#8E7CFF] hover:scale-105 transition-all shadow-[0_15px_30px_rgba(108,93,211,0.3)]"
                            >
                                View Projects
                            </Link>
                            <a
                                href="/resume.pdf"
                                download
                                className="px-8 py-4 border border-white/10 text-white rounded-2xl font-black uppercase tracking-widest text-[10px] hover:bg-white/5 transition-all"
                            >
                                Resume
                            </a>
                        </motion.div>
                    </div>

                    {/* Right: Premium Image Placement */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1 }}
                        className="flex-1 flex justify-center items-center relative w-full order-1 lg:order-2"
                    >
                        <div className="relative w-full max-w-[340px] aspect-square group mt-10 lg:mt-0">
                            {/* Premium Glow Effect */}
                            <div className="absolute inset-0 bg-gradient-to-tr from-cyan-400/30 to-purple-600/30 rounded-full blur-[60px] animate-pulse" />
                            
                            {/* Futuristic Circular Frame */}
                            <div className="relative w-full h-full rounded-full border border-white/20 p-2 bg-gradient-to-br from-white/10 to-transparent backdrop-blur-md shadow-[0_0_40px_rgba(60,215,255,0.15)]">
                                <div className="w-full h-full rounded-full overflow-hidden relative bg-[#0A0F1F]">
                                    <img 
                                        src={profilePic} 
                                        alt={BRAND_CONTENT.fullName}
                                        className="w-full h-full object-cover grayscale-[30%] hover:grayscale-0 hover:scale-110 transition-all duration-700"
                                        onError={(e) => {
                                            e.target.src = "https://images.unsplash.com/photo-1635830312899-214e6d13bd61?q=80&w=2832&auto=format&fit=crop";
                                        }}
                                    />
                                    {/* Inner ring overlay */}
                                    <div className="absolute inset-0 border-[2px] border-cyan-400/30 rounded-full pointer-events-none" />
                                </div>
                            </div>

                            {/* Verification Badge */}
                            <div className="absolute -bottom-4 right-4 bg-[#0A0F1F]/90 backdrop-blur-xl px-5 py-2.5 rounded-full border border-white/10 flex items-center gap-3 shadow-2xl opacity-0 group-hover:translate-y-[-10px] group-hover:opacity-100 transition-all duration-500 z-10">
                                <div className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-pulse shadow-[0_0_10px_#3CD7FF]" />
                                <span className="text-[10px] font-black uppercase tracking-widest text-white/90">Identity: Verified</span>
                            </div>
                            
                            {/* Accent orbits */}
                            <div className="absolute inset-[-20px] border border-white/5 rounded-full animate-[spin_10s_linear_infinite] pointer-events-none" />
                            <div className="absolute inset-[-40px] border border-white/5 rounded-full animate-[spin_15s_linear_infinite_reverse] pointer-events-none" />
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default Hero;
