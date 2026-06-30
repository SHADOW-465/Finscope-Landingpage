import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import SocialProof from "@/components/SocialProof";
import Problem from "@/components/Problem";
import Features from "@/components/Features";
import HowItWorks from "@/components/HowItWorks";
import DashboardShowcase from "@/components/DashboardShowcase";
import WhyCredalyzer from "@/components/WhyCredalyzer";
import ReportPreview from "@/components/ReportPreview";
import FAQ from "@/components/FAQ";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <SocialProof />
        <Problem />
        <Features />
        <HowItWorks />
        <DashboardShowcase />
        <WhyCredalyzer />
        <ReportPreview />
        <FAQ />
        <ContactForm />
      </main>
      <Footer />
    </>
  );
}
