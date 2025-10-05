"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  Menu,
  TwitterIcon,
  FacebookIcon,
  InstagramIcon,
  PhoneCallIcon,
  X,
} from "lucide-react";
import Logo from "@/assets/images/best-cut.svg";
import Image from "next/image";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setIsMenuOpen(false);
  };

  return (
    <>
      {/* Main header */}
      <header
        className={`fixed w-full z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-black/95 backdrop-blur-sm border-b border-gray-800"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-screen-[100%] mx-auto px-8 py-5">
          <div className="flex items-center justify-between h-16">
            <div className="flex justify-start items-center">
              <PhoneCallIcon className="h-4 w-4 mr-2" />
              <span>55 51 99999-8888</span>
            </div>
            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <button
                onClick={() => scrollToSection("home")}
                className="text-white hover:text-primary transition-colors"
              >
                Início
              </button>
              <button
                onClick={() => scrollToSection("about")}
                className="text-white hover:text-primary transition-colors"
              >
                Sobre
              </button>
              <button
                onClick={() => scrollToSection("services")}
                className="text-white hover:text-primary transition-colors"
              >
                Serviços
              </button>
              {/* Logo */}
              <div className="flex items-center">
                <Image
                  src={Logo}
                  alt="Best Cut Barber"
                  width={100}
                  height={100}
                />
              </div>
              <button
                onClick={() => scrollToSection("gallery")}
                className="text-white hover:text-primary transition-colors"
              >
                Galeria
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="text-white hover:text-primary transition-colors"
              >
                Contato
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="text-white hover:text-primary transition-colors"
              >
                Agendar Horário
              </button>
            </nav>

            <div className="flex justify-end items-center gap-4">
              <FacebookIcon className="h-5 w-5 text-white" />
              <InstagramIcon className="h-5 w-5 text-white" />
              <TwitterIcon className="h-5 w-5 text-white" />
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6 text-white" />
              ) : (
                <Menu className="h-6 w-6 text-white" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-black/95 backdrop-blur-sm border-t border-gray-800">
            <nav className="max-w-6xl mx-auto px-4 py-4 space-y-4">
              <button
                onClick={() => scrollToSection("home")}
                className="block w-full text-left text-white hover:text-primary transition-colors"
              >
                Início
              </button>
              <button
                onClick={() => scrollToSection("about")}
                className="block w-full text-left text-white hover:text-primary transition-colors"
              >
                Sobre
              </button>
              <button
                onClick={() => scrollToSection("services")}
                className="block w-full text-left text-white hover:text-primary transition-colors"
              >
                Serviços
              </button>
              <button
                onClick={() => scrollToSection("gallery")}
                className="block w-full text-left text-white hover:text-primary transition-colors"
              >
                Galeria
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="block w-full text-left text-white hover:text-primary transition-colors"
              >
                Contato
              </button>
              <Button
                onClick={() => scrollToSection("contact")}
                className="w-full bg-primary text-black hover:bg-primary/90 mt-4"
              >
                Agendar Horário
              </Button>
            </nav>
          </div>
        )}
      </header>
    </>
  );
}
