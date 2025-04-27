import Head from 'next/head'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Image from 'next/image'

export default function Resources() {
  return (
    <>
      <Head>
      <title>Benefícios da Automação para Clínicas | AutomIA</title>
<meta name="description" content="Descubra como automatizar sua clínica pode aumentar sua eficiência e reduzir custos com agendamento inteligente." />

      </Head>
      <Header />
      <main style={{ padding: '80px 20px', backgroundColor: '#fff', textAlign: 'center' }}>
        <h1 style={{ fontSize: '36px', fontWeight: 'bold', marginBottom: '40px', color: '#0a0a23' }}>
          Recursos e Tendências
        </h1>

        <div style={{ maxWidth: '800px', margin: '0 auto', fontSize: '18px', color: '#555', marginBottom: '60px' }}>
          <p style={{ marginBottom: '20px' }}>
            Clínicas que implementam sistemas automatizados de agendamento reduzem em média 30% das faltas e aumentam em 25% o volume de consultas realizadas.
          </p>
          <p style={{ marginBottom: '20px' }}>
            Além disso, a automação proporciona economia de até 20 horas semanais da equipe de recepção, liberando mais tempo para focar no atendimento humanizado.
          </p>
        </div>

        <div>
          <Image 
            src="/images/grafico-crescimento.png" 
            alt="Gráfico de Crescimento" 
            width={600} 
            height={400}
            style={{ borderRadius: '12px' }}
          />
        </div>

        <div style={{ marginTop: '40px', fontSize: '16px', color: '#888' }}>
          <em>* Fonte: Pesquisa AutomIA 2025 com mais de 200 clínicas automatizadas.</em>
        </div>
      </main>
      <Footer />
    </>
  )
}
