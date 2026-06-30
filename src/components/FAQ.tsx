"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus, HelpCircle } from "lucide-react";

const faqs = [
  {
    question: "Does Credalyzer replace credit analysts?",
    answer: "No. Credalyzer is designed to assist credit analysts, not replace them. It automates the tedious, manual extraction of transactions and calculates basic ratios. This frees up your underwriting team to focus on high-value, subjective decisioning and fraud reviews rather than manual data entry.",
  },
  {
    question: "How long does analysis take?",
    answer: "About one minute for most bank statements, regardless of length. Multi-month statements containing thousands of transactions are processed in the same time frame. Large batch files can also be processed concurrently.",
  },
  {
    question: "Is customer data stored?",
    answer: "Data security is our primary focus. By default, our cloud deployment processes statement PDFs temporarily and deletes them immediately after extracting the indicators. For enterprise partners, we offer flexible data retention policies, on-premise deployments, and custom database hosting configurations.",
  },
  {
    question: "Can this integrate with our systems?",
    answer: "Yes. We offer fully-documented REST APIs and Webhook notifications. You can trigger statement analysis directly from your existing CRM, Loan Origination System (LOS), or credit evaluation platform, and receive the structured JSON results instantly.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    if (openIndex === index) {
      setOpenIndex(null);
    } else {
      setOpenIndex(index);
    }
  };

  return (
    <section id="faq" className="py-24 bg-[#F8FAFC]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-xs font-bold text-emerald-600 uppercase tracking-widest mb-3">Support & Details</h2>
          <h3 className="text-3xl sm:text-4xl font-extrabold text-[#0B1F3A] tracking-tight">
            Frequently Asked Questions
          </h3>
          <p className="text-sm text-slate-500 mt-3">
            Got questions about Credalyzer security, speed, or team workflows? We have answers.
          </p>
        </div>

        {/* Accordions */}
        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="bg-white border border-slate-200/80 rounded-2xl overflow-hidden transition-all duration-200 shadow-sm"
              >
                <button
                  onClick={() => toggleFAQ(idx)}
                  className="w-full flex items-center justify-between p-6 text-left hover:bg-slate-50/50 transition-colors cursor-pointer"
                >
                  <div className="flex items-center space-x-3.5 pr-4">
                    <HelpCircle className={`h-5 w-5 shrink-0 transition-colors ${isOpen ? "text-emerald-600" : "text-slate-400"}`} />
                    <span className="text-base font-bold text-[#0B1F3A] tracking-tight">
                      {faq.question}
                    </span>
                  </div>
                  <div className="bg-slate-100 p-1 rounded-lg text-slate-500 shrink-0">
                    {isOpen ? <Minus className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0 }}
                      animate={{ height: "auto" }}
                      exit={{ height: 0 }}
                      transition={{ duration: 0.2, ease: "easeInOut" }}
                    >
                      <div className="px-6 pb-6 pt-1 text-sm text-slate-500 leading-relaxed border-t border-slate-100 bg-slate-50/30">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
