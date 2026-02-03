import React from "react";
import { Button } from "../ui/Button";
import { ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-zuboc-creamyYellow/40 via-white to-white" />
      <div className="absolute top-0 left-0 -z-10 w-full h-full bg-[radial-gradient(circle_at_bottom_left,_var(--tw-gradient-stops))] from-zuboc-pastelBlue/20 to-transparent" />

      <div className="container mx-auto px-4 md:px-6 text-center">
        <span className="inline-block py-1 px-3 mb-6 text-xs font-semibold tracking-wider uppercase text-zuboc-mutedGold border border-zuboc-mutedGold/30 rounded-full bg-zuboc-mutedGold/5">
          Premium Bulk Service
        </span>

        <h1 className="text-4xl md:text-5xl lg:text-7xl font-heading font-bold text-zuboc-neutral-text mb-6 tracking-tight flex flex-col items-center">
          <span>B2B &</span>

          <span
            className="
    inline-block italic
    leading-[1.15]
    pb-[0.1em] pr-[0.12em]
   
    overflow-visible
  "
          >
            Bulk Orders
          </span>
        </h1>

        <p className="max-w-2xl mx-auto text-lg md:text-xl text-zuboc-neutral-muted mb-10 leading-relaxed">
          Designed for brands, planners, and growing businesses, Zuboc offers
          refined bulk creations crafted with precision and artistic detail.
          From corporate gifting to large-scale events, we partner with you to
          deliver pieces that reflect your identity with elegance and
          consistency.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button
            onClick={() => {
              document
                .getElementById("bulk-order")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
            variant="outline"
            className="w-full sm:w-auto text-lg px-8 py-4 group"
          >
            for enquiry
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>
        </div>
      </div>
    </section>
  );
}
