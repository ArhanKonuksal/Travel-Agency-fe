import Hero from "../components/Hero/Hero";
import Navbar from "../components/Navbar/Navbar";
import ContactImg from "../assets/contact.jpg";
import ContactForm from "../components/Contact/ContactForm";
import Footer from "../components/Footer/Footer"

function Contact() {
  return (
    <>
      <Navbar />
      <Hero cName="hero-mid" heroImg={ContactImg} title="Contact" />
      <ContactForm/>
      <Footer />
    </>
  );
}
export default Contact;
