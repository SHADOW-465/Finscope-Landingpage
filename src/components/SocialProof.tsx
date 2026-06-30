"use client";

import { motion } from "framer-motion";
import { 
  Briefcase, 
  Building2, 
  Users, 
  FileCheck, 
  Network 
} from "lucide-react";

const targetAudiences = [
  {
    title: "Loan Brokers",
    role: "Faster Deal Closures",
    description: "Package loan files 10x faster. Convert raw customer statements into standard lender-ready financial summaries that secure faster terms.",
    metric: "90% faster packager prep",
    icon: Briefcase,
    color: "bg-blue-50 text-blue-700 border-blue-100",
  },
  {
    title: "Finance Companies",
    role: "Standardized Operations",
    description: "Enforce consistent underwriting standards across multiple branch networks. Reduce compliance audits and operational overhead.",
    metric: "100% policy compliance",
    icon: Building2,
    color: "bg-emerald-50 text-emerald-700 border-emerald-100",
  },
  {
    title: "NBFCs",
    role: "High-Volume Automation",
    description: "Automate raw statement ingestion for micro-loans or retail loans. Instantly filter out bounced payments and poor credit risks at scale.",
    metric: "12,000+ files processed/mo",
    icon: Network,
    color: "bg-indigo-50 text-indigo-700 border-indigo-100",
  },
  {
    title: "Credit Analysts",
    role: "Eliminate Manual Grunt Work",
    description: "Skip manual transaction extraction and Excel macro sorting. Credalyzer structures and categorizes bank data so you focus on decisioning.",
    metric: "Save 3 hrs per file",
    icon: FileCheck,
    color: "bg-amber-50 text-amber-700 border-amber-100",
  },
  {
    title: "Financial Syndicates",
    role: "Consolidated Risk Analysis",
    description: "Review complex high-value files across multiple participants. Ensure every member reads the exact same verified cash flow analytics.",
    metric: "Zero dispute underwriting",
    icon: Users,
    color: "bg-purple-50 text-purple-700 border-purple-100",
  },
];

export default function SocialProof() {
  return (
    <section id="who-its-for" className="py-24 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-xs font-bold text-emerald-600 uppercase tracking-widest mb-3">Target Audience</h2>
          <h3 className="text-3xl sm:text-4xl font-extrabold text-[#0B1F3A] tracking-tight">
            Built for Modern Lending Teams
          </h3>
          <p className="text-base text-slate-500 mt-4 leading-relaxed">
            Credalyzer is engineered specifically for operations requiring rapid, accurate, and structured underwriting insights from bank statements.
          </p>
        </div>

        {/* Audience Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {targetAudiences.map((audience, idx) => {
            const Icon = audience.icon;
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
                    <div className={`p-2.5 rounded-xl border ${audience.color}`}>
                      <Icon className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-[#0B1F3A] tracking-tight">{audience.title}</h4>
                      <p className="text-xs font-semibold text-emerald-600 uppercase tracking-wider mt-0.5">{audience.role}</p>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-sm text-slate-500 leading-relaxed mb-6">
                    {audience.description}
                  </p>
                </div>

                {/* Metric footer */}
                <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs">
                  <span className="font-semibold text-slate-400 uppercase tracking-wider">Key Outcome</span>
                  <span className="font-bold text-[#0B1F3A] bg-slate-50 border border-slate-200/50 px-2.5 py-1 rounded-lg">
                    {audience.metric}
                  </span>
                </div>
              </motion.div>
            );
          })}

          {/* Last Promo card to prompt demo request */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.4, delay: 5 * 0.05 }}
            className="bg-gradient-to-br from-[#0B1F3A] to-[#1E3A5F] rounded-2xl p-6 shadow-sm flex flex-col justify-between text-white border border-slate-900"
          >
            <div>
              <h4 className="text-lg font-bold tracking-tight mb-2">Need a custom deployment?</h4>
              <p className="text-sm text-slate-300 leading-relaxed">
                Whether you need dedicated servers, local bank API integrations, or customized credit report schemas, our team can tailor Credalyzer to your lending workflows.
              </p>
            </div>
            <button 
              onClick={() => {
                const element = document.getElementById("demo-form");
                if (element) {
                  element.scrollIntoView({ behavior: "smooth" });
                }
              }}
              className="mt-6 w-full text-center bg-emerald-600 hover:bg-emerald-500 text-white font-semibold py-3 rounded-xl text-sm transition-all shadow-md shadow-emerald-950/20 cursor-pointer"
            >
              Contact Enterprise Sales
            </button>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
