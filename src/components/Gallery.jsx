import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { galleryData } from "../data/gallery";
import Lightbox from "./Lightbox";

export default function Gallery() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [lightboxState, setLightboxState] = useState({
    isOpen: false,
    currentIndex: 0,
  });

  const categories = [
    "All",
    "Education",
    "Medical Camps",
    "Food Distribution",
    "Community Outreach",
    "Events",
  ];

  // Filter images based on active selection
  const filteredImages =
    activeFilter === "All"
      ? galleryData
      : galleryData.filter((img) => img.category === activeFilter);

  const [showAll, setShowAll] = useState(false);
  const initialLimit = 9;

  const displayedImages =
    activeFilter === "All" && !showAll
      ? filteredImages.slice(0, initialLimit)
      : filteredImages;

  const openLightbox = (index) => {
    setLightboxState({
      isOpen: true,
      currentIndex: index,
    });
  };

  const closeLightbox = () => {
    setLightboxState((prev) => ({ ...prev, isOpen: false }));
  };

  const handlePrev = () => {
    setLightboxState((prev) => ({
      ...prev,
      currentIndex: (prev.currentIndex - 1 + displayedImages.length) % displayedImages.length,
    }));
  };

  const handleNext = () => {
    setLightboxState((prev) => ({
      ...prev,
      currentIndex: (prev.currentIndex + 1) % displayedImages.length,
    }));
  };

  return (
    <section id="gallery" className="py-24 md:py-32 bg-[#FAF8F5] border-t border-brand-secondary/10 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-16">
          <span className="text-xs uppercase tracking-widest font-semibold text-brand-accent">Visual Documentary</span>
          <h2 className="text-3xl md:text-5xl font-semibold text-brand-primary tracking-tight">
            Moments on the Ground
          </h2>
          <p className="text-brand-primary/60 text-sm font-light leading-relaxed max-w-lg mx-auto">
            A window into our daily outreach, events, healthcare clinics, and training drives.
          </p>
          <div className="w-16 h-[2px] bg-brand-secondary mx-auto mt-4" />
        </div>

        {/* Filter Navigation */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveFilter(category)}
              className={`px-4 py-2 text-xs uppercase tracking-wider font-medium border rounded-full transition-all duration-300 ${
                activeFilter === category
                  ? "bg-brand-accent border-brand-accent text-white"
                  : "bg-transparent border-brand-secondary/30 text-brand-primary/80 hover:border-brand-accent hover:text-brand-primary"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Masonry Image Grid */}
        <motion.div
          layout
          className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6 [column-fill:_balance] w-full"
        >
          <AnimatePresence mode="popLayout">
            {displayedImages.map((item, index) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                className="break-inside-avoid relative overflow-hidden group cursor-pointer border border-brand-secondary/20 shadow-sm bg-white"
                onClick={() => openLightbox(index)}
              >
                {/* Photo Element */}
                <img
                  src={item.image}
                  alt={item.title}
                  loading="lazy"
                  className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-103"
                />

                {/* Micro-Animation/Hover Cover */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                  <span className="text-[10px] uppercase tracking-widest text-brand-secondary mb-1">
                    {item.category}
                  </span>
                  <h4 className="text-white font-serif text-lg font-medium tracking-tight">
                    {item.title}
                  </h4>
                  <p className="text-white/75 text-xs font-light mt-1 line-clamp-2">
                    {item.caption}
                  </p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {activeFilter === "All" && filteredImages.length > initialLimit && (
          <div className="flex justify-center mt-12">
            <button
              onClick={() => setShowAll(!showAll)}
              className="px-6 py-3 text-xs uppercase tracking-wider font-semibold border border-brand-accent bg-transparent text-brand-accent hover:bg-brand-accent hover:text-white transition-all duration-300 shadow-sm cursor-pointer"
            >
              {showAll ? "Show Less" : "Show All"}
            </button>
          </div>
        )}
      </div>

      {/* Lightbox Trigger */}
      <Lightbox
        isOpen={lightboxState.isOpen}
        images={displayedImages}
        currentIndex={lightboxState.currentIndex}
        onClose={closeLightbox}
        onPrev={handlePrev}
        onNext={handleNext}
      />
    </section>
  );
}
