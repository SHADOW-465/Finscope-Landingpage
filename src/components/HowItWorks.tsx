"use client";

import { motion } from "framer-motion";
import { UploadCloud, Database, Cpu, FileCheck2, ArrowRight, ArrowDown } from "lucide-react";

const steps = [
  {
    step: "01",
    title: "Upload Statement PDF",
    description: "Upload your customer's bank statement PDF. Credalyzer handles multi-page scans, digital bank exports, and varying file sizes seamlessly.",
    icon: UploadCloud,
    badge: "Drag & Drop",
  },
  {
    step: "02",
    title: "AI Extraction",
    description: "Credalyzer reads every narration line, transaction date, credit/debit amount, and running balance. Standardizes text and formats.",
    icon: Database,
    badge: "99.8% Accurate",
  },
  {
    step: "03",
    title: "Intelligence Engine",
    description: "Our proprietary rules run in real-time to auto-detect monthly cash averages, regular income sources, active loan EMIs, and bounced payments.",
    icon: Cpu,
    badge: "150+ Indicators",
  },
  {
    step: "04",
    title: "Structured Report",
    description: "A professional, audit-ready underwriting credit summary is generated. View online, download as PDF, or pull via API.",
    icon: FileCheck2,
    badge: "Lender-Ready",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-xs font-bold text-emerald-600 uppercase tracking-widest mb-3">Underwriting Workflow</h2>
          <h3 className="text-3xl sm:text-4xl font-extrabold text-[#0B1F3A] tracking-tight">
            From Raw PDF to Credit Decision in 60 Seconds
          </h3>
          <p className="text-base text-slate-500 mt-4 leading-relaxed">
            Four simple steps. Zero manual data entry. Fully auditable, structured outputs.
          </p>
        </div>

        {/* Workflow Steps */}
        <div className="grid lg:grid-cols-4 gap-8 relative items-start">
          
          {/* Horizontal line for desktop connecting steps */}
          <div className="absolute top-[52px] left-[12%] right-[12%] h-0.5 bg-slate-200 hidden lg:block -z-10" />

          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div key={idx} className="relative flex flex-col items-center text-center px-4 group">
                
                {/* Icon Sphere */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.4, delay: idx * 0.1 }}
                  className="w-24 h-24 rounded-full bg-white border border-slate-200 shadow-sm flex items-center justify-center relative mb-6 group-hover:border-emerald-500 group-hover:shadow-md transition-all duration-300"
                >
                  <Icon className="h-8 w-8 text-[#0B1F3A] group-hover:text-emerald-600 transition-colors" />
                  
                  {/* Step Number Tag */}
                  <span className="absolute -top-1 -right-1 bg-emerald-600 text-white text-[10px] font-black w-6 h-6 rounded-full flex items-center justify-center border-2 border-white shadow-sm">
                    {step.step}
                  </span>
                </motion.div>

                {/* Step Metadata Badge */}
                <span className="text-[10px] font-extrabold uppercase text-slate-400 bg-slate-100 border border-slate-200/50 px-2 py-0.5 rounded-md tracking-wider mb-3">
                  {step.badge}
                </span>

                {/* Title */}
                <h4 className="text-lg font-bold text-[#0B1F3A] mb-3 tracking-tight group-hover:text-emerald-700 transition-colors">
                  {step.title}
                </h4>

                {/* Description */}
                <p className="text-sm text-slate-500 leading-relaxed max-w-[280px]">
                  {step.description}
                </p>

                {/* Down arrow for mobile between steps */}
                {idx < 3 && (
                  <div className="mt-8 lg:hidden text-slate-300">
                    <ArrowDown className="h-6 w-6 animate-bounce" />
                  </div>
                )}
              </div>
            );
          })}

        </div>

        {/* Call to action at workflow end */}
        <div className="bg-white border border-slate-200 rounded-2xl p-8 max-w-4xl mx-auto mt-16 flex flex-col md:flex-row items-center justify-between shadow-sm">
          <div className="mb-6 md:mb-0 text-center md:text-left">
            <h4 className="text-lg font-bold text-[#0B1F3A]">Want to see it analyze in real time?</h4>
            <p className="text-sm text-slate-500 mt-1">Book a quick demo and we will parse a statement file of your choice.</p>
          </div>
          <button
            onClick={() => {
              const element = document.getElementById("demo-form");
              if (element) {
                element.scrollIntoView({ behavior: "smooth" });
              }
            }}
            className="inline-flex items-center justify-center bg-emerald-600 hover:bg-emerald-500 text-white font-bold px-6 py-3 rounded-xl text-sm transition-all shadow-md shadow-emerald-950/10 cursor-pointer group"
          >
            <span>Book Live Demo</span>
            <ArrowRight className="ml-1.5 h-4 w-4 group-hover:translate-x-0.5 transition-transform" />
          </button>
        </div>

      </div>
    </section>
  );
}
