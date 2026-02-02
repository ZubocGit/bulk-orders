import React from 'react';

export function Badge({ children, className = '' }: { children: React.ReactNode, className?: string }) {
    return (
        <span className={`inline-flex items-center rounded-full bg-zuboc-pastelBlue bg-opacity-20 px-3 py-1 text-xs font-medium text-zuboc-teal ${className}`}>
            {children}
        </span>
    );
}
