"use client";
import Link from "next/link";
import ParticlesBackground from "@/components/lightswind/particles-background";


// Add custom CSS for animations
const styles = `
  @keyframes float {
    0%, 100% { transform: translateY(0px); }
    50% { transform: translateY(-10px); }
  }
  .animate-float {
    animation: float 3s ease-in-out infinite;
  }
  .bg-linear-radial {
    background: radial-linear(circle, var(--tw-linear-stops));
  }
`;

if (typeof document !== "undefined") {
  const styleSheet = document.createElement("style");
  styleSheet.textContent = styles;
  document.head.appendChild(styleSheet);
}

export default function Hero() {
  return (
    <section id="hero" className="pt-[168px] pb-24 bg-white relative overflow-hidden scroll-mt-[72px]">
      {/* Background linear */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-linear-radial from-[rgba(255,107,53,0.08)] to-transparent rounded-full"></div>
      <div className="container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          {/* Hero Content */}
          <div className="hero-content">
            <span className="inline-block px-4 py-2 bg-linear-to-r from-[#FF6B35] to-[#FF8C42] text-white rounded-full text-sm font-semibold mb-6 shadow-md">
              SAP • ABAP • Web Design
            </span>

            <h1 className="text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight text-[#1a1a1a] mb-5">
              Ship <span className="text-[#FF6B35]">Enterprise-grade</span> SAP & Web Experiences
            </h1>

            <p className="text-lg text-[#4a4a4a] leading-relaxed mb-8 max-w-[520px]">
              We design modern websites, implement SAP, and build robust ABAP customizations that scale with
              your business.
            </p>

            <div className="flex gap-4 items-center">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3.5 bg-linear-to-r from-[#FF6B35] to-[#FF8C42] text-white rounded-2xl font-semibold shadow-lg hover:shadow-xl hover:-translate-y-0.5 hover:scale-105 transition-all duration-200"
              >
                Get Proposal
              </a>
              <Link
                href="#case-studies"
                className="inline-flex items-center gap-2 px-6 py-3.5 bg-white text-[#FF6B35] border-2 border-[#FF6B35] rounded-2xl font-semibold hover:bg-[#FF6B35] hover:text-white hover:scale-105 transition-all duration-200"
              >
                See Work
                <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>

          {/* Hero Visual */}
          <div className="hero-visual relative ">
            <div className="w-full max-w-[560px] h-[420px] bg-white border-2 border-[#FFF8F3] rounded-[22px] p-6 flex flex-col gap-4 shadow-2xl relative animate-float mx-auto">
              {/* linear border effect */}
              <div className="absolute -inset-0.5 bg-linear-to-r from-[#FF6B35] to-[#FF8C42] rounded-[22px] opacity-10 -z-10"></div>

              {/* Mockup Header */}
              <div className="h-10  bg-[#FFFBF7] rounded-[10px] flex items-center px-4 gap-2 border border-[rgba(74,74,74,0.12)]">
                <div className="w-2.5 h-2.5 bg-[#FF6B35] rounded-full"></div>
                <div className="w-2.5 h-2.5 bg-[#FF8C42] rounded-full"></div>
                <div className="w-2.5 h-2.5 bg-[#FFB399] rounded-full"></div>
              </div>

              {/* Mockup Content */}
              <div className="flex-1 grid grid-cols-2 gap-3">
                <div className="bg-[#FFFBF7] rounded-[10px] p-4 border border-[rgba(74,74,74,0.12)] hover:-translate-y-0.5 hover:border-[#FF6B35] hover:shadow-sm transition-all duration-300">
                  <div
                    className="h-2.5 bg-linear-to-r from-[#FF6B35] to-[#FF8C42] rounded-md mb-3"
                    style={{ width: "75%" }}
                  ></div>
                  <div className="h-1.5 bg-[rgba(74,74,74,0.12)] rounded mb-1.5"></div>
                  <div className="h-1.5 bg-[rgba(74,74,74,0.12)] rounded mb-1.5"></div>
                  <div className="h-1.5 bg-[rgba(74,74,74,0.12)] rounded" style={{ width: "60%" }}></div>
                </div>

                <div className="bg-[#FFFBF7] rounded-[10px] p-4 border border-[rgba(74,74,74,0.12)] hover:-translate-y-0.5 hover:border-[#FF6B35] hover:shadow-sm transition-all duration-300">
                  <div
                    className="h-2.5 bg-linear-to-r from-[#FF6B35] to-[#FF8C42] rounded-md mb-3"
                    style={{ width: "60%" }}
                  ></div>
                  <div className="h-1.5 bg-[rgba(74,74,74,0.12)] rounded mb-1.5"></div>
                  <div className="h-1.5 bg-[rgba(74,74,74,0.12)] rounded mb-1.5"></div>
                  <div className="h-1.5 bg-[rgba(74,74,74,0.12)] rounded" style={{ width: "60%" }}></div>
                </div>

                <div className="bg-[#FFFBF7] rounded-[10px] p-4 border border-[rgba(74,74,74,0.12)] hover:-translate-y-0.5 hover:border-[#FF6B35] hover:shadow-sm transition-all duration-300">
                  <div
                    className="h-2.5 bg-linear-to-r from-[#FF6B35] to-[#FF8C42] rounded-md mb-3"
                    style={{ width: "90%" }}
                  ></div>
                  <div className="h-1.5 bg-[rgba(74,74,74,0.12)] rounded mb-1.5"></div>
                  <div className="h-1.5 bg-[rgba(74,74,74,0.12)] rounded mb-1.5"></div>
                  <div className="h-1.5 bg-[rgba(74,74,74,0.12)] rounded" style={{ width: "60%" }}></div>
                </div>

                <div className="bg-[#FFFBF7] rounded-[10px] p-4 border border-[rgba(74,74,74,0.12)] hover:-translate-y-0.5 hover:border-[#FF6B35] hover:shadow-sm transition-all duration-300">
                  <div
                    className="h-2.5 bg-linear-to-r from-[#FF6B35] to-[#FF8C42] rounded-md mb-3"
                    style={{ width: "85%" }}
                  ></div>
                  <div className="h-1.5 bg-[rgba(74,74,74,0.12)] rounded mb-1.5"></div>
                  <div className="h-1.5 bg-[rgba(74,74,74,0.12)] rounded mb-1.5"></div>
                  <div className="h-1.5 bg-[rgba(74,74,74,0.12)] rounded" style={{ width: "60%" }}></div>
                </div>
              </div>
            </div>

            <p className="text-center text-sm text-[#4a4a4a] font-medium mt-5">
              Realtime KPIs • Clean UI • Enterprise Ready
            </p>
          </div>
        </div>
      </div>
      <ParticlesBackground
        colors={["#00ffff", "#ff00ff", "#ffaa00"]}
        size={4}
        countDesktop={80}
        countTablet={60}
        countMobile={40}
        zIndex={-1}
        height="100vh"
      />
      
    </section>
  );
}
