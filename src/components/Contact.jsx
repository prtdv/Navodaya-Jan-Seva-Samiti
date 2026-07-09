import { motion } from "framer-motion";
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaFacebook, FaInstagram } from "react-icons/fa";
import { contactData } from "../data/contact";

export default function Contact() {
  return (
    <section id="contact" className="py-24 md:py-32 bg-[#FAF8F5] border-t border-brand-secondary/10 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-16">
          <span className="text-xs uppercase tracking-widest font-semibold text-brand-accent">Get in Touch</span>
          <h2 className="text-3xl md:text-5xl font-semibold text-brand-primary tracking-tight">
            Connect With Us
          </h2>
          <p className="text-brand-primary/60 text-sm font-light leading-relaxed max-w-lg mx-auto">
            Reach out directly for collaborations, inquiries, or to visit our learning centers.
          </p>
          <div className="w-16 h-[2px] bg-brand-secondary mx-auto mt-4" />
        </div>

        {/* Contact Info & Map Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          
          {/* Details Panel */}
          <motion.div
            className="lg:col-span-5 flex flex-col justify-between space-y-12 bg-white border border-brand-secondary/20 p-8 md:p-10 shadow-sm"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="space-y-8">
              <h3 className="font-serif text-2xl font-semibold text-brand-primary">Office Details</h3>
              
              <div className="flex items-start space-x-4">
                <FaMapMarkerAlt className="w-5 h-5 text-brand-accent mt-1 flex-shrink-0" />
                <div>
                  <h4 className="text-xs uppercase tracking-wider text-brand-primary/50 font-medium mb-1">Office Address</h4>
                  <p className="text-sm text-brand-primary/80 font-light leading-relaxed">{contactData.address}</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <FaPhone className="w-5 h-5 text-brand-accent mt-1 flex-shrink-0" />
                <div>
                  <h4 className="text-xs uppercase tracking-wider text-brand-primary/50 font-medium mb-1">Phone Number</h4>
                  <a href={`tel:${contactData.phone}`} className="text-sm text-brand-primary hover:text-brand-accent transition-colors font-medium">
                    {contactData.phone}
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <FaEnvelope className="w-5 h-5 text-brand-accent mt-1 flex-shrink-0" />
                <div>
                  <h4 className="text-xs uppercase tracking-wider text-brand-primary/50 font-medium mb-1">Email Address</h4>
                  <a href={`mailto:${contactData.email}`} className="text-sm text-brand-primary hover:text-brand-accent transition-colors font-medium">
                    {contactData.email}
                  </a>
                </div>
              </div>
            </div>

            <div className="space-y-4 pt-6 border-t border-brand-secondary/20">
              <h4 className="text-xs uppercase tracking-widest text-brand-primary/60 font-semibold">Join the conversation</h4>
              <div className="flex space-x-5">
                <a
                  href={contactData.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-brand-primary hover:text-brand-accent transition-colors text-2xl"
                  aria-label="Facebook Page"
                >
                  <FaFacebook />
                </a>
                <a
                  href={contactData.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-brand-primary hover:text-brand-accent transition-colors text-2xl"
                  aria-label="Instagram Profile"
                >
                  <FaInstagram />
                </a>
              </div>
            </div>

          </motion.div>

          {/* Interactive Google Map Panel */}
          <motion.div
            className="lg:col-span-7 h-[350px] lg:h-auto border border-brand-secondary/20 shadow-sm overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            <iframe
              title="NGO Office Map Location"
              src={contactData.googleMapsEmbed}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </motion.div>

        </div>
      </div>
    </section>
  );
}
