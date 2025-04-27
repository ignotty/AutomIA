import { motion } from 'framer-motion';
import Image from 'next/image';

const Hero = () => {
  return (
    <section style={{ padding: '100px 20px', backgroundColor: '#0a0a23', color: '#fff', textAlign: 'center' }}>
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        style={{ maxWidth: '800px', margin: '0 auto' }}
      >
        <h1 style={{ fontSize: '8vw', fontWeight: 'bold' }}>
  Automatize Agendamentos da Sua Clínica com Inteligência Artificial
</h1>

        <p style={{ marginTop: '20px', fontSize: '20px', color: '#ccc' }}>
          Reduza faltas, economize tempo e maximize o crescimento do seu consultório com a AutomIA.
        </p>
        <motion.button
  whileHover={{ scale: 1.05, backgroundColor: '#2563eb' }}
  whileTap={{ scale: 0.95 }}
  style={{
    marginTop: '40px',
    padding: '12px 32px',
    fontSize: '18px',
    backgroundColor: '#1d4ed8',
    color: '#fff',
    border: 'none',
    borderRadius: '10px',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease'
  }}
>
  Solicitar Demonstração
</motion.button>

      </motion.div>

      <div style={{ marginTop: '60px' }}>
        <Image 
          src="/images/clinica-hero.png" 
          alt="Agendamento de Consultas Automatizado"
          width={600} 
          height={400} 
          style={{ borderRadius: '12px' }}
        />
      </div>  
    </section>
  );
};

export default Hero;
