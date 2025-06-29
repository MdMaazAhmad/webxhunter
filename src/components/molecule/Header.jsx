"use client";
import { Button } from "@/components/atom/Button";
import Logo from "@/images/logo.svg";
import { useRouter, usePathname } from "next/navigation";
import { useState, useEffect } from "react";

const NAV_ITEMS = [
  { label: "Home", href: "/", section: "home" },
  { label: "About us", href: "/about", section: "about" },
  { label: "Service", href: "/#service", section: "service" },
  { label: "Blogs", href: "/blog" },
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
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    const handleEscape = (e) => e.key === "Escape" && setIsMenuOpen(false);
    
    window.addEventListener("scroll", handleScroll);
    document.addEventListener("keydown", handleEscape);
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("keydown", handleEscape);
    };
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      {
        threshold: 0.5
      }
    );

    document.querySelectorAll("section[id]").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const handleNavClick = (item, e) => {
    setIsMenuOpen(false);
    
    if (item.type === "section") {
      e.preventDefault();
      const sectionId = item.href.replace("#", "");
      
      // If we're not on home page, go to home first
      if (pathname !== "/") {
        router.push("/");
        setTimeout(() => smoothScroll(sectionId), 100);
      } else {
        smoothScroll(sectionId);
      }
    } else {
      // For page navigation, let the default behavior handle it
      router.push(item.href);
    }
  };

  const isActive = (item) => {
    if (item.type === "section") {
      const sectionId = item.href.replace("#", "");
      return pathname === "/" && activeSection === sectionId;
    }
    return pathname === item.href;
  };

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? "bg-black/90 backdrop-blur-md shadow-lg" : "bg-transparent"
    } border-b border-gray-800/50`}>
      <div className="flex items-center justify-between px-4 lg:px-8 py-4">
        
        {/* Logo */}
        <div 
          className="flex items-center gap-3 text-white cursor-pointer hover:opacity-80 transition-opacity"
          onClick={() => router.push("/")}
        >
          <img src={Logo.src} alt="Logo" className="w-4 h-4" />
          <h1 className="text-lg font-bold">Web x Hunter</h1>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-6">
          {NAV_ITEMS.map((item) => (
            <button
              key={item.href}
              onClick={(e) => handleNavClick(item, e)}
              className={`text-sm font-medium transition-colors hover:text-gray-300 px-2 py-1 rounded ${
                isActive(item) ? "text-orange-400" : "text-white"
              }`}
            >
              {item.label}
            </button>
          ))}
          <Button type="primary" onClick={() => router.push("/contact")}>
            Contact
          </Button>
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
              className={`block w-full text-left py-2 transition-colors ${
                isActive(item) ? "text-orange-400 font-semibold" : "text-white"
              }`}
            >
              {item.label}
            </button>
          ))}
          <Button 
            type="primary" 
            className="w-full mt-4"
            onClick={() => {
              setIsMenuOpen(false);
              router.push("/contact");
            }}
          >
            Contact
          </Button>
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