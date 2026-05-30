"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "Expertise", path: "/expertise" },
  { name: "Offerings", path: "/offerings" },
  { name: "Infrastructure", path: "/infrastructure" },
  { name: "Policy", path: "/policy" },
  { name: "Reports", path: "/reports" },
  { name: "Gallery", path: "/gallery" },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 w-full z-50 transition-all duration-300 border-b border-outline-variant ${
          isScrolled
            ? "h-16 bg-surface-container-high shadow-md"
            : "h-20 bg-surface-container-lowest"
        }`}
      >
        <div className="flex justify-between items-center h-full px-margin-mobile md:px-margin-desktop max-w-max-width mx-auto">
          <Link
            href="/"
            className="font-headline-md text-[24px] font-bold text-primary no-underline hover:opacity-80 transition-opacity"
          >
            GRG Poly Dynamics
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex space-x-md">
            {navLinks.map((link) => {
              const isActive = pathname === link.path;
              return (
                <Link
                  key={link.name}
                  href={link.path}
                  className={`font-label-md text-[14px] font-semibold tracking-wider uppercase transition-colors duration-200 ${
                    isActive
                      ? "text-primary border-b-2 border-secondary pb-1"
                      : "text-on-surface-variant hover:text-secondary"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-md">
            <Link
              href="/contact"
              className="bg-primary text-on-primary px-lg py-sm font-label-md text-[14px] uppercase tracking-wider rounded font-semibold hover:bg-on-primary-fixed-variant active:scale-95 transition-all duration-200 shadow-sm hidden md:inline-block"
            >
              Enquire Now
            </Link>

            <button
              className="md:hidden text-primary p-xs"
              onClick={() => setMobileMenuOpen(true)}
            >
              <Menu size={28} />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[60] bg-black/50 md:hidden"
              onClick={() => setMobileMenuOpen(false)}
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.3 }}
              className="fixed right-0 top-0 h-full w-72 bg-surface-container-lowest shadow-2xl p-lg flex flex-col z-[70] md:hidden"
            >
              <div className="flex justify-between items-center mb-xl">
                <span className="font-headline-md text-[24px] font-bold text-primary">
                  Menu
                </span>
                <button onClick={() => setMobileMenuOpen(false)}>
                  <X size={28} className="text-on-surface" />
                </button>
              </div>

              <nav className="flex flex-col space-y-md">
                {navLinks.map((link) => {
                  const isActive = pathname === link.path;
                  return (
                    <Link
                      key={link.name}
                      href={link.path}
                      onClick={() => setMobileMenuOpen(false)}
                      className={`font-label-md text-[14px] uppercase font-semibold border-b border-outline-variant pb-sm transition-colors ${
                        isActive
                          ? "text-primary"
                          : "text-on-surface-variant hover:text-secondary"
                      }`}
                    >
                      {link.name}
                    </Link>
                  );
                })}
              </nav>

              <Link
                href="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="bg-primary text-on-primary px-lg py-sm font-label-md text-[14px] text-center uppercase tracking-wider rounded font-semibold mt-auto hover:bg-on-primary-fixed-variant active:scale-95 transition-all"
              >
                Enquire Now
              </Link>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
