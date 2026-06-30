"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  LineChart, 
  Wallet, 
  ArrowDownRight, 
  ShieldAlert, 
  HelpCircle, 
  MessageSquare,
  Sparkles,
  Building,
  ArrowUpRight,
  TrendingDown,
  Percent,
  RefreshCw,
  Search,
  CheckCircle
} from "lucide-react";

type TabName = "Overview" | "Income" | "Expenses" | "Risk" | "Loans" | "Fraud" | "AI Chat";

export default function DashboardShowcase() {
  const [activeTab, setActiveTab] = useState<TabName>("Overview");
  
  // AI Chat mock responses
  const [chatQuestion, setChatQuestion] = useState<string | null>(null);
  const [chatAnswer, setChatAnswer] = useState<string | null>(null);
  const [chatLoading, setChatLoading] = useState(false);

  const handleAskQuestion = (question: string, answer: string) => {
    setChatLoading(true);
    setChatQuestion(question);
    setChatAnswer(null);
    setTimeout(() => {
      setChatLoading(false);
      setChatAnswer(answer);
    }, 800);
  };

  const tabs: TabName[] = ["Overview", "Income", "Expenses", "Risk", "Loans", "Fraud", "AI Chat"];

  return (
    <section id="dashboard-showcase" className="py-24 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-xs font-bold text-emerald-600 uppercase tracking-widest mb-3">Interactive Demo</h2>
          <h3 className="text-3xl sm:text-4xl font-extrabold text-[#0B1F3A] tracking-tight">
            Explore the FinScope Interface
          </h3>
          <p className="text-base text-slate-500 mt-4 leading-relaxed">
            Click through the dashboard views below to see how raw transaction streams are categorized and analyzed for underwriting.
          </p>
        </div>

        {/* Tab Controls */}
        <div className="flex flex-wrap justify-center gap-2 mb-10 border-b border-slate-200 pb-5 max-w-4xl mx-auto">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => {
                setActiveTab(tab);
                setChatQuestion(null);
                setChatAnswer(null);
              }}
              className={`px-5 py-2.5 rounded-lg text-sm font-semibold transition-all cursor-pointer ${
                activeTab === tab
                  ? "bg-[#0B1F3A] text-white shadow-md shadow-[#0B1F3A]/10"
                  : "text-slate-500 hover:text-[#0B1F3A] hover:bg-slate-50"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Dynamic Display Area */}
        <div className="max-w-5xl mx-auto bg-white border border-slate-200 shadow-2xl rounded-2xl overflow-hidden min-h-[500px] flex flex-col">
          
          {/* Mockup Header */}
          <div className="bg-[#F8FAFC] border-b border-slate-200 px-6 py-4 flex items-center justify-between flex-wrap gap-4">
            <div className="flex items-center space-x-3">
              <div className="bg-emerald-600 p-1.5 rounded-lg text-white">
                <Sparkles className="h-4 w-4" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-[#0B1F3A]">Vanguard Trading LLC</h4>
                <p className="text-[10px] text-slate-500 font-semibold tracking-wider uppercase">Period: Jan 2026 - May 2026 • 5 Files</p>
              </div>
            </div>
            <div className="flex items-center space-x-3 text-xs">
              <span className="text-slate-500 font-semibold uppercase tracking-wider">Status:</span>
              <span className="bg-emerald-50 text-emerald-800 border border-emerald-200/50 px-2.5 py-1 rounded-md font-bold uppercase tracking-wider">
                Analysis Ready
              </span>
            </div>
          </div>

          {/* Tab Screen Content */}
          <div className="p-6 md:p-8 flex-grow bg-white">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.25 }}
                className="h-full"
              >
                
                {/* 1. OVERVIEW TAB */}
                {activeTab === "Overview" && (
                  <div className="space-y-6">
                    <div className="grid sm:grid-cols-3 gap-4">
                      <div className="bg-[#F8FAFC] border border-slate-100 p-5 rounded-xl">
                        <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">DSCR</span>
                        <h5 className="text-2xl font-black text-[#0B1F3A] mt-1">2.41x</h5>
                        <p className="text-[11px] text-slate-500 mt-1">Debt-Service Coverage Ratio</p>
                      </div>
                      <div className="bg-[#F8FAFC] border border-slate-100 p-5 rounded-xl">
                        <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Average Inflows</span>
                        <h5 className="text-2xl font-black text-emerald-600 mt-1">$42,500/mo</h5>
                        <p className="text-[11px] text-slate-500 mt-1">Consistent deposits</p>
                      </div>
                      <div className="bg-[#F8FAFC] border border-slate-100 p-5 rounded-xl">
                        <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Active Loans</span>
                        <h5 className="text-2xl font-black text-indigo-600 mt-1">2 Detected</h5>
                        <p className="text-[11px] text-slate-500 mt-1">Total EMI: $770/mo</p>
                      </div>
                    </div>

                    <div className="border border-slate-200 rounded-xl p-5 bg-[#F8FAFC]">
                      <div className="flex justify-between items-center mb-4">
                        <h5 className="text-xs font-bold text-slate-500 uppercase tracking-widest">Risk Summary</h5>
                        <span className="text-xs font-bold text-emerald-600">LOW DEFAULT RISK</span>
                      </div>
                      <p className="text-sm text-slate-600 leading-relaxed">
                        Applicant exhibits excellent cash management. Inflow spikes match commercial seasonal sales. The average balance remains comfortably above minimum balance thresholds. Auto-extracted debt commitments represent 18% of average net income, indicating ample additional borrowing capacity.
                      </p>
                    </div>
                  </div>
                )}

                {/* 2. INCOME TAB */}
                {activeTab === "Income" && (
                  <div className="space-y-6">
                    <div className="grid sm:grid-cols-2 gap-6">
                      <div className="border border-slate-150 rounded-xl p-5">
                        <h5 className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-4">Inflow Structure</h5>
                        <div className="space-y-3.5">
                          <div>
                            <div className="flex justify-between text-xs font-bold text-[#0B1F3A] mb-1">
                              <span>Regular Business Sales</span>
                              <span>$34,850/mo</span>
                            </div>
                            <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
                              <div className="bg-[#0B1F3A] h-full rounded-full" style={{ width: "82%" }} />
                            </div>
                          </div>
                          <div>
                            <div className="flex justify-between text-xs font-bold text-[#0B1F3A] mb-1">
                              <span>Director/Equity Capital Inflow</span>
                              <span>$5,100/mo</span>
                            </div>
                            <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
                              <div className="bg-emerald-500 h-full rounded-full" style={{ width: "12%" }} />
                            </div>
                          </div>
                          <div>
                            <div className="flex justify-between text-xs font-bold text-[#0B1F3A] mb-1">
                              <span>Refunds & Internal Transfers</span>
                              <span>$2,550/mo</span>
                            </div>
                            <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
                              <div className="bg-indigo-500 h-full rounded-full" style={{ width: "6%" }} />
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="border border-slate-150 rounded-xl p-5 bg-[#F8FAFC]">
                        <h5 className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-3">Key Income Signals</h5>
                        <div className="space-y-2.5 text-xs text-slate-600">
                          <div className="flex justify-between py-1.5 border-b border-slate-200/50">
                            <span className="font-semibold text-slate-500">Total Statements Credits</span>
                            <span className="font-extrabold text-[#0B1F3A]">$212,500</span>
                          </div>
                          <div className="flex justify-between py-1.5 border-b border-slate-200/50">
                            <span className="font-semibold text-slate-500">Inflow Volatility Index</span>
                            <span className="font-bold text-emerald-600">Low (9.2%)</span>
                          </div>
                          <div className="flex justify-between py-1.5 border-b border-slate-200/50">
                            <span className="font-semibold text-slate-500">Cash Deposit Infiltration</span>
                            <span className="font-bold text-emerald-600">2.1% (Safe)</span>
                          </div>
                          <div className="flex justify-between py-1.5">
                            <span className="font-semibold text-slate-500">Primary Payer</span>
                            <span className="font-bold text-[#0B1F3A]">Standard Supply Ltd</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* 3. EXPENSES TAB */}
                {activeTab === "Expenses" && (
                  <div className="space-y-6">
                    <div className="grid sm:grid-cols-2 gap-6">
                      <div className="border border-slate-150 rounded-xl p-5">
                        <h5 className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-4">Outflow Breakdown</h5>
                        <div className="space-y-3.5">
                          <div>
                            <div className="flex justify-between text-xs font-bold text-slate-700 mb-1">
                              <span>Supplier Payments</span>
                              <span>$18,400/mo</span>
                            </div>
                            <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
                              <div className="bg-slate-800 h-full rounded-full" style={{ width: "57%" }} />
                            </div>
                          </div>
                          <div>
                            <div className="flex justify-between text-xs font-bold text-slate-700 mb-1">
                              <span>Rent & Salaries</span>
                              <span>$8,100/mo</span>
                            </div>
                            <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
                              <div className="bg-slate-500 h-full rounded-full" style={{ width: "25%" }} />
                            </div>
                          </div>
                          <div>
                            <div className="flex justify-between text-xs font-bold text-slate-700 mb-1">
                              <span>Tax & Utility Outflows</span>
                              <span>$3,200/mo</span>
                            </div>
                            <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
                              <div className="bg-amber-500 h-full rounded-full" style={{ width: "10%" }} />
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="border border-slate-150 rounded-xl p-5 bg-[#F8FAFC]">
                        <h5 className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-3">Spending Behavior</h5>
                        <div className="space-y-2.5 text-xs text-slate-600">
                          <div className="flex justify-between py-1.5 border-b border-slate-200/50">
                            <span className="font-semibold text-slate-500">Total Statement Debits</span>
                            <span className="font-extrabold text-[#0B1F3A]">$162,000</span>
                          </div>
                          <div className="flex justify-between py-1.5 border-b border-slate-200/50">
                            <span className="font-semibold text-slate-500">Average Outflows</span>
                            <span className="font-bold text-slate-800">$32,400/mo</span>
                          </div>
                          <div className="flex justify-between py-1.5 border-b border-slate-200/50">
                            <span className="font-semibold text-slate-500">ATM Cash Withdrawals</span>
                            <span className="font-bold text-emerald-600">1.4% of total (Low)</span>
                          </div>
                          <div className="flex justify-between py-1.5">
                            <span className="font-semibold text-slate-500">Debt Obligation Ratio</span>
                            <span className="font-bold text-indigo-600">18.1% (Safe)</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* 4. RISK TAB */}
                {activeTab === "Risk" && (
                  <div className="space-y-6">
                    <div className="grid sm:grid-cols-2 gap-6">
                      <div className="border border-red-100 bg-red-50/50 rounded-xl p-5">
                        <h5 className="text-xs font-bold text-red-800 uppercase tracking-widest mb-4 flex items-center">
                          <ShieldAlert className="h-4 w-4 mr-1.5 text-red-600" />
                          Risk Flags & Alerts
                        </h5>
                        
                        <div className="space-y-4">
                          <div className="flex items-start space-x-3">
                            <div className="bg-red-100 text-red-600 p-1 rounded-lg mt-0.5 border border-red-200">
                              <ShieldAlert className="h-3.5 w-3.5" />
                            </div>
                            <div>
                              <p className="text-xs font-bold text-slate-800">1 Bounced Cheque Detected</p>
                              <p className="text-[10px] text-slate-500">May 12 • Amount: $2,400 • Narration Ref: CHQ-9281. Resolved.</p>
                            </div>
                          </div>

                          <div className="flex items-start space-x-3">
                            <div className="bg-emerald-100 text-emerald-600 p-1 rounded-lg mt-0.5 border border-emerald-200">
                              <CheckCircle className="h-3.5 w-3.5" />
                            </div>
                            <div>
                              <p className="text-xs font-bold text-slate-800">No Overdraft Limits Exceeded</p>
                              <p className="text-[10px] text-slate-500">Balance remained above minimum threshold all 5 months.</p>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="border border-slate-150 rounded-xl p-5 bg-[#F8FAFC] flex flex-col justify-between">
                        <div>
                          <h5 className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-3">Underwriter Risk Score</h5>
                          <div className="flex items-baseline space-x-2">
                            <span className="text-4xl font-black text-[#0B1F3A]">12%</span>
                            <span className="text-xs font-bold text-emerald-600">LOW RISK RATING</span>
                          </div>
                          <p className="text-xs text-slate-500 mt-2 leading-relaxed">
                            FinScope's machine learning model weights bounced cheques against average balance history. Since the balance immediately recovered, default risk remains highly favorable.
                          </p>
                        </div>
                        
                        <div className="pt-4 border-t border-slate-200/50 mt-4 flex justify-between text-xs font-semibold text-slate-500">
                          <span>Verification Level</span>
                          <span className="text-[#0B1F3A] font-extrabold uppercase">Grade AAA</span>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* 5. LOANS TAB */}
                {activeTab === "Loans" && (
                  <div className="space-y-6">
                    <div className="border border-slate-200 rounded-xl overflow-hidden">
                      <div className="bg-[#F8FAFC] px-5 py-3 border-b border-slate-200">
                        <h5 className="text-xs font-bold text-[#0B1F3A] uppercase tracking-wider">Auto-Detected Debt Commitments</h5>
                      </div>
                      
                      <div className="divide-y divide-slate-150">
                        
                        {/* EMI 1 */}
                        <div className="p-4 flex items-center justify-between text-xs">
                          <div>
                            <p className="font-bold text-[#0B1F3A] text-sm">HDFC Bank Business Loan</p>
                            <p className="text-[10px] text-slate-400 mt-0.5">Auto-detected recurring narration "EMI-HDFC-9918"</p>
                          </div>
                          <div className="text-right">
                            <p className="font-extrabold text-[#0B1F3A] text-sm">$450/mo</p>
                            <p className="text-[10px] text-emerald-600 font-bold uppercase">5/5 Payments verified</p>
                          </div>
                        </div>

                        {/* EMI 2 */}
                        <div className="p-4 flex items-center justify-between text-xs">
                          <div>
                            <p className="font-bold text-[#0B1F3A] text-sm">Chase Auto Loan</p>
                            <p className="text-[10px] text-slate-400 mt-0.5">Auto-detected recurring debit "CHASE-AUTO-EMI"</p>
                          </div>
                          <div className="text-right">
                            <p className="font-extrabold text-[#0B1F3A] text-sm">$320/mo</p>
                            <p className="text-[10px] text-emerald-600 font-bold uppercase">5/5 Payments verified</p>
                          </div>
                        </div>

                        {/* Hidden/Unreported Indicator */}
                        <div className="p-4 bg-amber-50/50 flex items-center justify-between text-xs">
                          <div>
                            <p className="font-bold text-amber-900 text-sm flex items-center">
                              Mercury Finance Debit
                              <span className="ml-2 bg-amber-100 text-amber-800 text-[9px] font-black px-1.5 py-0.5 rounded uppercase">Potential Hidden EMI</span>
                            </p>
                            <p className="text-[10px] text-amber-700 mt-0.5">Recurring debit of $120.00 identified on 4th of each month</p>
                          </div>
                          <div className="text-right">
                            <p className="font-extrabold text-amber-900 text-sm">$120/mo</p>
                            <p className="text-[10px] text-amber-700 font-bold uppercase">4 Payments observed</p>
                          </div>
                        </div>

                      </div>
                    </div>
                  </div>
                )}

                {/* 6. FRAUD TAB */}
                {activeTab === "Fraud" && (
                  <div className="space-y-6">
                    <div className="grid sm:grid-cols-3 gap-4">
                      
                      <div className="bg-[#F8FAFC] border border-slate-100 p-5 rounded-xl text-center">
                        <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block">Circular Transfers</span>
                        <span className="inline-block mt-3 bg-emerald-100 text-emerald-800 text-[10px] font-black px-3 py-1 rounded-full uppercase">
                          Not Detected
                        </span>
                        <p className="text-[10px] text-slate-400 mt-3 font-semibold">Zero self-funding loops identified</p>
                      </div>

                      <div className="bg-[#F8FAFC] border border-slate-100 p-5 rounded-xl text-center">
                        <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block">Structuring Check</span>
                        <span className="inline-block mt-3 bg-emerald-100 text-emerald-800 text-[10px] font-black px-3 py-1 rounded-full uppercase">
                          Normal Limits
                        </span>
                        <p className="text-[10px] text-slate-400 mt-3 font-semibold">No high-frequency cash splits</p>
                      </div>

                      <div className="bg-[#F8FAFC] border border-slate-100 p-5 rounded-xl text-center">
                        <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block">Shell Entity Outflows</span>
                        <span className="inline-block mt-3 bg-emerald-100 text-emerald-800 text-[10px] font-black px-3 py-1 rounded-full uppercase">
                          0 Flags
                        </span>
                        <p className="text-[10px] text-slate-400 mt-3 font-semibold">All major payees verified</p>
                      </div>

                    </div>

                    <div className="border border-slate-200 rounded-xl p-5 bg-[#F8FAFC] text-xs text-slate-600">
                      <h5 className="font-bold text-[#0B1F3A] mb-2 uppercase">Anti-Fraud Log</h5>
                      <p>
                        FinScope cross-references narration names against known shelf shell company registries. All suppliers mapped back to active corporate listings in good standing. Balance sheet progression matches statement transaction progression.
                      </p>
                    </div>
                  </div>
                )}

                {/* 7. AI CHAT TAB */}
                {activeTab === "AI Chat" && (
                  <div className="space-y-6 flex flex-col justify-between h-[360px]">
                    
                    {/* Chat log */}
                    <div className="bg-[#F8FAFC] border border-slate-200 rounded-xl p-4 flex-grow overflow-y-auto space-y-4 max-h-[220px]">
                      {chatQuestion ? (
                        <div className="space-y-3">
                          {/* User Message */}
                          <div className="flex justify-end">
                            <span className="bg-slate-200 text-slate-800 font-medium text-xs px-3.5 py-2 rounded-xl rounded-tr-none max-w-[80%]">
                              {chatQuestion}
                            </span>
                          </div>

                          {/* AI Message */}
                          {chatLoading ? (
                            <div className="flex items-center space-x-2 text-slate-400 text-xs font-semibold">
                              <RefreshCw className="h-3.5 w-3.5 animate-spin" />
                              <span>FinScope is analyzing statement lines...</span>
                            </div>
                          ) : (
                            chatAnswer && (
                              <div className="flex justify-start items-start space-x-2.5">
                                <div className="bg-emerald-600 text-white p-1 rounded-lg shrink-0 mt-0.5">
                                  <Sparkles className="h-3.5 w-3.5" />
                                </div>
                                <span className="bg-emerald-50 border border-emerald-100 text-[#0B1F3A] text-xs px-3.5 py-2.5 rounded-xl rounded-tl-none max-w-[85%] leading-relaxed">
                                  {chatAnswer}
                                </span>
                              </div>
                            )
                          )}
                        </div>
                      ) : (
                        <div className="h-full flex flex-col items-center justify-center text-center text-slate-400 space-y-2">
                          <MessageSquare className="h-8 w-8 text-slate-300" />
                          <p className="text-xs font-semibold">Select a question below to see AI analysis in action.</p>
                        </div>
                      )}
                    </div>

                    {/* Pre-baked questions */}
                    <div>
                      <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block mb-2">Sample Underwriter Queries</span>
                      <div className="flex flex-wrap gap-2">
                        <button
                          onClick={() => handleAskQuestion(
                            "Is there stable business revenue?",
                            "Yes. Monthly inflows average $42.5k. 82% ($34.8k/mo) of inflows are regular commercial wire transfers from Standard Supply Ltd, suggesting a highly stable supply-chain revenue stream."
                          )}
                          className="bg-white border border-slate-200 hover:border-[#0B1F3A] text-slate-600 hover:text-[#0B1F3A] px-3.5 py-2 rounded-xl text-xs font-semibold transition-all cursor-pointer"
                        >
                          "Is there stable business revenue?"
                        </button>
                        <button
                          onClick={() => handleAskQuestion(
                            "Summarize active loan EMIs.",
                            "I detected 2 active loans: HDFC Bank Business Loan ($450/mo, 5 verified payments) and Chase Auto Loan ($320/mo, 5 verified payments). Additionally, there is a recurring $120/mo debit on the 4th of each month to Mercury Finance, which represents a potential hidden obligation."
                          )}
                          className="bg-white border border-slate-200 hover:border-[#0B1F3A] text-slate-600 hover:text-[#0B1F3A] px-3.5 py-2 rounded-xl text-xs font-semibold transition-all cursor-pointer"
                        >
                          "Summarize active loan EMIs."
                        </button>
                        <button
                          onClick={() => handleAskQuestion(
                            "Explain the bounced cheque on May 12.",
                            "A single cheque of $2,400 was returned on May 12 marked 'insufficient funds'. However, the account balance was restored within 24 hours via a $4,500 deposit. There are no other return charges or overdraft incidents in the 5-month statement period."
                          )}
                          className="bg-white border border-slate-200 hover:border-[#0B1F3A] text-slate-600 hover:text-[#0B1F3A] px-3.5 py-2 rounded-xl text-xs font-semibold transition-all cursor-pointer"
                        >
                          "Explain the bounced cheque on May 12."
                        </button>
                      </div>
                    </div>

                  </div>
                )}

              </motion.div>
            </AnimatePresence>
          </div>

        </div>

      </div>
    </section>
  );
}
