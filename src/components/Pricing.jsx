const PricingCard = ({ plan, price, priceUnit, features, buttonText, featured = false }) => (
  <div className={`bg-white rounded-[22px] p-10 transition-all duration-300 relative ${
    featured 
      ? 'border-3 border-[#FF6B35] shadow-md' 
      : 'border-2 border-[#FFF8F3] hover:-translate-y-2 hover:shadow-lg hover:border-[#FF6B35]'
  }`}>
    {featured && (
      <span className="absolute -top-3 right-8 bg-linear-to-r from-[#FF6B35] to-[#FF8C42] text-white px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wide shadow-md">
        Most Popular
      </span>
    )}
    
    <h3 className="text-xl font-bold text-[#1a1a1a] mb-3">{plan}</h3>
    <div className="text-4xl font-extrabold text-[#FF6B35] mb-6">
      {price}<span className="text-base font-medium text-[#4a4a4a]">{priceUnit}</span>
    </div>
    
    <ul className="space-y-0 mb-8">
      {features.map((feature, i) => (
        <li key={i} className="py-3.5 border-b border-[rgba(74,74,74,0.12)] text-[#4a4a4a] text-sm flex items-center gap-2.5 last:border-b-0">
          <i className="fas fa-check text-[#FF6B35] text-sm"></i>
          {feature}
        </li>
      ))}
    </ul>
    
    <a
      href="#contact"
      className="w-full inline-flex items-center justify-center px-6 py-3.5 bg-linear-to-r from-[#FF6B35] to-[#FF8C42] text-white rounded-2xl font-semibold shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-200"
    >
      {buttonText}
    </a>
  </div>
);

export default function Pricing() {
  return (
    <section id="pricing" className="py-24 bg-white scroll-mt-[72px]">
      <div className="container">
        <h2 className="text-5xl font-extrabold text-center text-[#1a1a1a] mb-14">
          <span className="text-[#FF6B35]">Transparent</span> Pricing
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <PricingCard
            plan="Web Design Sprint"
            price="₹1.2L"
            priceUnit="+ / project"
            features={[
              "Brand/UI kit",
              "3-5 pages",
              "Analytics + SEO",
              "Mobile responsive",
              "2 rounds revision"
            ]}
            buttonText="Start Sprint"
          />
          
          <PricingCard
            plan="SAP Advisory"
            price="₹2.5L"
            priceUnit="+ / month"
            features={[
              "S/4HANA Readiness",
              "Process Mapping",
              "Integration Planning",
              "Change Management",
              "Ongoing Support"
            ]}
            buttonText="Book Advisory"
            featured={true}
          />
          
          <PricingCard
            plan="ABAP Dev Pack"
            price="₹1.8L"
            priceUnit="+ / month"
            features={[
              "Custom Reports",
              "CDS Views & BAPIs",
              "Unit Tests",
              "Code Reviews",
              "Documentation"
            ]}
            buttonText="Request Dev Pack"
          />
        </div>
        
        <p className="text-center text-sm text-[#4a4a4a] italic">
          Custom enterprise quotes on request. Volume discounts available.
        </p>
      </div>
    </section>
  );
}