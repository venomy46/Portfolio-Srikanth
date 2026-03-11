import { motion } from 'framer-motion';
import { Download, Eye, FileText } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: (i = 0) => ({
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, delay: i * 0.12, ease: 'easeOut' },
    }),
};

export default function Resume() {
    return (
        <section
            id="resume"
            className="section-padding bg-[#07060e]"
            aria-label="Resume section"
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
                    <p className="text-orange-500 font-mono text-xs tracking-[0.3em] uppercase font-semibold mb-2">My credentials</p>
                    <h2 className="text-3xl sm:text-4xl font-bold text-white font-display">
                        My <span className="gradient-text">Resume</span>
                    </h2>
                    <div className="mt-3 mx-auto w-16 h-0.5 bg-gradient-to-r from-orange-500 via-pink-500 to-violet-500 rounded-full" />
                </motion.div>

                {/* Resume card */}
                <motion.div
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    custom={1}
                    className="glass rounded-2xl overflow-hidden border border-violet-500/20 hover:border-orange-500/30 transition-all duration-300 max-w-2xl mx-auto"
                >
                    {/* Top gradient bar */}
                    <div className="h-1.5 w-full bg-gradient-to-r from-orange-500 via-pink-500 to-violet-500" />

                    <div className="p-8 sm:p-10">
                        {/* Icon + name */}
                        <div className="flex items-center gap-5 mb-8">
                            <div className="p-4 rounded-2xl bg-gradient-to-br from-orange-500/20 to-violet-500/20 border border-orange-500/20">
                                <FileText size={32} className="text-orange-400" />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-white font-display">Srikanth M — Resume</h3>
                                <p className="text-slate-400 text-sm mt-0.5 font-mono">Fresher Full-Stack Developer · CSE Graduate</p>
                            </div>
                        </div>

                        {/* Quick highlights */}
                        <div className="grid grid-cols-2 gap-3 mb-8">
                            {[
                                { label: 'Degree', value: 'B.E. Computer Science' },
                                { label: 'University', value: 'VTU, India' },
                                { label: 'Graduation', value: '2026' },
                                { label: 'Status', value: 'Open to Work ✅' },
                            ].map((item) => (
                                <div key={item.label} className="bg-slate-800/40 rounded-xl px-4 py-3 border border-slate-700/50">
                                    <p className="text-slate-500 font-mono text-[10px] uppercase tracking-wider mb-1">{item.label}</p>
                                    <p className="text-slate-200 text-sm font-semibold">{item.value}</p>
                                </div>
                            ))}
                        </div>

                        {/* Action buttons */}
                        <div className="flex flex-col sm:flex-row gap-3">
                            <a
                                href={personalInfo.resume}
                                download="SrikanthM_developer.pdf"
                                className="flex items-center justify-center gap-2 flex-1 py-3 px-6 text-sm font-bold rounded-xl text-white transition-all duration-200 hover:scale-105 active:scale-95 tracking-wide"
                                style={{
                                    background: 'linear-gradient(135deg, #f97316, #ec4899, #a855f7)',
                                    boxShadow: '0 0 20px rgba(236,72,153,0.35)',
                                }}
                            >
                                <Download size={16} />
                                Download Resume
                            </a>
                            <a
                                href={personalInfo.resume}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center justify-center gap-2 flex-1 py-3 px-6 text-sm font-bold rounded-xl text-violet-400 border border-violet-500/30 bg-violet-500/10 hover:bg-violet-500/20 transition-all duration-200"
                            >
                                <Eye size={16} />
                                View Online
                            </a>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
