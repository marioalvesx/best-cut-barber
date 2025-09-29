"use client";

import {
  Scissors,
  MapPin,
  Phone,
  Mail,
  Clock,
  Instagram,
  Facebook,
  Youtube,
} from "lucide-react";
import Logo from "@/assets/images/best-cut.svg";
import Image from "next/image";

export default function Footer() {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black border-t border-gray-800">
      <div className="max-w-6xl mx-auto px-4">
        {/* Main Footer Content */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <div className="flex items-center mb-6">
              <Image src={Logo} alt="Best Cut" width={65} height={65} />
              <div className="ml-3">
                <h3 className="font-bold text-xl text-white">Best Cut</h3>
                <p className="text-sm text-gray-400">BARBER</p>
              </div>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Barbearia premium especializada em cortes masculinos modernos e
              cuidados com barba. Mais de 15 anos de tradição em Porto Alegre.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-gray-800 hover:bg-primary hover:text-black transition-colors flex items-center justify-center text-gray-300"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-gray-800 hover:bg-primary hover:text-black transition-colors flex items-center justify-center text-gray-300"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-gray-800 hover:bg-primary hover:text-black transition-colors flex items-center justify-center text-gray-300"
                aria-label="YouTube"
              >
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-lg mb-6 text-primary">
              Links Rápidos
            </h4>
            <nav className="space-y-3">
              <button
                onClick={() => scrollToSection("home")}
                className="block text-gray-300 hover:text-primary transition-colors"
              >
                Início
              </button>
              <button
                onClick={() => scrollToSection("about")}
                className="block text-gray-300 hover:text-primary transition-colors"
              >
                Sobre Nós
              </button>
              <button
                onClick={() => scrollToSection("services")}
                className="block text-gray-300 hover:text-primary transition-colors"
              >
                Serviços
              </button>
              <button
                onClick={() => scrollToSection("gallery")}
                className="block text-gray-300 hover:text-primary transition-colors"
              >
                Galeria
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="block text-gray-300 hover:text-primary transition-colors"
              >
                Contato
              </button>
            </nav>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold text-lg mb-6 text-primary">Serviços</h4>
            <ul className="space-y-3">
              <li className="text-gray-300">Cortes Clássicos</li>
              <li className="text-gray-300">Barba Profissional</li>
              <li className="text-gray-300">Estilização</li>
              <li className="text-gray-300">Barba Completa</li>
              <li className="text-gray-300">Corte Infantil</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-bold text-lg mb-6 text-primary">Contato</h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                <div className="text-gray-300">
                  <p>Rua da Praia, 1000</p>
                  <p>Centro, Porto Alegre - RS</p>
                  <p>90010-000</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-primary flex-shrink-0" />
                <span className="text-gray-300">(51) 99999-8888</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-primary flex-shrink-0" />
                <span className="text-gray-300">
                  contato@bestcutbarber.com.br
                </span>
              </div>
              <div className="flex items-start gap-3">
                <Clock className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                <div className="text-gray-300">
                  <p>Seg-Sex: 8h às 20h</p>
                  <p>Sábado: 8h às 18h</p>
                  <p>Domingo: Fechado</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="py-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2">
            <Scissors className="h-4 w-4 text-primary" />
            <p className="text-gray-400 text-sm">
              Barbearia especializada de Porto Alegre
            </p>
          </div>
          <p className="text-gray-400 text-sm text-center md:text-right">
            © {currentYear} desenvolvido por Mario Alves. Todos os direitos
            reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
