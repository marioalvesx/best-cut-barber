"use client";

import { useEffect } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Scissors,
  Zap,
  Sparkles,
  Droplets,
  Clock,
  CheckCircle,
} from "lucide-react";
import demoBarberServices1 from "@/assets/images/demo-barber-home-01.jpg";
import demoBarberServices2 from "@/assets/images/demo-barber-home-04.jpg";
import demoBarberServices8 from "@/assets/images/demo-barber-home-08.jpg";
import demoBarberServices4 from "@/assets/images/demo-barber-home-06.jpg";

const services = [
  {
    id: 1,
    title: "Corte Clássico",
    description: "Corte tradicional personalizado com acabamento impecável",
    price: "R$ 45",
    duration: "45 min",
    image: demoBarberServices1,
    icon: Scissors,
    features: [
      "Lavagem",
      "Corte personalizado",
      "Finalização",
      "Produtos premium",
    ],
  },
  {
    id: 2,
    title: "Barba Profissional",
    description: "Aparar e modelar a barba com técnicas tradicionais",
    price: "R$ 35",
    duration: "30 min",
    image: demoBarberServices2,
    icon: Zap,
    features: ["Aparar", "Modelagem", "Hidratação", "Óleo para barba"],
  },
  {
    id: 3,
    title: "Estilização",
    description: "Styling profissional com produtos de alta qualidade",
    price: "R$ 55",
    duration: "60 min",
    image: demoBarberServices8,
    icon: Sparkles,
    features: ["Corte", "Styling", "Produtos premium", "Consultoria de estilo"],
  },
  {
    id: 4,
    title: "Barba Completa",
    description: "Experiência completa com toalha quente e navalha",
    price: "R$ 65",
    duration: "75 min",
    image: demoBarberServices4,
    icon: Droplets,
    features: [
      "Toalha quente",
      "Navalha tradicional",
      "Hidratação",
      "Massagem facial",
    ],
  },
];

export default function Services() {
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
    <section id="services" className="py-20 bg-black">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 scroll-reveal">
          <div className="flex items-center justify-center mb-4">
            <Scissors className="h-6 w-6 text-primary mr-2" />
            <span className="text-primary font-semibold tracking-wider text-sm uppercase">
              Nossos Serviços
            </span>
          </div>
          <style>
            @import
            url('https://fonts.googleapis.com/css2?family=Limelight&family=Manrope:wght@200..800&family=Space+Mono:ital,wght@0,400;0,700;1,400;1,700&display=swap');
          </style>
          <h2
            className="text-4xl md:text-5xl font-medium mb-6"
            style={{ fontFamily: "'Limelight', cursive" }}
          >
            Serviços <span className="text-primary">Premium</span>
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Oferecemos uma gama completa de serviços de barbearia com preços
            flexíveis e qualidade incomparável. Cada serviço é executado por
            profissionais experientes usando produtos de primeira linha.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card
                key={service.id}
                className="bg-gray-900/50 border-gray-800 hover:bg-gray-900/80 transition-all duration-300 hover:shadow-xl hover:scale-[1.02] scroll-reveal overflow-hidden"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative">
                  <div className="relative h-48 bg-gray-800">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-black/40" />
                    <div className="absolute top-4 right-4 bg-primary text-black px-3 py-1 rounded-full font-bold text-sm">
                      {service.price}
                    </div>
                  </div>
                </div>
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between mb-2">
                    <CardTitle className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                        <IconComponent className="h-5 w-5 text-primary" />
                      </div>
                      {service.title}
                    </CardTitle>
                    <div className="flex items-center gap-1 text-sm text-gray-400">
                      <Clock className="h-4 w-4" />
                      {service.duration}
                    </div>
                  </div>
                  <p className="text-gray-300">{service.description}</p>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="space-y-2 mb-6">
                    {service.features?.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                        <span className="text-sm text-gray-300">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <Button
                    onClick={scrollToContact}
                    className="w-full bg-primary text-black hover:bg-primary/90"
                  >
                    Agendar {service.title}
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Pricing Table */}
        <div className="scroll-reveal">
          <h3 className="text-3xl font-bold text-center mb-8">
            Preços <span className="text-primary">Flexíveis</span>
          </h3>
          <div className="bg-gray-900/30 rounded-lg p-8 backdrop-blur-sm">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-xl font-bold mb-4 text-primary">
                  Cortes Tradicionais
                </h4>
                <div className="space-y-3">
                  <div className="flex justify-between items-center border-b border-gray-800 pb-2">
                    <span className="text-gray-300">
                      Corte clássico com lavagem
                    </span>
                    <span className="font-bold">R$ 45</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-gray-800 pb-2">
                    <span className="text-gray-300">Corte + barba</span>
                    <span className="font-bold">R$ 70</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-gray-800 pb-2">
                    <span className="text-gray-300">
                      Corte infantil (até 12 anos)
                    </span>
                    <span className="font-bold">R$ 30</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Corte + styling</span>
                    <span className="font-bold">R$ 55</span>
                  </div>
                </div>
              </div>
              <div>
                <h4 className="text-xl font-bold mb-4 text-primary">
                  Serviços Especiais
                </h4>
                <div className="space-y-3">
                  <div className="flex justify-between items-center border-b border-gray-800 pb-2">
                    <span className="text-gray-300">Aparar barba</span>
                    <span className="font-bold">R$ 25</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-gray-800 pb-2">
                    <span className="text-gray-300">Modelagem de barba</span>
                    <span className="font-bold">R$ 35</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-gray-800 pb-2">
                    <span className="text-gray-300">Barbear com navalha</span>
                    <span className="font-bold">R$ 40</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Experiência completa</span>
                    <span className="font-bold">R$ 65</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
