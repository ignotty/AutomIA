import { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Mensagem enviada com sucesso!');
    // Aqui depois podemos integrar com Formspree, EmailJS, etc.
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section style={{ padding: '80px 20px', backgroundColor: '#f9f9f9', textAlign: 'center' }}>
      <h2 style={{ fontSize: '32px', fontWeight: 'bold', marginBottom: '40px' }}>
        Fale Conosco
      </h2>
      <form onSubmit={handleSubmit} style={{ maxWidth: '600px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '20px' }}>
        <input
          type="text"
          name="name"
          placeholder="Seu Nome"
          value={formData.name}
          onChange={handleChange}
          required
          style={{ padding: '10px', borderRadius: '8px', border: '1px solid #ccc' }}
        />
        <input
          type="email"
          name="email"
          placeholder="Seu E-mail"
          value={formData.email}
          onChange={handleChange}
          required
          style={{ padding: '10px', borderRadius: '8px', border: '1px solid #ccc' }}
        />
        <textarea
          name="message"
          placeholder="Sua Mensagem"
          value={formData.message}
          onChange={handleChange}
          required
          rows="5"
          style={{ padding: '10px', borderRadius: '8px', border: '1px solid #ccc' }}
        ></textarea>
        <button type="submit" style={{ padding: '10px', borderRadius: '8px', backgroundColor: '#0a0a23', color: '#fff', fontWeight: 'bold', cursor: 'pointer' }}>
          Enviar Mensagem
        </button>
      </form>
    </section>
  );
};

export default ContactForm;
