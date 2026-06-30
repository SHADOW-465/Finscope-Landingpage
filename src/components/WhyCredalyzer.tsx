"use client";

import { motion } from "framer-motion";
import { 
  Zap, 
  Layers, 
  ShieldAlert, 
  Sliders, 
  UserCheck, 
  History, 
  Award,
  ChevronRight
} from "lucide-react";

const benefits = [
  {
    title: "Reduce Underwriting Time",
    description: "Shave hours off loan file preparation. Convert bank statements into clean analytics reports in under 60 seconds.",
    icon: Zap,
    metric: "90% time reduction",
  },
  {
    title: "Process More Loan Files",
    description: "Unlock growth by scaling statement ingestion capacity. Eliminate analyst queues and handle peak file volumes with ease.",
    icon: Layers,
    metric: "3x monthly capacity",
  },
  {
    title: "Reduce Manual Errors",
    description: "Eliminate spreadsheet typos, copy-paste blunders, and missed transactions. Credalyzer ensures machine-accurate parser outputs.",
    icon: ShieldAlert,
    metric: "Zero transcription errors",
  },
  {
    title: "Improve Consistency",
    description: "Enforce uniform analysis parameters across your team. Ensure every loan applicant is graded on the exact same risk criteria.",
    icon: Sliders,
    metric: "100% standardized criteria",
  },
  {
    title: "Increase Analyst Productivity",
    description: "Empower credit teams to focus on complex underwriting decisions instead of typing transactions into templates.",
    icon: UserCheck,
    metric: "4x throughput per analyst",
  },
  {
    title: "Maintain Audit Trail",
    description: "Keep a transparent, step-by-step trace of how income, EMIs, and ratios were auto-extracted. Audit with confidence.",
    icon: History,
    metric: "Full transaction tracing",
  },
  {
    title: "Evidence-Backed Decisions",
    description: "Every credit recommendation links back directly to line items in the bank statement, giving underwriters solid proof.",
    icon: Award,
    metric: "Line-item proof checks",
  },
];

export default function WhyCredalyzer() {
  return (
    <section className="py-24 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-xs font-bold text-emerald-600 uppercase tracking-widest mb-3">Core Outcomes</h2>
          <h3 className="text-3xl sm:text-4xl font-extrabold text-[#0B1F3A] tracking-tight">
            Why Teams Choose Credalyzer
          </h3>
          <p className="text-base text-slate-500 mt-4 leading-relaxed">
            Move away from manual spreadsheet entry. Credalyzer delivers immediate, measurable bottom-line efficiency gains for credit operations.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, idx) => {
            const Icon = benefit.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className="bg-white border border-slate-200/80 rounded-2xl p-6 shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  {/* Icon & Title */}
                  <div className="flex items-center space-x-3.5 mb-5">
                    <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-200/50 text-[#0B1F3A]">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h4 className="text-lg font-bold text-[#0B1F3A] tracking-tight">{benefit.title}</h4>
                  </div>

                  {/* Description */}
                  <p className="text-sm text-slate-500 leading-relaxed mb-6">
                    {benefit.description}
                  </p>
                </div>

                {/* Metric footer */}
                <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs">
                  <span className="font-semibold text-slate-400 uppercase tracking-wider">Business Impact</span>
                  <span className="font-extrabold text-emerald-700 bg-emerald-50 border border-emerald-100 px-2.5 py-1 rounded-lg">
                    {benefit.metric}
                  </span>
                </div>
              </motion.div>
            );
          })}

          {/* Prompt card */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.4, delay: 7 * 0.05 }}
            className="bg-[#0B1F3A] border border-slate-900 rounded-2xl p-6 shadow-sm flex flex-col justify-between text-white"
          >
            <div>
              <h4 className="text-lg font-bold tracking-tight mb-2">Measure your savings</h4>
              <p className="text-sm text-slate-300 leading-relaxed">
                Provide us with your current file volume and team size, and we'll calculate your exact monthly time and dollar savings in the live demo.
              </p>
            </div>
            <button
              onClick={() => {
                const element = document.getElementById("demo-form");
                if (element) {
                  element.scrollIntoView({ behavior: "smooth" });
                }
              }}
              className="mt-6 w-full text-center bg-emerald-600 hover:bg-emerald-500 text-white font-bold py-3 rounded-xl text-sm transition-all shadow-md shadow-emerald-950/20 cursor-pointer flex items-center justify-center space-x-2"
            >
              <span>Schedule Savings Review</span>
              <ChevronRight className="h-4 w-4" />
            </button>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
