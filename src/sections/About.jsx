import { motion } from "framer-motion";
import { GraduationCap, Code2, Globe, Cpu, Award } from "lucide-react";
import { ABOUT_CONTENT, PROJECTS, SKILLS } from "../constants";

const About = () => {
    const totalSkills = SKILLS.reduce((acc, cat) => acc + cat.items.length, 0);

    const stats = [
        { 
            label: "Academic Merit", 
            value: ABOUT_CONTENT.academicHighlights[0].value, 
            sub: "B.Tech CSE",
            icon: <GraduationCap className="w-6 h-6" />,
            color: "text-neon-cyan"
        },
        { 
            label: "Systems Built", 
            value: PROJECTS.length, 
            sub: "End-to-end projects",
            icon: <Globe className="w-6 h-6" />,
            color: "text-neon-purple"
        },
        { 
            label: "Core Skills", 
            value: totalSkills, 
            sub: "Technologies mastered",
            icon: <Code2 className="w-6 h-6" />,
            color: "text-neon-pink"
        }
    ];

    return (
        <section id="about" className="py-24 relative overflow-hidden">
            <div className="container mx-auto px-6 relative z-10">
                <div className="flex flex-col lg:flex-row gap-16 items-start">
                    {/* Left: Content */}
                    <div className="flex-1">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: -0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <h2 className="text-4xl md:text-6xl font-black mb-8 leading-tight">
                                <span className="text-white">ABOUT THE</span> <br />
                                <span className="gradient-text">ENGINEER</span>
                            </h2>
                            
                            <p className="text-xl text-text-muted leading-relaxed mb-12">
                                {ABOUT_CONTENT.text}
                            </p>

                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                {stats.map((stat, i) => (
                                    <motion.div
                                        key={i}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: i * 0.1 }}
                                        className="glass-card p-6 rounded-2xl group hover:-translate-y-2 hover:border-white/20"
                                    >
                                        <div className={`mb-4 p-3 rounded-xl bg-white/5 inline-block group-hover:scale-110 transition-transform ${stat.color}`}>
                                            {stat.icon}
                                        </div>
                                        <h3 className="text-3xl font-black text-white mb-1">{stat.value}</h3>
                                        <p className="text-xs font-bold text-text-dim uppercase tracking-widest">{stat.label}</p>
                                        <p className="text-[10px] text-text-dim mt-2 italic">{stat.sub}</p>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    </div>

                    {/* Right: Vision Card */}
                    <motion.div 
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="lg:w-[400px] w-full"
                    >
                        <div className="glass-card p-8 rounded-3xl relative overflow-hidden group border-neon-purple/20">
                            <div className="absolute -top-12 -right-12 w-48 h-48 bg-neon-purple/10 rounded-full blur-3xl group-hover:bg-neon-purple/20 transition-all duration-700" />
                            
                            <div className="flex items-center gap-4 mb-8">
                                <div className="p-3 rounded-2xl bg-neon-purple/20">
                                    <Award className="w-8 h-8 text-neon-purple" />
                                </div>
                                <h3 className="text-2xl font-black text-white">The Engineering Vision</h3>
                            </div>

                            <p className="text-lg text-text-muted italic leading-relaxed mb-8 border-l-4 border-neon-cyan pl-6">
                                "{ABOUT_CONTENT.philosophy}"
                            </p>

                            <div className="space-y-4">
                                {ABOUT_CONTENT.academicHighlights.map((high, i) => (
                                    <div key={i} className="flex items-center justify-between p-4 rounded-xl bg-white/5 border border-white/5">
                                        <div>
                                            <p className="text-[10px] font-bold text-text-dim uppercase tracking-widest">{high.label}</p>
                                            <p className="text-white font-bold">{high.value}</p>
                                        </div>
                                        <div className="text-right">
                                            <p className="text-[10px] text-text-dim">{high.period || high.institution}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            
                            <div className="mt-8 pt-8 border-t border-white/10 flex items-center gap-4">
                                <div className="w-3 h-3 rounded-full bg-neon-cyan animate-pulse" />
                                <span className="text-xs font-black text-white uppercase tracking-widest">Always Building</span>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;

