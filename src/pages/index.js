import Head from 'next/head'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Benefits from '@/components/Benefits'
import HowItWorks from '@/components/HowItWorks'
import Testimonials from '@/components/Testimonials'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Head>
        <title>AutomIA - Soluções de Automação com IA</title>
        <meta name="description" content="Venda de automações inteligentes com IA. Potencialize seu negócio!" />
      </Head>
      <Header />
      <main style={{ backgroundColor: '#f9f9f9' }}>
        <Hero />
        <Benefits />
        <HowItWorks />
        <Testimonials />
      </main>
      <Footer />
    </>
  )
}
