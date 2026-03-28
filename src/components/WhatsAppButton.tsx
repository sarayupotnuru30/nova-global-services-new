import { motion } from "framer-motion";

const WA_FLOAT = `https://wa.me/918143188042?text=${encodeURIComponent("Hi Nova Global Solutions! I have a quick query. Could you please assist me? Thank you!")}`;

const WhatsAppButton = () => (
  <motion.a
    href={WA_FLOAT}
    target="_blank"
    rel="noopener noreferrer"
    className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full flex items-center justify-center shadow-lg animate-pulse-glow"
    style={{ backgroundColor: "#25D366" }}
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.95 }}
    aria-label="Chat on WhatsApp"
  >
    <svg viewBox="0 0 32 32" className="w-7 h-7 fill-primary-foreground">
      <path d="M16.004 0C7.164 0 .002 7.16.002 15.996c0 2.82.736 5.572 2.134 7.996L0 32l8.26-2.102A15.93 15.93 0 0016.004 32C24.84 32 32 24.836 32 15.996 32 7.16 24.84 0 16.004 0zm0 29.392a13.36 13.36 0 01-7.218-2.1l-.518-.308-5.37 1.366 1.432-5.226-.338-.536a13.3 13.3 0 01-2.06-7.092c0-7.396 6.02-13.412 13.42-13.412 7.396 0 13.42 6.016 13.42 13.412 0 7.4-6.376 13.416-13.768 13.896zm7.354-10.042c-.402-.202-2.382-1.174-2.752-1.31-.37-.134-.638-.2-.908.202-.268.402-1.042 1.31-1.278 1.578-.234.268-.47.302-.872.1-.402-.2-1.698-.626-3.234-1.996-1.194-1.066-2-2.382-2.236-2.784-.234-.402-.024-.62.178-.82.18-.18.402-.468.602-.702.202-.234.268-.402.402-.668.134-.268.068-.502-.034-.702-.1-.202-.908-2.186-1.242-2.992-.328-.784-.66-.678-.908-.69-.234-.012-.502-.014-.77-.014s-.702.1-1.07.502c-.37.402-1.408 1.376-1.408 3.358 0 1.982 1.442 3.896 1.642 4.164.202.268 2.836 4.33 6.874 6.07.96.416 1.71.664 2.294.85.964.306 1.842.264 2.536.16.774-.116 2.382-.974 2.718-1.914.336-.94.336-1.746.234-1.914-.1-.168-.37-.268-.77-.468z" />
    </svg>
  </motion.a>
);

export default WhatsAppButton;
