"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import Image from "next/image";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScrollTo = (id: string) => {
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // height of navbar
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/80 backdrop-blur-md border-b border-slate-200/80 shadow-sm"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex items-center cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
            <div className="mr-3 flex-shrink-0">
              <Image
                src="/logo.png"
                alt="FinScope Logo"
                width={36}
                height={36}
                priority
                className="object-contain"
              />
            </div>
            <span className="text-2xl font-montserrat font-extrabold tracking-tight">
              <span className="text-[#0B1F3A]">FIN</span>
              <span className="text-emerald-600">SCOPE</span>
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => handleScrollTo("features")}
              className="text-sm font-medium text-slate-600 hover:text-[#0B1F3A] transition-colors"
            >
              Features
            </button>
            <button
              onClick={() => handleScrollTo("how-it-works")}
              className="text-sm font-medium text-slate-600 hover:text-[#0B1F3A] transition-colors"
            >
              How It Works
            </button>
            <button
              onClick={() => handleScrollTo("who-its-for")}
              className="text-sm font-medium text-slate-600 hover:text-[#0B1F3A] transition-colors"
            >
              Who It's For
            </button>
            <button
              onClick={() => handleScrollTo("report-preview")}
              className="text-sm font-medium text-slate-600 hover:text-[#0B1F3A] transition-colors"
            >
              Sample Report
            </button>
            <button
              onClick={() => handleScrollTo("faq")}
              className="text-sm font-medium text-slate-600 hover:text-[#0B1F3A] transition-colors"
            >
              FAQ
            </button>
          </div>

          <div className="hidden md:flex items-center">
            <button
              onClick={() => handleScrollTo("demo-form")}
              className="bg-[#0B1F3A] hover:bg-[#0B1F3A]/90 text-white px-5 py-2.5 rounded-lg text-sm font-medium transition-all shadow-sm hover:shadow-md cursor-pointer"
            >
              Book Demo
            </button>
          </div>

          {/* Mobile hamburger menu button */}
          <div className="flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-600 hover:text-[#0B1F3A] p-2 focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-b border-slate-200 px-4 pt-2 pb-6 space-y-4 shadow-lg animate-in fade-in slide-in-from-top-5 duration-200">
          <button
            onClick={() => handleScrollTo("features")}
            className="block w-full text-left py-2 text-base font-medium text-slate-600 hover:text-[#0B1F3A] transition-colors"
          >
            Features
          </button>
          <button
            onClick={() => handleScrollTo("how-it-works")}
            className="block w-full text-left py-2 text-base font-medium text-slate-600 hover:text-[#0B1F3A] transition-colors"
          >
            How It Works
          </button>
          <button
            onClick={() => handleScrollTo("who-its-for")}
            className="block w-full text-left py-2 text-base font-medium text-slate-600 hover:text-[#0B1F3A] transition-colors"
          >
            Who It's For
          </button>
          <button
            onClick={() => handleScrollTo("report-preview")}
            className="block w-full text-left py-2 text-base font-medium text-slate-600 hover:text-[#0B1F3A] transition-colors"
          >
            Sample Report
          </button>
          <button
            onClick={() => handleScrollTo("faq")}
            className="block w-full text-left py-2 text-base font-medium text-slate-600 hover:text-[#0B1F3A] transition-colors"
          >
            FAQ
          </button>
          <div className="pt-2 border-t border-slate-100">
            <button
              onClick={() => handleScrollTo("demo-form")}
              className="block w-full text-center bg-[#0B1F3A] text-white py-3 rounded-lg text-base font-medium hover:bg-[#0B1F3A]/90 transition-colors shadow-sm"
            >
              Book Demo
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
