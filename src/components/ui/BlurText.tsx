import React, { useRef, useEffect } from 'react';
import { motion, useInView, useAnimation, Variants } from 'framer-motion';

interface BlurTextProps {
    text: string;
    className?: string;
    delay?: number;
    duration?: number;
    once?: boolean;
}

export const BlurText: React.FC<BlurTextProps> = ({
    text,
    className = '',
    delay = 0,
    duration = 0.8,
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

    // For Japanese and other languages without spaces, we split by character if no spaces are found
    const words = text.includes(' ') ? text.split(' ') : text.split('');

    const containerVariants: Variants = {
        hidden: {},
        visible: {
            transition: {
                staggerChildren: 0.1,
                delayChildren: delay,
            },
        },
    };

    const wordVariants: Variants = {
        hidden: {
            opacity: 0,
            filter: 'blur(12px)',
            y: 20,
        },
        visible: {
            opacity: 1,
            filter: 'blur(0px)',
            y: 0,
            transition: {
                duration,
                ease: [0.25, 0.1, 0.25, 1],
            },
        },
    };

    return (
        <motion.span
            ref={ref}
            className={`inline-flex flex-wrap ${className}`}
            variants={containerVariants}
            initial="hidden"
            animate={controls}
            aria-label={text}
        >
            {words.map((word, index) => (
                <motion.span
                    key={index}
                    className="inline-block mr-[0.25em]"
                    variants={wordVariants}
                >
                    {word}
                </motion.span>
            ))}
        </motion.span>
    );
};
