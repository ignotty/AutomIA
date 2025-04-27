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
      <title>Agendamento Inteligente para Clínicas | AutomIA</title>
<meta name="description" content="Automatize o agendamento de consultas da sua clínica com inteligência artificial. Reduza faltas e maximize sua produtividade!" />

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
