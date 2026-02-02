import React, { useState } from "react";
import { SectionHeader } from "../ui/SectionHeader";
import { ChevronDown } from "lucide-react";

const FAQS = [
  {
    q: "Will someone assist me during the order process?",
    a: "Absolutely. Our team provides direct human support via WhatsApp and email from design confirmation to final delivery ensuring a smooth and transparent experience.",
  },
  {
    q: "Can I customize the colors and fonts?",
    a: "Yes absolutely. For bulk orders, we offer full customization to match your event theme or brand guidelines.",
  },
  {
    q: "How long does production take?",
    a: "Typical turnaround is 7-14 business days depending on order size and customization level. Rush processing is available.",
  },
  {
    q: "Do you ship internationally?",
    a: "Yes, we ship worldwide via reliable courier partners. Shipping timelines will be shared with your quote.",
  },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-20 bg-white">
      <div className="container mx-auto px-4 max-w-3xl">
        <SectionHeader title="Frequently Asked Questions" centered={true} />

        <div className="space-y-4">
          {FAQS.map((faq, idx) => (
            <div
              key={idx}
              className="border border-zuboc-neutral-border rounded-lg overflow-hidden transition-all duration-300 hover:border-zuboc-mutedGold/50"
            >
              <button
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                className="w-full flex items-center justify-between p-5 text-left bg-white hover:bg-zuboc-neutral-bg transition-colors"
                aria-expanded={openIndex === idx}
              >
                <span className="font-heading font-semibold text-zuboc-neutral-text">
                  {faq.q}
                </span>
                <ChevronDown
                  className={`w-5 h-5 text-zuboc-neutral-muted transition-transform duration-300 ${openIndex === idx ? "rotate-180" : ""}`}
                />
              </button>

              <div
                className={`grid transition-all duration-300 ease-in-out ${openIndex === idx ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}
              >
                <div className="overflow-hidden">
                  <div className="p-5 pt-0 text-zuboc-neutral-muted leading-relaxed border-t border-transparent">
                    {faq.a}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
