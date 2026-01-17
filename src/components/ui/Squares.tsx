import React, { useEffect, useRef } from 'react';

interface SquaresProps {
    color?: string;
    size?: number;
    speed?: number;
    squareCount?: number;
    className?: string;
}

export const Squares: React.FC<SquaresProps> = ({
    color = 'rgba(255, 255, 255, 0.1)',
    size = 40,
    speed = 0.5,
    squareCount = 20,
    className = '',
}) => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const animationRef = useRef<number>();
    const squaresRef = useRef<Array<{
        x: number;
        y: number;
        size: number;
        speedX: number;
        speedY: number;
        rotation: number;
        rotationSpeed: number;
        opacity: number;
    }>>([]);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        const resizeCanvas = () => {
            canvas.width = canvas.offsetWidth;
            canvas.height = canvas.offsetHeight;
            initSquares();
        };

        const initSquares = () => {
            squaresRef.current = Array.from({ length: squareCount }, () => ({
                x: Math.random() * canvas.width,
                y: Math.random() * canvas.height,
                size: size * (0.5 + Math.random() * 0.5),
                speedX: (Math.random() - 0.5) * speed,
                speedY: (Math.random() - 0.5) * speed,
                rotation: Math.random() * Math.PI * 2,
                rotationSpeed: (Math.random() - 0.5) * 0.02 * speed,
                opacity: 0.3 + Math.random() * 0.4,
            }));
        };

        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            squaresRef.current.forEach((square) => {
                ctx.save();
                ctx.translate(square.x, square.y);
                ctx.rotate(square.rotation);
                ctx.globalAlpha = square.opacity;
                ctx.strokeStyle = color;
                ctx.lineWidth = 1;
                ctx.strokeRect(-square.size / 2, -square.size / 2, square.size, square.size);
                ctx.restore();

                // Update position
                square.x += square.speedX;
                square.y += square.speedY;
                square.rotation += square.rotationSpeed;

                // Wrap around edges
                if (square.x < -square.size) square.x = canvas.width + square.size;
                if (square.x > canvas.width + square.size) square.x = -square.size;
                if (square.y < -square.size) square.y = canvas.height + square.size;
                if (square.y > canvas.height + square.size) square.y = -square.size;
            });

            animationRef.current = requestAnimationFrame(animate);
        };

        resizeCanvas();
        window.addEventListener('resize', resizeCanvas);
        animationRef.current = requestAnimationFrame(animate);

        return () => {
            window.removeEventListener('resize', resizeCanvas);
            if (animationRef.current) {
                cancelAnimationFrame(animationRef.current);
            }
        };
    }, [color, size, speed, squareCount]);

    return (
        <canvas
            ref={canvasRef}
            className={`absolute inset-0 w-full h-full pointer-events-none ${className}`}
        />
    );
};
