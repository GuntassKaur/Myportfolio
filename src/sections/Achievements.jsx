import { motion } from "framer-motion";
import { ACHIEVEMENTS } from "../constants";
import { FaTrophy, FaRocket, FaAward, FaMedal } from "react-icons/fa6";

const Icons = [FaTrophy, FaRocket, FaAward, FaMedal];

const Achievements = () => {
    return (
        <section id="achievements" className="py-40 relative overflow-hidden bg-[#0A0F1F]">
            {/* Immersive Deep Background Pattern */}
            <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-5 pointer-events-none" />

            <div className="container relative z-10 px-6">
                
                {/* Immersive Header */}
                <div className="text-center max-w-5xl mx-auto mb-32 font-heading">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        className="inline-flex items-center gap-3 px-8 py-3 rounded-full glass border border-yellow-500/30 text-yellow-500 text-[10px] font-black uppercase tracking-[0.4em] mb-12 shadow-[0_0_30px_rgba(255,215,0,0.1)]"
                    >
                        Protocol: Recognition Sequence
                    </motion.div>
                    <motion.h2 
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="text-6xl md:text-8xl font-black mb-12 leading-[0.9] text-white tracking-tighter"
                    >
                        Excellence <span className="text-yellow-500">Log.</span>
                    </motion.h2>
                    <p className="text-[#A0AEC0] text-xl font-light italic max-w-3xl mx-auto border-y border-white/5 py-10">
                        "Documenting pivotal milestones and technical validations achieved through relentless innovation."
                    </p>
                </div>

                {/* Cyber-Grid Recognition Matrix */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-16 px-10">
                    {ACHIEVEMENTS.map((ach, index) => {
                        const Icon = Icons[index % Icons.length] || FaAward;
                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 1, delay: index * 0.1 }}
                                className="group p-12 glass-card border-white/10 hover:border-yellow-500/50 rounded-[64px] transition-all duration-700 flex flex-col items-center text-center relative overflow-hidden bg-gradient-to-br from-white/5 to-transparent"
                            >
                                {/* Active Performance Glow */}
                                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-yellow-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                                
                                <div className="w-20 h-20 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-yellow-500 mb-10 group-hover:scale-110 group-hover:rotate-12 group-hover:rotate-y-180 transition-all duration-700 shadow-[0_0_40px_rgba(255,215,0,0.2)] bg-gradient-to-br from-[#0A0F1F] to-yellow-900/10">
                                    <Icon size={32} />
                                </div>
                                <h3 className="text-2xl font-black text-white mb-8 uppercase tracking-tighter group-hover:text-yellow-500 transition-colors leading-[0.9]">
                                    {ach.title}
                                </h3>
                                <p className="text-[#A0AEC0] text-lg font-light leading-relaxed italic opacity-60">
                                    "{ach.desc}"
                                </p>
                            </motion.div>
                        );
                    })}
                </div>
            </div>

            <div className="mt-40 flex justify-center opacity-10">
                <FaTrophy size={100} className="text-white blur-[2px]" />
            </div>
        </section>
    );
};

export default Achievements;
