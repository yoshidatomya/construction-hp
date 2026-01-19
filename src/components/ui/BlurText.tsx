import React, { useRef, useEffect } from 'react';
import { motion, useInView, useAnimation, Variants } from 'framer-motion';
import { cn } from '../../utils/cn';

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

    // For Japanese text which has no spaces, split by characters to allow natural wrapping.
    // Otherwise split by spaces for Western languages.
    const isJapanese = /[\u3000-\u303f\u3040-\u309f\u30a0-\u30ff\uff00-\uff9f\u4e00-\u9faf\u3400-\u4dbf]/.test(text);
    const elements = (isJapanese && !text.includes(' ')) ? text.split('') : text.split(' ');

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
            {elements.map((el, index) => (
                <motion.span
                    key={index}
                    className={cn(
                        "inline-block",
                        !isJapanese && "mr-[0.25em]"
                    )}
                    variants={wordVariants}
                >
                    {el === ' ' ? '\u00A0' : el}
                </motion.span>
            ))}
        </motion.span>
    );
};
