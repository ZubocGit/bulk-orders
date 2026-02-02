import React, { useState, useRef } from "react";
import { SectionHeader } from "../ui/SectionHeader";
import { Modal } from "../ui/Modal";
import { Play, ArrowRight, Tag, MessageCircle } from "lucide-react";
import { Input } from "../ui/Input";

interface MediaItem {
  id: number;
  type: "image" | "video";
  src: string; // Used for thumb/poster (MUST be an image for video type)
  previewSrc?: string; // Used for hover video (mp4)
  fullSrc?: string; // Used for modal (mp4)
  title: string;
  description: string;
  tags: string[];
}

// Placeholder Data - Enhanced with descriptions and valid image placeholders
const PORTFOLIO_ITEMS: MediaItem[] = [
  {
    id: 1,
    type: "video",
    src: "https://images.unsplash.com/photo-1595967060599-234237f070b1?q=80&w=800&auto=format&fit=crop", // Wedding cardstock theme
    previewSrc: "/assets/Videos/Wax Seal Creation.mp4",
    fullSrc: "/assets/Videos/Wax Seal Creation.mp4",
    title: "Wax Seal Creation",
    description:
      "Experience the epitome of elegance with our bespoke wedding invitations. Crafted with premium thick cardstock and intricate detailing, these invites set the perfect tone for your special day. From traditional motifs to modern minimalist designs, we bring your vision to life.",
    tags: ["Wedding", "Cardstock", "Gold Foil"],
  },
  {
    id: 2,
    type: "video",
    src: "https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?q=80&w=800&auto=format&fit=crop", // Wax seal theme
    previewSrc: "/assets/Videos/Custom Wax Seal.mp4",
    fullSrc: "/assets/Videos/Custom Wax Seal.mp4",
    title: "Custom Wax Seals Process",
    description:
      "Watch the mesmerizing process of creating our signature custom wax seals. Each seal is hand-stamped to ensure perfection, adding a touch of old-world charm and sophistication to your envelopes. Available in a variety of colors and custom monogram designs.",
    tags: ["Wax Seal", "Handmade", "Custom Monogram"],
  },
  {
    id: 3,
    type: "video",
    src: "https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?q=80&w=800&auto=format&fit=crop", // Wax seal theme
    previewSrc: "/assets/Videos/Envelopes.mp4",
    fullSrc: "/assets/Videos/Envelopes.mp4",
    title: "Custom Envelopes",
    description:
      "Experience the epitome of elegance with our bespoke wedding invitations. Crafted with premium thick cardstock and intricate detailing, these invites set the perfect tone for your special day. From traditional motifs to modern minimalist designs, we bring your vision to life.",
    tags: ["Envelopes", "Cardstock", "Gold Foil"],
  },
  {
    id: 4,
    type: "video",
    src: "https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?q=80&w=800&auto=format&fit=crop", // Wax seal theme
    previewSrc: "/assets/Videos/Custom Wax Stamp.mp4",
    fullSrc: "/assets/Videos/Custom Wax Stamp.mp4",
    title: "Custom Wax Stamps",
    description:
      "Custom wax stamps are a beautiful way to elevate your wedding invitations with timeless elegance. Each seal is carefully hand-stamped for a flawless finish, bringing old-world charm and refined sophistication to every envelope. Available in a range of colors and personalized monogram designs, they’re also perfect for branding, cafés, and corporate use.",
    tags: ["Wax Seal", "Handmade", "Custom Monogram"],
  },
  //   {
  //     id: 3,
  //     type: "image",
  //     src: "https://images.unsplash.com/photo-1607153333879-c174d265f2d2?q=80&w=800&auto=format&fit=crop",
  //     title: "Premium Envelopes",
  //     description:
  //       "Our premium envelopes are more than just packaging; they are the first impression. Available in unmatched textures and colors, from deep velvets to metallic shimmers. We offer custom liners and calligraphy services to complete the look.",
  //     tags: ["Envelopes", "Texture", "Calligraphy"],
  //   },
  //   {
  //     id: 4,
  //     type: "image",
  //     src: "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?q=80&w=800&auto=format&fit=crop",
  //     title: "Gold Foil Stamping",
  //     description:
  //       "Add a luxurious shine with our precision gold foil stamping. This technique uses heat and pressure to apply metallic foil, creating a stunning visual and tactile effect. Perfect for highlighting names, dates, or intricate patterns on your stationery.",
  //     tags: ["Gold Foil", "Letterpress", "Luxury"],
  //   },
];

export function WorkShowcase() {
  const [selectedItem, setSelectedItem] = useState<MediaItem | null>(null);
  const [modalProductName, setModalProductName] = useState("");
  const [modalQuantity, setModalQuantity] = useState("");

  // Map to store video refs for each item
  const videoRefs = useRef<Map<number, HTMLVideoElement>>(new Map());

  const [hoveredId, setHoveredId] = useState<number | null>(null);

  const handleMouseEnter = (id: number) => {
    setHoveredId(id);
    const video = videoRefs.current.get(id);
    if (video) {
      video.currentTime = 0; // Ensure it starts from beginning
      video.play().catch((error) => {
        // Autoplay policies might block this if not muted, but we are muted.
        console.log("Autoplay prevented", error);
      });
    }
  };

  const handleMouseLeave = (id: number) => {
    setHoveredId(null);
    const video = videoRefs.current.get(id);
    if (video) {
      video.pause();
      video.currentTime = 0;
    }
  };

  const handleOpenModal = (item: MediaItem) => {
    setSelectedItem(item);
    setModalProductName("");
    setModalQuantity("");
  };

  const getModalWhatsAppLink = () => {
    if (!selectedItem) return "";
    const quantityText = modalQuantity.trim() ? ` — ${modalQuantity} pcs` : "";
    const message = `Hi Zuboc team, I’d like to place a bulk order enquiry for:
• ${modalProductName}${quantityText}

Please share pricing and timeline. Thank you!`;
    return `https://wa.me/918891343496?text=${encodeURIComponent(message)}`;
  };

  return (
    <section
      id="works"
      className="py-12 lg:py-16 bg-zuboc-neutral-bg overflow-hidden relative"
    >
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-20">
        <div className="absolute top-20 left-[-100px] w-96 h-96 bg-zuboc-plum/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-[-100px] w-96 h-96 bg-zuboc-dustyRose/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <SectionHeader
          title="Our Bulk Portfolio"
          subtitle="Premium bulk creations designed with precision, personality, and lasting impact."
        />

        <div className="flex flex-col gap-12 lg:gap-16 mt-12 lg:mt-16">
          {PORTFOLIO_ITEMS.map((item, index) => {
            const isEven = index % 2 === 0;

            return (
              <div
                key={item.id}
                className={`flex flex-col md:flex-row items-center gap-8 md:gap-16 ${isEven ? "" : "md:flex-row-reverse"}`}
              >
                {/* Media Section (Video/Image) */}
                <div className="w-full md:w-1/2">
                  <div
                    className={`relative group cursor-pointer w-full max-w-[507px] ${isEven ? "md:ml-0 md:mr-auto" : "md:ml-auto md:mr-0"} mx-auto`}
                    onClick={() => handleOpenModal(item)}
                    onMouseEnter={() => handleMouseEnter(item.id)}
                    onMouseLeave={() => handleMouseLeave(item.id)}
                  >
                    <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[4/3] lg:max-h-[380px] transform transition-transform duration-500 hover:scale-[1.02]">
                      {item.type === "video" ? (
                        // Render Video directly, REMOVED poster to let video show its own frame
                        <video
                          ref={(el) => {
                            if (el) videoRefs.current.set(item.id, el);
                            else videoRefs.current.delete(item.id);
                          }}
                          src={item.previewSrc || item.fullSrc}
                          className="w-full h-full object-cover"
                          muted
                          playsInline
                          loop
                          preload="metadata"
                        />
                      ) : (
                        // Render Image
                        <img
                          src={item.src}
                          alt={item.title}
                          className="w-full h-full object-cover"
                          loading="lazy"
                        />
                      )}

                      <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors pointer-events-none" />

                      {/* Play Button Overlay */}
                      <div className="absolute inset-0 flex items-center justify-center opacity-100 group-hover:opacity-0 transition-opacity duration-300 pointer-events-none z-20">
                        <div
                          className={`w-20 h-20 rounded-full bg-white/30 backdrop-blur-md border border-white/50 flex items-center justify-center shadow-lg transform scale-90 group-hover:scale-100 transition-transform`}
                        >
                          {item.type === "video" ? (
                            <Play className="w-8 h-8 text-white fill-white ml-1" />
                          ) : (
                            <ArrowRight className="w-8 h-8 text-white" />
                          )}
                        </div>
                      </div>
                    </div>

                    {/* Floating Badge */}
                    <div
                      className={`absolute bottom-4 right-4 md:-bottom-4 ${isEven ? "md:-right-4 md:left-auto" : "md:-left-4 md:right-auto"} bg-white px-4 py-2 md:px-5 md:py-2.5 rounded-2xl shadow-xl flex items-center gap-2 max-w-[180px] z-20 pointer-events-none`}
                    >
                      <div className="w-2 h-2 rounded-full bg-zuboc-plum animate-pulse"></div>
                      <span className="text-xs md:text-sm font-semibold text-zuboc-plum truncate">
                        {item.type === "video"
                          ? "Watch Process"
                          : "View Detail"}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Text Content Section */}
                <div className="w-full md:w-1/2 space-y-4 lg:space-y-5">
                  <div className="space-y-1 lg:space-y-2">
                    <span className="text-zuboc-dustyRose font-medium tracking-wider uppercase text-xs lg:text-sm">
                      Project 0{item.id}
                    </span>
                    <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-zuboc-neutral-text font-heading leading-tight">
                      {item.title}
                    </h3>
                  </div>

                  <p className="text-zuboc-neutral-muted text-base lg:text-lg leading-relaxed line-clamp-3 lg:line-clamp-4">
                    {item.description}
                  </p>

                  <div className="flex flex-wrap gap-2 lg:gap-3 pt-1">
                    {item.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="inline-flex items-center gap-1 px-3 py-1.5 lg:px-4 lg:py-2 rounded-full bg-zuboc-neutral-bg border border-zuboc-neutral-border text-xs lg:text-sm text-zuboc-neutral-muted hover:border-zuboc-plum hover:text-zuboc-plum transition-colors cursor-default"
                      >
                        <Tag className="w-3 h-3" />
                        {tag}
                      </span>
                    ))}
                  </div>

                  <button
                    className="mt-2 lg:mt-4 px-6 py-2.5 lg:px-8 lg:py-3 bg-transparent border-2 border-zuboc-plum text-zuboc-plum font-semibold rounded-full hover:bg-zuboc-plum hover:text-white transition-all duration-300 flex items-center gap-2 group/btn"
                    onClick={() => handleOpenModal(item)}
                  >
                    Explore This
                    <ArrowRight className="w-4 h-4 transform group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Modal for Full View */}
        <Modal isOpen={!!selectedItem} onClose={() => setSelectedItem(null)}>
          {selectedItem && (
            <div className="flex flex-col md:flex-row min-h-[400px]">
              {/* Media Side */}
              <div className="w-full md:w-[48%] bg-zuboc-neutral-bg flex items-center justify-center border-b md:border-b-0 md:border-r border-zuboc-neutral-border">
                {selectedItem.type === "video" ? (
                  <video
                    controls
                    autoPlay
                    className="w-full max-h-[70vh] md:max-h-[85vh] object-contain"
                    src={
                      selectedItem.fullSrc ||
                      selectedItem.previewSrc ||
                      selectedItem.src
                    }
                  />
                ) : (
                  <img
                    src={selectedItem.src}
                    alt={selectedItem.title}
                    className="w-full max-h-[70vh] md:max-h-[85vh] object-contain"
                  />
                )}
              </div>

              {/* Content Side */}
              <div className="w-full md:w-[50%] p-6 lg:p-8 flex flex-col justify-center bg-white">
                <span className="text-zuboc-dustyRose font-medium tracking-wider uppercase text-xs mb-2">
                  Project 0{selectedItem.id}
                </span>
                <h3 className="text-2xl lg:text-3xl font-bold text-zuboc-neutral-text font-heading leading-tight mb-4">
                  {selectedItem.title}
                </h3>
                <p className="text-zuboc-neutral-muted text-base lg:text-lg leading-relaxed mb-6">
                  {selectedItem.description}
                </p>

                {/* Bulk Order Section */}
                <div className="bg-zuboc-neutral-bg/40 p-5 rounded-2xl border border-zuboc-neutral-border mb-6">
                  <h4 className="text-xs font-bold text-zuboc-neutral-text uppercase tracking-widest mb-3">
                    Bulk Order Inquiry
                  </h4>
                  <div className="grid grid-cols-1 gap-3">
                    <Input
                      label="Product"
                      value={modalProductName}
                      onChange={(e) => setModalProductName(e.target.value)}
                      className="bg-white h-10 py-1"
                    />
                    <Input
                      label="Quantity"
                      type="number"
                      min="1"
                      value={modalQuantity}
                      onChange={(e) => setModalQuantity(e.target.value)}
                      className="bg-white h-10 py-1"
                    />
                  </div>
                  <a
                    href={
                      modalProductName.trim()
                        ? getModalWhatsAppLink()
                        : undefined
                    }
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-full mt-4 flex items-center justify-center gap-2 px-6 py-3 bg-[#25D366] hover:bg-[#128C7E] text-white font-bold rounded-xl transition-all shadow-md ${!modalProductName.trim() ? "opacity-50 cursor-not-allowed pointer-events-none" : ""}`}
                  >
                    <MessageCircle className="w-5 h-5" />
                    Send on WhatsApp
                  </a>
                </div>

                <div className="flex flex-wrap gap-2">
                  {selectedItem.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-white border border-zuboc-neutral-border rounded-full text-[10px] text-zuboc-neutral-muted uppercase tracking-wider"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          )}
        </Modal>
      </div>
    </section>
  );
}
