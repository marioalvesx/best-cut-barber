"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Calendar,
  User,
  MessageCircle,
} from "lucide-react";
import { toast } from "sonner";
import demoBarberContact1 from "@/assets/images/contact/demo-contact-barber-shop-background.png";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    date: "",
    message: "",
  });

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

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Basic validation
    if (!formData.name || !formData.email || !formData.service) {
      toast.error("Por favor, preencha os campos obrigatórios");
      return;
    }

    try {
      // Simulate form submission
      await new Promise((resolve) => setTimeout(resolve, 1000));
      toast.success(
        "Agendamento enviado com sucesso! Entraremos em contato em breve."
      );

      // Reset form
      setFormData({
        name: "",
        email: "",
        phone: "",
        service: "",
        date: "",
        message: "",
      });
    } catch (error) {
      toast.error("Erro ao enviar agendamento. Tente novamente.");
    }
  };

  const whatsappNumber = "5551999998888";
  const whatsappMessage =
    "Olá! Gostaria de agendar um horário na Best Cut Barber.";
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    whatsappMessage
  )}`;

  return (
    <section id="contact" className="py-20 bg-black">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 scroll-reveal">
          <div className="flex items-center justify-center mb-4">
            <Calendar className="h-6 w-6 text-primary mr-2" />
            <span className="text-primary font-semibold tracking-wider text-sm uppercase">
              Contato & Agendamento
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
            Agende seu <span className="text-primary">Horário</span>
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Entre em contato conosco para agendar seu horário ou esclarecer
            dúvidas. Estamos prontos para proporcionar a melhor experiência em
            cuidados masculinos.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Information */}
          <div className="lg:col-span-1 space-y-8 scroll-reveal">
            {/* Location Card */}
            <Card className="bg-gray-900/50 border-gray-800">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <MapPin className="h-5 w-5 text-primary" />
                  Localização
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 mb-4">
                  Rua da Praia, 1000 - Centro
                  <br />
                  Porto Alegre, RS - 90010-000
                </p>
                <div className="relative aspect-video rounded-lg overflow-hidden">
                  <Image
                    src={demoBarberContact1}
                    alt="Best Cut Barber exterior"
                    fill
                    className="object-cover"
                  />
                </div>
              </CardContent>
            </Card>

            {/* Contact Details */}
            <Card className="bg-gray-900/50 border-gray-800">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <Phone className="h-5 w-5 text-primary" />
                  Contato
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-3">
                  <Phone className="h-4 w-4 text-primary" />
                  <span className="text-gray-300">(51) 99999-8888</span>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="h-4 w-4 text-primary" />
                  <span className="text-gray-300">
                    contato@bestcutbarber.com.br
                  </span>
                </div>
                <Button
                  onClick={() => window.open(whatsappUrl, "_blank")}
                  className="w-full bg-green-600 hover:bg-green-700 text-white"
                >
                  <MessageCircle className="h-4 w-4 mr-2" />
                  WhatsApp
                </Button>
              </CardContent>
            </Card>

            {/* Operating Hours */}
            <Card className="bg-gray-900/50 border-gray-800">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <Clock className="h-5 w-5 text-primary" />
                  Horário de Funcionamento
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-300">Segunda-feira</span>
                  <span className="text-primary font-semibold">
                    8:00 - 20:00
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-300">Terça-feira</span>
                  <span className="text-primary font-semibold">
                    8:00 - 20:00
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-300">Quarta-feira</span>
                  <span className="text-primary font-semibold">
                    8:00 - 20:00
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-300">Quinta-feira</span>
                  <span className="text-primary font-semibold">
                    8:00 - 20:00
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-300">Sexta-feira</span>
                  <span className="text-primary font-semibold">
                    8:00 - 20:00
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-300">Sábado</span>
                  <span className="text-primary font-semibold">
                    8:00 - 18:00
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-300">Domingo</span>
                  <span className="text-gray-500">Fechado</span>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Booking Form */}
          <div className="lg:col-span-2 scroll-reveal">
            <Card className="bg-gray-900/50 border-gray-800">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-2xl">
                  <Calendar className="h-6 w-6 text-primary" />
                  Agendar Online
                </CardTitle>
                <p className="text-gray-400">
                  Preencha o formulário abaixo e entraremos em contato para
                  confirmar seu agendamento.
                </p>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-300">
                        Nome Completo *
                      </label>
                      <div className="relative">
                        <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                        <Input
                          type="text"
                          placeholder="Seu nome completo"
                          value={formData.name}
                          onChange={(e) =>
                            handleInputChange("name", e.target.value)
                          }
                          className="pl-10 bg-gray-800/50 border-gray-700 text-white placeholder-gray-400"
                          required
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-300">
                        E-mail *
                      </label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                        <Input
                          type="email"
                          placeholder="seu@email.com"
                          value={formData.email}
                          onChange={(e) =>
                            handleInputChange("email", e.target.value)
                          }
                          className="pl-10 bg-gray-800/50 border-gray-700 text-white placeholder-gray-400"
                          required
                        />
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-300">
                        Telefone/WhatsApp
                      </label>
                      <div className="relative">
                        <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                        <Input
                          type="tel"
                          placeholder="(51) 99999-9999"
                          value={formData.phone}
                          onChange={(e) =>
                            handleInputChange("phone", e.target.value)
                          }
                          className="pl-10 bg-gray-800/50 border-gray-700 text-white placeholder-gray-400"
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-300">
                        Serviço Desejado *
                      </label>
                      <Select
                        value={formData.service}
                        onValueChange={(value) =>
                          handleInputChange("service", value)
                        }
                        required
                      >
                        <SelectTrigger className="bg-gray-800/50 border-gray-700 text-white">
                          <SelectValue placeholder="Escolha o serviço" />
                        </SelectTrigger>
                        <SelectContent className="bg-gray-800 border-gray-700">
                          <SelectItem value="corte-classico">
                            Corte Clássico - R$ 45
                          </SelectItem>
                          <SelectItem value="barba-profissional">
                            Barba Profissional - R$ 35
                          </SelectItem>
                          <SelectItem value="estilizacao">
                            Estilização - R$ 55
                          </SelectItem>
                          <SelectItem value="barba-completa">
                            Barba Completa - R$ 65
                          </SelectItem>
                          <SelectItem value="corte-barba">
                            Corte + Barba - R$ 70
                          </SelectItem>
                          <SelectItem value="outros">
                            Outros serviços
                          </SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-300">
                      Data Preferencial
                    </label>
                    <div className="relative">
                      <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                      <Input
                        type="date"
                        value={formData.date}
                        onChange={(e) =>
                          handleInputChange("date", e.target.value)
                        }
                        className="pl-10 bg-gray-800/50 border-gray-700 text-white"
                        min={new Date().toISOString().split("T")[0]}
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-300">
                      Mensagem Adicional
                    </label>
                    <Textarea
                      placeholder="Alguma observação especial ou preferência de horário..."
                      value={formData.message}
                      onChange={(e) =>
                        handleInputChange("message", e.target.value)
                      }
                      className="bg-gray-800/50 border-gray-700 text-white placeholder-gray-400 resize-none"
                      rows={4}
                    />
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button
                      type="submit"
                      className="flex-1 bg-primary text-black hover:bg-primary/90"
                    >
                      <Calendar className="h-4 w-4 mr-2" />
                      Enviar Agendamento
                    </Button>
                    <Button
                      type="button"
                      variant="outline"
                      onClick={() => window.open(`tel:+5551999998888`)}
                      className="flex-1 border-primary text-primary hover:bg-primary hover:text-black"
                    >
                      <Phone className="h-4 w-4 mr-2" />
                      Ligar Agora
                    </Button>
                  </div>

                  <p className="text-xs text-gray-400 text-center">
                    * Campos obrigatórios. Seus dados estão seguros e serão
                    usados apenas para agendamento.
                  </p>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
