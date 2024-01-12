import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import İnclusiveImg from "../assets/1.jpg";
function Inclusive() {
  return (
    <>
      <Navbar />
      <Hero
        cName="hero-mid"
        heroImg={İnclusiveImg}
        title="Inclusive"
        text="Travel the world to your fullest with our tours that we have specially arranged for you."
      />
    </>
  );
}
export default Inclusive;
