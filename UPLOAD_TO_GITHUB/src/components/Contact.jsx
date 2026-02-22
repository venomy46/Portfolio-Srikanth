import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { personalInfo } from '../data/portfolioData';
import { Mail, Phone, Github, Linkedin, Send, MapPin, Loader2, CheckCircle2, AlertCircle } from 'lucide-react';

// ─── EmailJS config ────────────────────────────────────────────
// Replace these three values with your own from emailjs.com
const EJS_SERVICE_ID = 'service_5ppcj6b';   // e.g. 'service_abc123'
const EJS_TEMPLATE_ID = 'template_oeikvqj';  // e.g. 'template_xyz789'
const EJS_PUBLIC_KEY = 's6v5BpoI9Lq35wFj9';   // e.g. 'aBcDeFgHiJkLmNoPq'
// ───────────────────────────────────────────────────────────────

const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: (i = 0) => ({
        opacity: 1, y: 0,
        transition: { duration: 0.55, delay: i * 0.1, ease: 'easeOut' },
    }),
};

const contactItems = [
    { icon: <Mail size={20} className="text-orange-400" />, label: 'Email', value: personalInfo.email, href: `mailto:${personalInfo.email}` },
    { icon: <Phone size={20} className="text-pink-400" />, label: 'Phone', value: personalInfo.phone, href: `tel:${personalInfo.phone}` },
    { icon: <Github size={20} className="text-violet-400" />, label: 'GitHub', value: 'github.com/srikanth-m', href: personalInfo.github },
    { icon: <Linkedin size={20} className="text-orange-400" />, label: 'LinkedIn', value: 'linkedin.com/in/srikanth-m', href: personalInfo.linkedin },
    { icon: <MapPin size={20} className="text-pink-400" />, label: 'Location', value: 'Karnataka, India', href: null },
];

export default function Contact() {
    const formRef = useRef(null);
    const [form, setForm] = useState({ name: '', email: '', message: '' });
    const [status, setStatus] = useState('idle'); // 'idle' | 'sending' | 'success' | 'error'
    const [errMsg, setErrMsg] = useState('');

    const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (status === 'sending') return;
        setStatus('sending');
        setErrMsg('');

        try {
            await emailjs.send(
                EJS_SERVICE_ID,
                EJS_TEMPLATE_ID,
                {
                    to_email: personalInfo.email,   // recipient — your Gmail
                    from_name: form.name,
                    from_email: form.email,
                    reply_to: form.email,
                    message: form.message,
                    // legacy field names some templates use
                    name: form.name,
                    email: form.email,
                },
                { publicKey: EJS_PUBLIC_KEY }
            );
            setStatus('success');
            setForm({ name: '', email: '', message: '' });
            setTimeout(() => setStatus('idle'), 5000);
        } catch (err) {
            console.error('EmailJS error:', err);
            setErrMsg(err?.text || 'Something went wrong. Please try again.');
            setStatus('error');
            setTimeout(() => setStatus('idle'), 5000);
        }
    };

    const inputCls = `mt-1.5 w-full bg-slate-900/60 border border-slate-700/60 rounded-xl px-4 py-3
        text-slate-200 text-sm placeholder-slate-600 transition-all
        focus:outline-none focus:border-orange-500/50 focus:ring-1 focus:ring-orange-500/20`;

    const labelCls = 'text-xs text-slate-500 uppercase tracking-wider font-mono';

    return (
        <section
            id="contact"
            className="section-padding dot-pattern"
            style={{ background: '#07060e' }}
            aria-label="Contact section"
        >
            <div className="max-w-5xl mx-auto">
                {/* Header */}
                <motion.div
                    variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
                    className="text-center mb-14"
                >
                    <p className="font-mono text-xs tracking-[0.3em] uppercase font-semibold mb-2"
                        style={{ color: '#f97316' }}>Let's connect</p>
                    <h2 className="text-3xl sm:text-4xl font-bold text-white" style={{ fontFamily: 'Sora, sans-serif', letterSpacing: '-0.02em' }}>
                        Get In <span className="gradient-text">Touch</span>
                    </h2>
                    <div className="mt-3 mx-auto w-16 h-0.5 rounded-full"
                        style={{ background: 'linear-gradient(to right, #f97316, #a855f7)' }} />
                    <p className="mt-4 text-slate-400 max-w-md mx-auto text-sm leading-relaxed">
                        Open to internships, entry-level roles, and collaboration opportunities.
                        Let's build something great!
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-10">
                    {/* Contact info */}
                    <motion.div
                        variants={fadeUp} initial="hidden" whileInView="visible"
                        viewport={{ once: true }} custom={0}
                        className="space-y-4"
                    >
                        <h3 className="text-white font-semibold text-lg mb-6">Contact Information</h3>
                        {contactItems.map((item) => (
                            <div key={item.label}
                                className="glass rounded-xl p-4 flex items-center gap-4 transition-all duration-200 hover:border-orange-500/25"
                            >
                                <div className="p-2 rounded-lg" style={{ background: 'rgba(249,115,22,0.07)' }}>
                                    {item.icon}
                                </div>
                                <div>
                                    <p className="text-slate-500 text-xs">{item.label}</p>
                                    {item.href ? (
                                        <a href={item.href}
                                            target={item.href.startsWith('http') ? '_blank' : undefined}
                                            rel="noopener noreferrer"
                                            className="text-slate-200 text-sm font-medium hover:text-orange-400 transition-colors"
                                        >
                                            {item.value}
                                        </a>
                                    ) : (
                                        <span className="text-slate-200 text-sm font-medium">{item.value}</span>
                                    )}
                                </div>
                            </div>
                        ))}
                    </motion.div>

                    {/* Contact form */}
                    <motion.div
                        variants={fadeUp} initial="hidden" whileInView="visible"
                        viewport={{ once: true }} custom={1}
                    >
                        <h3 className="text-white font-semibold text-lg mb-6">Send a Message</h3>
                        <form ref={formRef} onSubmit={handleSubmit} className="glass rounded-2xl p-7 space-y-5">

                            <div>
                                <label htmlFor="name" className={labelCls}>Name</label>
                                <input id="name" name="name" type="text" required
                                    value={form.name} onChange={handleChange}
                                    placeholder="Your Name" className={inputCls} />
                            </div>

                            <div>
                                <label htmlFor="email" className={labelCls}>Email</label>
                                <input id="email" name="email" type="email" required
                                    value={form.email} onChange={handleChange}
                                    placeholder="your.email@example.com" className={inputCls} />
                            </div>

                            <div>
                                <label htmlFor="message" className={labelCls}>Message</label>
                                <textarea id="message" name="message" required rows={4}
                                    value={form.message} onChange={handleChange}
                                    placeholder="Tell me about the opportunity or project..."
                                    className={`${inputCls} resize-none`} />
                            </div>

                            {/* Status messages */}
                            {status === 'success' && (
                                <div className="flex items-center gap-2 text-emerald-400 text-sm px-1">
                                    <CheckCircle2 size={16} /> Message sent! I'll get back to you soon.
                                </div>
                            )}
                            {status === 'error' && (
                                <div className="flex items-start gap-2 text-rose-400 text-sm px-1">
                                    <AlertCircle size={16} className="mt-0.5 shrink-0" />
                                    <span>{errMsg || 'Failed to send. Please try again.'}</span>
                                </div>
                            )}

                            <motion.button
                                whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.97 }}
                                type="submit"
                                disabled={status === 'sending'}
                                className="w-full py-3.5 font-bold rounded-xl flex items-center justify-center gap-2 transition-all duration-200 text-white text-sm tracking-wide disabled:opacity-60"
                                style={{
                                    background: status === 'success'
                                        ? 'linear-gradient(135deg, #10b981, #059669)'
                                        : 'linear-gradient(135deg, #f97316, #ec4899, #a855f7)',
                                    boxShadow: '0 0 24px rgba(236,72,153,0.35)',
                                }}
                            >
                                {status === 'sending' && <Loader2 size={16} className="animate-spin" />}
                                {status === 'success' && <CheckCircle2 size={16} />}
                                {status === 'idle' && <Send size={16} />}
                                {status === 'error' && <Send size={16} />}
                                {status === 'sending' ? 'Sending…' : status === 'success' ? 'Sent!' : 'Send Message'}
                            </motion.button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
