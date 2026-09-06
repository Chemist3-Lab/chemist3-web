"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { SITE_CONFIG } from "@/lib/constants";

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const pathname = usePathname();
  const [prevPathname, setPrevPathname] = useState(pathname);

  if (prevPathname !== pathname) {
    setPrevPathname(pathname);
    setIsMobileOpen(false);
  }

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-200 ${
          isScrolled
            ? "bg-black/95 border-b border-[#222222]"
            : "bg-black border-b border-[#1A1A1A]"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Brand / Logo */}
            <Link href="/" className="flex items-baseline group">
              <span className="text-sm font-semibold tracking-tight text-white group-hover:text-neutral-200 transition-colors">
                Chemist3 Labs
              </span>
            </Link>

            {/* Desktop Navigation Links */}
            <nav className="hidden md:flex items-center gap-8">
              {SITE_CONFIG.navigation.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`text-xs font-medium tracking-wide transition-colors ${
                      isActive
                        ? "text-white"
                        : "text-neutral-400 hover:text-white"
                    }`}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </nav>

            {/* Action Desk CTA */}
            <div className="hidden md:flex items-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-3.5 py-1.5 text-xs font-mono text-neutral-300 border border-neutral-800 hover:border-neutral-500 hover:text-white transition-colors"
              >
                Request Briefing
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileOpen(!isMobileOpen)}
              className="md:hidden p-2 text-neutral-400 hover:text-white focus:outline-none"
              aria-label="Toggle Navigation"
              aria-expanded={isMobileOpen}
            >
              <span className="sr-only">Toggle Navigation</span>
              <div className="w-5 flex flex-col items-end gap-1">
                <span
                  className={`block h-px bg-current transition-all duration-200 ${
                    isMobileOpen ? "w-5 rotate-45 translate-y-[5px]" : "w-5"
                  }`}
                />
                <span
                  className={`block h-px bg-current transition-all duration-200 ${
                    isMobileOpen ? "opacity-0" : "w-3"
                  }`}
                />
                <span
                  className={`block h-px bg-current transition-all duration-200 ${
                    isMobileOpen ? "w-5 -rotate-45 -translate-y-[5px]" : "w-4"
                  }`}
                />
              </div>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Dropdown */}
      {isMobileOpen && (
        <div className="fixed inset-0 top-16 z-40 bg-black md:hidden px-6 py-8 border-b border-neutral-800">
          <nav className="flex flex-col space-y-4">
            {SITE_CONFIG.navigation.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`text-lg font-medium tracking-tight py-2 border-b border-neutral-900 ${
                    isActive ? "text-white" : "text-neutral-400 hover:text-white"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <div className="mt-8 pt-6 border-t border-neutral-900 space-y-4">
            <Link
              href="/contact"
              className="block w-full py-2.5 text-center text-xs font-mono text-black bg-white font-medium"
            >
              Request Briefing
            </Link>
            <div className="text-xs font-mono text-neutral-600">
              Direct routing: {SITE_CONFIG.contact.email}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
