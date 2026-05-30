"use client";

import { MessageCircle } from "lucide-react";

export default function FloatingWhatsApp() {
  const whatsappNumber = "917845411355"; // As per proposal prep
  const message = encodeURIComponent("Hello, I am interested in your manufacturing services.");
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${message}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-[90] bg-[#25D366] text-white p-4 rounded-full shadow-lg hover:scale-110 active:scale-95 transition-transform duration-200 flex items-center justify-center group"
      aria-label="Contact on WhatsApp"
    >
      <MessageCircle size={28} />
      <span className="absolute right-full mr-4 bg-surface-container-lowest text-primary font-label-sm px-3 py-1.5 rounded shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap pointer-events-none border border-outline-variant">
        Chat with Engineering
      </span>
    </a>
  );
}
