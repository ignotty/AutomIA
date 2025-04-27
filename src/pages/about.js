import Head from 'next/head'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function About() {
  return (
    <>
      <Head>
        <title>Sobre Nós - AutomIA</title>
        <meta name="description" content="Conheça a história e a missão da AutomIA em transformar negócios com inteligência artificial." />
      </Head>
      <Header />
      <main style={{ padding: '80px 20px', backgroundColor: '#f9f9f9', textAlign: 'center' }}>
        <h1 style={{ fontSize: '36px', fontWeight: 'bold', marginBottom: '20px', color: '#0a0a23' }}>
          Sobre Nós
        </h1>
        <p style={{ fontSize: '18px', marginBottom: '40px', color: '#555' }}>
          Na AutomIA, nossa missão é democratizar o acesso à inteligência artificial, permitindo que empresas de todos os tamanhos cresçam de maneira escalável, eficiente e inovadora.
        </p>
        <p style={{ fontSize: '18px', marginBottom: '20px', color: '#555' }}>
          Trabalhamos lado a lado com nossos clientes para entender suas necessidades e oferecer soluções personalizadas de automação que entregam resultados concretos e mensuráveis.
        </p>
        <p style={{ fontSize: '18px', color: '#555' }}>
          Nosso compromisso é com a inovação contínua, buscando sempre maneiras de melhorar a experiência dos nossos parceiros e acelerar a transformação digital.
        </p>
      </main>
      <Footer />
    </>
  )
}
