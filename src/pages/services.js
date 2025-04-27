import Head from 'next/head'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function Services() {
  return (
    <>
      <Head>
      <title>Serviços de Automação para Clínicas | AutomIA</title>
<meta name="description" content="Soluções de agendamento automático, lembretes de consulta e gestão de agendas para clínicas médicas." />

      </Head>
      <Header />
      <main style={{ padding: '80px 20px', backgroundColor: '#f9f9f9', textAlign: 'center' }}>
        <h1 style={{ fontSize: '36px', fontWeight: 'bold', marginBottom: '40px', color: '#0a0a23' }}>
          Nossos Serviços para Clínicas
        </h1>

        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '30px' }}>
          <div style={{ width: '300px', backgroundColor: '#fff', padding: '20px', borderRadius: '12px', boxShadow: '0px 2px 8px rgba(0,0,0,0.05)' }}>
            <h3 style={{ fontSize: '22px', fontWeight: 'bold', color: '#0a0a23' }}>Agendamento Automático</h3>
            <p style={{ marginTop: '10px', fontSize: '16px', color: '#555' }}>
              Sistema de agendamento online 24h para clínicas, integrado com WhatsApp ou site.
            </p>
            <p style={{ marginTop: '20px', fontSize: '18px', fontWeight: 'bold', color: '#1d4ed8' }}>A partir de R$ 299/mês</p>
          </div>

          <div style={{ width: '300px', backgroundColor: '#fff', padding: '20px', borderRadius: '12px', boxShadow: '0px 2px 8px rgba(0,0,0,0.05)' }}>
            <h3 style={{ fontSize: '22px', fontWeight: 'bold', color: '#0a0a23' }}>Lembretes Automatizados</h3>
            <p style={{ marginTop: '10px', fontSize: '16px', color: '#555' }}>
              Envio automático de lembretes de consultas por WhatsApp, SMS ou e-mail.
            </p>
            <p style={{ marginTop: '20px', fontSize: '18px', fontWeight: 'bold', color: '#1d4ed8' }}>A partir de R$ 99/mês</p>
          </div>

          <div style={{ width: '300px', backgroundColor: '#fff', padding: '20px', borderRadius: '12px', boxShadow: '0px 2px 8px rgba(0,0,0,0.05)' }}>
            <h3 style={{ fontSize: '22px', fontWeight: 'bold', color: '#0a0a23' }}>Gestão de Agendas Inteligente</h3>
            <p style={{ marginTop: '10px', fontSize: '16px', color: '#555' }}>
              Preenchimento de horários livres automaticamente em casos de cancelamentos.
            </p>
            <p style={{ marginTop: '20px', fontSize: '18px', fontWeight: 'bold', color: '#1d4ed8' }}>A partir de R$ 199/mês</p>
          </div>
        </div>

        <div style={{ marginTop: '80px', fontSize: '16px', color: '#555' }}>
          <p><em>* Valores podem variar de acordo com a demanda e personalização da sua clínica.</em></p>
        </div>
      </main>
      <Footer />
    </>
  )
}
