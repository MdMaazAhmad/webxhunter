'use client'
import { Code } from "lucide-react";
import { useRouter } from "next/navigation";
import Logo from "@/images/WebXHunterLogo2.png"

export default function Footer() {
  const router = useRouter();
  const quickLinks = [
    { name: "About Us", href: "/about" },
    { name: "Services", href: "/#service" },
    { name: "Blog", href: "/blog" },
    { name: "Contact", href: "/contact" }
  ];
  
  const services = [
    { name: "Web Development", href: "/#service" },
    { name: "Web Design", href: "/#service" },
    { name: "Digital Marketing", href: "/#service" },
    { name: "SEO", href: "/#service" }
  ];

  const handleLinkClick = (href, e) => {
    e.preventDefault();
    
    if (href.startsWith("/#")) {
      const sectionId = href.replace("/#", "");
      
      // If we're not on the home page, navigate there first
      if (window.location.pathname !== "/") {
        router.push(href);
      } else {
        // Smooth scroll to section
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ 
            behavior: "smooth", 
            block: "start" 
          });
          // Update URL hash
          window.history.pushState(null, null, href);
        }
      }
    } else {
      // Use router.push for regular page navigation
      router.push(href);
    }
  };

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
                className="w-[40%]"
              />
              
            </div>
            <p className="text-gray-400 text-sm md:text-base mb-6 max-w-md leading-relaxed">
              We specialize in creating innovative and effective digital
              solutions for businesses of all sizes. From stunning websites to
              comprehensive digital strategies.
            </p>
            <div className="flex space-x-4">
              {/* Social media links */}
              
              {/* Instagram */}
              <a
                href="https://www.instagram.com/webxhunter/" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-orange-400 transition-colors duration-200"
              >
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>

              {/* Facebook */}
              <a
                href="https://www.facebook.com/webxhunter/" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-orange-400 transition-colors duration-200"
              >
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
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
                  <li key={link.name}>
                    <a
                      href={link.href}
                      onClick={(e) => handleLinkClick(link.href, e)}
                      className="text-gray-400 hover:text-orange-400 transition-colors duration-200 text-xs md:text-sm"
                    >
                      {link.name}
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
                  <li key={service.name}>
                    <a
                      href={service.href}
                      onClick={(e) => handleLinkClick(service.href, e)}
                      className="text-gray-400 hover:text-orange-400 transition-colors duration-200 text-xs md:text-sm"
                    >
                      {service.name}
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
                href="/privacy-policy"
                className="text-gray-500 hover:text-orange-400 text-xs md:text-sm transition-colors duration-200"
              >
                Privacy Policy
              </a>
              <a
                href="/terms-of-service"
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