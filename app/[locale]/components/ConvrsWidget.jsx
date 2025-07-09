"use client";
import { useEffect } from "react";

const ConvrsWidget = () => {
  useEffect(() => {
    const maxRetries = 10;
    let attempts = 0;

    const showWidget = () => {
      if (
        typeof window !== "undefined" &&
        window.ConvrsChat &&
        typeof window.ConvrsChat.ShowWebChat === "function"
      ) {
        window.ConvrsChat.ShowWebChat();
      } else if (attempts < maxRetries) {
        attempts++;
        setTimeout(showWidget, 500);
      }
    };

    showWidget();
  }, []);

  return null;
};

export default ConvrsWidget;
