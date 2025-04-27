import Head from 'next/head'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Image from 'next/image'

export default function About() {
  return (
    <>
      <Head>
      <title>Sobre a AutomIA | Especialistas em Automação para Clínicas</title>
<meta name="description" content="Conheça a AutomIA: soluções inteligentes para transformar o agendamento e a gestão de clínicas médicas." />

      </Head>
      <Header />
      <main style={{ padding: '80px 20px', backgroundColor: '#f9f9f9', textAlign: 'center' }}>
        <h1 style={{ fontSize: '36px', fontWeight: 'bold', marginBottom: '40px', color: '#0a0a23' }}>
          Sobre a AutomIA
        </h1>

        <div style={{ maxWidth: '800px', margin: '0 auto', fontSize: '18px', color: '#555' }}>
          <p style={{ marginBottom: '20px' }}>
            A AutomIA nasceu com a missão de simplificar a gestão de clínicas e consultórios, tornando o agendamento de consultas mais rápido, inteligente e eficiente.
          </p>
          <p style={{ marginBottom: '20px' }}>
            Usamos inteligência artificial para reduzir faltas, organizar agendas e aumentar a produtividade dos profissionais de saúde.
          </p>
          <p style={{ marginBottom: '20px' }}>
            Nosso foco é entregar tecnologia acessível, que gere resultados reais e permita que clínicas de todos os portes escalem seus atendimentos sem perder qualidade.
          </p>
        </div>

        <div style={{ marginTop: '60px' }}>
          <Image 
            src="/images/sobre-clinica.png" 
            alt="Equipe AutomIA" 
            width={600} 
            height={400}
            style={{ borderRadius: '12px' }}
          />
        </div>
      </main>
      <Footer />
    </>
  )
}
