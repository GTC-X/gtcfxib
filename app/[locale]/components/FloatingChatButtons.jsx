"use client";
import { FloatingWhatsApp } from "react-floating-whatsapp";
import Image from "next/image";

export default function FloatingChatButtons() {
  return (
    <>
      {/* WhatsApp Floating Chat */}
      <FloatingWhatsApp
        phoneNumber="9647502207788"
        accountName="GTCFXIQ support"
        avatar="/gtc-logo.png"              // optional logo in /public
        chatMessage="Hi 👋 I'm interested in GTC FX Iraq. Can you help me?"
        statusMessage="Typically replies within 5 minutes"
        placeholder="Type your message…"
        darkMode={false}
        allowClickAway
        notification
        notificationSound
      />

      {/* Telegram Floating Icon */}
      <a
        href="https://t.me/gtcfxiq"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on Telegram"
        className="fixed bottom-28 right-8 z-50 bg-[#229ED9] rounded-full shadow-lg w-16 h-16 flex items-center justify-center hover:scale-105 active:scale-95 transition-transform"
      >
        <Image
          src="/telegram.svg"
          alt="Telegram"
          width={35}
          height={35}
          className="invert-0"
        />
      </a>
    </>
  );
}
