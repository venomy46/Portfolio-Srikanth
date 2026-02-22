import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { personalInfo } from '../data/portfolioData';
import { Github, Linkedin, Mail, Phone, ArrowRight, ChevronRight } from 'lucide-react';

// Floating particles — warm premium palette
const particles = [
    { id: 1, size: 5, x: '8%', y: '18%', color: '#f97316', delay: 0, dur: 7 },
    { id: 2, size: 3, x: '85%', y: '12%', color: '#a855f7', delay: 1.2, dur: 9 },
    { id: 3, size: 6, x: '78%', y: '72%', color: '#ec4899', delay: 2.1, dur: 6 },
    { id: 4, size: 4, x: '12%', y: '78%', color: '#10b981', delay: 0.6, dur: 8 },
    { id: 5, size: 3, x: '92%', y: '40%', color: '#fbbf24', delay: 3, dur: 7 },
    { id: 6, size: 5, x: '55%', y: '8%', color: '#38bdf8', delay: 1.8, dur: 10 },
];

// Text stagger: depth/scale from back-to-front (z-depth effect)
const depthVariants = {
    hidden: { opacity: 0, scale: 0.78, z: -80 },
    visible: (i = 0) => ({
        opacity: 1,
        scale: 1,
        z: 0,
        transition: {
            duration: 0.7,
            delay: 0.9 + i * 0.13,        // starts AFTER person enters
            ease: [0.22, 1, 0.36, 1],     // expo out
        },
    }),
};

export default function Hero() {
    const scrollToProjects = () =>
        document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
    const scrollToContact = () =>
        document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });

    const roles = [
        { label: 'Python Developer', color: 'text-cyan-300   border-cyan-500/40   bg-cyan-500/10' },
        { label: 'Full Stack Dev', color: 'text-violet-300 border-violet-500/40 bg-violet-500/10' },
        { label: 'Backend Developer', color: 'text-pink-300   border-pink-500/40   bg-pink-500/10' },
    ];

    return (
        <section
            id="hero"
            className="relative min-h-screen flex items-center animated-gradient overflow-hidden"
            style={{ perspective: '1000px' }}
            aria-label="Hero section"
        >
            {/* Ambient particles */}
            {particles.map((p) => (
                <motion.div
                    key={p.id}
                    className="absolute rounded-full pointer-events-none"
                    style={{
                        left: p.x, top: p.y,
                        width: p.size, height: p.size,
                        backgroundColor: p.color,
                        boxShadow: `0 0 ${p.size * 3}px ${p.color}`,
                    }}
                    animate={{ y: [0, -24, 0], x: [0, 8, 0], opacity: [0.35, 0.8, 0.35] }}
                    transition={{ repeat: Infinity, duration: p.dur, delay: p.delay, ease: 'easeInOut' }}
                />
            ))}

            {/* Ambient blobs */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-1/4 left-0 w-72 h-72 rounded-full blur-3xl" style={{ background: 'rgba(249,115,22,0.1)' }} />
                <div className="absolute bottom-1/4 right-0 w-96 h-96 rounded-full blur-3xl" style={{ background: 'rgba(168,85,247,0.08)' }} />
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-px"
                    style={{ background: 'linear-gradient(to right, transparent, rgba(236,72,153,0.4), transparent)' }}
                />
            </div>

            {/* ── SPLIT LAYOUT ── */}
            <div className="relative z-10 w-full max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-0 md:gap-12 items-center min-h-screen">

                {/* ── LEFT: Person enters from left ── */}
                <motion.div
                    className="flex items-center justify-center relative pt-24 md:pt-0"
                    initial={{ x: -180, opacity: 0, scale: 0.9 }}
                    animate={{ x: 0, opacity: 1, scale: 1 }}
                    transition={{ duration: 1.05, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
                >
                    {/* Circular profile photo */}
                    <div className="relative">
                        {/* Spinning conic-gradient ring */}
                        <motion.div
                            className="absolute -inset-1 rounded-full"
                            style={{
                                padding: 3,
                                background: 'conic-gradient(from 0deg,#00e5ff,#cc00ff,#ff0080,#00ff88,#00e5ff)',
                                filter: 'blur(1px)',
                            }}
                            animate={{ rotate: 360 }}
                            transition={{ repeat: Infinity, duration: 5, ease: 'linear' }}
                        />
                        {/* Glow behind ring */}
                        <div
                            className="absolute -inset-2 rounded-full blur-xl opacity-50"
                            style={{ background: 'conic-gradient(from 0deg,#00e5ff,#cc00ff,#ff0080,#00ff88,#00e5ff)' }}
                        />
                        {/* Photo */}
                        <div
                            className="relative w-48 h-48 md:w-60 md:h-60 rounded-full overflow-hidden"
                            style={{ border: '3px solid rgba(0,229,255,0.2)' }}
                        >
                            <img
                                src="/profile.jpg"
                                alt="Srikanth M"
                                style={{
                                    width: '100%',
                                    height: '100%',
                                    objectFit: 'cover',
                                    objectPosition: 'center 8%',
                                    display: 'block',
                                }}
                            />
                        </div>
                        {/* Online pulse dot */}
                        <motion.span
                            className="absolute bottom-3 right-3 w-4 h-4 bg-green-400 rounded-full"
                            style={{ border: '2px solid #030010', boxShadow: '0 0 10px #00ff88' }}
                            animate={{ scale: [1, 1.35, 1] }}
                            transition={{ repeat: Infinity, duration: 2 }}
                        />
                    </div>

                    {/* Floating @sriki badge */}
                    <motion.div
                        initial={{ opacity: 0, x: -24 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 1.4, duration: 0.5 }}
                        className="absolute left-0 md:-left-10 top-1/2 -translate-y-4 z-20 rounded-xl px-3 py-2"
                        style={{
                            background: 'rgba(10,0,30,0.88)',
                            backdropFilter: 'blur(12px)',
                            border: '1px solid rgba(204,0,255,0.45)',
                            boxShadow: '0 0 14px rgba(204,0,255,0.22)',
                        }}
                    >
                        <p className="text-xs font-mono" style={{ color: '#cc00ff' }}>@srikanth</p>
                        <p className="text-xs text-slate-400">VTU · CSE</p>
                    </motion.div>

                    {/* Floating CGPA badge */}
                    <motion.div
                        initial={{ opacity: 0, x: 24 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 1.6, duration: 0.5 }}
                        className="absolute right-0 md:-right-10 top-1/2 -translate-y-4 z-20 rounded-xl px-3 py-2 text-center"
                        style={{
                            background: 'rgba(10,0,30,0.88)',
                            backdropFilter: 'blur(12px)',
                            border: '1px solid rgba(0,255,136,0.45)',
                            boxShadow: '0 0 14px rgba(0,255,136,0.22)',
                        }}
                    >
                        <p className="text-xs font-mono" style={{ color: '#00ff88' }}>CGPA</p>
                        <p className="text-lg font-bold text-white leading-none">8.0</p>
                    </motion.div>
                </motion.div>



                {/* ── RIGHT: Text content bursts in from depth ── */}
                <div className="flex flex-col justify-center py-16 md:py-24 space-y-5">
                    {/* Greeting */}
                    <motion.p
                        custom={0}
                        variants={depthVariants}
                        initial="hidden"
                        animate="visible"
                        className="font-mono text-xs tracking-[0.3em] uppercase font-semibold"
                        style={{ color: '#f97316', letterSpacing: '0.3em' }}
                    >
                        ✦ Hello World, I'm
                    </motion.p>

                    {/* Name */}
                    <motion.h1
                        custom={1}
                        variants={depthVariants}
                        initial="hidden"
                        animate="visible"
                        className="font-display leading-none tracking-tight"
                        style={{ fontFamily: 'Sora, sans-serif', fontSize: 'clamp(3rem, 7vw, 5.5rem)', fontWeight: 800, letterSpacing: '-0.03em' }}
                    >
                        <span className="gradient-text">Srikanth</span>
                        <br />
                        <span className="text-white">M.</span>
                    </motion.h1>

                    {/* Display name pill */}
                    <motion.div
                        custom={2}
                        variants={depthVariants}
                        initial="hidden"
                        animate="visible"
                    >
                        <span className="font-mono text-xs text-slate-500 tracking-wide">
                            also known as{' '}
                            <span
                                className="px-3 py-0.5 rounded-full text-sm font-semibold"
                                style={{ background: 'rgba(249,115,22,0.12)', color: '#fb923c', border: '1px solid rgba(249,115,22,0.35)' }}
                            >
                                "Srikanth"
                            </span>
                        </span>
                    </motion.div>

                    {/* Title */}
                    <motion.p
                        custom={3}
                        variants={depthVariants}
                        initial="hidden"
                        animate="visible"
                        className="text-slate-300 text-base font-medium leading-relaxed max-w-sm"
                    >
                        Computer Science Engineering Graduate · VTU, India
                    </motion.p>

                    {/* Role chips */}
                    <motion.div
                        custom={4}
                        variants={depthVariants}
                        initial="hidden"
                        animate="visible"
                        className="flex flex-wrap gap-2"
                    >
                        {[
                            { label: '🐍  Python Developer', bg: 'rgba(249,115,22,0.1)', color: '#fb923c', border: 'rgba(249,115,22,0.35)' },
                            { label: '🌐  Full Stack Dev', bg: 'rgba(168,85,247,0.1)', color: '#c084fc', border: 'rgba(168,85,247,0.35)' },
                            { label: '⚙️  Backend Dev', bg: 'rgba(236,72,153,0.1)', color: '#f472b6', border: 'rgba(236,72,153,0.35)' },
                        ].map((r) => (
                            <span key={r.label}
                                className="px-3 py-1 rounded-full text-xs font-mono font-medium"
                                style={{ background: r.bg, color: r.color, border: `1px solid ${r.border}` }}
                            >
                                {r.label}
                            </span>
                        ))}
                    </motion.div>

                    {/* CTA Buttons */}
                    <motion.div
                        custom={5}
                        variants={depthVariants}
                        initial="hidden"
                        animate="visible"
                        className="flex flex-wrap gap-4 pt-2"
                    >
                        <button
                            onClick={scrollToProjects}
                            className="group flex items-center gap-2 px-8 py-3.5 font-bold rounded-2xl text-white transition-all duration-200 hover:scale-105 active:scale-95 text-sm tracking-wide"
                            style={{
                                background: 'linear-gradient(135deg, #f97316, #ec4899, #a855f7)',
                                boxShadow: '0 0 28px rgba(236,72,153,0.45)',
                            }}
                        >
                            View Projects
                            <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
                        </button>

                        <button
                            onClick={scrollToContact}
                            className="group flex items-center gap-2 px-8 py-3.5 font-bold rounded-2xl transition-all duration-200 hover:scale-105 active:scale-95 neon-border text-sm tracking-wide"
                            style={{ background: 'rgba(168,85,247,0.06)', color: '#c084fc', border: '1px solid rgba(168,85,247,0.4)' }}
                        >
                            Contact Me
                            <ChevronRight size={15} className="group-hover:translate-x-1 transition-transform" />
                        </button>
                    </motion.div>

                    {/* Social icons */}
                    <motion.div
                        custom={6}
                        variants={depthVariants}
                        initial="hidden"
                        animate="visible"
                        className="flex items-center gap-3 pt-1"
                    >
                        {[
                            { icon: <Github size={18} />, href: personalInfo.github, label: 'GitHub', cls: 'hover:text-slate-100 hover:border-slate-400/50' },
                            { icon: <Linkedin size={18} />, href: personalInfo.linkedin, label: 'LinkedIn', cls: 'hover:text-blue-300 hover:border-blue-400/50' },
                            { icon: <Mail size={18} />, href: `mailto:${personalInfo.email}`, label: 'Email', cls: 'hover:text-pink-300 hover:border-pink-400/50' },
                            { icon: <Phone size={18} />, href: `tel:${personalInfo.phone}`, label: 'Phone', cls: 'hover:text-emerald-300 hover:border-emerald-400/50' },
                        ].map((item) => (
                            <a
                                key={item.label}
                                href={item.href}
                                aria-label={item.label}
                                target={item.href.startsWith('http') ? '_blank' : undefined}
                                rel="noopener noreferrer"
                                className={`w-10 h-10 glass rounded-full flex items-center justify-center text-slate-500 transition-all duration-200 hover:scale-110 ${item.cls}`}
                            >
                                {item.icon}
                            </a>
                        ))}
                        <span className="text-slate-600 text-xs font-mono ml-1 tracking-wide">Find me →</span>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
