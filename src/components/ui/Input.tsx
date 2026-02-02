import React from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label?: string;
    error?: string;
}

export function Input({ label, error, className = '', ...props }: InputProps) {
    return (
        <div className="w-full">
            {label && (
                <label className="block text-sm font-medium text-zuboc-neutral-muted mb-1">
                    {label}
                </label>
            )}
            <input
                className={`w-full rounded-md border border-zuboc-neutral-border px-4 py-2 font-body text-zuboc-neutral-text placeholder:text-gray-400 focus:border-zuboc-mutedGold focus:outline-none focus:ring-1 focus:ring-zuboc-mutedGold transition-all duration-200 ${className}`}
                {...props}
            />
            {error && <p className="mt-1 text-xs text-red-500">{error}</p>}
        </div>
    );
}
