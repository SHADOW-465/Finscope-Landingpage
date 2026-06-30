"use client";

import { motion } from "framer-motion";
import { 
  BarChart3, 
  AlertOctagon, 
  Receipt, 
  FolderGit2, 
  ShieldCheck, 
  FileText, 
  MessageSquareCode, 
  EyeOff 
} from "lucide-react";

const features = [
  {
    title: "Financial Intelligence",
    description: "Automatically calculate monthly averages, overall credits/debits, net cash flow, and key trend directions across multiple statement files.",
    icon: BarChart3,
    color: "bg-emerald-50 text-emerald-600 border-emerald-100",
  },
  {
    title: "Cheque Bounce Detection",
    description: "Instantly flag failed cheques, insufficient funds penalties, and payment delays to assess applicant financial discipline.",
    icon: AlertOctagon,
    color: "bg-red-50 text-red-600 border-red-100",
  },
  {
    title: "Loan Detection",
    description: "Isolate recurring EMI payments, determine undisclosed debt obligations, and estimate total outstanding liabilities.",
    icon: Receipt,
    color: "bg-blue-50 text-blue-600 border-blue-100",
  },
  {
    title: "Income Classification",
    description: "Categorize bank inflows into salary, business revenue, external transfers, equity investments, and loan disbursements.",
    icon: FolderGit2,
    color: "bg-indigo-50 text-indigo-600 border-indigo-100",
  },
  {
    title: "Risk Assessment",
    description: "Generate structured underwriting insights, calculating debt-service coverage ratio (DSCR) and banking behavior scores.",
    icon: ShieldCheck,
    color: "bg-purple-50 text-purple-600 border-purple-100",
  },
  {
    title: "Professional Reports",
    description: "Download verified, lender-ready PDF or Excel underwriting reports complete with summaries, transaction tables, and charts.",
    icon: FileText,
    color: "bg-teal-50 text-teal-600 border-teal-100",
  },
  {
    title: "AI Assistant",
    description: "Query bank statements in plain English. Ask questions like 'Are there circular transactions?' and get verified answers immediately.",
    icon: MessageSquareCode,
    color: "bg-amber-50 text-amber-600 border-amber-100",
  },
  {
    title: "Fraud Indicators",
    description: "Identify suspicious circular transfers, multi-account laundering patterns, and unusual cash withdrawals that warrant manual review.",
    icon: EyeOff,
    color: "bg-rose-50 text-rose-600 border-rose-100",
  },
];

export default function Features() {
  return (
    <section id="features" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-xs font-bold text-emerald-600 uppercase tracking-widest mb-3">Platform Features</h2>
          <h3 className="text-3xl sm:text-4xl font-extrabold text-[#0B1F3A] tracking-tight">
            Underwriting Powered by Deep Financial AI
          </h3>
          <p className="text-base text-slate-500 mt-4 leading-relaxed">
            FinScope structures raw transaction data into standard underwriting indicators in under a minute, replacing manual reading.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, idx) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className="bg-white border border-slate-200/80 rounded-2xl p-6 shadow-sm hover:shadow-md hover:border-slate-300 transition-all flex flex-col justify-between group"
              >
                <div>
                  {/* Icon */}
                  <div className={`w-12 h-12 rounded-xl border flex items-center justify-center mb-6 transition-transform group-hover:scale-105 ${feature.color}`}>
                    <Icon className="h-6 w-6" />
                  </div>

                  {/* Title */}
                  <h4 className="text-lg font-bold text-[#0B1F3A] mb-3 tracking-tight">
                    {feature.title}
                  </h4>

                  {/* Description */}
                  <p className="text-sm text-slate-500 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
