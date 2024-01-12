import Paris1 from "../assets/3.jpg"
import Paris2 from "../assets/paris2.jpg"
import Amsterdam1 from "../assets/amsterdam1.jpeg"
import Amsterdam2 from "../assets/amsterdam2.jpeg"
import "./DestinationStyles.css";
import DestinationData from "./DestinationData"

const Destination = (props) => {
  return (
    <div className="destination">
      <h1>Popular Destinations</h1>
      <p>
      Explore top destinations where adventure meets luxury, creating unforgettable experiences at every turn.
      </p>

    <DestinationData
    className="first-des"
    heading="Paris, France"
    text="
    Explore the magic of Paris with Discover Travel. From the Eiffel Tower to Montmartre, our tailored experiences promise enchanting moments in the city of romance."
    img1={Paris1}
    img2={Paris2}
    />
    <DestinationData
    className="first-des-reverse"
    heading="Amsterdam, Netherlands"
    text="Uncover the charm of Amsterdam with Discover Travel. From iconic canals to vibrant neighborhoods, our curated experiences promise unforgettable moments in this dynamic city. Immerse yourself in the rich culture and unique ambiance, creating lasting memories in Amsterdam."
    img1={Amsterdam1}
    img2={Amsterdam2}
    />
    </div>
  );
};

export default Destination;
