import { personalInfo } from '../data/portfolioData';
import { Github, Linkedin, Mail, Heart } from 'lucide-react';

const navLinks = ['About', 'Education', 'Skills', 'Projects', 'Certifications', 'Contact'];

export default function Footer() {
    const year = new Date().getFullYear();

    const scrollTo = (id) => {
        document.querySelector(`#${id.toLowerCase()}`)?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <footer className="bg-[#07060e] border-t border-slate-800/60 py-12 px-6" aria-label="Footer">
            <div className="max-w-5xl mx-auto">
                <div className="grid sm:grid-cols-3 gap-10 mb-10">
                    {/* Brand */}
                    <div>
                        <p className="text-2xl font-black gradient-text mb-2 font-display">&lt;Srikanth /&gt;</p>
                        <p className="text-slate-500 text-sm leading-relaxed max-w-[220px]">
                            CS Engineering Graduate · Python · Full Stack Developer
                        </p>
                        <div className="flex gap-3 mt-4">
                            {[
                                { icon: <Github size={17} />, href: personalInfo.github, label: 'GitHub' },
                                { icon: <Linkedin size={17} />, href: personalInfo.linkedin, label: 'LinkedIn' },
                                { icon: <Mail size={17} />, href: `mailto:${personalInfo.email}`, label: 'Email' },
                            ].map((item) => (
                                <a
                                    key={item.label}
                                    href={item.href}
                                    aria-label={item.label}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-9 h-9 glass rounded-full flex items-center justify-center text-slate-400 hover:text-orange-400 hover:border-orange-400/40 transition-all duration-200"
                                >
                                    {item.icon}
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Navigation */}
                    <div>
                        <p className="text-white font-semibold text-sm uppercase tracking-wider mb-4 font-display">Navigation</p>
                        <ul className="space-y-2">
                            {navLinks.map((link) => (
                                <li key={link}>
                                    <button
                                        onClick={() => scrollTo(link)}
                                        className="text-slate-500 hover:text-orange-400 text-sm transition-colors font-medium"
                                    >
                                        {link}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact quick links */}
                    <div>
                        <p className="text-white font-semibold text-sm uppercase tracking-wider mb-4 font-display">Contact</p>
                        <ul className="space-y-2 text-sm text-slate-500 font-mono">
                            <li>
                                <a href={`mailto:${personalInfo.email}`} className="hover:text-orange-400 transition-colors break-all">
                                    {personalInfo.email}
                                </a>
                            </li>
                            <li>
                                <a href={`tel:${personalInfo.phone}`} className="hover:text-orange-400 transition-colors">
                                    {personalInfo.phone}
                                </a>
                            </li>
                            <li className="text-slate-600">Karnataka, India</li>
                        </ul>
                    </div>
                </div>

                {/* Divider */}
                <div className="border-t border-slate-800/60 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-600">
                    <p className="font-mono">© {year} Srikanth M. All rights reserved.</p>
                    <p className="flex items-center gap-1 font-mono">
                        Built with <Heart size={12} className="text-rose-500 fill-rose-500" /> using React, Tailwind & Framer Motion
                    </p>
                </div>
            </div>
        </footer>
    );
}
