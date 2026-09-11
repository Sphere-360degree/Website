import React from 'react';

interface BrandLogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  isLight?: boolean;
  withText?: boolean;
}

export const BrandLogo: React.FC<BrandLogoProps> = ({
  className = '',
  size = 'md',
  isLight = false,
  withText = true,
}) => {
  const iconSizes = {
    sm: 'w-6 h-6',
    md: 'w-7 h-7',
    lg: 'w-9 h-9',
  };

  const textSizes = {
    sm: 'text-base',
    md: 'text-lg',
    lg: 'text-xl',
  };

  return (
    <div className={`inline-flex items-center gap-2.5 select-none ${className}`}>
      {/* Abstract Architectural Sphere & Connection Mark */}
      <div className={`relative flex items-center justify-center ${iconSizes[size]}`}>
        <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
          {/* Outer Balanced Coordinate Ring */}
          <circle
            cx="16"
            cy="16"
            r="14"
            stroke={isLight ? '#f1eee7' : '#171717'}
            strokeWidth="1.2"
          />
          {/* System Coordinate Intersect */}
          <path
            d="M5 16C5 16 10 9 16 9C22 9 27 16 27 16C27 16 22 23 16 23C10 23 5 16 5 16Z"
            stroke={isLight ? '#9ca3af' : '#737373'}
            strokeWidth="1"
            strokeDasharray="2 2"
          />
          {/* Focal Node */}
          <circle
            cx="16"
            cy="16"
            r="3.5"
            fill={isLight ? '#ea580c' : '#c2410c'}
          />
          <circle
            cx="24"
            cy="12"
            r="1.5"
            fill={isLight ? '#f1eee7' : '#171717'}
          />
        </svg>
      </div>

      {withText && (
        <span
          className={`font-extrabold tracking-tight font-sans ${textSizes[size]} ${
            isLight ? 'text-[#f8f7f4]' : 'text-[#171717]'
          }`}
        >
          Spheroinix
        </span>
      )}
    </div>
  );
};
