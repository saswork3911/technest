// Add Font Awesome icons
if (typeof document !== 'undefined' && !document.querySelector('link[href*="font-awesome"]')) {
  const link = document.createElement('link');
  link.href = 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.2/css/all.min.css';
  link.rel = 'stylesheet';
  document.head.appendChild(link);
}

export default function KPIGrid() {
  return (
    <section className="bg-[#FFF8F3] py-12 border-t border-b border-[rgba(74,74,74,0.12)]">
      <div className="container">
        <div className="flex justify-center items-center gap-20 flex-wrap">
          <div className="text-center bg-white p-6 px-8 rounded-2xl shadow-sm min-w-[200px] hover:-translate-y-1 hover:shadow-md transition-all duration-300">
            <div className="text-4xl font-extrabold text-[#FF6B35] flex items-center justify-center gap-2 mb-2">
              <i className="fas fa-trending-up text-xl text-[#FF8C42]"></i>
              120+
            </div>
            <div className="text-sm text-[#4a4a4a] font-medium">Projects</div>
          </div>
          
          <div className="text-center bg-white p-6 px-8 rounded-2xl shadow-sm min-w-[200px] hover:-translate-y-1 hover:shadow-md transition-all duration-300">
            <div className="text-4xl font-extrabold text-[#FF6B35] flex items-center justify-center gap-2 mb-2">
              <i className="fas fa-trending-up text-xl text-[#FF8C42]"></i>
              98%
            </div>
            <div className="text-sm text-[#4a4a4a] font-medium">On-time Delivery</div>
          </div>
          
          <div className="text-center bg-white p-6 px-8 rounded-2xl shadow-sm min-w-[200px] hover:-translate-y-1 hover:shadow-md transition-all duration-300">
            <div className="text-4xl font-extrabold text-[#FF6B35] flex items-center justify-center gap-2 mb-2">
              <i className="fas fa-trending-up text-xl text-[#FF8C42]"></i>
              30%
            </div>
            <div className="text-sm text-[#4a4a4a] font-medium">Avg. Faster Go-Live</div>
          </div>
        </div>
      </div>
    </section>
  );
}