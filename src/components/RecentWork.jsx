import { GoGraph } from "react-icons/go";
import { FaRocket, FaGlobe } from "react-icons/fa";

const CaseCard = ({ icon:Icon, badge, title, metric, metricIcon=[] }) => (
  <div className="bg-white rounded-[22px] overflow-hidden transition-all duration-300 border-2 border-[#FFF8F3] shadow-sm hover:-translate-y-2 hover:shadow-lg hover:border-[#FF6B35]">
    <div className="w-full h-60 bg-linear-to-br from-[rgba(255,107,53,0.15)] to-[rgba(255,140,66,0.15)] flex items-center justify-center text-6xl text-[#FF6B35] relative overflow-hidden">
      <Icon className="text-8xl text-[#FF6B35]" />
      <div className="absolute inset-0 bg-[#FF6B35] opacity-0 hover:opacity-10 transition-opacity duration-300"></div>
    </div>
    <div className="p-6">
      <span className="inline-block px-3 py-1 bg-[rgba(255,107,53,0.1)] text-[#FF6B35] rounded-full text-xs font-semibold mb-3 uppercase tracking-wide">
        {badge}
      </span>
      <h3 className="text-xl font-bold text-[#1a1a1a] mb-2">{title}</h3>
      <p className="text-sm text-[#FF6B35] font-semibold flex items-center gap-1.5">
        <i className={`${metricIcon} text-xs`}></i>
        {metric}
      </p>
    </div>
  </div>
);

export default function RecentWork() {
  return (
    <section id="case-studies" className="py-24 bg-white scroll-mt-[72px]">
      <div className="container">
        <h2 className="text-5xl font-extrabold text-center text-[#1a1a1a] mb-14">
          Recent <span className="text-[#FF6B35]">Work</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <CaseCard
            icon={GoGraph}
            badge="SAP Implementation"
            title="S/4HANA Rollout"
            metric="↑ Go-Live in 12 weeks"
            metricIcon="fas fa-arrow-up"
          />
          <CaseCard
            icon={FaRocket}
            badge="ABAP Development"
            title="ABAP Modernization"
            metric="↑ 40% faster reports"
            metricIcon="fas fa-arrow-up"
          />
          <CaseCard
            icon={FaGlobe}
            badge="Web Design"
            title="B2B Website"
            metric="↑ 35% leads"
            metricIcon="fas fa-arrow-up"
          />
        </div>
      </div>
    </section>
  );
}