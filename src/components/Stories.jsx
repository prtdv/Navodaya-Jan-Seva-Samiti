import { motion } from "framer-motion";
import { storiesData } from "../data/stories";

export default function Stories() {
  return (
    <section id="stories" className="py-24 md:py-32 bg-brand-bg border-t border-brand-secondary/10 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-16">
          <span className="text-xs uppercase tracking-widest font-semibold text-brand-accent">Voices & Impact</span>
          <h2 className="text-3xl md:text-5xl font-semibold text-brand-primary tracking-tight">
            Stories from the Field
          </h2>
          <p className="text-brand-primary/60 text-sm font-light leading-relaxed max-w-lg mx-auto">
            Brief journals highlighting our community updates, event success rates, and individual milestones.
          </p>
          <div className="w-16 h-[2px] bg-brand-secondary mx-auto mt-4" />
        </div>

        {/* Stories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {storiesData.map((story, index) => (
            <motion.article
              key={story.id}
              className="flex flex-col space-y-4 group bg-white border border-brand-secondary/20 shadow-sm p-4"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
            >
              {/* Cover Photo */}
              <div className="relative aspect-video overflow-hidden">
                <img
                  src={story.image}
                  alt={story.title}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-750 group-hover:scale-102"
                />
              </div>

              {/* Story Details */}
              <div className="flex flex-col flex-grow justify-between space-y-3 pt-2">
                <div className="space-y-2">
                  <span className="text-[10px] uppercase tracking-wider text-brand-accent/80 font-medium">
                    {story.date}
                  </span>
                  <h3 className="font-serif text-xl font-semibold text-brand-primary tracking-tight leading-snug group-hover:text-brand-accent transition-colors duration-200">
                    {story.title}
                  </h3>
                  <p className="text-brand-primary/75 text-sm font-light leading-relaxed">
                    {story.description}
                  </p>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
