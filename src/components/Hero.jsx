import { motion } from "framer-motion";
import { aboutData } from "../data/about";

export default function Hero() {
  return (
    <div id="home" className="relative h-screen w-full overflow-hidden flex items-center justify-center bg-black">
      {/* Background Image with Zoom-in Motion */}
      <motion.div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url('/content/work/1/WhatsApp Image 2026-07-05 at 10.48.21 (1).jpeg')`,
        }}
        initial={{ scale: 1.1, opacity: 0 }}
        animate={{ scale: 1, opacity: 0.55 }}
        transition={{ duration: 2.2, ease: "easeOut" }}
      />

      {/* Hero Content Overlay */}
      <div className="relative z-10 text-center px-6 max-w-4xl flex flex-col items-center">
        <motion.p
          className="text-brand-secondary uppercase tracking-widest text-xs md:text-sm font-medium mb-3"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          Welcoming You to
        </motion.p>
        
        <motion.h1
          className="text-4xl md:text-7xl text-white font-semibold tracking-tight leading-tight mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          {aboutData.name}
        </motion.h1>

        <motion.div
          className="w-16 h-[2px] bg-brand-accent my-4"
          initial={{ width: 0 }}
          animate={{ width: 64 }}
          transition={{ delay: 0.9, duration: 0.6 }}
        />

        <motion.h2
          className="text-lg md:text-2xl text-white/90 font-serif italic max-w-2xl"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1, duration: 0.8 }}
        >
          {aboutData.subtitle}
        </motion.h2>

        <motion.p
          className="text-white/70 text-sm md:text-base font-light mt-4 max-w-xl text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4, duration: 0.8 }}
        >
          {aboutData.tagline}
        </motion.p>
      </div>

      {/* Subtle Scroll Indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center cursor-pointer"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8, duration: 0.5 }}
      >
        <span className="text-white/50 text-[10px] uppercase tracking-widest mb-2 font-medium">Scroll Down</span>
        <div className="w-[1px] h-12 bg-white/20 relative overflow-hidden">
          <motion.div
            className="absolute top-0 left-0 w-full h-4 bg-brand-secondary"
            animate={{
              y: [0, 48, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </div>
      </motion.div>
    </div>
  );
}
