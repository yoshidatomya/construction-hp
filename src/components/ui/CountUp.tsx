import React, { useRef, useEffect, useState } from 'react';
import { useInView } from 'framer-motion';

interface CountUpProps {
    end: number;
    start?: number;
    duration?: number;
    suffix?: string;
    prefix?: string;
    decimals?: number;
    className?: string;
    once?: boolean;
}

export const CountUp: React.FC<CountUpProps> = ({
    end,
    start = 0,
    duration = 2,
    suffix = '',
    prefix = '',
    decimals = 0,
    className = '',
    once = true,
}) => {
    const ref = useRef<HTMLSpanElement>(null);
    const isInView = useInView(ref, { once });
    const [count, setCount] = useState(start);

    useEffect(() => {
        if (!isInView) return;

        let startTime: number | null = null;
        let animationFrame: number;

        const animate = (timestamp: number) => {
            if (!startTime) startTime = timestamp;
            const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);

            // Easing function (ease-out cubic)
            const easeOutCubic = 1 - Math.pow(1 - progress, 3);
            const current = start + (end - start) * easeOutCubic;

            setCount(current);

            if (progress < 1) {
                animationFrame = requestAnimationFrame(animate);
            }
        };

        animationFrame = requestAnimationFrame(animate);

        return () => {
            if (animationFrame) {
                cancelAnimationFrame(animationFrame);
            }
        };
    }, [isInView, start, end, duration]);

    const formatNumber = (num: number): string => {
        return num.toFixed(decimals);
    };

    return (
        <span ref={ref} className={className}>
            {prefix}
            {formatNumber(count)}
            {suffix}
        </span>
    );
};
