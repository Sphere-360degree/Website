import React from 'react';

export interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  bg?: 'bone' | 'sand' | 'dark' | 'white';
  withBorder?: boolean;
}

export const Section: React.FC<SectionProps> = ({
  children,
  bg = 'bone',
  withBorder = true,
  className = '',
  id,
  ...props
}) => {
  const bgStyles = {
    bone: 'bg-[#f8f7f4] text-[#171717]',
    sand: 'bg-[#f1eee7] text-[#171717]',
    dark: 'bg-[#171717] text-[#f8f7f4]',
    white: 'bg-white text-[#171717]',
  };

  const borderStyle = withBorder ? 'border-b border-[#171717]/10' : '';

  return (
    <section
      id={id}
      className={`py-20 sm:py-32 ${bgStyles[bg]} ${borderStyle} ${className}`}
      {...props}
    >
      {children}
    </section>
  );
};
