import React from "react";
import { Navbar } from "./components/sections/Navbar";
import { Hero } from "./components/sections/Hero";
import { CategoryChips } from "./components/sections/CategoryChips";
import { WorkShowcase } from "./components/sections/WorkShowcase";
import { OrderBuilder } from "./components/sections/OrderBuilder";
import { TrustStrip } from "./components/sections/TrustStrip";
import { FAQ } from "./components/sections/FAQ";
import { Footer } from "./components/sections/Footer";
import { WhatsAppFAB } from "./components/ui/WhatsAppFAB";

function App() {
  return (
    <div className="min-h-screen bg-zuboc-neutral-bg font-body selection:bg-zuboc-mutedGold selection:text-white">
      <Navbar />
      <main>
        <Hero />
        {/* <CategoryChips /> */}
        <WorkShowcase />
        <OrderBuilder />
        <TrustStrip />
        <FAQ />
      </main>
      <Footer />
      <WhatsAppFAB />
    </div>
  );
}

export default App;
