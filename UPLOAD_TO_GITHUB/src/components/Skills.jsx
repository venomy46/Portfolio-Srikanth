import { motion } from 'framer-motion';
import { skills } from '../data/portfolioData';

const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: (i = 0) => ({
        opacity: 1, y: 0,
        transition: { duration: 0.55, delay: i * 0.1, ease: 'easeOut' },
    }),
};

// Each category gets a distinct color accent from the premium palette
const categoryColors = [
    { icon: '💻', border: 'border-orange-500/30', tag: 'bg-orange-500/10 text-orange-300 border-orange-500/30', glow: 'hover:shadow-orange-500/10' },
    { icon: '🌐', border: 'border-pink-500/30', tag: 'bg-pink-500/10 text-pink-300 border-pink-500/30', glow: 'hover:shadow-pink-500/10' },
    { icon: '📊', border: 'border-violet-500/30', tag: 'bg-violet-500/10 text-violet-300 border-violet-500/30', glow: 'hover:shadow-violet-500/10' },
    { icon: '🗄️', border: 'border-emerald-500/30', tag: 'bg-emerald-500/10 text-emerald-300 border-emerald-500/30', glow: 'hover:shadow-emerald-500/10' },
    { icon: '🛠️', border: 'border-amber-500/30', tag: 'bg-amber-500/10 text-amber-300 border-amber-500/30', glow: 'hover:shadow-amber-500/10' },
];

export default function Skills() {
    return (
        <section id="skills" className="section-padding bg-[#07060e]" aria-label="Skills section">
            <div className="max-w-5xl mx-auto">
                {/* Header */}
                <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-center mb-14">
                    <p className="text-violet-500 font-mono text-xs tracking-[0.3em] uppercase font-semibold mb-2">What I work with</p>
                    <h2 className="text-3xl sm:text-4xl font-bold text-white font-display">
                        Technical <span className="gradient-text">Skills</span>
                    </h2>
                    <div className="mt-3 mx-auto w-16 h-0.5 bg-gradient-to-r from-orange-500 via-pink-500 to-violet-500 rounded-full" />
                </motion.div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {skills.map((category, i) => {
                        const c = categoryColors[i % categoryColors.length];
                        return (
                            <motion.div
                                key={category.category}
                                variants={fadeUp}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                custom={i}
                                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                                className={`glass rounded-2xl p-6 border ${c.border} hover:shadow-lg ${c.glow} transition-all duration-300 group`}
                            >
                                <div className="flex items-center gap-3 mb-5">
                                    <div className="p-2 rounded-lg bg-slate-800/40 group-hover:bg-slate-700/40 transition-colors">
                                        <span className="text-2xl">{category.icon}</span>
                                    </div>
                                    <h3 className="text-white font-bold text-sm uppercase tracking-wider font-display">{category.category}</h3>
                                </div>
                                <div className="flex flex-wrap gap-2">
                                    {category.items.map((skill) => (
                                        <motion.span key={skill} whileHover={{ scale: 1.1 }}
                                            className={`inline-block px-2.5 py-0.5 rounded-full text-xs font-mono font-medium border ${c.tag} transition-all duration-150 tracking-wide`}
                                        >
                                            {skill}
                                        </motion.span>
                                    ))}
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
