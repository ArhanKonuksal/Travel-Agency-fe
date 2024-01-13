import Hero from "../components/Hero/Hero";
import Navbar from "../components/Navbar/Navbar";
import InclusiveImg from "../assets/inclusive.jpg";
import Footer from "../components/Footer/Footer"
import TripData from "../components/Trip/TripData";
import Trip1 from "../assets/cyprus.jpg"
import Trip2 from "../assets/rio.jpg"
import Trip3 from "../assets/dubai.jpg"
import Trip4 from "../assets/bali.jpg"
import Trip5 from "../assets/berlin.jpg"
import Trip6 from "../assets/tampere.jpg"

function Inclusive() {
  return (
    <>
      <Navbar />
      <Hero
        cName="hero-mid"
        heroImg={InclusiveImg}
        title="Inclusive"
        text="Travel the world to your fullest with our tours that we have specially arranged for you."
      />
      <div className="tripcard">
        <TripData 
  image={Trip1}
  heading="Kyrenia, Cyprus"
  text="
  Explore the charming blend of history and modernity in Kyrenia, Cyprus. From the medieval streets of the old town to the iconic Kyrenia Castle overlooking the harbor, experience a rich cultural tapestry. Indulge in mouthwatering Cypriot cuisine and stroll along the waterfront, where ancient charm meets the relaxed Mediterranean vibe. As the sun sets, immerse yourself in Kyrenia's vibrant nightlife, a perfect harmony of tradition and contemporary energy."
  days="7 days"
  price="1250$"
      />
      <TripData 
  image={Trip2}
  heading="Rio de Jenario, Brazil"
  text="Discover the vibrant spirit of Rio de Janeiro, Brazil. From the world-famous beaches to the iconic Sugarloaf Mountain, experience a city where lively samba beats meet stunning natural beauty. Indulge in Brazilian cuisine, explore historic neighborhoods, and feel the energy of Rio's nightlife. In Rio, tradition and modernity dance together, creating a dynamic and unforgettable cultural tapestry."
  days="14 days"
  price="1750$"    
      />
      <TripData 
  image={Trip3}
  heading="Dubai, United Arab Emirates"
  text="Discover the captivating beauty of Cape Town, South Africa, where the majestic Table Mountain serves as a stunning backdrop to a city that effortlessly blends history and natural splendor. Stroll through the historic streets of the city center, enjoy the vibrant atmosphere of the Victoria & Alfred Waterfront, and witness the breathtaking landscapes of the Cape of Good Hope. With a rich cultural tapestry and scenic wonders, Cape Town promises an unforgettable journey, inviting you to explore the intersection of heritage and breathtaking landscapes."
  days="15 days"
  price="500$"/>
  </div>
  <div className="tripcard">
  <TripData 
  image={Trip4}
  heading="Bali, Indonesia"
  text="Explore Tokyo's captivating blend of tradition and innovation. From the iconic scramble crossing in Shibuya to the tranquil beauty of Ueno Park, immerse yourself in Japan's rich heritage. Indulge in diverse culinary delights, from savory ramen to exquisite sushi, ensuring an unforgettable journey through Tokyo's unique cultural tapestry.
  As the neon lights of Akihabara beckon, Tokyo's vibrant energy invites you to delve deeper into a city where ancient traditions coexist with the pulsating rhythm of modern life."
  days="21 days"
  price="1600$"
      />
      <TripData 
  image={Trip5}
  heading="Berlin, Germany"
  text="Experience the dynamic allure of Sydney, Australia, where the iconic Sydney Opera House and Harbour Bridge set the stage for a city that seamlessly combines modern sophistication with natural beauty. Roam the vibrant streets of Darling Harbour, take in the breathtaking views from Bondi Beach, and savor the diverse culinary scene. Sydney invites you to a captivating journey, where urban excitement meets coastal charm, leaving an indelible mark on your travel adventures."
  days="6 days"
  price="900$"
      />
      <TripData 
  image={Trip6}
  heading="Tampere, Finland"
  text="Discover the captivating beauty of Cape Town, South Africa, where the majestic Table Mountain serves as a stunning backdrop to a city that effortlessly blends history and natural splendor. Stroll through the historic streets of the city center, enjoy the vibrant atmosphere of the Victoria & Alfred Waterfront, and witness the breathtaking landscapes of the Cape of Good Hope. With a rich cultural tapestry and scenic wonders, Cape Town promises an unforgettable journey, inviting you to explore the intersection of heritage and breathtaking landscapes."
  days="5 days"
  price="1000$"
      />
  </div>
      <Footer />
    </>
  );
}
export default Inclusive;
