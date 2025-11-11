import { IoFlash } from "react-icons/io5";
import { FaShieldAlt } from "react-icons/fa";
import { FaCodeBranch } from "react-icons/fa6";

const FeatureItem = ({ icon:Icon, title, desc }) => (
  <div className="flex flex-col items-center text-center p-8 bg-white rounded-[22px] transition-all duration-300 border-2 border-transparent hover:-translate-y-1 hover:border-[#FF6B35] hover:shadow-md">
    <div className="w-[72px] h-[72px] bg-linear-to-r from-[rgba(255,107,53,0.1)] to-[rgba(255,140,66,0.1)] rounded-full flex items-center justify-center mb-5 border-2 border-[#FF6B35]">
      <Icon className="text-3xl text-[#FF6B35]" />
    </div>
    <div>
      <h3 className="text-xl font-bold text-[#1a1a1a] mb-3">{title}</h3>
      <p className="text-[#4a4a4a] leading-relaxed">{desc}</p>
    </div>
  </div>
);

export default function WhySection() {
  return (
    <section className="py-8 bg-[#FFFBF7]">
      <div className="container">
        <h2 className="text-5xl font-extrabold text-center text-[#1a1a1a] mb-4">Why TechNest</h2>
        <p className="text-xl text-[#4a4a4a] text-center mb-16">
          Opinionated defaults. Enterprise discipline.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <FeatureItem
            icon={IoFlash}
            title="Performance First"
            desc="Core Web Vitals green. Lightning-fast load times and optimized experiences."
          />
          <FeatureItem
            icon={FaShieldAlt}
            title="Enterprise Security"
            desc="OWASP-aligned practices. Secure by design, compliant by default."
          />
          <FeatureItem
            icon={FaCodeBranch}
            title="Reliability"
            desc="Versioned, testable delivery. Built to scale with your business."
          />
        </div>
      </div>
    </section>
  );
}
