import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { aboutData } from "../data/about";
import { contactData } from "../data/contact";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Our Work", href: "#work" },
    { name: "Gallery", href: "#gallery" },
    { name: "Stories", href: "#stories" },
    // { name: "Contact", href: "#contact" },
  ];

  return (
    <footer className="bg-brand-primary text-[#FAF8F5] py-16 px-6 md:px-12 border-t border-white/5">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8 items-start">
        
        {/* NGO Branding Column */}
        <div className="md:col-span-6 space-y-4">
          <a href="#home" className="font-serif text-2xl font-semibold tracking-wide">
            {aboutData.name}
          </a>
          <p className="text-white/60 text-xs md:text-sm font-light leading-relaxed max-w-sm">
            A photography-driven visual documentary of our humble journey to restore hope and build self-reliant communities.
          </p>
        </div>

        {/* Site Links Column */}
        <div className="md:col-span-3 space-y-4">
          <h4 className="text-xs uppercase tracking-widest text-brand-secondary font-semibold">Navigation</h4>
          <div className="grid grid-cols-2 gap-2">
            {footerLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-xs text-white/70 hover:text-white transition-colors duration-200"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>

        {/* Social / Connect Column */}
        <div className="md:col-span-3 space-y-4">
          <h4 className="text-xs uppercase tracking-widest text-brand-secondary font-semibold">Connect</h4>
          <div className="flex space-x-4">
            <a
              href={contactData.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center text-white/80 hover:text-white hover:border-brand-secondary transition-all"
              aria-label="Facebook Page"
            >
              <FaFacebookF className="w-4 h-4" />
            </a>
            <a
              href={contactData.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center text-white/80 hover:text-white hover:border-brand-secondary transition-all"
              aria-label="Instagram Profile"
            >
              <FaInstagram className="w-4 h-4" />
            </a>
          </div>
        </div>

      </div>

      <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 text-center">
        <p className="text-[11px] text-white/40 font-light">
          &copy; {currentYear} {aboutData.name}. All rights reserved.
        </p>
        <p className="text-[10px] text-white/30 font-light tracking-wide">
          Designed with absolute dedication. Built static &amp; high performance.
        </p>
      </div>
    </footer>
  );
}
