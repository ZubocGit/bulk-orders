import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

export function Footer() {
  const [openSection, setOpenSection] = useState<string | null>(null);

  const toggleSection = (section: string) => {
    setOpenSection(openSection === section ? null : section);
  };

  return (
    <footer className="bg-[#55434b] text-white pt-16 pb-8 md:py-16 transition-all duration-300">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12 mb-12">
          {/* Logo & About - Always Visible */}
          <div className="col-span-1 md:col-span-2 text-center md:text-left">
            <div className="inline-block relative mb-6">
              <img
                src="assets/Icons/zuboc_logo_white.svg"
                alt="zuboc footer logo"
                className="h-12 md:h-10 mx-auto md:mx-0 object-contain"
              />
              <div className="absolute inset-0 bg-white/20 blur-xl rounded-full opacity-50 -z-10"></div>
            </div>

            <p className="max-w-xs mx-auto md:mx-0 text-white/70 mb-8 md:mb-6 leading-relaxed">
              Elevating invitations and gifting with premium craftsmanship.
              Specialized for weddings and corporate needs.
            </p>
          </div>

          {/* Quick Links - Accordion on Mobile */}
          <div className="border-b border-white/10 md:border-none pb-4 md:pb-0">
            <button
              className="w-full flex items-center justify-between text-left md:cursor-default"
              onClick={() => toggleSection("quickLinks")}
            >
              <h4 className="font-heading font-semibold text-lg color-#dedede">
                Quick Links
              </h4>
              <span className="md:hidden p-2 bg-white/5 rounded-full">
                {openSection === "quickLinks" ? (
                  <ChevronUp size={16} />
                ) : (
                  <ChevronDown size={16} />
                )}
              </span>
            </button>

            <div
              className={`overflow-hidden transition-all duration-300 ease-in-out ${openSection === "quickLinks" ? "max-h-40 opacity-100 mt-4" : "max-h-0 opacity-0 md:max-h-full md:opacity-100 md:mt-4"}`}
            >
              <ul className="space-y-3 text-white/70">
                <li>
                  <a
                    href="#"
                    className="hover:text-white transition-colors hover:translate-x-1 inline-block duration-200"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="#works"
                    className="hover:text-white transition-colors hover:translate-x-1 inline-block duration-200"
                  >
                    Our Work
                  </a>
                </li>
                <li>
                  <a
                    href="#bulk-order"
                    className="hover:text-white transition-colors hover:translate-x-1 inline-block duration-200"
                  >
                    Bulk Order
                  </a>
                </li>
                <li>
                  <a
                    href="#faq"
                    className="hover:text-white transition-colors hover:translate-x-1 inline-block duration-200"
                  >
                    FAQ
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Contact - Accordion on Mobile */}
          <div className="border-b border-white/10 md:border-none pb-4 md:pb-0">
            <button
              className="w-full flex items-center justify-between text-left md:cursor-default"
              onClick={() => toggleSection("contact")}
            >
              <h4 className="font-heading font-semibold text-lg color-#dedede">
                Contact
              </h4>
              <span className="md:hidden p-2 bg-white/5 rounded-full">
                {openSection === "contact" ? (
                  <ChevronUp size={16} />
                ) : (
                  <ChevronDown size={16} />
                )}
              </span>
            </button>

            <div
              className={`overflow-hidden transition-all duration-300 ease-in-out ${openSection === "contact" ? "max-h-40 opacity-100 mt-4" : "max-h-0 opacity-0 md:max-h-full md:opacity-100 md:mt-4"}`}
            >
              <ul className="space-y-3 text-white/70">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#dedede]"></span>

                  <a
                    href="https://mail.google.com/mail/?view=cm&fs=1&to=sales@zuboc.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline cursor-pointer"
                  >
                    sales@zuboc.com
                  </a>
                </li>

                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#dedede]"></span>

                  <a
                    href="https://wa.me/918891343496?text=Hello%20Zuboc%2C%20I%20would%20like%20to%20enquire%20about%20bulk%20orders."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline"
                  >
                    +91 88913 43496
                  </a>
                </li>

                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#dedede]"></span>

                  <a
                    href="https://www.google.com/maps/place/Zuboc/@11.0426739,76.0803439,1185m/data=!3m2!1e3!4b1!4m6!3m5!1s0x3ba64a9f35c5122b:0xf878519547f65701!8m2!3d11.0426739!4d76.0829242!16s%2Fg%2F11vdt26wny"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline"
                  >
                    Kerala, India
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between text-white/40 text-sm gap-4">
          <p>© 2026 Zuboc. All rights reserved.</p>
          <div className="flex items-center gap-2"></div>
        </div>
      </div>
    </footer>
  );
}
