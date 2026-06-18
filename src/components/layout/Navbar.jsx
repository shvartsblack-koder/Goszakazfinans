import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, Menu, X, ChevronDown } from "lucide-react";

const navLinks = [
  { label: "Услуги", href: "#services" },
  { label: "О компании", href: "#about" },
  { label: "Преимущества", href: "#advantages" },
  { label: "Партнёры", href: "#partners" },
  { label: "Контакты", href: "#contacts" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id) => {
    setMobileOpen(false);
    const el = document.querySelector(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? "glass-strong shadow-2xl shadow-black/20" : "bg-transparent"
        }`}
      >
        <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} className="flex items-center group">
              <img
                src="https://media.base44.com/images/public/6a31381eb797dcc10bc2dd54/459c8e3d9_LOGO7.png"
                alt="ГосЗаказФинанс"
                className="h-16 w-auto object-contain"
              />
            </button>

            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => scrollTo(link.href)}
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-300 tracking-wide"
                >
                  {link.label}
                </button>
              ))}
            </div>

            {/* Phone & CTA */}
            <div className="hidden lg:flex items-center gap-6">
              <a href="tel:+74997535628" className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
                <Phone className="w-4 h-4" />
                <span className="text-sm font-mono">8 (499) 753-56-28</span>
              </a>
              <button
                onClick={() => scrollTo("#request")}
                className="px-5 py-2.5 bg-primary text-white text-sm font-medium rounded-md hover:bg-primary/90 transition-all duration-300"
              >
                Оставить заявку
              </button>
            </div>

            {/* Mobile toggle */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden text-foreground p-2"
            >
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-background/98 backdrop-blur-xl pt-20"
          >
            <div className="flex flex-col items-center gap-6 py-12">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => scrollTo(link.href)}
                  className="text-lg text-foreground font-medium tracking-wide"
                >
                  {link.label}
                </button>
              ))}
              <div className="rule-line w-32 my-4" />
              <a href="tel:+74997535628" className="flex items-center gap-2 text-muted-foreground">
                <Phone className="w-4 h-4" />
                <span className="font-mono">8 (499) 753-56-28</span>
              </a>
              <button
                onClick={() => scrollTo("#request")}
                className="px-8 py-3 bg-primary text-white font-medium rounded-md"
              >
                Оставить заявку
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}