import React from 'react';

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'white' | 'sand' | 'dark' | 'outline';
  hoverEffect?: boolean;
}

export const Card: React.FC<CardProps> = ({
  children,
  variant = 'white',
  hoverEffect = false,
  className = '',
  ...props
}) => {
  const variantStyles = {
    white: 'bg-white border border-[#171717]/10 text-[#171717] shadow-xs',
    sand: 'bg-[#f1eee7] border border-[#171717]/10 text-[#171717]',
    dark: 'bg-[#171717] border border-[#262626] text-white shadow-sm',
    outline: 'bg-transparent border border-[#171717]/15 text-[#171717]',
  };

  const hoverStyle = hoverEffect
    ? 'transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md hover:border-[#171717]'
    : '';

  return (
    <div
      className={`p-6 sm:p-8 rounded-2xl ${variantStyles[variant]} ${hoverStyle} ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};
