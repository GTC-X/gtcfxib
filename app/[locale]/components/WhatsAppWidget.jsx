'use client';

import { useRef, useEffect } from 'react';
import { FloatingWhatsApp } from 'react-floating-whatsapp';

const WhatsAppWidget = () => {
  const widgetRef = useRef(null);

  useEffect(() => {
    const handleClickInsideInput = (e) => {
      if (e.target.closest('.whatsapp-chatbox')) {
        e.stopPropagation();
      }
    };

    document.addEventListener('mousedown', handleClickInsideInput);
    return () => {
      document.removeEventListener('mousedown', handleClickInsideInput);
    };
  }, []);

  return (
    <div ref={widgetRef}>
      <FloatingWhatsApp
        phoneNumber="448000488461"
        accountName="GTC"
        avatar="https://gtcfx-bucket.s3.ap-southeast-1.amazonaws.com/iconf.png"
        statusMessage="Trade, Invest & Partner"
        chatMessage="Hi GTC! I would like to chat."
        placeholder="Type your message..."
        allowEsc
        allowClickAway={false}
        notification
        notificationSound
      />
    </div>
  );
};

export default WhatsAppWidget;
