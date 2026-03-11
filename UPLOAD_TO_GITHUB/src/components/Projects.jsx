import { motion } from 'framer-motion';
import { projects } from '../data/portfolioData';
import { ExternalLink, Github } from 'lucide-react';

const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: (i = 0) => ({
        opacity: 1,
        y: 0,
        transition: { duration: 0.55, delay: i * 0.15, ease: 'easeOut' },
    }),
};

export default function Projects() {
    return (
        <section
            id="projects"
            className="section-padding bg-[#07060e] dot-pattern"
            aria-label="Projects section"
        >
            <div className="max-w-5xl mx-auto">
                {/* Header */}
                <motion.div
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="text-center mb-14"
                >
                    <p className="text-orange-500 font-mono text-xs tracking-[0.3em] uppercase font-semibold mb-2">What I've built</p>
                    <h2 className="text-3xl sm:text-4xl font-bold text-white font-display">
                        Featured <span className="gradient-text">Projects</span>
                    </h2>
                    <div className="mt-3 mx-auto w-16 h-0.5 bg-gradient-to-r from-orange-500 via-pink-500 to-violet-500 rounded-full" />
                </motion.div>

                {/* Project cards */}
                <div className="grid md:grid-cols-2 gap-8">
                    {projects.map((project, i) => (
                        <motion.article
                            key={project.id}
                            variants={fadeUp}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            custom={i}
                            whileHover={{ y: -6, transition: { duration: 0.2 } }}
                            className={`h-full glass rounded-2xl overflow-hidden border ${project.borderColor} hover:shadow-xl hover:shadow-orange-500/10 transition-all duration-300 group flex flex-col`}
                        >
                            {/* Card top gradient banner */}
                            <div className="h-1.5 w-full bg-linear-to-r from-orange-500 via-pink-500 to-violet-500" />

                            <div className="p-7 flex flex-col flex-1">
                                {/* Icon + Title */}
                                <div className="flex items-start justify-between mb-4">
                                    <div className="flex items-center gap-3">
                                        <div className="p-2 rounded-lg bg-slate-800/40 group-hover:bg-slate-700/40 transition-colors">
                                            <span className="text-3xl">{project.icon}</span>
                                        </div>
                                        <div>
                                            <h3 className="text-white font-bold text-lg leading-tight font-display group-hover:text-orange-400 transition-colors">
                                                {project.title}
                                            </h3>
                                            <p className="text-slate-500 text-xs mt-0.5 font-mono">{project.subtitle}</p>
                                        </div>
                                    </div>
                                </div>

                                {/* Description bullets */}
                                <ul className="space-y-2 mb-6 flex-1">
                                    {project.description.map((point, idx) => (
                                        <li key={idx} className="flex items-start gap-2 text-sm text-slate-400">
                                            <span className="text-pink-500 mt-1 shrink-0">▸</span>
                                            {point}
                                        </li>
                                    ))}
                                </ul>

                                {/* Tech Stack */}
                                <div className="mb-5">
                                    <p className="text-xs text-slate-600 uppercase tracking-wider mb-2 font-mono font-bold">Tech Stack</p>
                                    <div className="flex flex-wrap gap-2">
                                        {project.techStack.map((tech) => (
                                            <span key={tech} className="tech-tag hover:border-orange-500/40 hover:text-orange-300 hover:bg-orange-500/10">{tech}</span>
                                        ))}
                                    </div>
                                </div>

                                {/* Action Buttons */}
                                <div className="flex gap-3 mt-auto">
                                    {project.liveLink && (
                                        <a
                                            href={project.liveLink}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center gap-1.5 flex-1 justify-center py-2 text-xs font-bold rounded-lg bg-orange-500/10 text-orange-400 border border-orange-500/30 hover:bg-orange-500/20 transition-all duration-200"
                                        >
                                            <ExternalLink size={13} />
                                            Live Demo
                                        </a>
                                    )}
                                    {project.githubLink && (
                                        <a
                                            href={project.githubLink}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center gap-1.5 flex-1 justify-center py-2 text-xs font-bold rounded-lg bg-violet-500/10 text-violet-400 border border-violet-500/30 hover:bg-violet-500/20 transition-all duration-200"
                                        >
                                            <Github size={13} />
                                            GitHub
                                        </a>
                                    )}
                                </div>
                            </div>
                        </motion.article>
                    ))}
                </div>
            </div>
        </section>
    );
}
