import { useState, useEffect } from "react";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { HiMenu, HiX } from "react-icons/hi";
import { aboutData } from "../data/about";
import { contactData } from "../data/contact";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Our Work", href: "#work" },
    { name: "Gallery", href: "#gallery" },
    { name: "Stories", href: "#stories" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-brand-bg/95 backdrop-blur-md border-b border-brand-secondary/20 py-4 shadow-sm"
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        {/* Brand Logo / Name */}
        <a
          href="#home"
          className="flex items-center space-x-3 group"
        >
          <img
            src={aboutData.logo.square}
            alt={aboutData.name}
            className="w-10 h-10 rounded-full object-cover border border-white/20 shadow-sm transition-transform duration-300 group-hover:scale-105"
          />
          <span
            className={`font-serif text-lg md:text-xl font-semibold tracking-wide transition-colors duration-300 ${
              isScrolled ? "text-brand-primary" : "text-white"
            }`}
          >
            {aboutData.name}
          </span>
        </a>

        {/* Desktop Navigation Links */}
        <div className="hidden lg:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`text-sm tracking-wider uppercase font-medium transition-colors duration-200 hover:text-brand-accent ${
                isScrolled ? "text-brand-primary/80" : "text-white/80"
              }`}
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Social Icons (Desktop) */}
        <div className="hidden lg:flex items-center space-x-5">
          <a
            href={contactData.facebook}
            target="_blank"
            rel="noopener noreferrer"
            className={`transition-colors duration-200 hover:text-brand-accent ${
              isScrolled ? "text-brand-primary" : "text-white"
            }`}
            aria-label="Facebook"
          >
            <FaFacebookF className="w-5 h-5" />
          </a>
          <a
            href={contactData.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className={`transition-colors duration-200 hover:text-brand-accent ${
              isScrolled ? "text-brand-primary" : "text-white"
            }`}
            aria-label="Instagram"
          >
            <FaInstagram className="w-5 h-5" />
          </a>
        </div>

        {/* Mobile Toggle Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className={`lg:hidden transition-colors duration-200 hover:text-brand-accent ${
            isScrolled ? "text-brand-primary" : "text-white"
          }`}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <HiX className="w-6 h-6" /> : <HiMenu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Navigation Drawer */}
      <div
        className={`lg:hidden fixed inset-y-0 right-0 w-72 bg-brand-bg z-45 transform transition-transform duration-300 ease-in-out shadow-2xl flex flex-col justify-between py-12 px-8 ${
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col space-y-6 pt-12">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-lg font-medium text-brand-primary/95 hover:text-brand-accent transition-colors duration-200"
            >
              {link.name}
            </a>
          ))}
        </div>

        <div>
          <div className="h-px bg-brand-secondary/30 my-6" />
          <div className="flex space-x-6">
            <a
              href={contactData.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand-primary hover:text-brand-accent transition-colors"
              aria-label="Facebook"
            >
              <FaFacebookF className="w-6 h-6" />
            </a>
            <a
              href={contactData.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand-primary hover:text-brand-accent transition-colors"
              aria-label="Instagram"
            >
              <FaInstagram className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
