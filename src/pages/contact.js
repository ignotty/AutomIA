import Head from 'next/head'
import Header from '@/components/Header'
import ContactForm from '@/components/ContactForm'
import Footer from '@/components/Footer'

export default function Contact() {
  return (
    <>
      <Head>
        <title>Contato - AutomIA</title>
        <meta name="description" content="Entre em contato com a AutomIA para automatizar seu negócio com inteligência artificial!" />
      </Head>
      <Header />
      <ContactForm />
      <Footer />
    </>
  )
}
