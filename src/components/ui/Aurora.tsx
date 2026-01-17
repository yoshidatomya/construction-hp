import React from 'react';

interface AuroraProps {
  colorStops?: string[];
  blend?: number;
  amplitude?: number;
  speed?: number;
}

export const Aurora: React.FC<AuroraProps> = ({
  colorStops = ['#f97316', '#3b82f6', '#8b5cf6'],
  blend = 0.5,
  amplitude = 1.0,
  speed = 0.5,
}) => {
  return (
    <div className="aurora-container absolute inset-0 overflow-hidden pointer-events-none">
      <svg className="absolute w-full h-full" preserveAspectRatio="none">
        <defs>
          <filter id="aurora-blur">
            <feGaussianBlur in="SourceGraphic" stdDeviation="60" />
          </filter>
          <linearGradient id="aurora-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            {colorStops.map((color, index) => (
              <stop
                key={index}
                offset={`${(index / (colorStops.length - 1)) * 100}%`}
                stopColor={color}
                stopOpacity={blend}
              />
            ))}
          </linearGradient>
        </defs>
      </svg>
      <div 
        className="aurora-layer absolute inset-0"
        style={{
          background: `
            radial-gradient(ellipse 80% 50% at 20% 40%, ${colorStops[0]}40, transparent),
            radial-gradient(ellipse 60% 40% at 80% 60%, ${colorStops[1]}30, transparent),
            radial-gradient(ellipse 70% 60% at 50% 80%, ${colorStops[2]}35, transparent)
          `,
          animation: `aurora-shift ${15 / speed}s ease-in-out infinite alternate`,
          transform: `scale(${amplitude})`,
        }}
      />
      <div 
        className="aurora-layer-2 absolute inset-0"
        style={{
          background: `
            radial-gradient(ellipse 50% 80% at 70% 30%, ${colorStops[1]}25, transparent),
            radial-gradient(ellipse 40% 60% at 30% 70%, ${colorStops[2]}20, transparent)
          `,
          animation: `aurora-shift ${20 / speed}s ease-in-out infinite alternate-reverse`,
          transform: `scale(${amplitude * 1.2})`,
        }}
      />
      <style>{`
        @keyframes aurora-shift {
          0% {
            transform: translateX(-5%) translateY(-5%) rotate(0deg);
            opacity: 0.6;
          }
          50% {
            opacity: 0.8;
          }
          100% {
            transform: translateX(5%) translateY(5%) rotate(3deg);
            opacity: 0.6;
          }
        }
      `}</style>
    </div>
  );
};
