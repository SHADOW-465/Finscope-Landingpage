"use client";

import { motion } from "framer-motion";
import { 
  FileText, 
  Download, 
  ShieldCheck, 
  Activity, 
  TrendingUp, 
  Briefcase 
} from "lucide-react";

export default function ReportPreview() {
  
  const handleDownload = () => {
    // Generate a simple text blob as a placeholder for the PDF download
    const reportText = `
CREDALYZER CONFIDENTIAL CREDIT UNDERWRITING REPORT
================================================
Report ID: CRD-2026-9901
Target Entity: Vanguard Trading LLC
Generated: June 30, 2026
Underwriting Grade: AAA (Low Risk)

EXECUTIVE SUMMARY
-----------------
Analysis of 5 months of bank statements (Jan 1, 2026 - May 31, 2026) shows extremely stable cash flow dynamics. Average monthly inflows are $42,500. Average monthly outflows are $32,400. Debt service capacity remains strong with a coverage ratio of 2.41x. One cheque bounce detected in May was resolved within 24 hours.

INCOME ANALYSIS
---------------
- Jan Inflows: $39,200
- Feb Inflows: $41,500
- Mar Inflows: $44,100
- Apr Inflows: $42,800
- May Inflows: $44,900
Average: $42,500 / month
Regular business receipts represent 82% of inflows.

RISK & EMI OBLIGATIONS
----------------------
- Auto-Detected Loan 1: HDFC Business Loan - $450/mo (EMI)
- Auto-Detected Loan 2: Chase Auto Loan - $320/mo (EMI)
- Flagged Outflow: Mercury Finance - $120/mo (Recurring)
Total detected monthly debt payments: $890/mo.

RECOMMENDATION
--------------
APPROVED (Low Risk Grade AAA). We recommend a maximum exposure limit of $150,000 based on historical DSCR of 2.41x and consistent inflow trends.
    `;
    
    const blob = new Blob([reportText], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "Credalyzer_Underwriting_Sample_Report.txt";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="report-preview" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-xs font-bold text-emerald-600 uppercase tracking-widest mb-3">Report Sample</h2>
          <h3 className="text-3xl sm:text-4xl font-extrabold text-[#0B1F3A] tracking-tight">
            Lender-Ready Underwriting Reports
          </h3>
          <p className="text-base text-slate-500 mt-4 leading-relaxed">
            Every statement parsed generates a standardized, auditable credit brief that you can download as a PDF or ingest via API.
          </p>
        </div>

        {/* PDF Document Container Mockup */}
        <div className="max-w-4xl mx-auto">
          
          {/* Download Control Bar */}
          <div className="bg-slate-50 border border-slate-200 border-b-0 rounded-t-2xl px-6 py-4 flex justify-between items-center flex-wrap gap-4">
            <div className="flex items-center space-x-2.5 text-xs text-slate-500 font-bold uppercase tracking-wider">
              <FileText className="h-4.5 w-4.5 text-slate-400" />
              <span>Sample_Underwriting_Brief.pdf (3 Pages)</span>
            </div>
            <button
              onClick={handleDownload}
              className="inline-flex items-center bg-[#0B1F3A] hover:bg-[#0B1F3A]/90 text-white text-xs font-bold px-4 py-2.5 rounded-lg transition-all shadow-sm cursor-pointer"
            >
              <Download className="mr-2 h-4 w-4" />
              Download Sample Report
            </button>
          </div>

          {/* Paper Sheet Document */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5 }}
            className="bg-white border border-slate-200 shadow-xl rounded-b-2xl p-8 md:p-12 overflow-x-auto"
          >
            {/* Inner A4 Container styling */}
            <div className="min-w-[650px] text-slate-800">
              
              {/* Document Header */}
              <div className="flex justify-between items-start border-b-2 border-[#0B1F3A] pb-6 mb-8">
                <div>
                  <h4 className="text-2xl font-black text-[#0B1F3A] tracking-tight">Credalyzer Analytics</h4>
                  <p className="text-[10px] text-slate-500 font-bold uppercase tracking-widest mt-0.5">Automated Risk & Credit Engine</p>
                </div>
                <div className="text-right text-xs">
                  <p className="font-bold text-[#0B1F3A]">CONFIDENTIAL CREDIT BRIEF</p>
                  <p className="text-[10px] text-slate-400 mt-1">REPORT ID: CRD-2026-9901</p>
                  <p className="text-[10px] text-slate-400">DATE GENERATED: June 30, 2026</p>
                </div>
              </div>

              {/* Entity info metadata */}
              <div className="grid grid-cols-2 gap-4 bg-[#F8FAFC] border border-slate-200/60 rounded-xl p-5 mb-8 text-xs">
                <div>
                  <span className="text-[9px] font-bold text-slate-400 uppercase tracking-wider block">Target Entity</span>
                  <span className="font-extrabold text-[#0B1F3A] text-sm mt-0.5 block">Vanguard Trading LLC</span>
                  <span className="text-slate-500 block mt-1">Registrar ID: US-DE-992819</span>
                </div>
                <div className="border-l border-slate-200/80 pl-6">
                  <span className="text-[9px] font-bold text-slate-400 uppercase tracking-wider block">Underwriting Rating</span>
                  <div className="flex items-center space-x-1.5 mt-0.5">
                    <span className="font-black text-emerald-600 text-sm">GRADE AAA (Low Risk)</span>
                    <ShieldCheck className="h-4 w-4 text-emerald-500" />
                  </div>
                  <span className="text-slate-500 block mt-1">Statement Period: 01 Jan 2026 - 31 May 2026</span>
                </div>
              </div>

              {/* Section 1: Executive Summary */}
              <div className="mb-8">
                <h5 className="text-xs font-bold text-[#0B1F3A] uppercase tracking-widest border-b border-slate-200 pb-1.5 mb-3">
                  1. Executive Summary
                </h5>
                <p className="text-xs text-slate-600 leading-relaxed mb-4">
                  Financial analysis conducted over a five-month bank statement trajectory indicates robust operations with highly predictable cash flows. Average monthly credits total <strong className="text-[#0B1F3A]">$42,500</strong> with debits averaging <strong className="text-[#0B1F3A]">$32,400</strong>. Net monthly surplus stands at <strong className="text-[#0B1F3A]">$10,100</strong>. Auto-extracted Debt-Service Coverage Ratio is calculated at <strong className="text-[#0B1F3A]">2.41x</strong>, representing significant capacity for credit expansion.
                </p>
              </div>

              {/* Section 2: Income Analysis */}
              <div className="mb-8">
                <h5 className="text-xs font-bold text-[#0B1F3A] uppercase tracking-widest border-b border-slate-200 pb-1.5 mb-3">
                  2. Income Analysis
                </h5>
                
                <table className="w-full text-left text-xs mb-4">
                  <thead>
                    <tr className="bg-slate-50 border-b border-slate-200 font-bold text-slate-500">
                      <th className="py-2.5 px-3">Month</th>
                      <th className="py-2.5 px-3 text-right">Credits (Inflows)</th>
                      <th className="py-2.5 px-3 text-right">Debits (Outflows)</th>
                      <th className="py-2.5 px-3 text-right">Net Cash Flow</th>
                      <th className="py-2.5 px-3 text-center">Regular Ratio</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 font-medium">
                    <tr>
                      <td className="py-2.5 px-3">January 2026</td>
                      <td className="py-2.5 px-3 text-right text-emerald-600">$39,200</td>
                      <td className="py-2.5 px-3 text-right text-slate-500">$30,500</td>
                      <td className="py-2.5 px-3 text-right text-slate-800">+$8,700</td>
                      <td className="py-2.5 px-3 text-center">80.2%</td>
                    </tr>
                    <tr>
                      <td className="py-2.5 px-3">February 2026</td>
                      <td className="py-2.5 px-3 text-right text-emerald-600">$41,500</td>
                      <td className="py-2.5 px-3 text-right text-slate-500">$31,200</td>
                      <td className="py-2.5 px-3 text-right text-slate-800">+$10,300</td>
                      <td className="py-2.5 px-3 text-center">82.1%</td>
                    </tr>
                    <tr>
                      <td className="py-2.5 px-3">March 2026</td>
                      <td className="py-2.5 px-3 text-right text-emerald-600">$44,100</td>
                      <td className="py-2.5 px-3 text-right text-slate-500">$32,800</td>
                      <td className="py-2.5 px-3 text-right text-slate-800">+$11,300</td>
                      <td className="py-2.5 px-3 text-center">83.5%</td>
                    </tr>
                    <tr>
                      <td className="py-2.5 px-3">April 2026</td>
                      <td className="py-2.5 px-3 text-right text-emerald-600">$42,800</td>
                      <td className="py-2.5 px-3 text-right text-slate-500">$33,100</td>
                      <td className="py-2.5 px-3 text-right text-slate-800">+$9,700</td>
                      <td className="py-2.5 px-3 text-center">82.0%</td>
                    </tr>
                    <tr>
                      <td className="py-2.5 px-3">May 2026</td>
                      <td className="py-2.5 px-3 text-right text-emerald-600">$44,900</td>
                      <td className="py-2.5 px-3 text-right text-slate-500">$34,400</td>
                      <td className="py-2.5 px-3 text-right text-slate-800">+$10,500</td>
                      <td className="py-2.5 px-3 text-center">82.2%</td>
                    </tr>
                    <tr className="bg-slate-50 font-bold border-t border-slate-200">
                      <td className="py-2.5 px-3">Average Monthly</td>
                      <td className="py-2.5 px-3 text-right text-emerald-600">$42,500</td>
                      <td className="py-2.5 px-3 text-right text-slate-500">$32,400</td>
                      <td className="py-2.5 px-3 text-right text-slate-800">+$10,100</td>
                      <td className="py-2.5 px-3 text-center">82.0%</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              {/* Section 3: Risk Analysis */}
              <div className="mb-8">
                <h5 className="text-xs font-bold text-[#0B1F3A] uppercase tracking-widest border-b border-slate-200 pb-1.5 mb-3">
                  3. Risk & Obligations Analysis
                </h5>
                <div className="space-y-3.5 text-xs">
                  <div className="border border-slate-200/80 rounded-lg p-3.5 flex items-start space-x-3.5">
                    <Activity className="h-4.5 w-4.5 text-[#0B1F3A] shrink-0 mt-0.5" />
                    <div>
                      <p className="font-bold text-[#0B1F3A]">Auto-Detected Debt Obligations: $770/mo</p>
                      <p className="text-slate-500 mt-0.5">Recurring HDFC Bank ($450) and Chase Finance ($320) debit cycles successfully extracted. Inflow-to-debt ratio is 18.1%, representing safe leverage parameters.</p>
                    </div>
                  </div>
                  <div className="border border-red-100 bg-red-50/20 rounded-lg p-3.5 flex items-start space-x-3.5">
                    <TrendingUp className="h-4.5 w-4.5 text-red-600 shrink-0 mt-0.5" />
                    <div>
                      <p className="font-bold text-red-900">Cheque Bounce Alert: 1 Event</p>
                      <p className="text-slate-600 mt-0.5">A returned cheque occurred on May 12 due to a standard supplier delay. Verified subsequent account ledger shows immediate cover funds arrival and clearance within 24 hours.</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Section 4: Recommendation */}
              <div className="bg-emerald-50/50 border border-emerald-200/60 rounded-xl p-5 mb-3">
                <h5 className="text-xs font-bold text-emerald-800 uppercase tracking-widest flex items-center mb-2">
                  <Briefcase className="h-4 w-4 mr-1.5 text-emerald-600" />
                  4. Underwriter Recommendation
                </h5>
                <p className="text-xs text-slate-700 leading-relaxed font-semibold">
                  APPROVED FOR LOW RISK EXPOSURE. Based on an average monthly cash accumulation of $10,100, active verified EMI commitments, and a primary commercial supplier concentration base, we recommend a credit limit of up to <strong className="text-[#0B1F3A]">$150,000</strong>.
                </p>
              </div>

            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
