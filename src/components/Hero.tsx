"use client";

import { motion } from "framer-motion";
import { 
  ArrowRight, 
  FileText, 
  TrendingUp, 
  AlertTriangle, 
  CheckCircle, 
  Activity, 
  Sparkles,
  CreditCard,
  DollarSign
} from "lucide-react";

export default function Hero() {
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
    <section className="relative overflow-hidden bg-white pt-28 pb-20 lg:pt-36 lg:pb-28">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-[#F8FAFC] -z-10 rounded-l-[100px] hidden lg:block" />
      <div className="absolute top-1/4 right-[10%] w-[400px] h-[400px] bg-emerald-500/5 rounded-full blur-3xl -z-10" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Hero Left Info */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="inline-flex items-center space-x-2 bg-emerald-50 border border-emerald-200/50 text-emerald-800 px-3 py-1 rounded-full text-xs font-semibold tracking-wide uppercase mb-6">
                <Sparkles className="h-3.5 w-3.5" />
                <span>Next-Gen Underwriting</span>
              </div>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-[46px] font-extrabold text-[#0B1F3A] tracking-tight leading-[1.1] mb-6"
            >
              Turn 50 Pages of Bank Statements Into One Clear Credit Decision.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg text-slate-600 leading-relaxed mb-8 max-w-xl"
            >
              Upload a customer's bank statement and receive a complete financial analysis in about a minute.
              <span className="block mt-2 text-slate-700 font-medium">
                Automatically identify income patterns, cheque bounces, existing loans, repayment capacity, banking behaviour and generate a professional underwriting report.
              </span>
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 mb-10"
            >
              <button
                onClick={() => handleScrollTo("demo-form")}
                className="inline-flex items-center justify-center bg-[#0B1F3A] hover:bg-[#0B1F3A]/90 text-white px-8 py-4 rounded-xl text-base font-semibold shadow-lg shadow-[#0B1F3A]/10 hover:shadow-xl transition-all cursor-pointer group"
              >
                <span>Book a Demo</span>
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button
                onClick={() => handleScrollTo("report-preview")}
                className="inline-flex items-center justify-center border-2 border-slate-200 hover:border-slate-300 bg-white text-slate-700 hover:text-slate-900 px-8 py-4 rounded-xl text-base font-semibold transition-all cursor-pointer"
              >
                <FileText className="mr-2 h-5 w-5 text-slate-500" />
                <span>View Sample Report</span>
              </button>
            </motion.div>

            {/* Quick Metrics */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="grid grid-cols-3 gap-6 pt-8 border-t border-slate-100"
            >
              <div>
                <p className="text-2xl font-bold text-[#0B1F3A]">&lt; 60s</p>
                <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Analysis Speed</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-[#0B1F3A]">99.8%</p>
                <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Extraction Accuracy</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-[#0B1F3A]">90%</p>
                <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Time Saved</p>
              </div>
            </motion.div>
          </div>

          {/* Hero Right Dashboard Mockup */}
          <div className="lg:col-span-6 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white rounded-2xl border border-slate-200 shadow-2xl overflow-hidden p-6 w-full max-w-xl mx-auto"
            >
              {/* Mockup Header */}
              <div className="flex items-center justify-between pb-4 border-b border-slate-100 mb-5">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 rounded-full bg-red-400" />
                  <div className="w-3 h-3 rounded-full bg-yellow-400" />
                  <div className="w-3 h-3 rounded-full bg-emerald-400" />
                  <span className="text-xs font-semibold text-slate-500 ml-2">Vanguard Trading LLC • Bank Analysis</span>
                </div>
                <div className="bg-emerald-50 text-emerald-800 text-[10px] font-bold px-2.5 py-0.5 rounded-full border border-emerald-100 uppercase tracking-wide">
                  Verified Analysis
                </div>
              </div>

              {/* Grid Content */}
              <div className="grid grid-cols-2 gap-4">
                
                {/* 1. Credit Score Card */}
                <div className="bg-[#F8FAFC] border border-slate-100 rounded-xl p-4 flex flex-col justify-between h-[155px]">
                  <div className="flex justify-between items-start">
                    <span className="text-xs font-bold text-slate-500 tracking-wide uppercase">Credit Score</span>
                    <Activity className="h-4 w-4 text-slate-400" />
                  </div>
                  <div className="flex flex-col items-center justify-center my-1 relative">
                    {/* Semi-circular gauge mock */}
                    <div className="relative w-24 h-12 overflow-hidden flex items-end justify-center">
                      <div className="absolute top-0 left-0 w-24 h-24 rounded-full border-8 border-slate-200" />
                      <div className="absolute top-0 left-0 w-24 h-24 rounded-full border-8 border-emerald-500 border-b-transparent border-r-transparent rotate-[45deg]" />
                      <span className="text-2xl font-black text-[#0B1F3A] z-10 -mb-1">785</span>
                    </div>
                    <span className="text-[10px] font-bold text-emerald-600 uppercase tracking-wide mt-1">Excellent (Low Risk)</span>
                  </div>
                </div>

                {/* 2. Monthly Inflows Card */}
                <div className="bg-[#F8FAFC] border border-slate-100 rounded-xl p-4 flex flex-col justify-between h-[155px]">
                  <div className="flex justify-between items-start">
                    <span className="text-xs font-bold text-slate-500 tracking-wide uppercase">Monthly Credits</span>
                    <TrendingUp className="h-4 w-4 text-emerald-500" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-black text-[#0B1F3A] tracking-tight">$42,500</h3>
                    <p className="text-[11px] text-slate-500 mt-1">Avg Inflows (5 Months)</p>
                  </div>
                  <div className="flex items-center space-x-1 text-emerald-600 text-[11px] font-bold">
                    <span>+12.4% vs prev. month</span>
                  </div>
                </div>

                {/* 3. Cash Flow Graph Card */}
                <div className="col-span-2 bg-[#F8FAFC] border border-slate-100 rounded-xl p-4">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-xs font-bold text-slate-500 tracking-wide uppercase">Monthly Cash Flow Trend</span>
                    <span className="text-[10px] font-semibold text-slate-400">Jan - May 2026</span>
                  </div>
                  <div className="h-16 w-full flex items-end justify-between pt-2">
                    <svg className="w-full h-full overflow-visible" viewBox="0 0 300 50">
                      {/* Gradient fill */}
                      <defs>
                        <linearGradient id="chartGrad" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="0%" stopColor="#10B981" stopOpacity="0.25" />
                          <stop offset="100%" stopColor="#10B981" stopOpacity="0.0" />
                        </linearGradient>
                      </defs>
                      <path
                        d="M 5,42 Q 70,18 140,28 T 295,8"
                        fill="none"
                        stroke="#10B981"
                        strokeWidth="3"
                        strokeLinecap="round"
                      />
                      <path
                        d="M 5,42 Q 70,18 140,28 T 295,8 L 295,50 L 5,50 Z"
                        fill="url(#chartGrad)"
                      />
                      {/* Points */}
                      <circle cx="5" cy="42" r="3" fill="#10B981" />
                      <circle cx="75" cy="22" r="3" fill="#10B981" />
                      <circle cx="150" cy="28" r="3" fill="#10B981" />
                      <circle cx="225" cy="18" r="3" fill="#10B981" />
                      <circle cx="295" cy="8" r="4" fill="#0B1F3A" stroke="#10B981" strokeWidth="2" />
                    </svg>
                  </div>
                </div>

                {/* 4. Cheque Bounce Alert (Red Alert pill) */}
                <div className="col-span-2 bg-[#FEF2F2] border border-red-100 rounded-xl p-3 flex items-center justify-between">
                  <div className="flex items-center space-x-2.5">
                    <div className="bg-red-100 p-1.5 rounded-lg text-red-600">
                      <AlertTriangle className="h-4 w-4" />
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-red-950">1 Bounced Cheque Detected</h4>
                      <p className="text-[10px] text-red-700">May 12 • Insufficient Funds • Auto-resolved</p>
                    </div>
                  </div>
                  <span className="text-[10px] font-extrabold uppercase text-red-600 bg-white border border-red-200 px-2 py-0.5 rounded-md">
                    High Alert
                  </span>
                </div>

                {/* 5. Income Sources & EMI Auto-Detection split */}
                <div className="bg-[#F8FAFC] border border-slate-100 rounded-xl p-4 flex flex-col justify-between h-[160px]">
                  <span className="text-xs font-bold text-slate-500 tracking-wide uppercase mb-2">Income Sources</span>
                  <div className="space-y-2">
                    <div>
                      <div className="flex justify-between text-[11px] font-semibold text-slate-700 mb-0.5">
                        <span>Salary/Regular</span>
                        <span>82%</span>
                      </div>
                      <div className="w-full bg-slate-200 h-1.5 rounded-full overflow-hidden">
                        <div className="bg-[#0B1F3A] h-full rounded-full" style={{ width: "82%" }} />
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between text-[11px] font-semibold text-slate-700 mb-0.5">
                        <span>Business/Sales</span>
                        <span>12%</span>
                      </div>
                      <div className="w-full bg-slate-200 h-1.5 rounded-full overflow-hidden">
                        <div className="bg-emerald-500 h-full rounded-full" style={{ width: "12%" }} />
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between text-[11px] font-semibold text-slate-700 mb-0.5">
                        <span>Transfers/Gig</span>
                        <span>6%</span>
                      </div>
                      <div className="w-full bg-slate-200 h-1.5 rounded-full overflow-hidden">
                        <div className="bg-slate-500 h-full rounded-full" style={{ width: "6%" }} />
                      </div>
                    </div>
                  </div>
                </div>

                {/* 6. EMI / Auto-Detected Loans */}
                <div className="bg-[#F8FAFC] border border-slate-100 rounded-xl p-4 flex flex-col justify-between h-[160px]">
                  <span className="text-xs font-bold text-slate-500 tracking-wide uppercase mb-1">EMI Auto-Detection</span>
                  <div className="space-y-1.5 text-[11px]">
                    <div className="flex justify-between items-center py-1 border-b border-slate-200/50">
                      <div>
                        <p className="font-bold text-[#0B1F3A]">HDFC Business Loan</p>
                        <p className="text-[9px] text-slate-400">Monthly Obligation</p>
                      </div>
                      <span className="font-black text-[#0B1F3A]">$450</span>
                    </div>
                    <div className="flex justify-between items-center py-1">
                      <div>
                        <p className="font-bold text-[#0B1F3A]">Chase Auto EMI</p>
                        <p className="text-[9px] text-slate-400">Monthly Obligation</p>
                      </div>
                      <span className="font-black text-[#0B1F3A]">$320</span>
                    </div>
                  </div>
                  <div className="text-[9px] text-slate-400 text-center font-medium border-t border-slate-200/50 pt-1.5">
                    2 Active Loans Auto-detected
                  </div>
                </div>

                {/* 7. AI Underwriter Summary */}
                <div className="col-span-2 bg-[#F0FDF4] border border-emerald-100 rounded-xl p-4">
                  <div className="flex items-center space-x-1.5 text-emerald-800 text-xs font-bold uppercase tracking-wider mb-2">
                    <Sparkles className="h-3.5 w-3.5 text-emerald-600" />
                    <span>Credalyzer AI underwriting Insights</span>
                  </div>
                  <p className="text-xs text-slate-700 leading-relaxed">
                    "Consistent monthly credits of <strong className="text-[#0B1F3A]">$42.5k</strong>. Primary income stems from regular commercial client payments. 2 auto-detected EMIs total <strong className="text-[#0B1F3A]">$770/mo</strong>. The single bounced cheque in May was resolved in 24 hours, posing minimal default risk."
                  </p>
                </div>

              </div>
            </motion.div>
            
            {/* Small floating badge */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="absolute -bottom-6 -left-6 bg-white border border-slate-200 rounded-xl p-4 shadow-xl hidden md:flex items-center space-x-3.5 max-w-[200px]"
            >
              <div className="bg-emerald-100 p-2.5 rounded-lg text-emerald-600">
                <CheckCircle className="h-5 w-5" />
              </div>
              <div>
                <p className="text-xs font-bold text-slate-500 uppercase tracking-wide">Underwriting</p>
                <p className="text-sm font-black text-[#0B1F3A]">Confidence 98%</p>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
