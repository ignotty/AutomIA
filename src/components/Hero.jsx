import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section style={{ padding: '100px 20px', backgroundColor: '#0a0a23', color: '#fff', textAlign: 'center' }}>
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h2 style={{ fontSize: '48px', fontWeight: 'bold' }}>
          Automatize seu Futuro com IA
        </h2>
        <p style={{ marginTop: '20px', fontSize: '20px', color: '#ccc' }}>
          Reduza custos, aumente a produtividade e acelere seu crescimento.
        </p>
        <button style={{ marginTop: '40px', padding: '12px 32px', fontSize: '18px', backgroundColor: '#1d4ed8', color: '#fff', border: 'none', borderRadius: '10px', cursor: 'pointer' }}>
          Solicitar Demonstração
        </button>
      </motion.div>
    </section>
  );
};

export default Hero;
