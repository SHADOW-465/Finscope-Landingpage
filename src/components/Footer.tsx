"use client";

import { Shield } from "lucide-react";

export default function Footer() {
  const handleScrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <footer className="bg-white border-t border-slate-200 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          
          {/* Logo & Description */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
              <div className="bg-[#0B1F3A] p-2 rounded-lg text-white flex items-center justify-center mr-3">
                <Shield className="h-5 w-5" />
              </div>
              <span className="text-xl font-bold text-[#0B1F3A] tracking-tight">
                FinScope<span className="text-emerald-600">.</span>
              </span>
            </div>
            <p className="text-xs text-slate-500 max-w-sm leading-relaxed">
              FinScope is an enterprise-grade financial intelligence engine. We automate statement parsing, transaction analysis, and credit underwriting for modern lending teams worldwide.
            </p>
          </div>

          {/* Links Column 1 */}
          <div>
            <h5 className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-4">Platform</h5>
            <ul className="space-y-3 text-xs font-semibold">
              <li>
                <button
                  onClick={() => handleScrollTo("features")}
                  className="text-slate-500 hover:text-[#0B1F3A] transition-colors cursor-pointer"
                >
                  Features
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleScrollTo("how-it-works")}
                  className="text-slate-500 hover:text-[#0B1F3A] transition-colors cursor-pointer"
                >
                  How It Works
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleScrollTo("report-preview")}
                  className="text-slate-500 hover:text-[#0B1F3A] transition-colors cursor-pointer"
                >
                  Sample Report
                </button>
              </li>
            </ul>
          </div>

          {/* Links Column 2 */}
          <div>
            <h5 className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-4">Legal & Contact</h5>
            <ul className="space-y-3 text-xs font-semibold">
              <li>
                <button
                  onClick={() => handleScrollTo("demo-form")}
                  className="text-slate-500 hover:text-[#0B1F3A] transition-colors cursor-pointer"
                >
                  Book Demo
                </button>
              </li>
              <li>
                <a
                  href="#"
                  onClick={(e) => e.preventDefault()}
                  className="text-slate-500 hover:text-[#0B1F3A] transition-colors"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="#"
                  onClick={(e) => e.preventDefault()}
                  className="text-slate-500 hover:text-[#0B1F3A] transition-colors"
                >
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 font-semibold gap-4">
          <p>© {new Date().getFullYear()} FinScope Inc. All rights reserved.</p>
          <div className="flex space-x-6">
            <span>SOC 2 Type II Certified</span>
            <span>GDPR Compliant</span>
            <span>256-bit Encryption</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
