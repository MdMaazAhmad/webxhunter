export default function Elevate() {
  return (
    <section className=" flex items-center justify-center px-4 py-8 ">
      <div className="w-full  mx-auto text-center space-y-8">
        {/* Header Content */}
        <div className="space-y-4">
          <h1 className="text-white text-2xl md:text-4xl font-bold leading-tight tracking-tight max-w-3xl mx-auto">
            Ready to Elevate Your Online Presence?
          </h1>
          <p className="text-white/90 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto">
            Contact us today to discuss your project and discover how we can
            help you achieve your digital goals.
          </p>
        </div>

        {/* CTA Button */}
        <div className="pt-4">
          <button 
            className="inline-flex items-center justify-center px-8 py-3 sm:px-10 sm:py-4 
                     bg-blue-600 hover:bg-blue-700 active:bg-blue-800 
                     text-white font-semibold text-sm sm:text-base 
                     rounded-lg shadow-lg hover:shadow-xl 
                     transition-all duration-200 ease-in-out 
                     transform hover:scale-105 active:scale-95
                     focus:outline-none focus:ring-4 focus:ring-blue-500/50
                     min-w-fit max-w-sm w-full sm:w-auto"
            type="button"
            aria-label="Get a free consultation"
          >
            <span>Get a Free Consultation</span>
          </button>
        </div>
      </div>
    </section>
  );
}