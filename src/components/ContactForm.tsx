"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { submitDemoRequest } from "@/app/actions";
import { ShieldCheck, Loader2, Sparkles, Calendar } from "lucide-react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    companyName: "",
    role: "",
    phone: "",
    email: "",
    city: "",
    monthlyFiles: "100-500",
    currentProcess: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError(null);

    try {
      const response = await submitDemoRequest(formData);
      if (response.success) {
        setSubmitSuccess(true);
        setFormData({
          name: "",
          companyName: "",
          role: "",
          phone: "",
          email: "",
          city: "",
          monthlyFiles: "100-500",
          currentProcess: "",
          message: "",
        });
      } else {
        setSubmitError(response.error || "Failed to submit request.");
      }
    } catch (err) {
      setSubmitError("An error occurred. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="demo-form" className="py-24 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-emerald-500/5 rounded-full blur-3xl -z-10 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-start">
          
          {/* CTA Left Panel */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            <div className="inline-flex items-center space-x-2 bg-emerald-50 border border-emerald-200/50 text-emerald-800 px-3 py-1 rounded-full text-xs font-semibold tracking-wide uppercase mb-6 w-fit">
              <Calendar className="h-3.5 w-3.5" />
              <span>Request a Demo</span>
            </div>

            <h3 className="text-3xl sm:text-4xl font-extrabold text-[#0B1F3A] tracking-tight leading-tight mb-6">
              See How Much Time Your Team Can Save
            </h3>
            
            <p className="text-base text-slate-600 leading-relaxed mb-8">
              Book a personalized demo and experience how Credalyzer transforms manual statement verification into structured financial intelligence.
            </p>

            {/* Value Checkpoints */}
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="bg-emerald-100 text-emerald-700 p-1 rounded-lg shrink-0 mt-0.5">
                  <ShieldCheck className="h-4 w-4" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-800">1-on-1 Consultation</h4>
                  <p className="text-xs text-slate-500">Analyze a sample statement file of your choice to check parsing accuracy.</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="bg-emerald-100 text-emerald-700 p-1 rounded-lg shrink-0 mt-0.5">
                  <ShieldCheck className="h-4 w-4" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-800">Custom Integration Architecture</h4>
                  <p className="text-xs text-slate-500">Discuss API hookups, schema templates, or local database deployment needs.</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="bg-emerald-100 text-emerald-700 p-1 rounded-lg shrink-0 mt-0.5">
                  <ShieldCheck className="h-4 w-4" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-800">Enterprise Pricing & Pilot Program</h4>
                  <p className="text-xs text-slate-500">Learn about our tiered volume licensing plans and structured proof-of-concept testing.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Form Card Right Panel */}
          <div className="lg:col-span-7">
            <motion.div
              layout
              className="bg-white border border-slate-200 shadow-2xl rounded-3xl p-8 md:p-10"
            >
              {submitSuccess ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-16 px-4 space-y-5"
                >
                  <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto text-emerald-600 mb-6 shadow-md shadow-emerald-100">
                    <ShieldCheck className="h-8 w-8" />
                  </div>
                  <h4 className="text-2xl font-extrabold text-[#0B1F3A] tracking-tight">
                    Request Received
                  </h4>
                  <p className="text-base text-slate-600 max-w-md mx-auto">
                    Thank you. We'll contact you shortly.
                  </p>
                  <button
                    onClick={() => setSubmitSuccess(false)}
                    className="mt-8 text-xs font-bold text-emerald-600 hover:text-emerald-700 uppercase tracking-widest cursor-pointer"
                  >
                    Submit Another Request
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <h4 className="text-lg font-bold text-[#0B1F3A] flex items-center tracking-tight">
                    <Sparkles className="h-4.5 w-4.5 text-emerald-600 mr-2" />
                    Demo Details
                  </h4>

                  {submitError && (
                    <div className="bg-red-50 border border-red-200 text-red-800 text-xs font-semibold p-4 rounded-xl">
                      {submitError}
                    </div>
                  )}

                  <div className="grid sm:grid-cols-2 gap-5">
                    
                    {/* Name */}
                    <div>
                      <label htmlFor="name" className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        id="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-slate-250/80 focus:border-[#0B1F3A] focus:ring-1 focus:ring-[#0B1F3A] text-sm text-slate-800 placeholder-slate-400 outline-none transition-all"
                        placeholder="John Doe"
                      />
                    </div>

                    {/* Company Name */}
                    <div>
                      <label htmlFor="companyName" className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">
                        Company Name *
                      </label>
                      <input
                        type="text"
                        name="companyName"
                        id="companyName"
                        required
                        value={formData.companyName}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-slate-250/80 focus:border-[#0B1F3A] focus:ring-1 focus:ring-[#0B1F3A] text-sm text-slate-800 placeholder-slate-400 outline-none transition-all"
                        placeholder="Acme Lending Ltd"
                      />
                    </div>

                    {/* Role */}
                    <div>
                      <label htmlFor="role" className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">
                        Your Role
                      </label>
                      <input
                        type="text"
                        name="role"
                        id="role"
                        value={formData.role}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-slate-250/80 focus:border-[#0B1F3A] focus:ring-1 focus:ring-[#0B1F3A] text-sm text-slate-800 placeholder-slate-400 outline-none transition-all"
                        placeholder="Credit Analyst / VP Risk"
                      />
                    </div>

                    {/* City */}
                    <div>
                      <label htmlFor="city" className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">
                        City
                      </label>
                      <input
                        type="text"
                        name="city"
                        id="city"
                        value={formData.city}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-slate-250/80 focus:border-[#0B1F3A] focus:ring-1 focus:ring-[#0B1F3A] text-sm text-slate-800 placeholder-slate-400 outline-none transition-all"
                        placeholder="Mumbai / New York"
                      />
                    </div>

                    {/* Email */}
                    <div>
                      <label htmlFor="email" className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">
                        Corporate Email *
                      </label>
                      <input
                        type="email"
                        name="email"
                        id="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-slate-250/80 focus:border-[#0B1F3A] focus:ring-1 focus:ring-[#0B1F3A] text-sm text-slate-800 placeholder-slate-400 outline-none transition-all"
                        placeholder="john@company.com"
                      />
                    </div>

                    {/* Phone Number */}
                    <div>
                      <label htmlFor="phone" className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        id="phone"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-slate-250/80 focus:border-[#0B1F3A] focus:ring-1 focus:ring-[#0B1F3A] text-sm text-slate-800 placeholder-slate-400 outline-none transition-all"
                        placeholder="+1 (555) 000-0000"
                      />
                    </div>

                    {/* Monthly Files Processed */}
                    <div>
                      <label htmlFor="monthlyFiles" className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">
                        Monthly Loan Files Processed
                      </label>
                      <select
                        name="monthlyFiles"
                        id="monthlyFiles"
                        value={formData.monthlyFiles}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-slate-250/80 focus:border-[#0B1F3A] focus:ring-1 focus:ring-[#0B1F3A] text-sm text-slate-800 outline-none bg-white transition-all"
                      >
                        <option value="Less than 100">Less than 100 files</option>
                        <option value="100-500">100 - 500 files</option>
                        <option value="500-2000">500 - 2,000 files</option>
                        <option value="2000+">2,000+ files</option>
                      </select>
                    </div>

                    {/* Current Process */}
                    <div>
                      <label htmlFor="currentProcess" className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">
                        Current Statement Process
                      </label>
                      <input
                        type="text"
                        name="currentProcess"
                        id="currentProcess"
                        value={formData.currentProcess}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-slate-250/80 focus:border-[#0B1F3A] focus:ring-1 focus:ring-[#0B1F3A] text-sm text-slate-800 placeholder-slate-400 outline-none transition-all"
                        placeholder="Manual data entry, Excel models, etc."
                      />
                    </div>

                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor="message" className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">
                      Brief Message or Requirements
                    </label>
                    <textarea
                      name="message"
                      id="message"
                      rows={3}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-slate-250/80 focus:border-[#0B1F3A] focus:ring-1 focus:ring-[#0B1F3A] text-sm text-slate-800 placeholder-slate-400 outline-none transition-all resize-none"
                      placeholder="Let us know any custom formats or specific bank partners you support."
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-[#0B1F3A] hover:bg-[#0B1F3A]/90 text-white font-bold py-4 rounded-xl text-base shadow-lg shadow-[#0B1F3A]/10 hover:shadow-xl transition-all cursor-pointer flex items-center justify-center space-x-2.5 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="h-5 w-5 animate-spin" />
                        <span>Sending Request...</span>
                      </>
                    ) : (
                      <span>Request Demo</span>
                    )}
                  </button>
                </form>
              )}
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
