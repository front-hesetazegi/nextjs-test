"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Button from "../Button";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="text-black py-8 sticky top-0 bg-white px-6 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/">
          <Image
            src="/image/main-logo.svg"
            alt="Home Logo"
            width={220}
            height={55}
            priority
          />
        </Link>

        <button
          className="flex flex-col items-center space-y-2 z-[100] lg:hidden"
          onClick={toggleMenu}
        >
          <div
            className={`w-8 h-1 bg-black transition-all duration-300 ease-in-out ${
              menuOpen ? "rotate-45 translate-y-2" : ""
            }`}
          ></div>
          <div
            className={`w-8 h-1 bg-black transition-all duration-300 ease-in-out ${
              menuOpen ? "opacity-0" : ""
            }`}
          ></div>
          <div
            className={`w-8 h-1 bg-black transition-all duration-300 ease-in-out ${
              menuOpen ? "-rotate-45 -translate-y-4" : ""
            }`}
          ></div>
        </button>

        <div
          className={`fixed top-0 right-0 w-full h-full bg-white bg-opacity-90 z-50 transition-transform transform 
             ${menuOpen ? "translate-x-0" : "translate-x-full"} lg:hidden`}
        >
          <nav className="flex justify-center items-center h-full">
            <ul className="flex flex-col space-y-6 text-black text-center">
              <li>
                <Link
                  href="/about-us"
                  className="hover:text-gray-400"
                  onClick={() => setMenuOpen(false)}
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="hover:text-gray-400"
                  onClick={() => setMenuOpen(false)}
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="/use-cases"
                  className="hover:text-gray-400"
                  onClick={() => setMenuOpen(false)}
                >
                  Use Cases
                </Link>
              </li>
              <li>
                <Link
                  href="/pricing"
                  className="hover:text-gray-400"
                  onClick={() => setMenuOpen(false)}
                >
                  Pricing
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="hover:text-gray-400"
                  onClick={() => setMenuOpen(false)}
                >
                  Blog
                </Link>
              </li>

              <Button
                variant="secondary"
                label="Request a quote"
                onClick={() => setMenuOpen(false)}
              />
            </ul>
          </nav>
        </div>

        <nav className="hidden lg:flex justify-between items-end w-full">
          <ul className="flex space-x-6 items-center">
            <li>
              <Link href="/about-us" className="hover:text-gray-400">
                About Us
              </Link>
            </li>
            <li>
              <Link href="/services" className="hover:text-gray-400">
                Services
              </Link>
            </li>
            <li>
              <Link href="/use-cases" className="hover:text-gray-400">
                Use Cases
              </Link>
            </li>
            <li>
              <Link href="/pricing" className="hover:text-gray-400">
                Pricing
              </Link>
            </li>
            <li>
              <Link href="/blog" className="hover:text-gray-400">
                Blog
              </Link>
            </li>

            <Button variant="secondary" label="Request a quote" />
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
