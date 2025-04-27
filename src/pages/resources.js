import Head from 'next/head'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function Resources() {
  return (
    <>
      <Head>
        <title>Recursos - AutomIA</title>
        <meta name="description" content="Explore nossos artigos, e-books e materiais educativos sobre automação inteligente e inteligência artificial." />
      </Head>
      <Header />
      <main style={{ padding: '80px 20px', backgroundColor: '#fff', textAlign: 'center' }}>
        <h1 style={{ fontSize: '36px', fontWeight: 'bold', marginBottom: '20px', color: '#0a0a23' }}>
          Recursos
        </h1>
        <p style={{ fontSize: '18px', marginBottom: '40px', color: '#555' }}>
          Em breve, disponibilizaremos uma variedade de conteúdos exclusivos para ajudar você a entender o poder da automação e da inteligência artificial nos negócios.
        </p>

        <div style={{ fontSize: '16px', color: '#888' }}>
          <em>Estamos preparando conteúdos incríveis. Fique ligado!</em>
        </div>
      </main>
      <Footer />
    </>
  )
}
