import { useEffect } from "react";
import { HiX, HiChevronLeft, HiChevronRight } from "react-icons/hi";
import { motion, AnimatePresence } from "framer-motion";

export default function Lightbox({ isOpen, images, currentIndex, onClose, onPrev, onNext }) {
  // Lock scroll when open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  // Keyboard navigation
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") onPrev();
      if (e.key === "ArrowRight") onNext();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose, onPrev, onNext]);

  if (!isOpen || images.length === 0) return null;

  const currentImage = images[currentIndex];

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 backdrop-blur-sm">
        {/* Background Click to Close */}
        <div className="absolute inset-0 cursor-default" onClick={onClose} />

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors duration-200 z-50 p-2"
          aria-label="Close Lightbox"
        >
          <HiX className="w-8 h-8" />
        </button>

        {/* Image Container */}
        <div className="relative max-w-5xl max-h-[80vh] w-full px-4 flex flex-col items-center z-10 select-none">
          <motion.img
            key={currentImage.id}
            src={currentImage.image}
            alt={currentImage.title}
            className="max-h-[70vh] max-w-full object-contain border border-white/10"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.3 }}
          />

          {/* Details & Counter */}
          <div className="mt-6 text-center max-w-2xl text-white">
            <span className="text-[10px] tracking-widest uppercase text-brand-secondary">
              {currentImage.category} &bull; {currentIndex + 1} of {images.length}
            </span>
            <h3 className="font-serif text-lg md:text-xl font-medium mt-1">
              {currentImage.title}
            </h3>
            <p className="text-white/60 text-xs md:text-sm font-light mt-1 max-w-xl">
              {currentImage.caption}
            </p>
          </div>
        </div>

        {/* Left Arrow Navigation */}
        {images.length > 1 && (
          <button
            onClick={(e) => {
              e.stopPropagation();
              onPrev();
            }}
            className="absolute left-4 md:left-8 text-white/50 hover:text-white transition-colors z-20 p-2"
            aria-label="Previous image"
          >
            <HiChevronLeft className="w-10 h-10" />
          </button>
        )}

        {/* Right Arrow Navigation */}
        {images.length > 1 && (
          <button
            onClick={(e) => {
              e.stopPropagation();
              onNext();
            }}
            className="absolute right-4 md:right-8 text-white/50 hover:text-white transition-colors z-20 p-2"
            aria-label="Next image"
          >
            <HiChevronRight className="w-10 h-10" />
          </button>
        )}
      </div>
    </AnimatePresence>
  );
}
