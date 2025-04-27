import { motion } from 'framer-motion';

const benefits = [
  {
    title: 'Automação Inteligente',
    description: 'Implantamos processos automáticos com inteligência de decisão.',
  },
  {
    title: 'Economia de Tempo',
    description: 'Libere sua equipe de tarefas repetitivas e foque no crescimento.',
  },
  {
    title: 'Resultados Rápidos',
    description: 'Veja o retorno do investimento em semanas, não anos.',
  },
];

const Benefits = () => {
  return (
    <section style={{ padding: '80px 20px', backgroundColor: '#f9f9f9', textAlign: 'center' }}>
      <h2 style={{ fontSize: '32px', fontWeight: 'bold', marginBottom: '40px', color: '#0a0a23' }}>
        Benefícios da Automação
      </h2>
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '20px' }}>
        {benefits.map((benefit, index) => (
          <motion.div
            key={index}
            style={{ width: '300px', padding: '20px', backgroundColor: '#fff', border: '1px solid #eaeaea', borderRadius: '8px' }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <h3 style={{ fontSize: '20px', fontWeight: 'bold', marginBottom: '10px', color: '#0a0a23' }}>
              {benefit.title}
            </h3>
            <p style={{ fontSize: '16px', color: '#555' }}>
              {benefit.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Benefits;
