import React, { useRef, useEffect } from 'react';
import { motion, useInView, useAnimation, Variants } from 'framer-motion';

interface SplitTextProps {
    text: string;
    className?: string;
    delay?: number;
    duration?: number;
    stagger?: number;
    once?: boolean;
}

export const SplitText: React.FC<SplitTextProps> = ({
    text,
    className = '',
    delay = 0,
    duration = 0.5,
    stagger = 0.03,
    once = true,
}) => {
    const ref = useRef<HTMLSpanElement>(null);
    const isInView = useInView(ref, { once });
    const controls = useAnimation();

    useEffect(() => {
        if (isInView) {
            controls.start('visible');
        }
    }, [isInView, controls]);

    const characters = text.split('');

    const containerVariants: Variants = {
        hidden: {},
        visible: {
            transition: {
                staggerChildren: stagger,
                delayChildren: delay,
            },
        },
    };

    const charVariants: Variants = {
        hidden: {
            opacity: 0,
            y: 50,
            rotateX: -90,
        },
        visible: {
            opacity: 1,
            y: 0,
            rotateX: 0,
            transition: {
                duration,
                ease: [0.215, 0.61, 0.355, 1],
            },
        },
    };

    return (
        <motion.span
            ref={ref}
            className={`inline-block ${className}`}
            variants={containerVariants}
            initial="hidden"
            animate={controls}
            aria-label={text}
        >
            {characters.map((char, index) => (
                <motion.span
                    key={index}
                    className="inline-block"
                    variants={charVariants}
                    style={{
                        transformOrigin: 'bottom',
                        whiteSpace: char === ' ' ? 'pre' : 'normal',
                    }}
                >
                    {char === ' ' ? '\u00A0' : char}
                </motion.span>
            ))}
        </motion.span>
    );
};
