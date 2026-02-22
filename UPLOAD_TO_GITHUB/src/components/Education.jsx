import { motion } from 'framer-motion';
import { education } from '../data/portfolioData';

const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: (i = 0) => ({
        opacity: 1,
        y: 0,
        transition: { duration: 0.55, delay: i * 0.15, ease: 'easeOut' },
    }),
};


export default function Education() {
    return (
        <section
            id="education"
            className="section-padding bg-[#07060e] dot-pattern"
            aria-label="Education section"
        >
            <div className="max-w-4xl mx-auto">
                {/* Header */}
                <motion.div
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="text-center mb-14"
                >
                    <p className="text-pink-500 font-mono text-xs tracking-[0.3em] uppercase font-semibold mb-2">Academic background</p>
                    <h2 className="text-3xl sm:text-4xl font-bold text-white font-display">
                        My <span className="gradient-text">Education</span>
                    </h2>
                    <div className="mt-3 mx-auto w-16 h-0.5 bg-gradient-to-r from-orange-500 via-pink-500 to-violet-500 rounded-full" />
                </motion.div>

                {/* Timeline */}
                <div className="relative">
                    {/* Vertical line */}
                    <div className="absolute left-6 sm:left-1/2 top-0 bottom-0 w-px sm:-translate-x-px" style={{ background: 'linear-gradient(to bottom, transparent, #ec4899, #f97316, transparent)' }} />

                    <div className="space-y-10">
                        {education.map((edu, i) => (
                            <motion.div
                                key={edu.id}
                                variants={fadeUp}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                custom={i}
                                className={`relative flex flex-col sm:flex-row ${i % 2 === 0 ? 'sm:flex-row' : 'sm:flex-row-reverse'} gap-6 items-start sm:items-center`}
                            >
                                {/* Dot */}
                                <div className="absolute left-6 sm:left-1/2 -translate-x-1/2 w-3 h-3 rounded-full z-10" style={{ background: 'linear-gradient(135deg, #f97316, #ec4899)', boxShadow: '0 0 12px rgba(249, 115, 22, 0.6)', border: '2px solid #07060e' }} />

                                {/* Card – offset by side */}
                                <div className={`w-full sm:w-[45%] ml-14 sm:ml-0 ${i % 2 === 0 ? 'sm:mr-auto sm:pr-8' : 'sm:ml-auto sm:pl-8'}`}>
                                    <div className="glass rounded-2xl p-6 hover:border-pink-500/30 transition-all duration-300 group">
                                        <div className="flex items-center gap-3 mb-3">
                                            <span className="text-3xl">{edu.icon}</span>
                                            <div>
                                                <span className="text-xs font-mono text-orange-400 bg-orange-500/10 px-2.5 py-0.5 rounded-full border border-orange-500/20 uppercase tracking-wider">
                                                    {edu.year}
                                                </span>
                                            </div>
                                        </div>
                                        <h3 className="text-white font-bold text-base font-display group-hover:text-orange-300 transition-colors">
                                            {edu.degree}
                                        </h3>
                                        <p className="text-slate-400 text-sm mt-1">{edu.institution}</p>
                                        <p className="text-slate-500 text-xs mt-0.5 font-mono">{edu.location}</p>
                                        <div className="mt-4 inline-block px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/25 text-orange-300 text-xs font-bold font-mono">
                                            {edu.score}
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
