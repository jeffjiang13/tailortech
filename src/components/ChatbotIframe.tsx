"use client"
import React, { useEffect } from 'react';

const ChatbotIframe = () => {
  useEffect(() => {
    const iframe = document.createElement("iframe");

    const iframeStyles = (styleString: string) => {
      const style = document.createElement('style');
      style.textContent = styleString;
      document.head.append(style);
    };

    iframeStyles(`
      .chat-frame {
        position: fixed;
        bottom: 20px;
        right: 20px;
        border: none;
        z-index: 999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
      }
    `);

    iframe.src = "https://tailortech.vercel.app/chatbot";
    iframe.classList.add('chat-frame');
    document.body.appendChild(iframe);

    const handleMessage = (e: MessageEvent) => {
      if (e.origin !== "https://tailortech.vercel.app") return;
      try {
        const dimensions = JSON.parse(e.data);
        iframe.style.width = dimensions.width + 'px';
        iframe.style.height = dimensions.height + 'px';
      } catch (error) {
        console.error('Invalid message data:', e.data);
      }
      iframe.contentWindow?.postMessage("0283db25-13b7-4f61-b52a-e239eed2f298", "https://tailortech.vercel.app/");
    };

    window.addEventListener("message", handleMessage);

    // Cleanup the event listener and iframe on component unmount
    return () => {
      window.removeEventListener("message", handleMessage);
      document.body.removeChild(iframe);
    };
  }, []);

  return null; // This component does not render anything itself
};

export default ChatbotIframe;
