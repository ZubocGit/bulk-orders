import React from 'react';

export function Card({ children, className = '' }: { children: React.ReactNode, className?: string }) {
    return (
        <div className={`rounded-xl bg-white border border-zuboc-neutral-border shadow-sm p-6 ${className}`}>
            {children}
        </div>
    );
}
