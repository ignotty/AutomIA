import { motion } from 'framer-motion';

const steps = [
  {
    title: 'Analisamos seus processos',
    description: 'Entendemos onde a automação trará mais resultados para o seu negócio.',
  },
  {
    title: 'Desenvolvemos soluções personalizadas',
    description: 'Criamos automações específicas usando IA para suas necessidades.',
  },
  {
    title: 'Você colhe os resultados',
    description: 'Veja o aumento de produtividade, redução de custos e crescimento acelerado.',
  },
];

const HowItWorks = () => {
  return (
    <section style={{ padding: '80px 20px', backgroundColor: '#f9f9f9', textAlign: 'center' }}>
      <h2 style={{ fontSize: '32px', fontWeight: 'bold', marginBottom: '40px', color: '#0a0a23' }}>
        Como Funciona
      </h2>
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '20px' }}>
        {steps.map((step, index) => (
          <motion.div
            key={index}
            style={{ width: '300px', padding: '20px', backgroundColor: '#fff', border: '1px solid #eaeaea', borderRadius: '8px' }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <h3 style={{ fontSize: '20px', fontWeight: 'bold', marginBottom: '10px', color: '#0a0a23' }}>
              {step.title}
            </h3>
            <p style={{ fontSize: '16px', color: '#555' }}>
              {step.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default HowItWorks;
