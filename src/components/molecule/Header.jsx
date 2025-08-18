"use client";
import { Button } from "@/components/atom/Button";
import { useRouter, usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import Logo from "@/images/WebXHunterLogo2.png"

const NAV_ITEMS = [
  { label: "Home", href: "/", section: "home" },
  { label: "About us", href: "/about", section: "about" },
  { label: "Service", href: "/#service", section: "service", type: "section" },
  { label: "Blogs", href: "/blog", section: "blog" },
];

const smoothScroll = (id) => {
  document.getElementById(id)?.scrollIntoView({ 
    behavior: "smooth", 
    block: "start" 
  });
};

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [isScrolled, setIsScrolled] = useState(false);
  const [currentHash, setCurrentHash] = useState("/");
  const router = useRouter();
  const pathname = usePathname();

  // Handle scroll detection
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 0.1);
    const handleEscape = (e) => e.key === "Escape" && setIsMenuOpen(false);
    
    window.addEventListener("scroll", handleScroll);
    document.addEventListener("keydown", handleEscape);
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("keydown", handleEscape);
    };
  }, []);

  // Enhanced intersection observer and hash handling
  useEffect(() => {
    if (typeof window !== "undefined") {
      const handleHashChange = () => {
        setCurrentHash(`/${window.location.hash}`);
      };

      handleHashChange(); // Set initial hash
      window.addEventListener("hashchange", handleHashChange);

      // Set active section based on location
      if (!pathname.includes('#')) {
        setActiveSection('home'); // Default to home if no hash
      }

      // Enhanced intersection observer with ML-experts settings
      const options = {
        threshold: 0.5, // ML-experts uses 0.5 for more precise detection
        rootMargin: "0px 0px -20% 0px" // Slight bottom margin for better UX
      };

      const handleIntersect = (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
            // Update hash without triggering navigation
            if (pathname === "/") {
              const newHash = `#${entry.target.id}`;
              if (window.location.hash !== newHash) {
                window.history.replaceState(null, null, newHash);
                setCurrentHash(`/${newHash}`);
              }
            }
          }
        });
      };

      const observer = new IntersectionObserver(handleIntersect, options);

      // Observe all sections with IDs
      document.querySelectorAll("section[id]").forEach((section) => {
        observer.observe(section);
      });

      return () => {
        window.removeEventListener("hashchange", handleHashChange);
        observer.disconnect();
      };
    }
  }, [pathname]);

  const handleNavClick = (item, e) => {
    e.preventDefault();
    setIsMenuOpen(false);
    
    // Handle section-based navigation (like Service)
    if (item.type === "section") {
      const sectionId = item.href.replace("/#", "");
      setCurrentHash(item.href);
      
      if (pathname !== "/") {
        router.push("/");
        // Wait for navigation to complete, then scroll
        setTimeout(() => {
          smoothScroll(sectionId);
          // Update hash after navigation
          window.history.pushState(null, null, `#${sectionId}`);
          setCurrentHash(`/#${sectionId}`);
        }, 150);
      } else {
        // Update URL hash
        window.history.pushState(null, null, `#${sectionId}`);
        setCurrentHash(`/#${sectionId}`);
        smoothScroll(sectionId);
      }
    } 
    // Handle regular page navigation (Home, About, Blogs, etc.)
    else {
      // Clear hash state for non-section navigation
      setCurrentHash(item.href);
      setActiveSection(item.section || "home");
      
      // Navigate to the page
      router.push(item.href);
      
      // Clear any hash from URL if navigating to a regular page
      if (item.href === "/" && window.location.hash) {
        window.history.pushState(null, null, "/");
      }
    }
  };

  // Fixed logo click handler
  const handleLogoClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    
    try {
      // Clear any existing hash
      if (window.location.hash) {
        window.history.pushState(null, null, "/");
      }
      
      // Reset state
      setCurrentHash("/");
      setActiveSection("home");
      setIsMenuOpen(false);
      
      // Navigate to home
      if (pathname !== "/") {
        router.push("/");
      } else {
        // If already on home page, scroll to top
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    } catch (error) {
      console.error("Navigation error:", error);
      // Fallback: use window.location
      window.location.href = "/";
    }
  };

  // Enhanced active state detection
  const isActive = (item) => {
    if (item.type === "section") {
      const sectionId = item.href.replace("/#", "");
      // Check if current section matches OR if the hash matches
      return (pathname === "/" && activeSection === sectionId) || 
             currentHash === item.href;
    }
    
    // For regular pages, check pathname match
    return pathname === item.href;
  };

  const getNavItemClass = (item) => {
    const baseClass = "text-sm font-medium transition-all duration-300 hover:text-gray-300 px-3 py-2 rounded-md";
    const activeClass = isActive(item) 
      ? "text-orange-400 bg-orange-400/10 font-semibold" 
      : "text-white hover:bg-white/5";
    
    return `${baseClass} ${activeClass}`;
  };

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? "bg-black/90 backdrop-blur-md shadow-lg" : "bg-transparent"
    }`}>
      <div className="flex items-center justify-between px-4 lg:px-8 py-1">
        
        {/* Logo - Fixed click handler */}
        <button 
          className="flex items-center gap-3 text-white cursor-pointer hover:opacity-80 transition-opacity focus:outline-none focus:opacity-80"
          onClick={handleLogoClick}
          type="button"
        >
          <img src={Logo.src} alt="Logo" className="w-[18%] bg-blend-color-burn" />
        </button>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-2 whitespace-nowrap py-2">
          {NAV_ITEMS.map((item) => (
            <button
              key={item.href}
              onClick={(e) => handleNavClick(item, e)}
              className={getNavItemClass(item)}
            >
              {item.label}
            </button>
          ))}
          <button 
            onClick={() => router.push("/contact")}
            className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white  py-1 px-4 rounded-md font-bold text-xs md:text-base transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-orange-500/25 flex items-center justify-center gap-3 ml-4"
          >
            Contact
          </button>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="lg:hidden w-8 h-8 flex flex-col justify-center items-center space-y-1"
          aria-label="Menu"
        >
          {[0, 1, 2].map((i) => (
            <span
              key={i}
              className={`block w-6 h-0.5 bg-white transition-all duration-300 ${
                isMenuOpen
                  ? i === 0 ? "rotate-45 translate-y-1.5" 
                    : i === 1 ? "opacity-0" 
                    : "-rotate-45 -translate-y-1.5"
                  : ""
              }`}
            />
          ))}
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`lg:hidden overflow-hidden transition-all duration-300 ${
        isMenuOpen ? "max-h-96" : "max-h-0"
      }`}>
        <nav className="bg-black/95 backdrop-blur-md px-4 py-4 space-y-2 border-t border-gray-800">
          {NAV_ITEMS.map((item) => (
            <button
              key={item.href}
              onClick={(e) => handleNavClick(item, e)}
              className={`block w-full text-left py-3 px-2 rounded-md transition-all duration-200 ${
                isActive(item) 
                  ? "text-orange-400 font-semibold bg-orange-400/10" 
                  : "text-white hover:bg-white/5"
              }`}
            >
              {item.label}
            </button>
          ))}
          <button 
            className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white  py-1 px-4 rounded-md font-bold text-sm md:text-base transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-orange-500/25 flex items-center justify-center gap-3 w-full mt-4"
            onClick={() => {
              setIsMenuOpen(false);
              router.push("/contact");
            }}
          >
            Contact
          </button>
        </nav>
      </div>

      {/* Mobile Overlay */}
      {isMenuOpen && (
        <div 
          className="lg:hidden fixed inset-0 bg-black/50 -z-10"
          onClick={() => setIsMenuOpen(false)}
        />
      )}
    </header>
  );
}