import { motion } from "framer-motion";
import { workData } from "../data/work";

export default function OurWork() {
  return (
    <section id="work" className="py-24 md:py-32 bg-[#FAF8F5] border-t border-brand-secondary/10 px-6 md:px-12">
      <div className="max-w-7xl mx-auto space-y-32">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <span className="text-xs uppercase tracking-widest font-semibold text-brand-accent">Our Initiatives</span>
          <h2 className="text-3xl md:text-5xl font-semibold text-brand-primary tracking-tight">
            How We Partner for Change
          </h2>
          <p className="text-brand-primary/60 text-sm font-light leading-relaxed max-w-lg mx-auto">
            Focusing on sustainability, local ownership, and immediate grassroots impact across four crucial dimensions.
          </p>
          <div className="w-16 h-[2px] bg-brand-secondary mx-auto mt-4" />
        </div>

        {/* Work Initiatives List */}
        <div className="space-y-28 md:space-y-36">
          {workData.map((item, index) => {
            const isEven = index % 2 === 0;
            return (
              <div
                key={item.id}
                className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center"
              >
                {/* Image Column */}
                <motion.div
                  className={`lg:col-span-6 ${isEven ? "lg:order-1" : "lg:order-2"}`}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.8 }}
                >
                  <div className="relative overflow-hidden group border border-brand-secondary/20 shadow-md">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-[350px] md:h-[420px] object-cover transition-transform duration-700 group-hover:scale-103"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-300" />
                  </div>
                </motion.div>

                {/* Text Description Column */}
                <motion.div
                  className={`lg:col-span-6 ${isEven ? "lg:order-2" : "lg:order-1"} flex flex-col space-y-6`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.8, delay: 0.1 }}
                >
                  <span className="text-[11px] uppercase tracking-widest text-brand-accent font-semibold">
                    Initiative {index + 1}
                  </span>
                  
                  <div className="space-y-2">
                    <h3 className="text-2xl md:text-3.5xl font-semibold text-brand-primary tracking-tight">
                      {item.title}
                    </h3>
                    <p className="font-serif italic text-brand-primary/70 text-sm md:text-base">
                      {item.tagline}
                    </p>
                  </div>

                  <p className="text-brand-primary/80 text-sm md:text-base leading-relaxed font-light">
                    {item.description}
                  </p>

                  <div className="pt-4 border-t border-brand-secondary/20 flex items-center space-x-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-accent" />
                    <span className="text-xs uppercase tracking-wider font-semibold text-brand-accent">
                      {item.stats}
                    </span>
                  </div>
                </motion.div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
