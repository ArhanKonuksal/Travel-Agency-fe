import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import ContactImg from "../assets/2.jpg";
import ContactForm from "../components/ContactForm";

function Contact() {
  return (
    <>
      <Navbar />
      <Hero cName="hero-mid" heroImg={ContactImg} title="Contact" />
      <ContactForm/>
    </>
  );
}
export default Contact;
