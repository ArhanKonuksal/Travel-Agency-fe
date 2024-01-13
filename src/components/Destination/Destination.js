import Paris1 from "../../assets/paris1.jpg"
import Paris2 from "../../assets/paris2.jpg"
import Amsterdam1 from "../../assets/amsterdam1.jpg"
import Amsterdam2 from "../../assets/amsterdam2.jpg"
import Roma1 from "../../assets/roma1.jpg"
import Roma2 from "../../assets/roma2.jpg"
import NewYork1 from "../../assets/newyork1.jpg"
import NewYork2 from "../../assets/newyork2.jpg"
import Barcelona1 from "../../assets/barcelona1.jpg"
import Barcelona2 from "../../assets/barcelona2.jpg"
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
    text="Explore the city of love Paris with Discover Travel."
    img1={Paris1}
    img2={Paris2}
    />
    <DestinationData
    className="first-des-reverse"
    heading="Amsterdam, Netherlands"
    text="Uncover the canals of Amsterdam with Discover Travel."
    img1={Amsterdam1}
    img2={Amsterdam2}
    />
    <DestinationData
    className="first-des"
    heading="Roma, Italy"
    text="Discover the city of gladiators Roma with Discover Travel."
    img1={Roma1}
    img2={Roma2}
    />
    <DestinationData
    className="first-des-reverse"
    heading="New York, United States of America"
    text="Discover the pulsating energy of America's iconic city, New York, with Discover Travel. "
    img1={NewYork1}
    img2={NewYork2}
    />
    <DestinationData
    className="first-des"
    heading="Barcelona, Spain"
    text="Visit home of architecture Barcelona with Discover Travel."
    img1={Barcelona1}
    img2={Barcelona2}
    />
    </div>
  );
};

export default Destination;
