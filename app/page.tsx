import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Services from '@/components/Services'
import Experience from '@/components/Experience'
import Courses from '@/components/Courses'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Services />
      <Experience />
      <Courses />
      <Contact />
      <Footer />
    </main>
  )
} 