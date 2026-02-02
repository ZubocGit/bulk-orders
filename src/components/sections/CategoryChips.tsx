import React from 'react';

const CATEGORIES = [
    "Envelopes", "Inserts", "Wax Stamps", "Wax Seals", "Ribbons", "Mugs", "Photo Frames", "Gift Boxes"
];

export function CategoryChips() {
    return (
        <section className="py-8 bg-white border-b border-zuboc-neutral-border/40">
            <div className="container mx-auto px-4">
                {/* Mobile Horizontal Scroll / Desktop Gridish */}
                <div className="flex overflow-x-auto pb-4 md:pb-0 gap-3 md:justify-center no-scrollbar items-center">
                    {CATEGORIES.map((cat, idx) => (
                        <button
                            key={idx}
                            className="flex-shrink-0 px-6 py-2 rounded-full border border-zuboc-neutral-border text-zuboc-neutral-text font-medium text-sm hover:border-zuboc-mutedGold hover:text-zuboc-mutedGold hover:bg-zuboc-creamyYellow/30 transition-all cursor-pointer whitespace-nowrap"
                        >
                            {cat}
                        </button>
                    ))}
                </div>
            </div>
        </section>
    );
}
