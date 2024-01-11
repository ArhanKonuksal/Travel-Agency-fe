import assets from '../assets/12.jpg'
import "./HeroStyles.css";

function Hero() {
   const heroImage = require('../assets/12.jpg');
  return (
    <>
      <div className="hero">
        <img
          alt="HeroImg"
          src={heroImage}
        />
        <div className="hero-text">
            <h1>Your Journey Your Story</h1>
            <p>Explore the world of travel with us and discover new horizons.</p>
            <a href="/">
                Travel Plan
            </a>
        </div>
      </div>
    </>);
}

export default Hero;
