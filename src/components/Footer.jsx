export default function Footer() {
  return (
    <footer className="bg-[#1a1a1a] pt-16 pb-8">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div>
            <h3 className="text-base font-bold text-white mb-5">Services</h3>
            <ul className="space-y-3">
              <li><a href="#services" className="text-[#8a8a8a] text-sm hover:text-[#FF6B35] hover:translate-x-1 transition-all duration-200">Website Design</a></li>
              <li><a href="#services" className="text-[#8a8a8a] text-sm hover:text-[#FF6B35] hover:translate-x-1 transition-all duration-200">SAP Consulting</a></li>
              <li><a href="#services" className="text-[#8a8a8a] text-sm hover:text-[#FF6B35] hover:translate-x-1 transition-all duration-200">ABAP Development</a></li>
              <li><a href="#services" className="text-[#8a8a8a] text-sm hover:text-[#FF6B35] hover:translate-x-1 transition-all duration-200">Fiori UX</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-base font-bold text-white mb-5">Company</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-[#8a8a8a] text-sm hover:text-[#FF6B35] hover:translate-x-1 transition-all duration-200">About</a></li>
              <li><a href="#case-studies" className="text-[#8a8a8a] text-sm hover:text-[#FF6B35] hover:translate-x-1 transition-all duration-200">Case Studies</a></li>
              <li><a href="#blog" className="text-[#8a8a8a] text-sm hover:text-[#FF6B35] hover:translate-x-1 transition-all duration-200">Blog</a></li>
              <li><a href="#" className="text-[#8a8a8a] text-sm hover:text-[#FF6B35] hover:translate-x-1 transition-all duration-200">Careers</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-base font-bold text-white mb-5">Contact</h3>
            <ul className="space-y-3">
              <li><a href="mailto:hello@technest.dev" className="text-[#8a8a8a] text-sm hover:text-[#FF6B35] hover:translate-x-1 transition-all duration-200">hello@technest.dev</a></li>
              <li><a href="tel:+919800000000" className="text-[#8a8a8a] text-sm hover:text-[#FF6B35] hover:translate-x-1 transition-all duration-200">+91-98XX-XXX-XXX</a></li>
              <li><span className="text-[#8a8a8a] text-sm">Bengaluru, IN</span></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-base font-bold text-white mb-5">Follow Us</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-[#8a8a8a] text-sm hover:text-[#FF6B35] hover:translate-x-1 transition-all duration-200">LinkedIn</a></li>
              <li><a href="#" className="text-[#8a8a8a] text-sm hover:text-[#FF6B35] hover:translate-x-1 transition-all duration-200">Twitter</a></li>
              <li><a href="#" className="text-[#8a8a8a] text-sm hover:text-[#FF6B35] hover:translate-x-1 transition-all duration-200">GitHub</a></li>
            </ul>
          </div>
        </div>
        
        {/* Gradient divider */}
        <div className="h-0.5 bg-linear-to-r from-transparent via-[#FF6B35] to-transparent mb-8"></div>
        
        <div className="text-center">
          <p className="text-[#8a8a8a] text-sm">
            © {new Date().getFullYear()} TechNest. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}