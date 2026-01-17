import React, { useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface Spark {
    id: number;
    x: number;
    y: number;
    angle: number;
    size: number;
}

interface ClickSparkProps {
    children: React.ReactNode;
    sparkColor?: string;
    sparkCount?: number;
    sparkSize?: number;
    duration?: number;
}

export const ClickSpark: React.FC<ClickSparkProps> = ({
    children,
    sparkColor = '#f97316',
    sparkCount = 8,
    sparkSize = 10,
    duration = 0.6,
}) => {
    const [sparks, setSparks] = useState<Spark[]>([]);

    const handleClick = useCallback((e: React.MouseEvent) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const newSparks: Spark[] = Array.from({ length: sparkCount }, (_, i) => ({
            id: Date.now() + i,
            x,
            y,
            angle: (360 / sparkCount) * i,
            size: sparkSize * (0.5 + Math.random() * 0.5),
        }));

        setSparks((prev) => [...prev, ...newSparks]);

        setTimeout(() => {
            setSparks((prev) => prev.filter((spark) => !newSparks.includes(spark)));
        }, duration * 1000);
    }, [sparkCount, sparkSize, duration]);

    return (
        <div className="relative inline-block" onClick={handleClick}>
            {children}
            <AnimatePresence>
                {sparks.map((spark) => (
                    <motion.div
                        key={spark.id}
                        className="absolute pointer-events-none"
                        initial={{
                            x: spark.x,
                            y: spark.y,
                            scale: 1,
                            opacity: 1,
                        }}
                        animate={{
                            x: spark.x + Math.cos((spark.angle * Math.PI) / 180) * 50,
                            y: spark.y + Math.sin((spark.angle * Math.PI) / 180) * 50,
                            scale: 0,
                            opacity: 0,
                        }}
                        exit={{ opacity: 0 }}
                        transition={{
                            duration,
                            ease: 'easeOut',
                        }}
                        style={{
                            width: spark.size,
                            height: spark.size,
                            borderRadius: '50%',
                            backgroundColor: sparkColor,
                            boxShadow: `0 0 ${spark.size}px ${sparkColor}`,
                        }}
                    />
                ))}
            </AnimatePresence>
        </div>
    );
};
