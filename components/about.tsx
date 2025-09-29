
'use client'

import { useEffect } from 'react'
import Image from 'next/image'
import { Card, CardContent } from '@/components/ui/card'
import { Scissors, Shield, Star, Clock } from 'lucide-react'

export default function About() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed')
          }
        })
      },
      { threshold: 0.1 }
    )

    const scrollElements = document.querySelectorAll('.scroll-reveal')
    scrollElements.forEach((el) => observer.observe(el))

    return () => {
      scrollElements.forEach((el) => observer.unobserve(el))
    }
  }, [])

  return (
    <section id="about" className="py-20 bg-gray-950/50">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 scroll-reveal">
          <div className="flex items-center justify-center mb-4">
            <Scissors className="h-6 w-6 text-primary mr-2" />
            <span className="text-primary font-semibold tracking-wider text-sm uppercase">
              Nossa História
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Dedicados à <span className="text-primary">Excelência</span>
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Estamos dedicados a capacitar homens a se sentirem e parecerem fantásticos. 
            Com mais de 15 anos de experiência, somos referência em cortes masculinos e cuidados com a barba em Porto Alegre.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Images */}
          <div className="scroll-reveal space-y-6">
            <div className="relative aspect-video rounded-lg overflow-hidden shadow-lg">
              <Image
                src="https://cdn.abacus.ai/images/b860bb90-9e24-4136-84b7-9577b7858178.png"
                alt="Traditional barber tools"
                fill
                className="object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="relative aspect-video rounded-lg overflow-hidden shadow-lg">
              <Image
                src="https://thumbs.dreamstime.com/b/retro-barbershop-charm-classic-style-warm-ambiance-cozy-vintage-interior-dark-wood-leather-chairs-lighting-tools-389359004.jpg"
                alt="Vintage barber shop interior"
                fill
                className="object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>

          {/* Text Content */}
          <div className="scroll-reveal">
            <h3 className="text-3xl font-bold mb-6">
              Tradição e Modernidade em <span className="text-primary">Harmonia</span>
            </h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Na Best Cut Barber, combinamos técnicas tradicionais de barbearia com as tendências mais modernas do mercado. 
              Nossa equipe de barbeiros experientes está sempre atualizada com as últimas técnicas e estilos.
            </p>
            <p className="text-gray-300 mb-8 leading-relaxed">
              Utilizamos apenas produtos de alta qualidade e ferramentas profissionais para garantir que cada cliente 
              saia da nossa barbearia se sentindo confiante e com visual impecável.
            </p>

            {/* Features Grid */}
            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <Shield className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold">Higiene Total</h4>
                  <p className="text-sm text-gray-400">Esterilização completa</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <Star className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold">Qualidade Premium</h4>
                  <p className="text-sm text-gray-400">Produtos de primeira</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <Clock className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold">Pontualidade</h4>
                  <p className="text-sm text-gray-400">Horário garantido</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <Scissors className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold">Expertise</h4>
                  <p className="text-sm text-gray-400">15+ anos experiência</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Philosophy Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 scroll-reveal">
          <Card className="bg-gray-900/50 border-gray-800 hover:bg-gray-900/80 transition-colors">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                <Scissors className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-4">Artesanato</h3>
              <p className="text-gray-400">
                Cada corte é uma obra de arte. Tratamos cada cliente de forma única, 
                criando estilos personalizados que realçam a personalidade individual.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-gray-900/50 border-gray-800 hover:bg-gray-900/80 transition-colors">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                <Shield className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-4">Confiança</h3>
              <p className="text-gray-400">
                Construímos relacionamentos duradouros baseados em confiança, 
                qualidade e um atendimento excepcional que supera expectativas.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-gray-900/50 border-gray-800 hover:bg-gray-900/80 transition-colors">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                <Star className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-4">Excelência</h3>
              <p className="text-gray-400">
                Buscamos constantemente a perfeição em cada detalhe, 
                desde o ambiente acolhedor até o resultado final impecável.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
