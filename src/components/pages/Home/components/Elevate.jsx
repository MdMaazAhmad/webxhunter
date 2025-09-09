import { useRouter } from "next/navigation";

export default function Elevate() {
  const router = useRouter();
  return (
    <section className="relative flex items-center justify-center px-4 py-20 bg-gradient-to-br from-gray-900 via-black to-gray-900 overflow-hidden">
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-10 left-10 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-orange-400/10 rounded-full blur-3xl animate-pulse"></div>

        <div className="absolute inset-0 opacity-40">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23ffffff' fillOpacity='0.03'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
              backgroundRepeat: "repeat",
            }}
          ></div>
        </div>
      </div>

      <div className="relative w-full max-w-4xl mx-auto text-center space-y-8 z-10">
        <div className="space-y-4">
          <div className="space-y-2">
            <p className="text-orange-400 text-xs font-semibold uppercase tracking-widest">
              Let's Get Started
            </p>

            <h2 className="text-white text-2xl md:text-3xl font-bold leading-tight tracking-tight max-w-3xl mx-auto">
              Ready to{" "}
              <span className="bg-gradient-to-r from-orange-400 to-blue-500 bg-clip-text text-transparent">
                Elevate
              </span>{" "}
              Your Online Presence?
            </h2>
          </div>

          <p className="text-gray-300 text-sm md:text-base leading-relaxed max-w-2xl mx-auto">
            Contact us today to discuss your project and discover how we can
            help you achieve your digital goals with cutting-edge solutions.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-6">
          <button
            className="group relative inline-flex items-center justify-center px-6 py-3
                     bg-gradient-to-r from-orange-500 to-blue-600 hover:from-orange-600 hover:to-blue-700
                     text-white font-semibold text-sm
                     rounded-lg shadow-xl
                     transition-all duration-300 ease-out
                     transform hover:scale-105 hover:-translate-y-1
                     w-full sm:w-auto
                     overflow-hidden"
            type="button"
            onClick={()=>router.push('/contact')}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-orange-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

            <span className="relative flex items-center gap-2">
              Get a Free Consultation
              <svg
                className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </span>
          </button>

          <button
            className="group inline-flex items-center justify-center px-6 py-3
                     bg-transparent border-2 border-gray-600 hover:border-orange-400
                     text-gray-300 hover:text-white font-semibold text-sm
                     rounded-lg hover:bg-orange-400/10
                     transition-all duration-300 ease-out
                     transform hover:scale-105
                     w-full sm:w-auto"
            type="button"
          >
            <span
              className="flex items-center gap-2 cursor-pointer"
              onClick={() => router.push("/#service")}
            >
              View Our Work
              <svg
                className="w-4 h-4 transform group-hover:rotate-12 transition-transform duration-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                />
              </svg>
            </span>
          </button>
        </div>

        <div className="pt-8 border-t border-gray-800">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-gray-400 text-xs">
            <div className="flex items-center gap-2">
              <svg
                className="w-4 h-4 text-green-400"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="font-medium">Free Consultation</span>
            </div>

            <div className="flex items-center gap-2">
              <svg
                className="w-4 h-4 text-blue-400"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="font-medium">24/7 Support</span>
            </div>

            <div className="flex items-center gap-2">
              <svg
                className="w-4 h-4 text-orange-400"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="font-medium">Fast Delivery</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
