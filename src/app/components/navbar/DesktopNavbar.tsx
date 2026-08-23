"use client";

import React, { useState } from "react";
import dynamic from "next/dynamic";
import Logo from "../shared/logo";

const ContactFormModal = dynamic(() => import("../contact/ContactMeDesktop"), {
  ssr: false,
});

export default function Navbar() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const navLinks = ["about", "experience", "projects", "courses"];

  return (
    <nav
      className="hidden lg:block fixed top-0 left-0 w-full z-50 bg-black shadow-lg"
      style={{ backgroundColor: "var(--background)" }}
    >
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-16">
          <Logo />
          <div className="hidden sm:flex sm:items-center sm:ml-6">
            <div className="flex space-x-4">
              {navLinks.map((link) => (
                <a
                  href={`/#${link}`}
                  key={link}
                  className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:text-white transition-colors"
                >
                  {link === "courses"
                    ? "Publications & Professional Service "
                    : link.charAt(0).toUpperCase() + link.slice(1)}
                </a>
              ))}
              <a
                href="/blog"
                className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:text-white transition-colors"
              >
                Blog
              </a>
            </div>
          </div>

          <div className="flex-initial">
            <button
              type="button"
              onClick={toggleModal}
              className="text-white bg-blue-950 hover:bg-blue-900 font-medium py-2 px-4 rounded-lg transition-colors"
            >
              Contact Me
            </button>
          </div>
        </div>
      </div>
      {isModalOpen && (
        <ContactFormModal isOpen={isModalOpen} toggleModal={toggleModal} />
      )}
    </nav>
  );
}
