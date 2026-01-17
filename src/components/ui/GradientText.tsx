import React from 'react';
import { motion } from 'framer-motion';

interface GradientTextProps {
    children: React.ReactNode;
    colors?: string[];
    className?: string;
    animated?: boolean;
    animationSpeed?: number;
}

export const GradientText: React.FC<GradientTextProps> = ({
    children,
    colors = ['#f97316', '#3b82f6', '#f97316'],
    className = '',
    animated = true,
    animationSpeed = 3,
}) => {
    const gradientStyle = {
        backgroundImage: `linear-gradient(90deg, ${colors.join(', ')})`,
        backgroundSize: animated ? '200% 100%' : '100% 100%',
        WebkitBackgroundClip: 'text',
        backgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        color: 'transparent',
    };

    if (animated) {
        return (
            <motion.span
                className={`inline-block ${className}`}
                style={gradientStyle}
                animate={{
                    backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                }}
                transition={{
                    duration: animationSpeed,
                    ease: 'linear',
                    repeat: Infinity,
                }}
            >
                {children}
            </motion.span>
        );
    }

    return (
        <span className={`inline-block ${className}`} style={gradientStyle}>
            {children}
        </span>
    );
};
