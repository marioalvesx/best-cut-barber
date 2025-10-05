"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Scissors, Award, Users, Calendar } from "lucide-react";

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("revealed");
          }
        });
      },
      { threshold: 0.1 }
    );

    const scrollElements = document.querySelectorAll(".scroll-reveal");
    scrollElements.forEach((el) => observer.observe(el));

    return () => {
      scrollElements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <div className="relative w-full h-full">
          <Image
            src="https://cdn.abacus.ai/images/fbc4f161-79a1-4f58-826e-c86244351a39.png"
            alt="Professional barber at work"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 hero-gradient" />
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 text-center">
        <div className="scroll-reveal mb-8">
          <div className="flex items-center justify-center mb-4">
            <Scissors className="h-8 w-8 text-primary mr-2" />
            <span className="text-primary font-semibold tracking-wider text-sm uppercase">
              Porto Alegre Premium Barber
            </span>
          </div>

          <style>
            @import
            url('https://fonts.googleapis.com/css2?family=Limelight&family=Manrope:wght@200..800&family=Space+Mono:ital,wght@0,400;0,700;1,400;1,700&display=swap');
          </style>
          <h1
            className="text-8xl block mb-6"
            style={{ fontFamily: "'Limelight', cursive" }}
          >
            Best Haircut
          </h1>

          <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Dedicados a capacitar homens a se sentirem e parecerem fantásticos.
            Cortes modernos, barbas profissionais e estilo incomparável.
          </p>
        </div>

        <div className="scroll-reveal flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 rounded-full mt-10">
          <Button
            size="lg"
            onClick={scrollToContact}
            className="bg-white text-black hover:bg-slate-300 text-md px-8 py-4 rounded-xl h-16"
          >
            <Calendar className="h-4 w-4 mr-2" />
            Agendar Online
          </Button>
        </div>

        {/* Stats */}
        <div className="scroll-reveal grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          <div className="text-center">
            <Award className="h-8 w-8 text-white mx-auto mb-3" />
            <div className="text-3xl font-bold mb-2 count-animation">15+</div>
            <p className="text-gray-400">Anos de Experiência</p>
          </div>
          <div className="text-center">
            <Users className="h-8 w-8 text-white mx-auto mb-3" />
            <div className="text-3xl font-bold mb-2 count-animation">5000+</div>
            <p className="text-gray-400">Clientes Satisfeitos</p>
          </div>
          <div className="text-center">
            <Scissors className="h-8 w-8 text-white mx-auto mb-3" />
            <div className="text-3xl font-bold mb-2 count-animation">800+</div>
            <p className="text-gray-400">Cortes por Mês</p>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
}
