import React from 'react';
import { FaTwitter, FaInstagram, FaFacebookF, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
  const navigationLinks = [
    { label: "Home", href: "/", section: "home" },
    { label: "About us", href: "/about", section: "about" },
    { label: "Service", href: "/#service", section: "service" },
    { label: "Blogs", href: "/blog" },
  ];

  const socialLinks = [
    { 
      icon: FaTwitter, 
      href: 'https://twitter.com/webxhunter',
      label: 'Twitter',
      hoverColor: 'hover:text-blue-400'
    },
    { 
      icon: FaInstagram, 
      href: 'https://instagram.com/webxhunter',
      label: 'Instagram',
      hoverColor: 'hover:text-pink-400'
    },
    { 
      icon: FaFacebookF, 
      href: 'https://facebook.com/webxhunter',
      label: 'Facebook',
      hoverColor: 'hover:text-blue-600'
    },
    { 
      icon: FaLinkedinIn, 
      href: 'https://linkedin.com/company/webxhunter',
      label: 'LinkedIn',
      hoverColor: 'hover:text-blue-500'
    }
  ];

  return (
    <footer className="bg-inherit border-t border-gray-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-8 md:py-12">
          {/* Navigation Links */}
          <nav className="mb-8">
            <ul className="flex flex-wrap justify-center gap-4 sm:gap-6 md:gap-8">
              {navigationLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-600 hover:text-gray-400 text-sm sm:text-base font-medium transition-colors duration-200 px-2 py-1"
                    aria-label={`Navigate to ${link.label}`}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Social Media Links */}
          <div className="flex justify-center space-x-6 mb-8">
            {socialLinks.map((social, index) => {
              const IconComponent = social.icon;
              return (
                <a
                  key={index}
                  href={social.href}
                  className={`text-gray-500 ${social.hoverColor} transition-colors duration-200 p-2 rounded-full hover:bg-gray-100`}
                  aria-label={`Follow us on ${social.label}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <IconComponent size={20} />
                </a>
              );
            })}
          </div>

          {/* Divider */}
          <div className="border-t border-gray-200 pt-6">
            {/* Copyright */}
            <p className="text-center text-gray-500 text-sm">
              © {new Date().getFullYear()} Web x Hunter. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;