export default function CTASection() {
  return (
    <section id="contact" className="py-24 bg-linear-to-r from-[#FF6B35] to-[#FF8C42] relative overflow-hidden scroll-mt-[72px]">
      {/* Background decorations */}
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-white/10 rounded-full"></div>
      <div className="absolute -bottom-36 -left-36 w-[500px] h-[500px] bg-white/10 rounded-full"></div>
      
      <div className="container relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl font-extrabold text-white mb-4">
            Ready to build?
          </h2>
          <p className="text-xl text-white/95 mb-12 leading-relaxed">
            Tell us about your SAP or website goals. We'll send a tailored plan within 48 hours.
          </p>
          
          <form className="bg-white rounded-[22px] p-10 shadow-2xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
              <div className="flex flex-col gap-2 text-left">
                <label className="text-sm font-semibold text-[#1a1a1a]">Name</label>
                <input
                  type="text"
                  className="w-full px-4 py-3.5 bg-white border-2 border-[rgba(74,74,74,0.12)] rounded-[10px] text-[#1a1a1a] text-base transition-all duration-200 focus:outline-none focus:border-[#FF6B35] focus:shadow-[0_0_0_3px_rgba(255,107,53,0.1)]"
                  placeholder="Your name"
                  required
                />
              </div>
              <div className="flex flex-col gap-2 text-left">
                <label className="text-sm font-semibold text-[#1a1a1a]">Work Email</label>
                <input
                  type="email"
                  className="w-full px-4 py-3.5 bg-white border-2 border-[rgba(74,74,74,0.12)] rounded-[10px] text-[#1a1a1a] text-base transition-all duration-200 focus:outline-none focus:border-[#FF6B35] focus:shadow-[0_0_0_3px_rgba(255,107,53,0.1)]"
                  placeholder="you@company.com"
                  required
                />
              </div>
              <div className="flex flex-col gap-2 text-left">
                <label className="text-sm font-semibold text-[#1a1a1a]">Company</label>
                <input
                  type="text"
                  className="w-full px-4 py-3.5 bg-white border-2 border-[rgba(74,74,74,0.12)] rounded-[10px] text-[#1a1a1a] text-base transition-all duration-200 focus:outline-none focus:border-[#FF6B35] focus:shadow-[0_0_0_3px_rgba(255,107,53,0.1)]"
                  placeholder="Your company"
                  required
                />
              </div>
              <div className="flex flex-col gap-2 text-left">
                <label className="text-sm font-semibold text-[#1a1a1a]">Service Interest</label>
                <select
                  className="w-full px-4 py-3.5 bg-white border-2 border-[rgba(74,74,74,0.12)] rounded-[10px] text-[#1a1a1a] text-base transition-all duration-200 focus:outline-none focus:border-[#FF6B35] focus:shadow-[0_0_0_3px_rgba(255,107,53,0.1)]"
                  required
                >
                  <option value="">Select a service</option>
                  <option value="website">Website Design</option>
                  <option value="sap">SAP Consulting</option>
                  <option value="abap">ABAP Development</option>
                  <option value="multiple">Multiple Services</option>
                </select>
              </div>
              <div className="md:col-span-2 flex flex-col gap-2 text-left">
                <label className="text-sm font-semibold text-[#1a1a1a]">Message</label>
                <textarea
                  className="w-full px-4 py-3.5 bg-white border-2 border-[rgba(74,74,74,0.12)] rounded-[10px] text-[#1a1a1a] text-base min-h-[120px] resize-vertical transition-all duration-200 focus:outline-none focus:border-[#FF6B35] focus:shadow-[0_0_0_3px_rgba(255,107,53,0.1)]"
                  placeholder="Tell us about your project goals, timeline, and requirements..."
                ></textarea>
              </div>
            </div>
            <button
              type="submit"
              className="w-full h-14 bg-linear-to-r from-[#FF6B35] to-[#FF8C42] text-white text-lg font-semibold rounded-2xl hover:shadow-xl hover:-translate-y-0.5 transition-all duration-200"
            >
              Get Proposal
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}