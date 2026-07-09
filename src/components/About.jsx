import { motion } from "framer-motion";
import { aboutData } from "../data/about";

export default function About() {
  return (
    <section id="about" className="py-24 md:py-32 bg-brand-bg px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Left Column: Image & Quote */}
          <motion.div
            className="lg:col-span-5 flex flex-col space-y-4"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative overflow-hidden group border border-brand-secondary/20 shadow-md">
              <img
                src={aboutData.founder.image}
                alt={aboutData.founder.name}
                className="w-full h-[450px] object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60" />
            </div>
            
            <div className="pt-2">
              <span className="font-serif text-lg italic text-brand-primary/80">
                "{aboutData.founder.quote}"
              </span>
              <p className="text-xs uppercase tracking-widest text-brand-accent font-medium mt-3">
                — {aboutData.founder.name}, {aboutData.founder.role}
              </p>
            </div>
          </motion.div>

          {/* Right Column: Mission, Vision, and Context */}
          <motion.div
            className="lg:col-span-7 flex flex-col space-y-10"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="space-y-4">
              <span className="text-xs uppercase tracking-widest font-semibold text-brand-accent">Who We Are</span>
              <h2 className="text-3xl md:text-5xl font-semibold text-brand-primary tracking-tight leading-tight">
                Empowering the grassroots through direct support.
              </h2>
              <div className="w-12 h-0.5 bg-brand-secondary mt-2" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4">
              <div className="space-y-3">
                <h3 className="font-serif text-xl font-medium text-brand-accent">Our Mission</h3>
                <p className="text-brand-primary/80 text-sm leading-relaxed font-light">
                  {aboutData.mission}
                </p>
              </div>

              <div className="space-y-3">
                <h3 className="font-serif text-xl font-medium text-brand-accent">Our Vision</h3>
                <p className="text-brand-primary/80 text-sm leading-relaxed font-light">
                  {aboutData.vision}
                </p>
              </div>
            </div>

            {/* NGO Statistics Dashboard */}
            <div className="pt-8 border-t border-brand-secondary/30">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                {aboutData.stats.map((stat) => (
                  <div key={stat.label} className="space-y-1">
                    <span className="block text-3xl font-serif text-brand-accent font-semibold">
                      {stat.value}
                    </span>
                    <span className="block text-[11px] uppercase tracking-wider text-brand-primary/60 font-medium">
                      {stat.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>

          </motion.div>
        </div>
      </div>
    </section>
  );
}
