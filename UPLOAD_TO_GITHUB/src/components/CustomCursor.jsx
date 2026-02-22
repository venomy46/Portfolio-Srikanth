import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export default function CustomCursor() {
    const [hovered, setHovered] = useState(false);
    const [clicked, setClicked] = useState(false);
    const [hidden, setHidden] = useState(false);

    // Raw mouse position
    const mouseX = useMotionValue(-100);
    const mouseY = useMotionValue(-100);

    // Spring-lagged ring
    const ringX = useSpring(mouseX, { damping: 22, stiffness: 280, mass: 0.5 });
    const ringY = useSpring(mouseY, { damping: 22, stiffness: 280, mass: 0.5 });

    // Slow outer aura
    const auraX = useSpring(mouseX, { damping: 30, stiffness: 120, mass: 0.8 });
    const auraY = useSpring(mouseY, { damping: 30, stiffness: 120, mass: 0.8 });

    useEffect(() => {
        // Skip on touch devices
        if (window.matchMedia('(pointer: coarse)').matches) return;

        const move = (e) => { mouseX.set(e.clientX); mouseY.set(e.clientY); };
        const down = () => setClicked(true);
        const up = () => setClicked(false);
        const show = () => setHidden(false);
        const hide = () => setHidden(true);

        window.addEventListener('mousemove', move);
        window.addEventListener('mousedown', down);
        window.addEventListener('mouseup', up);
        document.addEventListener('mouseenter', show);
        document.addEventListener('mouseleave', hide);

        // Attach hover detector to interactive elements
        const attachHover = () => {
            document.querySelectorAll('a, button, input, textarea, [role="button"]').forEach((el) => {
                el.addEventListener('mouseenter', () => setHovered(true));
                el.addEventListener('mouseleave', () => setHovered(false));
            });
        };
        const t = setTimeout(attachHover, 600);

        return () => {
            window.removeEventListener('mousemove', move);
            window.removeEventListener('mousedown', down);
            window.removeEventListener('mouseup', up);
            document.removeEventListener('mouseenter', show);
            document.removeEventListener('mouseleave', hide);
            clearTimeout(t);
        };
    }, [mouseX, mouseY]);

    // Don't render on touch
    if (typeof window !== 'undefined' && window.matchMedia('(pointer: coarse)').matches) {
        return null;
    }

    const dotColor = clicked ? '#f472b6' : hovered ? '#ec4899' : '#f97316';
    const ringColor = clicked ? '#f472b6' : hovered ? '#ec4899' : '#f97316';
    const dotShadow = `0 0 10px ${dotColor}cc`;

    return (
        <>
            {/* Outer glow aura */}
            <motion.div
                className="fixed top-0 left-0 pointer-events-none z-[9996] rounded-full"
                style={{
                    x: auraX,
                    y: auraY,
                    translateX: '-50%',
                    translateY: '-50%',
                    width: 44,
                    height: 44,
                    background: hovered
                        ? 'radial-gradient(circle, rgba(236,72,153,0.3) 0%, transparent 70%)'
                        : 'radial-gradient(circle, rgba(249,115,22,0.18) 0%, transparent 70%)',
                }}
                animate={{ opacity: hidden ? 0 : hovered ? 1 : 0.5, scale: hovered ? 1.8 : clicked ? 0.7 : 1 }}
                transition={{ scale: { type: 'spring', stiffness: 200, damping: 18 } }}
            />

            {/* Ring */}
            <motion.div
                className="fixed top-0 left-0 pointer-events-none z-[9997] rounded-full"
                style={{
                    x: ringX,
                    y: ringY,
                    translateX: '-50%',
                    translateY: '-50%',
                    width: 20,
                    height: 20,
                    border: `1.5px solid ${ringColor}`,
                    mixBlendMode: 'screen',
                }}
                animate={{
                    opacity: hidden ? 0 : 1,
                    scale: hovered ? 1.9 : clicked ? 0.6 : 1,
                    borderColor: ringColor,
                }}
                transition={{ scale: { type: 'spring', stiffness: 300, damping: 20 } }}
            />

            {/* Inner dot */}
            <motion.div
                className="fixed top-0 left-0 pointer-events-none z-[9998] rounded-full"
                style={{
                    x: mouseX,
                    y: mouseY,
                    translateX: '-50%',
                    translateY: '-50%',
                    width: 5,
                    height: 5,
                    backgroundColor: dotColor,
                    boxShadow: dotShadow,
                }}
                animate={{
                    opacity: hidden ? 0 : 1,
                    scale: hovered ? 0 : clicked ? 0.4 : 1,
                    backgroundColor: dotColor,
                }}
                transition={{ scale: { type: 'spring', stiffness: 600, damping: 28 } }}
            />
        </>
    );
}
