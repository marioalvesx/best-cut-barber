
import Header from '@/components/header'
import Hero from '@/components/hero'
import About from '@/components/about'
import Services from '@/components/services'
import Gallery from '@/components/gallery'
import Contact from '@/components/contact'
import Footer from '@/components/footer'

export default function HomePage() {
  return (
    <main className="min-h-screen bg-black">
      <Header />
      <Hero />
      <About />
      <Services />
      <Gallery />
      <Contact />
      <Footer />
    </main>
  )
}
