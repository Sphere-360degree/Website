import React from 'react';

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: 'terracotta' | 'dark' | 'sand' | 'success';
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = 'terracotta',
  className = '',
  ...props
}) => {
  const variantStyles = {
    terracotta: 'bg-orange-500/10 text-[#c2410c] border border-orange-500/20',
    dark: 'bg-[#171717] text-white border border-[#171717]',
    sand: 'bg-[#f1eee7] text-[#171717] border border-[#171717]/10',
    success: 'bg-emerald-500/10 text-emerald-700 border border-emerald-500/20',
  };

  return (
    <span
      className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-md font-mono text-[10px] sm:text-xs font-semibold uppercase tracking-wider ${variantStyles[variant]} ${className}`}
      {...props}
    >
      {children}
    </span>
  );
};
