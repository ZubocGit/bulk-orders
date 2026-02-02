import React from "react";
import { PackageCheck, RotateCcw, UserCheck, ShieldCheck } from "lucide-react";

const FEATURES = [
  {
    icon: PackageCheck,
    title: "Bulk Shipping Support",
    desc: "Reliable logistics for large orders",
  },
  {
    icon: RotateCcw,
    title: "Quality Guarantee",
    desc: "7-Day returns on defective items",
  },
  {
    icon: UserCheck,
    title: "Human Support",
    desc: "Direct WhatsApp assistance",
  },
  {
    icon: ShieldCheck,
    title: "Secure Payments",
    desc: "100% safe transaction process",
  },
];

export function TrustStrip() {
  return (
    <section className="bg-white py-12 border-y border-zuboc-neutral-border">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {FEATURES.map((feature, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center text-center space-y-3 p-4 rounded-xl hover:bg-zuboc-neutral-bg transition-colors"
            >
              <div className="p-3 bg-zuboc-mutedGold/10 rounded-full text-zuboc-mutedGold">
                <feature.icon className="w-8 h-8" />
              </div>
              <h3 className="font-heading font-semibold text-zuboc-neutral-text">
                {feature.title}
              </h3>
              <p className="text-sm text-zuboc-neutral-muted">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
