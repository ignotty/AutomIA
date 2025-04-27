import { motion } from 'framer-motion';

const testimonials = [
  {
    quote: "Com a AutomIA, aumentamos nossa produtividade em 50% em apenas 3 meses!",
    name: "Lucas Silva",
    role: "CEO da TechSolutions"
  },
  {
    quote: "A automação inteligente transformou nosso atendimento ao cliente.",
    name: "Ana Costa",
    role: "Diretora de Operações da InovaCorp"
  },
  {
    quote: "Reduzimos os custos operacionais em 40% graças à AutomIA.",
    name: "Marcelo Tavares",
    role: "COO da StartX"
  },
];

const Testimonials = () => {
  return (
    <section style={{ padding: '80px 20px', backgroundColor: '#fff', textAlign: 'center' }}>
      <h2 style={{ fontSize: '32px', fontWeight: 'bold', marginBottom: '40px', color: '#0a0a23' }}>
        Depoimentos
      </h2>
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '30px' }}>
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={index}
            style={{ width: '300px', padding: '20px', backgroundColor: '#f9f9f9', border: '1px solid #eaeaea', borderRadius: '12px', boxShadow: '0px 2px 8px rgba(0, 0, 0, 0.05)' }}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <p style={{ fontSize: '16px', fontStyle: 'italic', marginBottom: '15px', color: '#555' }}>
              "{testimonial.quote}"
            </p>
            <h4 style={{ fontSize: '18px', fontWeight: 'bold', marginTop: '10px', color: '#0a0a23' }}>
              {testimonial.name}
            </h4>
            <p style={{ fontSize: '14px', color: '#777' }}>
              {testimonial.role}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
