import { motion } from 'framer-motion';
import { summary, personalInfo } from '../data/portfolioData';
import { Code2, Lightbulb, Rocket } from 'lucide-react';

const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: (i = 0) => ({
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, delay: i * 0.12, ease: 'easeOut' },
    }),
};

const highlights = [
    { icon: <Code2 size={22} className="text-sky-400" />, label: 'Problem Solving', desc: 'Analytical thinker with a passion for clean, efficient code.' },
    { icon: <Rocket size={22} className="text-indigo-400" />, label: 'Full Stack', desc: 'Experience across frontend, backend, and database layers.' },
    { icon: <Lightbulb size={22} className="text-violet-400" />, label: 'Continuous Learner', desc: 'Always exploring new technologies and best practices.' },
];

export default function About() {
    return (
        <section
            id="about"
            className="section-padding bg-[#07060e]"
            aria-label="About section"
        >
            <div className="max-w-5xl mx-auto">
                {/* Section header */}
                <motion.div
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="text-center mb-14"
                >
                    <p className="text-orange-500 font-mono text-xs tracking-[0.3em] uppercase font-semibold mb-2">Get to know me</p>
                    <h2 className="text-3xl sm:text-4xl font-bold text-white font-display">
                        About <span className="gradient-text">Me</span>
                    </h2>
                    <div className="mt-3 mx-auto w-16 h-0.5 bg-gradient-to-r from-orange-500 via-pink-500 to-violet-500 rounded-full" />
                </motion.div>

                <div className="grid md:grid-cols-2 gap-12 items-center">
                    {/* Left – Identity card */}
                    <motion.div
                        variants={fadeUp}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        custom={0}
                    >
                        <div className="glass rounded-2xl p-8">
                            <div className="flex items-center gap-4 mb-6">
                                <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-orange-500/50">
                                    <img src="/profile.jpg" alt="Srikanth M" className="w-full h-full object-cover object-top" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-white font-display">{personalInfo.name}</h3>
                                    <p className="text-orange-400 text-sm font-mono">"{personalInfo.displayName}"</p>
                                </div>
                            </div>

                            <div className="space-y-3 text-sm">
                                {[
                                    { label: 'Role', value: 'CS Engineering Graduate' },
                                    { label: 'University', value: 'VTU, India' },
                                    { label: 'Focus', value: 'Backend & Full Stack Dev' },
                                    { label: 'Status', value: 'Open to Opportunities ✅' },
                                ].map((item) => (
                                    <div key={item.label} className="flex justify-between border-b border-slate-800 pb-2">
                                        <span className="text-slate-500 font-mono text-xs uppercase tracking-wider">{item.label}</span>
                                        <span className="text-slate-200 font-medium">{item.value}</span>
                                    </div>
                                ))}
                            </div>

                            <div className="mt-6 flex gap-3">
                                <a
                                    href={`mailto:${personalInfo.email}`}
                                    className="flex-1 text-center py-2 text-xs font-bold rounded-lg bg-orange-500/10 text-orange-400 border border-orange-500/30 hover:bg-orange-500/20 transition-all duration-200"
                                >
                                    Email Me
                                </a>
                                <a
                                    href={personalInfo.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex-1 text-center py-2 text-xs font-bold rounded-lg bg-violet-500/10 text-violet-400 border border-violet-500/30 hover:bg-violet-500/20 transition-all duration-200"
                                >
                                    GitHub
                                </a>
                            </div>
                        </div>
                    </motion.div>

                    {/* Right – Summary + highlights */}
                    <div className="space-y-6">
                        <motion.p
                            variants={fadeUp}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            custom={1}
                            className="text-slate-400 leading-relaxed text-base"
                        >
                            {summary}
                        </motion.p>

                        <div className="grid gap-4">
                            {highlights.map((h, i) => (
                                <motion.div
                                    key={h.label}
                                    variants={fadeUp}
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true }}
                                    custom={i + 2}
                                    className="glass rounded-xl p-4 flex items-start gap-4 hover:border-orange-500/30 transition-all duration-200"
                                >
                                    <div className="mt-0.5 p-2 rounded-lg bg-slate-800/60 transition-colors group-hover:bg-slate-700/60">{h.icon}</div>
                                    <div>
                                        <p className="text-white font-semibold text-sm font-display">{h.label}</p>
                                        <p className="text-slate-400 text-xs mt-0.5">{h.desc}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
