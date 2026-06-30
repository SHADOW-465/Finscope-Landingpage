"use client";

import { motion } from "framer-motion";
import { X, Check, Clock, ShieldAlert, FileWarning, Search, ChevronRight } from "lucide-react";

export default function Problem() {
  return (
    <section className="py-24 bg-white border-y border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-xs font-bold text-red-600 uppercase tracking-widest mb-3">The Efficiency Gap</h2>
          <h3 className="text-3xl sm:text-4xl font-extrabold text-[#0B1F3A] tracking-tight">
            Still Reviewing Bank Statements Manually?
          </h3>
          <p className="text-base text-slate-500 mt-4 leading-relaxed">
            Manual statement verification is slow, error-prone, and scales linearly with headcount. Compare the traditional workflow against Credalyzer's automated underwriting engine.
          </p>
        </div>

        {/* Two-Column Comparison */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-stretch max-w-5xl mx-auto">
          
          {/* Manual Card */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5 }}
            className="bg-white border border-red-100 rounded-2xl p-8 shadow-sm flex flex-col justify-between relative overflow-hidden"
          >
            {/* Top red border accent */}
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-red-500/80" />
            
            <div>
              <div className="flex items-center justify-between mb-6">
                <span className="text-sm font-bold text-red-600 uppercase tracking-wider">Traditional Method</span>
                <span className="text-xs font-semibold text-slate-400 bg-slate-50 px-2.5 py-1 rounded-md">Slow & Inefficient</span>
              </div>
              
              <h4 className="text-xl font-bold text-[#0B1F3A] mb-8">
                Manual Underwriting Review
              </h4>
              
              <ul className="space-y-5">
                <li className="flex items-start">
                  <div className="bg-red-50 text-red-600 p-1 rounded-lg mr-3.5 mt-0.5 border border-red-100">
                    <X className="h-4 w-4" />
                  </div>
                  <div>
                    <h5 className="text-sm font-bold text-slate-800">Hours spent reading statements</h5>
                    <p className="text-xs text-slate-500 mt-0.5">Sifting through hundreds of transactions page-by-page.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-red-50 text-red-600 p-1 rounded-lg mr-3.5 mt-0.5 border border-red-100">
                    <X className="h-4 w-4" />
                  </div>
                  <div>
                    <h5 className="text-sm font-bold text-slate-800">Manual calculations</h5>
                    <p className="text-xs text-slate-500 mt-0.5">Typing numbers into Excel to find averages and run ratios.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-red-50 text-red-600 p-1 rounded-lg mr-3.5 mt-0.5 border border-red-100">
                    <X className="h-4 w-4" />
                  </div>
                  <div>
                    <h5 className="text-sm font-bold text-slate-800">Checking cheque bounces</h5>
                    <p className="text-xs text-slate-500 mt-0.5">Looking closely at narration text to isolate return charges.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-red-50 text-red-600 p-1 rounded-lg mr-3.5 mt-0.5 border border-red-100">
                    <X className="h-4 w-4" />
                  </div>
                  <div>
                    <h5 className="text-sm font-bold text-slate-800">Finding existing loans</h5>
                    <p className="text-xs text-slate-500 mt-0.5">Deducing undisclosed obligations based on recurring EMIs.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-red-50 text-red-600 p-1 rounded-lg mr-3.5 mt-0.5 border border-red-100">
                    <X className="h-4 w-4" />
                  </div>
                  <div>
                    <h5 className="text-sm font-bold text-slate-800">Preparing reports manually</h5>
                    <p className="text-xs text-slate-500 mt-0.5">Typing summaries, copying graphs, and assembling PDF sheets.</p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="pt-8 mt-8 border-t border-slate-100 text-xs font-semibold text-slate-500 flex justify-between items-center">
              <span>AVERAGE TIME PER FILE</span>
              <span className="text-red-600 font-extrabold text-sm flex items-center">
                <Clock className="h-4 w-4 mr-1" />
                2 - 3 Hours
              </span>
            </div>
          </motion.div>

          {/* Credalyzer Card */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5 }}
            className="bg-[#0B1F3A] border border-slate-800 rounded-2xl p-8 shadow-xl flex flex-col justify-between relative overflow-hidden text-white"
          >
            {/* Top green border accent */}
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-emerald-500" />
            
            <div>
              <div className="flex items-center justify-between mb-6">
                <span className="text-sm font-bold text-emerald-400 uppercase tracking-wider">With Credalyzer AI</span>
                <span className="text-xs font-semibold text-emerald-300 bg-emerald-950/80 px-2.5 py-1 rounded-md border border-emerald-800/40">
                  Instant & Reliable
                </span>
              </div>
              
              <h4 className="text-xl font-bold text-white mb-8">
                Automated Bank Analysis
              </h4>
              
              <ul className="space-y-5">
                <li className="flex items-start">
                  <div className="bg-emerald-950 text-emerald-400 p-1 rounded-lg mr-3.5 mt-0.5 border border-emerald-800/30">
                    <Check className="h-4 w-4" />
                  </div>
                  <div>
                    <h5 className="text-sm font-bold text-slate-100">Upload PDF</h5>
                    <p className="text-xs text-slate-300 mt-0.5">Simply drag & drop statements. Handles multi-page scans directly.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-emerald-950 text-emerald-400 p-1 rounded-lg mr-3.5 mt-0.5 border border-emerald-800/30">
                    <Check className="h-4 w-4" />
                  </div>
                  <div>
                    <h5 className="text-sm font-bold text-slate-100">Automatic analysis</h5>
                    <p className="text-xs text-slate-300 mt-0.5">No transcription or formulas. System extracts all transactions instantly.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-emerald-950 text-emerald-400 p-1 rounded-lg mr-3.5 mt-0.5 border border-emerald-800/30">
                    <Check className="h-4 w-4" />
                  </div>
                  <div>
                    <h5 className="text-sm font-bold text-slate-100">AI-powered financial insights</h5>
                    <p className="text-xs text-slate-300 mt-0.5">Classifies all categories, highlights bounces, and extracts EMIs.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-emerald-950 text-emerald-400 p-1 rounded-lg mr-3.5 mt-0.5 border border-emerald-800/30">
                    <Check className="h-4 w-4" />
                  </div>
                  <div>
                    <h5 className="text-sm font-bold text-slate-100">Professional report</h5>
                    <p className="text-xs text-slate-300 mt-0.5">Lender-ready underwriting brief ready to download or integrate.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-emerald-950 text-emerald-400 p-1 rounded-lg mr-3.5 mt-0.5 border border-emerald-800/30">
                    <Check className="h-4 w-4" />
                  </div>
                  <div>
                    <h5 className="text-sm font-bold text-slate-100">Complete in about a minute</h5>
                    <p className="text-xs text-emerald-300 mt-0.5">Zero backlog. Scale your processing capacity infinitely.</p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="pt-8 mt-8 border-t border-slate-800 text-xs font-semibold text-slate-400 flex justify-between items-center">
              <span>AVERAGE TIME PER FILE</span>
              <span className="text-emerald-400 font-extrabold text-sm flex items-center">
                <Clock className="h-4 w-4 mr-1" />
                ~60 Seconds
              </span>
            </div>
          </motion.div>

        </div>

        {/* Small transition phrase */}
        <div className="text-center mt-12">
          <button 
            onClick={() => {
              const element = document.getElementById("demo-form");
              if (element) {
                element.scrollIntoView({ behavior: "smooth" });
              }
            }}
            className="inline-flex items-center text-sm font-bold text-emerald-600 hover:text-emerald-700 transition-colors group cursor-pointer"
          >
            <span>Calculate potential time savings for your volume</span>
            <ChevronRight className="ml-1 h-4 w-4 group-hover:translate-x-0.5 transition-transform" />
          </button>
        </div>

      </div>
    </section>
  );
}
