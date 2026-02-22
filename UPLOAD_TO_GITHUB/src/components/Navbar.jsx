import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { personalInfo } from '../data/portfolioData';
import { Menu, X } from 'lucide-react';

const navLinks = [
    { label: 'About', id: 'about' },
    { label: 'Education', id: 'education' },
    { label: 'Skills', id: 'skills' },
    { label: 'Projects', id: 'projects' },
    { label: 'Certifications', id: 'certifications' },
    { label: 'Contact', id: 'contact' },
];

// Reliable scroll helper — uses getElementById
const scrollTo = (id, closeMobile) => {
    if (closeMobile) closeMobile(false);
    const el = document.getElementById(id);
    if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
};

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 60);
        window.addEventListener('scroll', onScroll);
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    return (
        <>
            <motion.header
                initial={{ y: -80, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
                    ? 'bg-[#07060e]/88 backdrop-blur-lg border-b border-violet-500/15 shadow-xl shadow-black/30'
                    : 'bg-transparent'
                    }`}
            >
                <div className="max-w-6xl mx-auto px-5 sm:px-8 py-4 flex items-center justify-between">

                    {/* Logo */}
                    <button
                        onClick={() => scrollTo('hero')}
                        className="text-xl font-black tracking-tight gradient-text"
                        style={{ fontFamily: 'Sora, sans-serif' }}
                    >
                        &lt;Srikanth/&gt;
                    </button>

                    {/* Desktop nav */}
                    <nav className="hidden md:flex items-center gap-1">
                        {navLinks.map((link) => (
                            <button
                                key={link.label}
                                onClick={() => scrollTo(link.id)}
                                className="px-4 py-2 text-sm text-slate-400 hover:text-orange-300 transition-colors duration-200 rounded-lg hover:bg-orange-500/5 font-medium"
                            >
                                {link.label}
                            </button>
                        ))}

                        {/* Hire Me → scrolls to Contact */}
                        <button
                            onClick={() => scrollTo('contact')}
                            className="ml-3 px-5 py-2 text-sm font-bold rounded-xl text-white transition-all duration-200 hover:scale-105 active:scale-95 tracking-wide"
                            style={{
                                background: 'linear-gradient(135deg, #f97316, #ec4899, #a855f7)',
                                boxShadow: '0 0 16px rgba(236,72,153,0.40)',
                            }}
                        >
                            Hire Me ✦
                        </button>
                    </nav>

                    {/* Mobile hamburger */}
                    <button
                        className="md:hidden p-2 text-slate-400 hover:text-violet-400 transition-colors rounded-lg"
                        onClick={() => setMobileOpen(!mobileOpen)}
                        aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
                    >
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={mobileOpen ? 'x' : 'menu'}
                                initial={{ rotate: -90, opacity: 0 }}
                                animate={{ rotate: 0, opacity: 1 }}
                                exit={{ rotate: 90, opacity: 0 }}
                                transition={{ duration: 0.18 }}
                            >
                                {mobileOpen ? <X size={22} /> : <Menu size={22} />}
                            </motion.div>
                        </AnimatePresence>
                    </button>
                </div>
            </motion.header>

            {/* Mobile drawer */}
            <AnimatePresence>
                {mobileOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20, scaleY: 0.9 }}
                        animate={{ opacity: 1, y: 0, scaleY: 1 }}
                        exit={{ opacity: 0, y: -20, scaleY: 0.9 }}
                        transition={{ duration: 0.22, ease: 'easeOut' }}
                        style={{ transformOrigin: 'top' }}
                        className="fixed top-[64px] left-0 right-0 z-40 glass border-b border-violet-500/15 px-6 py-5 md:hidden"
                    >
                        <nav className="flex flex-col gap-1">
                            {navLinks.map((link) => (
                                <button
                                    key={link.label}
                                    onClick={() => scrollTo(link.id, setMobileOpen)}
                                    className="w-full text-left py-3 px-4 text-slate-300 hover:text-orange-300 hover:bg-orange-500/5 rounded-xl transition-all text-sm font-medium"
                                >
                                    {link.label}
                                </button>
                            ))}
                            <button
                                onClick={() => scrollTo('contact', setMobileOpen)}
                                className="mt-2 py-3 px-4 text-center text-sm font-bold rounded-xl text-white"
                                style={{ background: 'linear-gradient(135deg, #f97316, #ec4899, #a855f7)' }}
                            >
                                Hire Me ✦
                            </button>
                        </nav>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
