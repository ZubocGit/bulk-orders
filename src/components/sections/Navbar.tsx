import React, { useState, useEffect } from "react";
import { Button } from "../ui/Button";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? "bg-white/80 backdrop-blur-md shadow-sm py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            window.history.back();
          }}
        >
          <img
            src="assets/Icons/zuboc_logo.svg"
            alt="Zuboc Logo"
            className="h-8 text-2xl font-heading font-bold tracking-tighter text-zuboc-plum cursor-pointer"
          />
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {["Works", "Bulk Order", "FAQ"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase().replace(" ", "-")}`}
              className="text-sm font-medium text-zuboc-neutral-text hover:text-zuboc-mutedGold transition-colors"
            >
              {item}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
