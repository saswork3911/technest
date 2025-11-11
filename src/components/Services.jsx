import { FaPaintbrush, FaDatabase, FaCode } from "react-icons/fa6";


const ServiceCard = ({ icon: Icon, title, desc, bullets = [] }) => (
  <div className="bg-white rounded-[22px] p-8 shadow-sm transition-all duration-300 border-2 border-[#FFF8F3] hover:-translate-y-2 hover:border-[#FF6B35] hover:shadow-lg">
    <div className="w-16 h-16 bg-linear-to-r from-[#FF6B35] to-[#FF8C42] rounded-2xl flex items-center justify-center mb-6 shadow-md">
      <Icon className="text-3xl text-white" />
    </div>
    <h3 className="text-2xl font-bold text-[#1a1a1a] mb-3">{title}</h3>
    <p className="text-[#4a4a4a] mb-5 leading-relaxed">{desc}</p>
    <ul className="space-y-2.5 mb-6">
      {bullets.map((bullet, i) => (
        <li key={i} className="flex items-center gap-2.5 text-[#4a4a4a] text-sm">
          <i className="fas fa-check-circle text-[#FF6B35] text-base"></i>
          <span>{bullet}</span>
        </li>
      ))}
    </ul>
    <a
      href="#contact"
      className="text-[#FF6B35] font-semibold text-sm inline-flex items-center gap-1.5 hover:gap-2.5 transition-all duration-200"
    >
      Learn more
      <i className="fas fa-arrow-right"></i>
    </a>
  </div>
);


export default function Services() {
  return (
    <section id="services" className="py-24 bg-white scroll-mt-[72px]">
      <div className="container">
        <h2 className="text-5xl font-extrabold text-center text-[#1a1a1a] mb-14">
          What We <span className="text-[#FF6B35]">Build</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <ServiceCard
            icon={FaPaintbrush}
            title="Website Design"
            desc="Conversion-focused, fast, SEO-ready websites that drive results."
            bullets={["Next.js 15", "Tailwind CSS", "A11y AA Compliant"]}
          />
          <ServiceCard
            icon={FaDatabase}
            title="SAP Consulting"
            desc="Implementation, integration, and process optimization for SAP systems."
            bullets={["S/4HANA", "Fiori UX", "Interfaces & APIs"]}
          />
          <ServiceCard
            icon={FaCode}
            title="ABAP Development"
            desc="Clean, performant custom objects and enhancements for SAP."
            bullets={["OO ABAP", "CDS Views", "BAPIs & RFCs"]}
          />
        </div>
      </div>
    </section>
  );
}