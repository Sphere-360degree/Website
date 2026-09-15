import React from 'react';

interface BrandLogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  isLight?: boolean;
  withText?: boolean;
  stacked?: boolean;
}

export const BrandLogo: React.FC<BrandLogoProps> = ({
  className = '',
  size = 'md',
  isLight = false,
  withText = true,
  stacked = false,
}) => {
  const iconSizes = {
    sm: 'w-6 h-6',
    md: 'w-8 h-8',
    lg: 'w-10 h-10',
    xl: 'w-14 h-14',
  };

  const textSizes = {
    sm: 'text-sm tracking-tight',
    md: 'text-base tracking-tight',
    lg: 'text-lg tracking-tight',
    xl: 'text-2xl tracking-tight',
  };

  return (
    <div
      className={`inline-flex ${
        stacked ? 'flex-col items-center text-center gap-2' : 'items-center gap-3'
      } select-none ${className}`}
    >
      {/* 
        SPHERIONIX CUSTOM EMBLEM:
        - Geometric precision sphere
        - Dual orbital system lines (Processes & Automation intersecting)
        - Intelligent central nucleus (Terracotta Ochre)
        - Precision alignment satellite nodes
      */}
      <div className={`relative flex items-center justify-center shrink-0 ${iconSizes[size]}`}>
        <svg
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full transition-transform duration-300 hover:scale-105"
        >
          {/* Outer Boundary Orbit Ring */}
          <circle
            cx="20"
            cy="20"
            r="18"
            stroke={isLight ? '#f1eee7' : '#171717'}
            strokeWidth="1.25"
            strokeOpacity={isLight ? '0.25' : '0.2'}
          />

          {/* Dynamic Elliptical Process Orbit 1 (Tilted -30deg) */}
          <ellipse
            cx="20"
            cy="20"
            rx="18"
            ry="7.5"
            transform="rotate(-30 20 20)"
            stroke={isLight ? '#f8f7f4' : '#171717'}
            strokeWidth="1.3"
          />

          {/* Dynamic Elliptical Process Orbit 2 (Tilted +30deg dashed for depth) */}
          <ellipse
            cx="20"
            cy="20"
            rx="18"
            ry="7.5"
            transform="rotate(30 20 20)"
            stroke={isLight ? '#9ca3af' : '#737373'}
            strokeWidth="1"
            strokeDasharray="3 2"
          />

          {/* Core Equilibrium Sphere (Inner System) */}
          <circle
            cx="20"
            cy="20"
            r="8.5"
            fill={isLight ? '#1f1f1f' : '#f1eee7'}
            stroke={isLight ? '#404040' : '#d4cfc4'}
            strokeWidth="1"
          />

          {/* Central Intelligent Core (Signature Terracotta Ochre) */}
          <circle
            cx="20"
            cy="20"
            r="4"
            fill={isLight ? '#ea580c' : '#c2410c'}
          />

          {/* Satellite Node Alpha (Orbit Trajectory Point) */}
          <circle
            cx="33"
            cy="12.5"
            r="2"
            fill={isLight ? '#ea580c' : '#c2410c'}
          />

          {/* Satellite Node Beta (Equilibrium Counter-weight) */}
          <circle
            cx="7"
            cy="27.5"
            r="1.5"
            fill={isLight ? '#f8f7f4' : '#171717'}
          />
        </svg>
      </div>

      {withText && (
        <div className="flex flex-col">
          <span
            className={`font-extrabold uppercase font-sans leading-none ${textSizes[size]} ${
              isLight ? 'text-[#f8f7f4]' : 'text-[#171717]'
            }`}
          >
            Spherionix
          </span>
          <span
            className={`text-[9px] font-mono tracking-[0.18em] uppercase mt-1 ${
              isLight ? 'text-[#a3a3a3]' : 'text-[#737373]'
            }`}
          >
            Consulting
          </span>
        </div>
      )}
    </div>
  );
};
