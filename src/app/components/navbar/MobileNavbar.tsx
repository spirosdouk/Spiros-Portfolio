"use client";

import React, { useState } from "react";
import Logo from "../shared/logo";

export default function MobileNavbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navLinks = [
    { href: "/#about", label: "About" },
    { href: "/#experience", label: "Experience" },
    { href: "/#projects", label: "Projects" },
    { href: "/#courses", label: "Publications & Professional Service" },
    { href: "/blog", label: "Blog" },
    { href: "/#contact", label: "Contact Me" },
  ];

  return (
    <nav
      className="fixed lg:hidden top-0 left-0 w-full z-50 bg-black shadow-lg"
      style={{ backgroundColor: "var(--background)" }}
    >
      <div className="relative flex items-center justify-between h-16">
        <Logo />
        <button
          type="button"
          onClick={toggleMenu}
          className="text-gray-300 hover:text-white focus:outline-none mr-10"
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
        >
          <svg
            className="h-6 w-6"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden="true"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M3 6h18M3 12h18m-18 6h18"
              />
            )}
          </svg>
        </button>
      </div>

      {isOpen && (
        <div
          className="absolute top-full left-0 w-full z-50 shadow-lg"
          style={{ backgroundColor: "var(--background)" }}
        >
          <div className="px-4 py-2 space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
                onClick={toggleMenu}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
