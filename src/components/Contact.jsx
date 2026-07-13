import { motion } from "framer-motion";
import { FaPhone, FaEnvelope, FaFacebook, FaInstagram } from "react-icons/fa";
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
            Reach out directly for collaborations, inquiries, or to support our work.
          </p>
          <div className="w-16 h-[2px] bg-brand-secondary mx-auto mt-4" />
        </div>

        {/* Contact Info Grid */}
        <div className="max-w-2xl mx-auto">
          <motion.div
            className="flex flex-col items-center space-y-10 bg-white border border-brand-secondary/20 p-8 md:p-12 shadow-sm text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="w-full space-y-8 flex flex-col items-center">
              <h3 className="font-serif text-2xl font-semibold text-brand-primary">Contact Details</h3>
              
              <div className="flex flex-col items-center space-y-2">
                <div className="w-10 h-10 rounded-full bg-brand-secondary/10 flex items-center justify-center mb-1">
                  <FaPhone className="w-5 h-5 text-brand-accent" />
                </div>
                <h4 className="text-xs uppercase tracking-wider text-brand-primary/50 font-medium">Phone Number</h4>
                <a href={`tel:${contactData.phone}`} className="text-lg text-brand-primary hover:text-brand-accent transition-colors font-medium">
                  {contactData.phone}
                </a>
              </div>

              <div className="flex flex-col items-center space-y-2">
                <div className="w-10 h-10 rounded-full bg-brand-secondary/10 flex items-center justify-center mb-1">
                  <FaEnvelope className="w-5 h-5 text-brand-accent" />
                </div>
                <h4 className="text-xs uppercase tracking-wider text-brand-primary/50 font-medium">Email Address</h4>
                <a href={`mailto:${contactData.email}`} className="text-lg text-brand-primary hover:text-brand-accent transition-colors font-medium break-all">
                  {contactData.email}
                </a>
              </div>
            </div>

            <div className="w-full space-y-4 pt-8 border-t border-brand-secondary/20 flex flex-col items-center">
              <h4 className="text-xs uppercase tracking-widest text-brand-primary/60 font-semibold">Join the conversation</h4>
              <div className="flex space-x-6">
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
        </div>
      </div>
    </section>
  );
}
