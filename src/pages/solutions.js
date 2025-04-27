import Head from 'next/head'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function Solutions() {
  return (
    <>
      <Head>
        <title>Soluções - AutomIA</title>
        <meta name="description" content="Conheça as soluções de automação inteligente da AutomIA para empresas de todos os tamanhos." />
      </Head>
      <Header />
      <main style={{ padding: '80px 20px', backgroundColor: '#f9f9f9', textAlign: 'center' }}>
        <h1 style={{ fontSize: '36px', fontWeight: 'bold', marginBottom: '20px', color: '#0a0a23' }}>
          Nossas Soluções
        </h1>
        <p style={{ fontSize: '18px', marginBottom: '60px', color: '#555' }}>
          Descubra como nossas soluções de IA podem impulsionar a eficiência do seu negócio.
        </p>

        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '30px' }}>
          <div style={{ width: '300px', padding: '20px', backgroundColor: '#fff', border: '1px solid #eaeaea', borderRadius: '12px', boxShadow: '0px 2px 8px rgba(0, 0, 0, 0.05)' }}>
            <h3 style={{ fontSize: '22px', fontWeight: 'bold', color: '#0a0a23' }}>Automação de Atendimento</h3>
            <p style={{ marginTop: '10px', fontSize: '16px', color: '#666' }}>
              Chatbots inteligentes para atendimento 24/7 sem perder qualidade.
            </p>
          </div>

          <div style={{ width: '300px', padding: '20px', backgroundColor: '#fff', border: '1px solid #eaeaea', borderRadius: '12px', boxShadow: '0px 2px 8px rgba(0, 0, 0, 0.05)' }}>
            <h3 style={{ fontSize: '22px', fontWeight: 'bold', color: '#0a0a23' }}>Automação de Processos</h3>
            <p style={{ marginTop: '10px', fontSize: '16px', color: '#666' }}>
              Robôs que realizam tarefas repetitivas, liberando sua equipe para focar no estratégico.
            </p>
          </div>

          <div style={{ width: '300px', padding: '20px', backgroundColor: '#fff', border: '1px solid #eaeaea', borderRadius: '12px', boxShadow: '0px 2px 8px rgba(0, 0, 0, 0.05)' }}>
            <h3 style={{ fontSize: '22px', fontWeight: 'bold', color: '#0a0a23' }}>Análise Preditiva</h3>
            <p style={{ marginTop: '10px', fontSize: '16px', color: '#666' }}>
              Preveja tendências de mercado e antecipe decisões com inteligência artificial.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
