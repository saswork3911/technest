"use client";

import { ThreeDScrollTriggerContainer, ThreeDScrollTriggerRow } from "./lightswind/3d-scroll-trigger";

const testimonials = [
  {
    name: "Zoe Williams",
    company: "Studio Aurora",
    testimonial: "The attention to detail is phenomenal. The animations, spacing, and component harmony make every project feel premium.",
    avatarGradient: "bg-gradient-to-r from-[#FF6B35] to-[#FF8C42]"
  },
  {
    name: "Aria Thompson",
    company: "CreativePixel Studio",
    testimonial: "TechNest has completely changed how we design modern interfaces. Every component feels elegant, responsive, and intuitive.",
    avatarGradient: "bg-gradient-to-r from-purple-500 to-pink-500"
  },
  {
    name: "Ethan Rivera",
    company: "CodeLoom Technologies",
    testimonial: "The customization options in TechNest are unmatched. We built an entire SaaS dashboard in days instead of weeks.",
    avatarGradient: "bg-gradient-to-r from-blue-500 to-cyan-500"
  }
];

// Card Component
export  function TestCard({ name, company, testimonial, avatarGradient }) {
  return (
    <div className="w-96 h-48 bg-[#FFF8F3] rounded-2xl p-6 shadow- mx-4 flex flex-col">
      <div className="flex items-center gap-3 mb-4">
        <div className={`w-12 h-12 rounded-full ${avatarGradient} shrink-0`}></div>
        <div className="min-w-0">
          <h4 className="font-semibold text-gray-900 truncate">{name}</h4>
          <p className="text-sm text-gray-500 truncate">{company}</p>
        </div>
      </div>
      <p className="text-gray-700 leading-relaxed text-sm flex-1 overflow-hidden">
        {testimonial}
      </p>
    </div>
  );
}

export default function Testimonial() {
  return (
    <section className="py-6 bg-white">
      <ThreeDScrollTriggerContainer>
        <ThreeDScrollTriggerRow baseVelocity={5} direction={1}>
          {testimonials.map((testimonial, index) => (
            <TestCard key={index} {...testimonial} />
          ))}
        </ThreeDScrollTriggerRow>

        <ThreeDScrollTriggerRow baseVelocity={5} direction={-1} className="pt-6">
          {testimonials.map((testimonial, index) => (
            <TestCard key={index} {...testimonial} />
          ))}
        </ThreeDScrollTriggerRow>
      </ThreeDScrollTriggerContainer>
    </section>
  );
}
