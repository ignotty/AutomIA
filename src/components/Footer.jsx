const Footer = () => {
    return (
      <footer style={{ padding: '40px 20px', backgroundColor: '#0a0a23', color: '#fff', textAlign: 'center' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <p style={{ marginBottom: '10px' }}>© {new Date().getFullYear()} AutomIA. Todos os direitos reservados.</p>
          <div style={{ marginTop: '10px', display: 'flex', justifyContent: 'center', gap: '20px' }}>
            <a href="#" style={{ color: '#bbb', textDecoration: 'none' }}>Política de Privacidade</a>
            <a href="#" style={{ color: '#bbb', textDecoration: 'none' }}>Termos de Uso</a>
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  