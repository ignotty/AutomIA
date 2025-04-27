import Link from 'next/link';

const Header = () => {
  return (
    <header style={{ padding: '20px', borderBottom: '1px solid #eaeaea' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h1 style={{ fontSize: '24px', fontWeight: 'bold', color: '#fffff' }}>
          AutomIA
        </h1>
        <nav style={{ display: 'flex', gap: '20px' }}>
          <Link href="/">Home</Link>
          <Link href="/solutions">Soluções</Link>
          <Link href="/about">Sobre</Link>
          <Link href="/resources">Recursos</Link>
          <Link href="/">Contato</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
