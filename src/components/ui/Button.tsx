import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
    children: React.ReactNode;
}

export function Button({ variant = 'primary', className = '', children, ...props }: ButtonProps) {
    const baseStyles = 'inline-flex items-center justify-center rounded-pill px-6 py-3 font-heading font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-zuboc-mutedGold focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed hover:-translate-y-[1px]';

    const variants = {
        primary: 'bg-zuboc-neutral-text text-white hover:shadow-lg',
        secondary: 'bg-zuboc-mutedGold text-white hover:bg-opacity-90 hover:shadow-md',
        outline: 'border-2 border-zuboc-mutedGold text-zuboc-neutral-text hover:bg-zuboc-creamyYellow hover:bg-opacity-20',
        ghost: 'text-zuboc-neutral-text hover:bg-zuboc-pastelBlue hover:bg-opacity-10',
    };

    return (
        <button className={`${baseStyles} ${variants[variant]} ${className}`} {...props}>
            {children}
        </button>
    );
}
