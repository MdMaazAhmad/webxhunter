import { Code } from "lucide-react";
import Logo from "@/images/logo.svg";

export default function Footer() {
  const quickLinks = ["About Us", "Services", "Portfolio", "Blog", "Contact"];
  const services = [
    "Web Development",
    "Web Design",
    "Digital Marketing",
    "SEO",
    "E-commerce",
  ];

  return (
    <footer className="bg-[#020202] border-t border-[#020202]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Logo and description */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              <img
                src={Logo.src}
                alt="Logo"
                className="w-6 md:w-8 h-6 md:h-8"
              />
              <span className="text-white font-bold text-xl md:text-2xl">
                Web x Hunter
              </span>
            </div>
            <p className="text-gray-400 text-sm md:text-base mb-6 max-w-md leading-relaxed">
              We specialize in creating innovative and effective digital
              solutions for businesses of all sizes. From stunning websites to
              comprehensive digital strategies.
            </p>
            <div className="flex space-x-4">
              {/* Social media links */}
              <a
                href="#"
                className="text-gray-400 hover:text-orange-400 transition-colors duration-200"
              >
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                </svg>
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-orange-400 transition-colors duration-200"
              >
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.747.099.12.112.225.085.347-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.746-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24.009c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001 12.017.001z" />
                </svg>
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-orange-400 transition-colors duration-200"
              >
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-orange-400 transition-colors duration-200"
              >
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12.2 0C5.5 0 0 5.5 0 12.2s5.5 12.2 12.2 12.2 12.2-5.5 12.2-12.2S18.9 0 12.2 0zm6.4 8.8c0 .1 0 .3 0 .4 0 4.3-3.3 9.3-9.3 9.3-1.8 0-3.5-.5-4.9-1.4.3 0 .5 0 .8 0 1.6 0 3.1-.5 4.3-1.4-1.5 0-2.8-1-3.2-2.4.2 0 .4.1.7.1.3 0 .6 0 .9-.1-1.6-.3-2.8-1.7-2.8-3.4v0c.5.3 1 .4 1.6.4-.9-.6-1.5-1.6-1.5-2.8 0-.6.2-1.2.5-1.7 1.7 2.1 4.3 3.5 7.2 3.7-.1-.3-.1-.5-.1-.8 0-1.9 1.5-3.5 3.5-3.5 1 0 1.9.4 2.5 1.1.8-.2 1.5-.4 2.2-.8-.3.8-.8 1.5-1.5 1.9.7-.1 1.4-.3 2-.6-.4.7-1 1.3-1.7 1.8z" />
                </svg>
              </a>
            </div>
          </div>
          
          {/* Quick Links and Services - Side by Side on Mobile */}
          <div className="flex flex-row space-x-8 md:space-x-0 md:contents">
            {/* Quick Links */}
            <div className="flex-1 md:flex-none">
              <h3 className="text-white font-semibold mb-4 md:mb-6 text-base md:text-lg">
                Quick Links
              </h3>
              <ul className="space-y-3 md:space-y-4">
                {quickLinks.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-gray-400 hover:text-orange-400 transition-colors duration-200 text-xs md:text-sm"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div className="flex-1 md:flex-none">
              <h3 className="text-white font-semibold mb-4 md:mb-6 text-base md:text-lg">
                Services
              </h3>
              <ul className="space-y-3 md:space-y-4">
                {services.map((service) => (
                  <li key={service}>
                    <a
                      href="#"
                      className="text-gray-400 hover:text-orange-400 transition-colors duration-200 text-xs md:text-sm"
                    >
                      {service}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-xs md:text-sm">
              © 2025 Web x Hunter. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a
                href="#"
                className="text-gray-500 hover:text-orange-400 text-xs md:text-sm transition-colors duration-200"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-gray-500 hover:text-orange-400 text-xs md:text-sm transition-colors duration-200"
              >
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}