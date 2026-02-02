import React from 'react';

interface SectionHeaderProps {
    title: string;
    subtitle?: string;
    centered?: boolean;
}

export function SectionHeader({ title, subtitle, centered = true }: SectionHeaderProps) {
    return (
        <div className={`mb-12 ${centered ? 'text-center' : ''}`}>
            <h2 className="text-3xl md:text-4xl font-heading font-semibold text-zuboc-neutral-text mb-4 tracking-tight-heading">
                {title}
            </h2>
            {subtitle && (
                <p className="max-w-2xl mx-auto text-lg text-zuboc-neutral-muted">
                    {subtitle}
                </p>
            )}
        </div>
    );
}
