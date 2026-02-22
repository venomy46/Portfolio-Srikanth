import { motion } from 'framer-motion';
import { certifications } from '../data/portfolioData';
import { Award } from 'lucide-react';

const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: (i = 0) => ({
        opacity: 1,
        y: 0,
        transition: { duration: 0.55, delay: i * 0.1, ease: 'easeOut' },
    }),
};

export default function Certifications() {
    return (
        <section
            id="certifications"
            className="section-padding bg-[#07060e]"
            aria-label="Certifications section"
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
                    <p className="text-orange-500 font-mono text-xs tracking-[0.3em] uppercase font-semibold mb-2">Credentials</p>
                    <h2 className="text-3xl sm:text-4xl font-bold text-white font-display">
                        My <span className="gradient-text">Certifications</span>
                    </h2>
                    <div className="mt-3 mx-auto w-16 h-0.5 bg-gradient-to-r from-orange-500 via-pink-500 to-violet-500 rounded-full" />
                </motion.div>

                <div className="grid sm:grid-cols-2 gap-5">
                    {certifications.map((cert, i) => (
                        <motion.div
                            key={cert.id}
                            variants={fadeUp}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            custom={i}
                            whileHover={{ scale: 1.02, transition: { duration: 0.15 } }}
                            className={`glass rounded-2xl p-6 border ${cert.border.replace('sky', 'orange')} hover:shadow-lg hover:shadow-orange-500/5 transition-all duration-300 group`}
                        >
                            <div className={`w-12 h-12 rounded-xl bg-linear-to-br ${cert.color.replace('sky', 'orange').replace('indigo', 'violet')} border ${cert.border.replace('sky', 'orange')} flex items-center justify-center text-2xl mb-4`}>
                                {cert.icon}
                            </div>
                            <h3 className="text-white font-semibold text-sm leading-snug font-display group-hover:text-orange-400 transition-colors mb-1">
                                {cert.title}
                            </h3>
                            <div className="flex items-center gap-2 mt-2">
                                <Award size={13} className="text-orange-400" />
                                <span className="text-xs text-slate-500 font-mono">{cert.issuer}</span>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
