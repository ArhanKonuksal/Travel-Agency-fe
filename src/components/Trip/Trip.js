import "./TripStyles.css"
import TripData from "./TripData"
import Trip1 from "../../assets/tokyo.jpg"
import Trip2 from "../../assets/sdney.jpg"
import Trip3 from "../../assets/cape-town.jpg"

function Trip () {
return (
    <div className="trip-card">
    <h1>All over the World</h1>
    <p>Discover different cultures and continents with Discover Travel</p>
    <div className="tripcard">
        <TripData 
    image={Trip1}
    heading="Tokyo, Japan"
    text="Explore Tokyo's captivating blend of tradition and innovation. From the iconic scramble crossing in Shibuya to the tranquil beauty of Ueno Park, immerse yourself in Japan's rich heritage. Indulge in diverse culinary delights, from savory ramen to exquisite sushi, ensuring an unforgettable journey through Tokyo's unique cultural tapestry.
    As the neon lights of Akihabara beckon, Tokyo's vibrant energy invites you to delve deeper into a city where ancient traditions coexist with the pulsating rhythm of modern life."
        />
        <TripData 
    image={Trip2}
    heading="Sydney, Avustralia"
    text="Experience the dynamic allure of Sydney, Australia, where the iconic Sydney Opera House and Harbour Bridge set the stage for a city that seamlessly combines modern sophistication with natural beauty. Roam the vibrant streets of Darling Harbour, take in the breathtaking views from Bondi Beach, and savor the diverse culinary scene. Sydney invites you to a captivating journey, where urban excitement meets coastal charm, leaving an indelible mark on your travel adventures."
        />
        <TripData 
    image={Trip3}
    heading="Cape Town, South-Africa"
    text="Discover the captivating beauty of Cape Town, South Africa, where the majestic Table Mountain serves as a stunning backdrop to a city that effortlessly blends history and natural splendor. Stroll through the historic streets of the city center, enjoy the vibrant atmosphere of the Victoria & Alfred Waterfront, and witness the breathtaking landscapes of the Cape of Good Hope. With a rich cultural tapestry and scenic wonders, Cape Town promises an unforgettable journey, inviting you to explore the intersection of heritage and breathtaking landscapes."
        />
    </div>
    </div>
  )
}

export default Trip
