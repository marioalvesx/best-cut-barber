"use client";

import { useEffect } from "react";
import Image from "next/image";
import { Card } from "@/components/ui/card";
import { Eye } from "lucide-react";
import demoBarberGallery1 from "@/assets/images/gallery/demo-barber-gallery-01.avif";
import demoBarberGallery2 from "@/assets/images/gallery/demo-barber-gallery-02.jpg";
import demoBarberGallery3 from "@/assets/images/gallery/demo-barber-gallery-03.jpg";
import demoBarberGallery4 from "@/assets/images/gallery/demo-barber-gallery-04.jpg";
import demoBarberGallery5 from "@/assets/images/gallery/demo-barber-gallery-05.png";
import demoBarberGallery6 from "@/assets/images/gallery/demo-barber-gallery-06.jpg";

const galleryImages = [
  {
    id: 1,
    src: demoBarberGallery1,
    title: "Corte Moderno",
    category: "Cortes",
  },
  {
    id: 2,
    src: demoBarberGallery2,
    title: "Barba Estilizada",
    category: "Barbas",
  },
  {
    id: 3,
    src: demoBarberGallery3,
    title: "Pompadour Clássico",
    category: "Styling",
  },
  {
    id: 4,
    src: demoBarberGallery4,
    title: "Fade Perfeito",
    category: "Fades",
  },
  {
    id: 5,
    src: demoBarberGallery5,
    title: "Profissional em Ação",
    category: "Processo",
  },
  {
    id: 6,
    src: demoBarberGallery6,
    title: "Ferramentas Tradicionais",
    category: "Equipamentos",
  },
];

export default function Gallery() {
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

  return (
    <section id="gallery" className="py-20 bg-gray-950/50">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 scroll-reveal">
          <div className="flex items-center justify-center mb-4">
            <Eye className="h-6 w-6 text-primary mr-2" />
            <span className="text-primary font-semibold tracking-wider text-sm uppercase">
              Nosso Portfolio
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
            Galeria de <span className="text-primary">Trabalhos</span>
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Confira alguns dos nossos melhores trabalhos. Cada corte é uma obra
            de arte, personalizada para realçar o melhor de cada cliente.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((image, index) => (
            <Card
              key={image.id}
              className="group bg-gray-900/50 border-gray-800 overflow-hidden hover:shadow-2xl transition-all duration-500 hover:scale-[1.05] scroll-reveal"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative aspect-square overflow-hidden">
                <Image
                  src={image.src}
                  alt={image.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300" />

                {/* Overlay Content */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="text-center">
                    <Eye className="h-8 w-8 text-white mx-auto mb-2" />
                    <h3 className="text-white font-bold text-lg mb-1">
                      {image.title}
                    </h3>
                    <p className="text-primary text-sm font-semibold">
                      {image.category}
                    </p>
                  </div>
                </div>

                {/* Category Badge */}
                <div className="absolute top-3 left-3 bg-primary text-black px-2 py-1 rounded-full text-xs font-semibold">
                  {image.category}
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-20 scroll-reveal">
          <div className="bg-gradient-to-r from-gray-900/80 to-gray-800/80 rounded-lg p-8 backdrop-blur-sm">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div className="group">
                <div className="text-4xl font-bold text-primary mb-2 count-animation">
                  800+
                </div>
                <p className="text-gray-300">Cortes por Mês</p>
              </div>
              <div className="group">
                <div className="text-4xl font-bold text-primary mb-2 count-animation">
                  600+
                </div>
                <p className="text-gray-300">Barbas por Mês</p>
              </div>
              <div className="group">
                <div className="text-4xl font-bold text-primary mb-2 count-animation">
                  400+
                </div>
                <p className="text-gray-300">Estilizações por Mês</p>
              </div>
              <div className="group">
                <div className="text-4xl font-bold text-primary mb-2 count-animation">
                  98%
                </div>
                <p className="text-gray-300">Satisfação</p>
              </div>
            </div>
          </div>
        </div>

        {/* Testimonials */}
        <div className="mt-20 scroll-reveal">
          <h3 className="text-3xl font-bold text-center mb-12">
            O que nossos <span className="text-primary">clientes</span> dizem
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="bg-gray-900/50 border-gray-800 p-6">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mr-4">
                  <span className="text-primary font-bold">RS</span>
                </div>
                <div>
                  <h4 className="font-bold">Roberto Silva</h4>
                  <p className="text-sm text-gray-400">Porto Alegre</p>
                </div>
              </div>
              <p className="text-gray-300 italic">
                "Excelente atendimento e qualidade incomparável. Sempre saio
                satisfeito com o resultado. Os profissionais são muito
                talentosos!"
              </p>
              <div className="flex text-primary text-sm mt-3">★★★★★</div>
            </Card>

            <Card className="bg-gray-900/50 border-gray-800 p-6">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mr-4">
                  <span className="text-primary font-bold">MT</span>
                </div>
                <div>
                  <h4 className="font-bold">Marcelo Torres</h4>
                  <p className="text-sm text-gray-400">Zona Norte</p>
                </div>
              </div>
              <p className="text-gray-300 italic">
                "A melhor barbearia de Porto Alegre! Ambiente acolhedor,
                profissionais experientes e resultado sempre perfeito.
                Recomendo!"
              </p>
              <div className="flex text-primary text-sm mt-3">★★★★★</div>
            </Card>

            <Card className="bg-gray-900/50 border-gray-800 p-6">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mr-4">
                  <span className="text-primary font-bold">LC</span>
                </div>
                <div>
                  <h4 className="font-bold">Luiz Costa</h4>
                  <p className="text-sm text-gray-400">Centro</p>
                </div>
              </div>
              <p className="text-gray-300 italic">
                "Frequento a Best Cut há 3 anos. Qualidade consistente, preços
                justos e sempre conseguem o estilo que eu quero. Top demais!"
              </p>
              <div className="flex text-primary text-sm mt-3">★★★★★</div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
